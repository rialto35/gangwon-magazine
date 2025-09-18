// API 라우트로 RSS 처리
export async function GET() {
  try {
    // 네이버 블로그 RSS URL
    const RSS_URL = 'https://rss.blog.naver.com/writepro24.xml';
    
    const response = await fetch(RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`RSS fetch failed: ${response.status}`);
    }
    
    const xmlText = await response.text();
    
    // 간단한 XML 파싱 (정규식 사용)
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
    const linkRegex = /<link><!\[CDATA\[(.*?)\]\]><\/link>/;
    const guidRegex = /<guid>(.*?)<\/guid>/;
    const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/;
    const descriptionRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>/;
    
    let match;
    while ((match = itemRegex.exec(xmlText)) !== null && items.length < 6) {
      const itemContent = match[1];
      
      const titleMatch = titleRegex.exec(itemContent);
      const linkMatch = linkRegex.exec(itemContent);
      const guidMatch = guidRegex.exec(itemContent);
      const pubDateMatch = pubDateRegex.exec(itemContent);
      const descMatch = descriptionRegex.exec(itemContent);
      
      if (titleMatch && (linkMatch || guidMatch)) {
        const title = titleMatch[1];
        // GUID가 있으면 GUID 사용, 없으면 link 사용
        let link = guidMatch ? guidMatch[1] : (linkMatch ? linkMatch[1] : '');
        
        // 네이버 블로그 링크 처리 (실제 RSS 데이터 기반)
        console.log('원본 링크:', link);
        
        if (link.includes('blog.naver.com')) {
          // RSS 링크에서 불필요한 파라미터 제거
          if (link.includes('?fromRss=true')) {
            link = link.split('?fromRss=true')[0];
            console.log('RSS 파라미터 제거:', link);
          }
          
          // trackingCode 파라미터 제거
          if (link.includes('&trackingCode=rss')) {
            link = link.split('&trackingCode=rss')[0];
            console.log('trackingCode 제거:', link);
          }
          
          // 기타 불필요한 파라미터 제거
          if (link.includes('?trackingCode=rss')) {
            link = link.split('?trackingCode=rss')[0];
            console.log('기타 파라미터 제거:', link);
          }
          
          console.log('최종 링크:', link);
        }
        
        const pubDate = pubDateMatch ? formatDate(pubDateMatch[1]) : '2024.09.15';
        const description = descMatch ? descMatch[1].replace(/<[^>]*>/g, '').slice(0, 80) : '';
        const thumbnail = descMatch ? extractThumbnail(descMatch[1]) : undefined;
        
        items.push({
          title,
          link,
          pubDate,
          category: extractCategory(title),
          description,
          thumbnail
        });
      }
    }
    
    return Response.json({ posts: items });
    
  } catch (error) {
    console.error('RSS 처리 실패:', error);
    
    // 실패 시 기본 데이터
    return Response.json({
      posts: [
        { title: "춘천 숨은 맛집 BEST 5", category: "맛집", pubDate: "2024.09.15", link: "#", description: "춘천의 숨겨진 맛집들을 소개합니다" },
        { title: "가을 강원도 단풍 명소", category: "여행", pubDate: "2024.09.14", link: "#", description: "가을 단풍이 아름다운 강원도 여행지" },
        { title: "평창 펜션 완벽 가이드", category: "숙박", pubDate: "2024.09.13", link: "#", description: "평창 지역 추천 펜션 리스트" },
        { title: "강릉 카페거리 탐방기", category: "문화", pubDate: "2024.09.12", link: "#", description: "강릉의 특색있는 카페들을 소개" }
      ]
    });
  }
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\./g, '.').replace(/\s/g, '');
  } catch {
    return '2024.09.15';
  }
}

function extractThumbnail(content: string): string | undefined {
  console.log('이미지 추출 시도:', content.substring(0, 200));
  
  // 네이버 블로그 특화 이미지 패턴
  const patterns = [
    // 네이버 블로그 썸네일 우선 처리
    /https:\/\/blogthumb\.pstatic\.net[^\s"'<>]+/gi,
    // 일반 img 태그에서 src 추출
    /<img[^>]+src=["']([^"']+)["'][^>]*>/i,
    /<img[^>]+src=([^\s>]+)[^>]*>/i,
    // 직접 이미지 URL
    /https:\/\/[^\s"'<>]*\.(jpg|jpeg|png|gif|webp)/gi
  ];
  
  for (const pattern of patterns) {
    const matches = content.match(pattern);
    if (matches) {
      let imageUrl = matches[0];
      
      // img 태그에서 추출한 경우 src 값만 가져오기
      if (imageUrl.startsWith('<img')) {
        const srcMatch = imageUrl.match(/src=["']([^"']+)["']/);
        if (srcMatch) {
          imageUrl = srcMatch[1];
        }
      }
      
      // 네이버 블로그 이미지 최적화
      if (imageUrl.includes('blogthumb.pstatic.net') || imageUrl.includes('postfiles.pstatic.net')) {
        // 기존 type 파라미터 제거 후 새로 추가
        imageUrl = imageUrl.split('?')[0] + '?type=w300';
      }
      
      console.log('추출된 이미지 URL:', imageUrl);
      return imageUrl;
    }
  }
  
  console.log('이미지를 찾을 수 없음');
  return undefined;
}

function extractCategory(title: string): string {
  if (title.includes('맛집') || title.includes('음식')) return '맛집';
  if (title.includes('여행') || title.includes('관광')) return '여행';
  if (title.includes('숙박') || title.includes('펜션') || title.includes('호텔')) return '숙박';
  if (title.includes('문화') || title.includes('카페') || title.includes('체험')) return '문화';
  return '일반';
}