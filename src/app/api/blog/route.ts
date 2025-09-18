import Parser from 'rss-parser';

// RSS 파서 인스턴스 생성
const parser = new Parser({
  customFields: {
    item: ['description', 'pubDate', 'link', 'guid']
  }
});

// API 라우트로 RSS 처리
export async function GET() {
  try {
    // 네이버 블로그 RSS URL
    const RSS_URL = 'https://rss.blog.naver.com/writepro24.xml';
    
    console.log('RSS URL:', RSS_URL);
    
    // RSS 파싱
    const feed = await parser.parseURL(RSS_URL);
    console.log('RSS 파싱 성공, 아이템 수:', feed.items?.length || 0);
    
    // 최대 6개 아이템 처리
    const items = (feed.items || []).slice(0, 6).map((item, index) => {
      // 링크 정리
      let link = item.link || item.guid || '#';
      
      // 네이버 블로그 링크 처리
      if (link.includes('blog.naver.com')) {
        // 불필요한 파라미터 제거
        if (link.includes('?fromRss=true')) {
          link = link.split('?fromRss=true')[0];
        }
        if (link.includes('&trackingCode=rss')) {
          link = link.split('&trackingCode=rss')[0];
        }
        if (link.includes('?trackingCode=rss')) {
          link = link.split('?trackingCode=rss')[0];
        }
      }
      
      // 날짜 포맷팅
      const pubDate = item.pubDate ? formatDate(item.pubDate) : '2024.09.15';
      
      // 설명 정리
      const description = item.description 
        ? item.description.replace(/<[^>]*>/g, '').slice(0, 80) + '...'
        : '';
      
      // 썸네일 추출
      const thumbnail = item.description ? extractThumbnail(item.description) : undefined;
      
      // 카테고리 추출
      const category = extractCategory(item.title || '');
      
      return {
        title: item.title || `포스트 ${index + 1}`,
        link,
        pubDate,
        category,
        description,
        thumbnail
      };
    });
    
    console.log('처리된 아이템 수:', items.length);
    
    return Response.json({ posts: items });
    
  } catch (error) {
    console.error('RSS 처리 실패:', error);
    
    // 실패 시 기본 데이터
    return Response.json({
      posts: [
        { 
          title: "춘천 숨은 맛집 BEST 5", 
          category: "맛집", 
          pubDate: "2024.09.15", 
          link: "https://blog.naver.com/writepro24", 
          description: "춘천의 숨겨진 맛집들을 소개합니다",
          thumbnail: "https://via.placeholder.com/300x200?text=맛집"
        },
        { 
          title: "가을 강원도 단풍 명소", 
          category: "여행", 
          pubDate: "2024.09.14", 
          link: "https://blog.naver.com/writepro24", 
          description: "가을 단풍이 아름다운 강원도 여행지",
          thumbnail: "https://via.placeholder.com/300x200?text=단풍"
        },
        { 
          title: "평창 펜션 완벽 가이드", 
          category: "숙박", 
          pubDate: "2024.09.13", 
          link: "https://blog.naver.com/writepro24", 
          description: "평창 지역 추천 펜션 리스트",
          thumbnail: "https://via.placeholder.com/300x200?text=펜션"
        },
        { 
          title: "강릉 카페거리 탐방기", 
          category: "문화", 
          pubDate: "2024.09.12", 
          link: "https://blog.naver.com/writepro24", 
          description: "강릉의 특색있는 카페들을 소개",
          thumbnail: "https://via.placeholder.com/300x200?text=카페"
        }
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
  try {
    // 네이버 블로그 특화 이미지 패턴
    const patterns = [
      /https:\/\/blogthumb\.pstatic\.net[^\s"'<>]+/gi,
      /<img[^>]+src=["']([^"']+)["'][^>]*>/i,
      /<img[^>]+src=([^\s>]+)[^>]*>/i,
      /https:\/\/[^\s"'<>]*\.(jpg|jpeg|png|gif|webp)/gi
    ];
    
    for (const pattern of patterns) {
      const matches = content.match(pattern);
      if (matches) {
        let imageUrl = matches[0];
        
        if (imageUrl.startsWith('<img')) {
          const srcMatch = imageUrl.match(/src=["']([^"']+)["']/);
          if (srcMatch) {
            imageUrl = srcMatch[1];
          }
        }
        
        // 네이버 블로그 이미지 최적화
        if (imageUrl.includes('blogthumb.pstatic.net') || imageUrl.includes('postfiles.pstatic.net')) {
          imageUrl = imageUrl.split('?')[0] + '?type=w300';
        }
        
        return imageUrl;
      }
    }
  } catch (error) {
    console.error('썸네일 추출 오류:', error);
  }
  
  return undefined;
}

function extractCategory(title: string): string {
  if (title.includes('맛집') || title.includes('음식')) return '맛집';
  if (title.includes('여행') || title.includes('관광')) return '여행';
  if (title.includes('숙박') || title.includes('펜션') || title.includes('호텔')) return '숙박';
  if (title.includes('문화') || title.includes('카페') || title.includes('체험')) return '문화';
  return '일반';
}
