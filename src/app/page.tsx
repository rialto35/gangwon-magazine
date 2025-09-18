"use client";

import { useState, useEffect } from 'react';
import { ChevronRight, Users, Building2, FileText, Star, ArrowRight, Eye, Handshake, BookOpen } from 'lucide-react';

// 서비스 패키지 데이터
const services = [
  {
    title: "브랜드 협찬",
    desc: "강원도 타깃 고객에게 효과적 브랜드 노출",
    price: "월 50만원부터",
    features: ["포스팅 2회", "SNS 연동", "성과 리포트"]
  },
  {
    title: "블로그 대행",
    desc: "전문 에디터의 매력적인 브랜드 스토리텔링",
    price: "월 80만원부터",
    features: ["주 3회 포스팅", "SEO 최적화", "키워드 분석"]
  }
];

// CountUp 컴포넌트
function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, mounted]);

  if (!mounted) {
    return <span>{end.toLocaleString()}</span>;
  }

  return <span>{count.toLocaleString()}</span>;
}

interface BlogPost {
  title: string;
  category: string;
  pubDate: string;
  link: string;
  description: string;
  thumbnail?: string;
}

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogPosts() {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setBlogPosts(data.posts || []);
      } catch (error) {
        console.error('블로그 포스트 로딩 실패:', error);
        // 실패 시 기본 데이터
        setBlogPosts([
          { title: "춘천 숨은 맛집 BEST 5", category: "맛집", pubDate: "2024.09.15", link: "#", description: "춘천의 숨겨진 맛집들을 소개합니다" },
          { title: "가을 강원도 단풍 명소", category: "여행", pubDate: "2024.09.14", link: "#", description: "가을 단풍이 아름다운 강원도 여행지" },
          { title: "평창 펜션 완벽 가이드", category: "숙박", pubDate: "2024.09.13", link: "#", description: "평창 지역 추천 펜션 리스트" },
          { title: "강릉 카페거리 탐방기", category: "문화", pubDate: "2024.09.12", link: "#", description: "강릉의 특색있는 카페들을 소개" },
          { title: "속초 화천 매화축제 스포캐이", category: "축제", pubDate: "2024.09.11", link: "#", description: "봄의 전령인 매화축제 현장" },
          { title: "인제 자작나무 숙소리", category: "여행", pubDate: "2024.09.10", link: "#", description: "춘의 안내자, 자작나무 명소" }
        ]);
      } finally {
        setLoading(false);
      }
    }
    loadBlogPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-black pt-16">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-lg" style={{ color: '#d5ae5d' }}>
            강원도의 모든 순간을 담다
          </h1>
          <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light drop-shadow-md" style={{ color: '#d5ae5d' }}>
            로컬 전문 매거진이 전하는 진짜 강원도 이야기
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 flex items-center justify-center group shadow-2xl" 
              style={{ backgroundColor: '#d5ae5d', color: '#000000' }}
            >
              협찬 문의하기
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </button>
            <button 
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  const headerHeight = 80;
                  const elementPosition = portfolioSection.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="border-2 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:bg-gold hover:text-black" 
              style={{ borderColor: '#d5ae5d', color: '#d5ae5d' }}
            >
              포트폴리오 보기
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: '#d5ae5d' }}>강원매거진의 특징</h2>
            <p className="text-xl" style={{ color: '#d5ae5d' }}>전문성과 신뢰성을 바탕으로 한 매거진 서비스</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: '#d5ae5d' }}>전문적인 시각</h3>
              <p className="leading-relaxed" style={{ color: '#d5ae5d' }}>
                강원도의 문화, 경제, 사회를 깊이 있게 분석하고 전달하는 전문적인 시각을 제공합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: '#d5ae5d' }}>신뢰할 수 있는 파트너</h3>
              <p className="leading-relaxed" style={{ color: '#d5ae5d' }}>
                3년간의 전문 경험과 25개 이상의 파트너사와의 성공적인 협업 경험을 바탕으로 합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: '#d5ae5d' }}>풍부한 콘텐츠</h3>
              <p className="leading-relaxed" style={{ color: '#d5ae5d' }}>
                180개 이상의 발행 기사와 월 15,000명의 독자를 보유한 검증된 콘텐츠 제작 역량을 자랑합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Grid Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: '#d5ae5d' }}>최신 기사</h2>
            <p className="text-xl" style={{ color: '#d5ae5d' }}>강원도의 다양한 이야기를 만나보세요</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 모든 기사를 동일한 크기로 배치 */}
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center h-[400px] flex items-center justify-center">
                  <div className="text-gold">기사 로딩중...</div>
                </div>
              ))
            ) : (
              blogPosts.slice(0, 6).map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-[400px] flex flex-col">
                  {/* 이미지 영역 */}
                  <div className="h-48 bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    {post.thumbnail ? (
                      <img 
                        src={`/api/image?url=${encodeURIComponent(post.thumbnail)}`}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.parentElement?.querySelector('.fallback-icon');
                          if (fallback) {
                            fallback.classList.remove('hidden');
                          }
                        }}
                      />
                    ) : null}
                    <FileText className={`text-gold relative z-10 fallback-icon ${post.thumbnail ? 'hidden' : ''}`} size={60} />
                    <div className="absolute top-4 left-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-bold z-20">
                      {post.category || '일반'}
                    </div>
                    {index === 0 && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-20">
                        최신
                      </div>
                    )}
                  </div>
                  
                  {/* 콘텐츠 영역 */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gold font-semibold">{post.pubDate}</span>
                        <span className="text-xs text-gray-500">5분 읽기</span>
                      </div>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                        <h3 className="text-lg font-serif font-bold mb-3 group-hover:text-gold transition-colors leading-tight line-clamp-2" style={{ color: '#d5ae5d' }}>
                          {post.title}
                        </h3>
                      </a>
                    </div>
                    <div>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                        <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 mb-4">
                          {post.description ? post.description.slice(0, 80) + '...' : '강원도의 매력적인 이야기를 담은 특별한 콘텐츠입니다.'}
                        </p>
                        <div className="flex items-center font-semibold text-sm" style={{ color: '#d5ae5d' }}>
                          자세히 보기
                          <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: '#d5ae5d' }}>서비스 소개</h2>
            <p className="text-xl" style={{ color: '#d5ae5d' }}>브랜드 성장을 위한 맞춤형 솔루션을 제공합니다</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-10 border border-gray-100 group">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gold rounded-lg flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 ? <Building2 className="text-black" size={32} /> : <FileText className="text-black" size={32} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: '#d5ae5d' }}>{service.title}</h3>
                    <p className="text-lg" style={{ color: '#d5ae5d' }}>{service.desc}</p>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="text-3xl font-bold" style={{ color: '#d5ae5d' }}>{service.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-lg" style={{ color: '#d5ae5d' }}>
                      <Star className="text-gold mr-3 flex-shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full border-2 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl" style={{ borderColor: '#d5ae5d', color: '#d5ae5d' }}>
                  상담 문의하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 CTA 섹션 */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: '#d5ae5d' }}>함께 성장해요</h2>
            <p className="text-2xl mb-12" style={{ color: '#d5ae5d' }}>
              강원매거진과 함께 브랜드의 이야기를 만들어보세요
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 연락처 정보 */}
            <div className="bg-white rounded-lg p-10 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-8 text-center" style={{ color: '#d5ae5d' }}>연락처 정보</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold font-bold">@</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">이메일</div>
                    <div className="text-gray-600">phg5698@naver.com</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold font-bold">📞</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">전화번호</div>
                    <div className="text-gray-600">010-8969-8344</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold font-bold">📍</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">주소</div>
                    <div className="text-gray-600">
                      강원도 춘천시 석사동 강원매거진<br />
                      강원매거진 사무실
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold font-bold">🕒</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">운영시간</div>
                    <div className="text-gray-600">
                      평일: 오전 9시 - 오후 6시<br />
                      주말 및 공휴일: 휴무
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 문의 폼 */}
            <div className="bg-white rounded-lg p-10 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-8 text-center" style={{ color: '#d5ae5d' }}>문의하기</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>이름</label>
                    <input 
                      id="name" 
                      type="text" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg" 
                      placeholder="이름을 입력해주세요" 
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>연락처</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg" 
                      placeholder="연락처를 입력해주세요" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>서비스 유형</label>
                  <select id="service" className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg">
                    <option>브랜드 협찬</option>
                    <option>블로그 대행</option>
                    <option>종합 패키지</option>
                    <option>기타 문의</option>
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>메시지</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg resize-none" 
                    placeholder="문의 내용을 자세히 입력해주세요"
                  ></textarea>
                </div>
                
                {/* 버튼 그룹 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => {
                      const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                      const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
                      const service = (document.getElementById('service') as HTMLSelectElement)?.value || '';
                      const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                      
                      const smsText = `강원매거진 문의\n\n이름: ${name}\n연락처: ${phone}\n서비스: ${service}\n\n문의내용:\n${message}`;
                      const encodedText = encodeURIComponent(smsText);
                      const smsUrl = `sms:010-8969-8344?body=${encodedText}`;
                      
                      window.open(smsUrl);
                    }}
                    className="py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2" 
                    style={{ borderColor: '#d5ae5d', color: '#d5ae5d', backgroundColor: 'transparent' }}
                  >
                    📱 문자로 전송
                  </button>
                  <button 
                    type="button"
                    onClick={() => {
                      const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                      const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
                      const service = (document.getElementById('service') as HTMLSelectElement)?.value || '';
                      const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                      
                      const emailText = `강원매거진 문의\n\n이름: ${name}\n연락처: ${phone}\n서비스: ${service}\n\n문의내용:\n${message}`;
                      const encodedText = encodeURIComponent(emailText);
                      const emailUrl = `mailto:phg5698@naver.com?subject=강원매거진 문의&body=${encodedText}`;
                      
                      window.open(emailUrl);
                    }}
                    className="py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl" 
                    style={{ backgroundColor: '#d5ae5d', color: '#000000' }}
                  >
                    ✉️ 이메일로 전송
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}