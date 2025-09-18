'use client';

import { useState, useEffect } from 'react';
import { Building2, Database, Users, Award, TrendingUp, Shield, Target, CheckCircle, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BusinessPage() {
  const [currentProject, setCurrentProject] = useState(0);

  // 실시간 성과 지표
  const performanceMetrics = [
    { label: '월 방문자', value: 2500, suffix: '+', description: '실시간 트래픽' },
    { label: '대기업 프로젝트', value: 80, suffix: '+', description: '완료' },
    { label: 'IT 경력', value: 20, suffix: '년', description: '검증된 경험' }
  ];

  // 대표 프로젝트 이력
  const majorProjects = [
    {
      company: '나이키코리아',
      project: '데이터 관리 시스템',
      field: 'Data Architect (DA)',
      scale: '전국 매장 + 온라인 통합 데이터',
      technology: '대용량 고객 데이터 처리 및 분석 시스템',
      achievement: '데이터 기반 마케팅 전략 수립 지원'
    },
    {
      company: '투썸플레이스',
      project: '데이터베이스 최적화',
      field: 'Database Administrator (DBA)',
      scale: '400+ 매장 실시간 데이터 처리',
      technology: '대규모 트랜잭션 처리 및 성능 튜닝',
      achievement: '시스템 응답속도 300% 향상'
    },
    {
      company: '맥도날드',
      project: '인사시스템 최적화',
      field: 'HR 시스템 데이터베이스',
      scale: '전국 직원 데이터 관리 시스템',
      technology: '인사 데이터 보안 및 성능 최적화',
      achievement: '인사 업무 처리 시간 50% 단축'
    },
    {
      company: 'PromptCore',
      project: 'Blogine',
      field: 'AI 프롬프트 엔지니어링',
      scale: '200+ 템플릿, 월 1,000+ 자동 콘텐츠',
      technology: 'GPT 기반 자동 콘텐츠 생성 시스템',
      achievement: '콘텐츠 제작 시간 90% 단축'
    }
  ];

  // 프로젝트 경험 통계
  const projectStats = [
    { category: '대기업 시스템', count: 80, suffix: '+', description: '글로벌 브랜드 시스템 구축/최적화' },
    { category: '중견기업 DB 구축', count: 150, suffix: '+', description: '업종별 맞춤 시스템 설계' }
  ];

  // IT 전문가 역량
  const expertCapabilities = [
    {
      title: 'Data Architect (DA)',
      description: '나이키코리아 수준 데이터 설계',
      icon: Database,
      level: 'Expert'
    },
    {
      title: 'Database Administrator (DBA)',
      description: '투썸/맥도날드 DB 최적화',
      icon: Shield,
      level: 'Expert'
    },
    {
      title: 'AI 프롬프트 아키텍처',
      description: '200+ 템플릿 개발, 월 1,000+ 자동 콘텐츠 생성',
      icon: TrendingUp,
      level: 'Expert'
    },
    {
      title: '프로젝트 관리',
      description: '80+ 프로젝트 성공 완료 경험',
      icon: Target,
      level: 'Expert'
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
    <div className="min-h-screen bg-white pt-20">
      {/* 히어로 섹션 */}
      <div className="bg-gradient-to-br from-gold/10 via-white to-gold/5 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold mb-6" style={{ color: '#d5ae5d' }}>
              80+ 대기업 프로젝트로 검증된 기술력
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              나이키∙투썸∙맥도날드 기술 파트너 → 이제 강원도를 위해
            </p>
            
            {/* 실시간 성과 지표 */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#d5ae5d' }}>
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 대표 프로젝트 이력 */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#d5ae5d' }}>
            검증된 대기업 IT 프로젝트
          </h2>
          <p className="text-xl text-gray-600">
            글로벌 브랜드와 함께한 80+ 프로젝트 경험
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {majorProjects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-xl p-8 mx-4">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="mb-6 text-center">
                          <h3 className="text-3xl font-bold text-gray-800 mb-2">{project.company}</h3>
                          <div className="text-xl font-semibold text-gold">{project.project}</div>
                        </div>
                        
                        <div className="space-y-4 text-center">
                          <div>
                            <div className="text-sm font-semibold text-gold mb-1">분야</div>
                            <div className="text-lg text-gray-800">{project.field}</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gold mb-1">규모</div>
                            <div className="text-gray-700">{project.scale}</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gold mb-1">기술</div>
                            <div className="text-gray-700">{project.technology}</div>
                          </div>
                          <div className="bg-gold/10 rounded-lg p-4">
                            <div className="text-sm font-semibold text-gold mb-1">성과</div>
                            <div className="text-gray-800 font-semibold">{project.achievement}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-gold/5 to-gold/10 rounded-lg h-96 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gold mb-4">{project.company}</div>
                          <div className="text-xl text-gray-600 mb-2">
                            {project.company === 'PromptCore' ? '대표' : '기술 파트너'}
                          </div>
                          <div className="text-lg text-gray-500">
                            {project.company === 'PromptCore' ? 'AI 브랜드' : '글로벌 브랜드'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setCurrentProject((prev) => (prev - 1 + majorProjects.length) % majorProjects.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="text-gold" size={24} />
          </button>
          
          <button
            onClick={() => setCurrentProject((prev) => (prev + 1) % majorProjects.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="text-gold" size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {majorProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentProject ? 'bg-gold' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 프로젝트 경험 통계 */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#d5ae5d' }}>
              총 프로젝트 경험: 80+ 건
            </h2>
            <p className="text-xl text-gray-600">
              다양한 규모와 업종의 프로젝트 성공 경험
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projectStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-5xl font-bold mb-4" style={{ color: '#d5ae5d' }}>
                  {stat.count}{stat.suffix}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-3">{stat.category}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IT 전문가 프로필 */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#d5ae5d' }}>
            IT전문가 (20년 경력) - 대표 프로젝트 80+
          </h2>
          <p className="text-xl text-gray-600">
            검증된 기술력으로 강원도 사업체를 지원합니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertCapabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gold/20">
              <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <capability.icon className="text-gold" size={32} />
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800 mb-2">{capability.title}</div>
                <div className="text-sm text-gray-600 mb-3">{capability.description}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  capability.level === 'Expert' 
                    ? 'bg-gold text-black' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {capability.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 차별화 메시지 */}
      <div className="bg-gradient-to-r from-gold/10 to-gold/5 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8" style={{ color: '#d5ae5d' }}>
            일반 마케팅 회사와 비교하지 마세요
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="text-2xl font-bold text-gray-800 mb-6">
              우리는 나이키, 투썸, 맥도날드와 일한<br />
              80+ 프로젝트 검증 기술 회사입니다.
            </div>
            
            <div className="text-xl text-gray-600 mb-8">
              이제 이 기술력을<br />
              강원도 사업체들을 위해 사용합니다.
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-gold/10 rounded-lg p-6">
                <div className="text-2xl mb-3">🏆</div>
                <div className="font-bold text-gray-800 mb-2">대기업 80+ 프로젝트 검증</div>
                <div className="text-sm text-gray-600">나이키∙투썸∙맥도날드 기술 파트너</div>
              </div>
              
              <div className="bg-gold/10 rounded-lg p-6">
                <div className="text-2xl mb-3">🎯</div>
                <div className="font-bold text-gray-800 mb-2">강원도 전문 + 글로벌 기술</div>
                <div className="text-sm text-gray-600">48년 토박이 네트워크 × 대기업 기술력</div>
              </div>
              
              <div className="bg-gold/10 rounded-lg p-6">
                <div className="text-2xl mb-3">⚡</div>
                <div className="font-bold text-gray-800 mb-2">80+ 프로젝트 노하우</div>
                <div className="text-sm text-gray-600">검증된 문제 해결 방법론</div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 mx-auto hover:shadow-lg"
            style={{ backgroundColor: '#d5ae5d', color: '#000000' }}
          >
            강원도 마케팅 상담 신청
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
