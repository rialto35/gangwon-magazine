// API 라우트로 블로그 포스트 처리
export async function GET() {
  try {
    // 기본 데이터 반환 (RSS 파싱 없이)
    return Response.json({
      posts: [
        { 
          title: "춘천 숨은 맛집 BEST 5", 
          category: "맛집", 
          pubDate: "2024.09.15", 
          link: "https://blog.naver.com/writepro24/123456789", 
          description: "춘천의 숨겨진 맛집들을 소개합니다",
          thumbnail: "https://via.placeholder.com/300x200?text=맛집"
        },
        { 
          title: "가을 강원도 단풍 명소", 
          category: "여행", 
          pubDate: "2024.09.14", 
          link: "https://blog.naver.com/writepro24/123456788", 
          description: "가을 단풍이 아름다운 강원도 여행지",
          thumbnail: "https://via.placeholder.com/300x200?text=단풍"
        },
        { 
          title: "평창 펜션 완벽 가이드", 
          category: "숙박", 
          pubDate: "2024.09.13", 
          link: "https://blog.naver.com/writepro24/123456787", 
          description: "평창 지역 추천 펜션 리스트",
          thumbnail: "https://via.placeholder.com/300x200?text=펜션"
        },
        { 
          title: "강릉 카페거리 탐방기", 
          category: "문화", 
          pubDate: "2024.09.12", 
          link: "https://blog.naver.com/writepro24/123456786", 
          description: "강릉의 특색있는 카페들을 소개",
          thumbnail: "https://via.placeholder.com/300x200?text=카페"
        },
        { 
          title: "속초 해변 카페 추천", 
          category: "문화", 
          pubDate: "2024.09.11", 
          link: "https://blog.naver.com/writepro24/123456785", 
          description: "속초 바다를 바라보며 즐기는 카페들",
          thumbnail: "https://via.placeholder.com/300x200?text=속초"
        },
        { 
          title: "원주 한지 체험관 방문기", 
          category: "체험", 
          pubDate: "2024.09.10", 
          link: "https://blog.naver.com/writepro24/123456784", 
          description: "전통 한지 만들기 체험 후기",
          thumbnail: "https://via.placeholder.com/300x200?text=한지"
        }
      ]
    });
    
  } catch (error) {
    console.error('블로그 포스트 로딩 실패:', error);
    
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
