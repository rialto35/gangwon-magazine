'use client';

import { useState, useEffect } from 'react';
import { Building2, FileText, Star, Check, TrendingUp, Users, MessageCircle, Award, ArrowRight, ChevronLeft, ChevronRight, Calculator, Target, BarChart3, Heart, GraduationCap, Home, Utensils, Briefcase, MapPin, Calendar, Shield } from 'lucide-react';

export default function Services() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState('standard');

  // 카테고리 클릭 시 스크롤 이동
  const handleCategoryClick = (index: number) => {
    setCurrentCategory(index);
    // 상세 정보 섹션으로 스크롤 (헤더 높이 고려)
    setTimeout(() => {
      const detailSection = document.getElementById('category-detail');
      if (detailSection) {
        const headerHeight = 80; // 헤더 높이
        const elementPosition = detailSection.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // 업종별 서비스 카테고리
  const serviceCategories = [
    {
      id: 'medical',
      title: '의료/복지',
      icon: Heart,
      price: '월 80~120만원',
      level: '프리미엄',
      description: '의료광고법 준수 전문 마케팅',
      services: [
        { name: '병원', content: '의료광고법 준수, 전문의 소개, 시설 홍보' },
        { name: '요양시설', content: '가족 안심 콘텐츠, 케어 프로그램' },
        { name: '치과', content: '전후 사례, 최신 장비 소개' },
        { name: '한의원', content: '치료법 설명, 환자 후기' }
      ],
      color: 'bg-red-50 border-red-200 text-red-800'
    },
    {
      id: 'education',
      title: '교육',
      icon: GraduationCap,
      price: '월 50~80만원',
      level: '스탠다드',
      description: '성과 중심 교육 마케팅',
      services: [
        { name: '학원', content: '합격률, 강사진, 시설, 커리큘럼' },
        { name: '예체능', content: '수상 실적, 작품 전시, 발표회' },
        { name: '어학원', content: '회화 실력 향상 후기, 원어민 소개' }
      ],
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      id: 'construction',
      title: '건설/부동산',
      icon: Home,
      price: '월 50~80만원',
      level: '스탠다드',
      description: '품질과 신뢰 중심 마케팅',
      services: [
        { name: '건설업', content: '시공 사례, before/after, 고객 만족도' },
        { name: '부동산', content: '매물 소개, 지역 정보, 투자 가이드' },
        { name: '인테리어', content: '포트폴리오, 스타일별 사례' }
      ],
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      id: 'food',
      title: '맛집/서비스업',
      icon: Utensils,
      price: '월 30~50만원',
      level: '베이직',
      description: '스토리와 감성 중심 마케팅',
      services: [
        { name: '맛집', content: '메뉴 소개, 맛집 투어, 사장님 스토리' },
        { name: '카페', content: '인테리어, 시그니처 메뉴, 공간 활용' },
        { name: '미용실', content: '스타일링 포트폴리오, 트렌드 정보' }
      ],
      color: 'bg-orange-50 border-orange-200 text-orange-800'
    },
    {
      id: 'professional',
      title: '소상공인/전문서비스',
      icon: Briefcase,
      price: '월 30~50만원',
      level: '베이직',
      description: '전문성과 접근성 중심 마케팅',
      services: [
        { name: '세무사', content: '절세 팁, 창업 가이드' },
        { name: '법무사', content: '부동산 등기, 상속 절차' },
        { name: '보험', content: '상품 비교, 보장 내용 설명' }
      ],
      color: 'bg-purple-50 border-purple-200 text-purple-800'
    }
  ];

  // 강원도 특화 차별화 포인트
  const gangwonSpecialties = [
    {
      icon: MapPin,
      title: '지역별 특성 반영',
      description: '춘천/강릉/원주/속초 각 지역의 특색을 살린 맞춤 콘텐츠',
      examples: ['춘천: 청춘도시, 강릉: 커피도시', '원주: 교육도시, 속초: 관광도시']
    },
    {
      icon: Calendar,
      title: '계절별 마케팅',
      description: '강원도의 4계절을 활용한 시즌 마케팅 전략',
      examples: ['겨울: 스키장, 여름: 바다', '가을: 단풍, 봄: 벚꽃']
    },
    {
      icon: Shield,
      title: '48년 토박이 신뢰',
      description: '직접 가봤습니다의 현장감과 이웃으로서의 진정성',
      examples: ['"직접 가봤습니다" 현장감', '"이웃으로서 추천" 진정성', '"평생 책임" 장기 관계']
    }
  ];

  // 서비스 패키지
  const servicePackages = [
    {
      id: 'light',
      name: '라이트',
      price: '월 30만원',
      description: '기본적인 온라인 마케팅',
      features: [
        '월 2회 포스팅',
        '기본 SEO 최적화',
        '네이버 블로그 운영',
        '월간 성과 리포트'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: '스탠다드',
      price: '월 50만원',
      description: '종합적인 디지털 마케팅',
      features: [
        '주 1회 포스팅',
        'SNS 연동 (인스타그램, 페이스북)',
        'SEO 최적화 + 키워드 분석',
        '이미지/영상 편집',
        '월간 성과 리포트 + 분석'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: '프리미엄',
      price: '월 80만원',
      description: '전문적인 브랜드 마케팅',
      features: [
        '주 2회 포스팅',
        '전체 SNS 채널 관리',
        '이벤트 기획 및 실행',
        '인플루언서 협업',
        '실시간 성과 모니터링',
        '전담 매니저 배정'
      ],
      popular: false
    },
    {
      id: 'allinone',
      name: '올인원',
      price: '월 120만원',
      description: '완전한 브랜딩 솔루션',
      features: [
        '브랜딩 전략 수립',
        '웹사이트 제작 지원',
        '광고 캠페인 기획/실행',
        '오프라인 이벤트 연계',
        '종합 마케팅 컨설팅',
        '24/7 고객 지원'
      ],
      popular: false
    }
  ];

  // 애니메이션 카운터
  const AnimatedCounter = ({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [value, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 헤더 섹션 */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 mt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6" style={{ color: '#d5ae5d' }}>
            강원도 전업종 마케팅 전문
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            48년 토박이의 현장감과 전문성으로 강원도 모든 업종을 마케팅합니다
          </p>
          <div className="bg-gold/10 border-l-4 border-gold p-4 max-w-4xl mx-auto rounded-r-lg">
            <p className="text-lg text-gray-700">
              <strong>강원도 전문:</strong> 직접 가봤습니다의 현장감, 이웃으로서의 진정성, 평생 책임의 장기 관계를 약속합니다.
            </p>
          </div>
        </div>

        {/* 업종별 서비스 카테고리 */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-8" style={{ color: '#d5ae5d' }}>
            업종별 맞춤 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {serviceCategories.map((category, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 cursor-pointer ${
                  currentCategory === index ? 'border-gold' : 'border-gray-100'
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4">
                    {(() => {
                      const IconComponent = category.icon;
                      return <IconComponent className="text-gold" size={24} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${category.color}`}>
                      {category.level}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="text-2xl font-bold mb-4" style={{ color: '#d5ae5d' }}>
                  {category.price}
                </div>
                <div className="space-y-2">
                  {category.services.slice(0, 2).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="text-sm text-gray-600">
                      <span className="font-semibold">{service.name}:</span> {service.content}
                    </div>
                  ))}
                  {category.services.length > 2 && (
                    <div className="text-sm text-gold font-semibold">
                      +{category.services.length - 2}개 더 보기
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 선택된 카테고리 상세 정보 */}
        <div id="category-detail" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mr-6">
                {(() => {
                  const IconComponent = serviceCategories[currentCategory].icon;
                  return <IconComponent className="text-gold" size={32} />;
                })()}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {serviceCategories[currentCategory].title}
                </h3>
                <p className="text-lg text-gray-600">{serviceCategories[currentCategory].description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {serviceCategories[currentCategory].services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{service.name}</h4>
                  <p className="text-gray-600 text-sm">{service.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 강원도 특화 차별화 포인트 */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-8" style={{ color: '#d5ae5d' }}>
            강원도 특화 차별화 포인트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {gangwonSpecialties.map((specialty, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-lg border border-gold/20">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const IconComponent = specialty.icon;
                    return <IconComponent className="text-gold" size={32} />;
                  })()}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-3">{specialty.title}</div>
                <div className="text-sm text-gray-600 mb-4">{specialty.description}</div>
                <div className="space-y-1">
                  {specialty.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-xs text-gold font-semibold">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 서비스 패키지 */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-8" style={{ color: '#d5ae5d' }}>
            서비스 패키지
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {servicePackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 relative ${
                  pkg.popular ? 'border-gold transform scale-105' : 'border-gray-100'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold">
                      인기 패키지
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#d5ae5d' }}>
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold mb-4" style={{ color: '#d5ae5d' }}>
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <Check className="text-gold mr-3 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gold text-black hover:bg-gold/90' 
                      : 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  패키지 선택
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 문의 폼 섹션 */}
        <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4" style={{ color: '#d5ae5d' }}>
            강원도 마케팅 전문가와 상담하세요
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            48년 토박이의 현장 경험과 전문성을 바탕으로 맞춤형 마케팅 전략을 제안해드립니다
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <button 
                className="px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-2"
                style={{ backgroundColor: '#d5ae5d', color: '#000000' }}
              >
                무료 상담 신청
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * 24시간 내에 답변드립니다. 업종별 맞춤 상담을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}