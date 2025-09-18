// 이미지 프록시 API
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');
    
    if (!imageUrl) {
      return new Response('이미지 URL이 필요합니다', { status: 400 });
    }
    
    // 네이버 이미지만 허용 (보안)
    if (!imageUrl.includes('pstatic.net')) {
      return new Response('허용되지 않는 이미지 소스입니다', { status: 403 });
    }
    
    console.log('프록시 이미지 요청:', imageUrl);
    
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://blog.naver.com/',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8'
      }
    });
    
    if (!response.ok) {
      console.log('이미지 가져오기 실패:', response.status);
      return new Response('이미지를 가져올 수 없습니다', { status: response.status });
    }
    
    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    return new Response(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600', // 1시간 캐시
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (error) {
    console.error('이미지 프록시 에러:', error);
    return new Response('이미지 처리 중 오류가 발생했습니다', { status: 500 });
  }
}
