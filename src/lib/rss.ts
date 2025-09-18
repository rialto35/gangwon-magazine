// lib/rss.ts
export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  category?: string;
  description?: string;
  thumbnail?: string;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // 기본 데이터 반환
  return [
    { title: "춘천 숨은 맛집 BEST 5", link: "#", pubDate: "2024.09.15", category: "맛집" },
    { title: "가을 강원도 단풍 명소", link: "#", pubDate: "2024.09.14", category: "여행" },
    { title: "평창 펜션 완벽 가이드", link: "#", pubDate: "2024.09.13", category: "숙박" },
    { title: "강릉 카페거리 탐방기", link: "#", pubDate: "2024.09.12", category: "문화" }
  ];
}