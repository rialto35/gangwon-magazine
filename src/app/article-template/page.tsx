"use client"

import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Quote } from "lucide-react"

export default function ArticleTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <button className="flex items-center text-gold hover:text-gold-light transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              뒤로가기
            </button>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-gold text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
              관광
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6 leading-tight">
              강원도 관광의 새로운 패러다임: 지속가능한 관광의 미래
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
              <div className="flex items-center">
                <User className="mr-2" size={16} />
                강원매거진 에디터
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                2024.09.15
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                5분 읽기
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Article Content */}
            <div className="lg:col-span-3">
              <article className="max-w-3xl mx-auto">
                {/* Featured Image */}
                <div className="mb-12">
                  <div className="h-96 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-gold mb-4">🏔️</div>
                      <p className="text-gray-600">강원도 설악산 풍경</p>
                    </div>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none" style={{ lineHeight: '1.8' }}>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    강원도는 대한민국에서 가장 아름다운 자연을 자랑하는 지역 중 하나입니다. 
                    설악산의 웅장한 산맥부터 동해의 푸른 바다까지, 이곳의 자연은 수많은 관광객들에게 
                    깊은 인상을 남기고 있습니다.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-black mb-6 mt-12">지속가능한 관광의 필요성</h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    최근 몇 년간 강원도의 관광 산업은 급속도로 성장했습니다. 하지만 이러한 성장은 
                    환경에 대한 부담을 동반했습니다. 무분별한 개발과 과도한 관광객 유입으로 인해 
                    자연 환경이 훼손되는 사례가 늘어나고 있습니다.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    이에 따라 강원도는 지속가능한 관광 모델을 도입하여 자연을 보존하면서도 
                    관광객들에게 의미 있는 경험을 제공하는 방향으로 전환하고 있습니다. 
                    이는 단순히 환경 보호를 넘어서 지역 경제의 지속가능한 발전을 위한 필수적인 전략입니다.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-black mb-4 mt-10">주요 정책 및 사업</h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    강원도는 다음과 같은 정책을 통해 지속가능한 관광을 실현하고 있습니다:
                  </p>

                  <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-8 space-y-2">
                    <li>친환경 숙박시설 인증제도 도입</li>
                    <li>대중교통 중심의 관광 인프라 구축</li>
                    <li>지역 특산품을 활용한 관광 상품 개발</li>
                    <li>관광객 교육 프로그램 운영</li>
                  </ul>

                  <blockquote className="border-l-4 border-gold pl-6 py-4 bg-gold/5 my-8">
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      "지속가능한 관광은 단순히 자연을 보호하는 것이 아니라, 
                      미래 세대가 현재와 같은 아름다운 자연을 경험할 수 있도록 하는 것입니다."
                    </p>
                    <cite className="text-sm text-gray-600 mt-2 block">- 강원도 관광청장</cite>
                  </blockquote>

                  <h3 className="text-2xl font-serif font-bold text-black mb-4 mt-10">앞으로의 전망</h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    지속가능한 관광은 이제 선택이 아닌 필수가 되었습니다. 강원도는 이러한 변화에 
                    적극적으로 대응하여 자연과 인간이 조화를 이루는 관광 모델을 만들어가고 있습니다.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    앞으로도 강원도는 지속가능한 관광을 통해 지역 경제를 발전시키고, 
                    동시에 아름다운 자연을 보존하는 일에 최선을 다할 것입니다.
                  </p>
                </div>

                {/* Article Footer */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gold hover:text-gold-light transition-colors">
                        <Bookmark className="mr-2" size={20} />
                        북마크
                      </button>
                      <button className="flex items-center text-gold hover:text-gold-light transition-colors">
                        <Share2 className="mr-2" size={20} />
                        공유하기
                      </button>
                    </div>
                    <div className="text-sm text-gray-500">
                      마지막 업데이트: 2024.09.15
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* 핵심 포인트 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-serif font-bold text-black mb-4 flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    핵심 포인트
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>지속가능한 관광의 필요성 증가</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>친환경 숙박시설 인증제도</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>대중교통 중심 인프라 구축</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>지역 특산품 활용 관광 상품</span>
                    </li>
                  </ul>
                </div>

                {/* 데이터 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-serif font-bold text-black mb-4 flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    데이터
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold">15,000+</div>
                      <div className="text-sm text-gray-600">월 관광객 수</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold">25%</div>
                      <div className="text-sm text-gray-600">친환경 숙박 비율</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold">3년</div>
                      <div className="text-sm text-gray-600">정책 도입 기간</div>
                    </div>
                  </div>
                </div>

                {/* 인용 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-serif font-bold text-black mb-4 flex items-center">
                    <Quote className="text-gold mr-3" size={20} />
                    인용
                  </h3>
                  <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                    "지속가능한 관광은 단순히 자연을 보호하는 것이 아니라, 
                    미래 세대가 현재와 같은 아름다운 자연을 경험할 수 있도록 하는 것입니다."
                  </blockquote>
                  <cite className="text-xs text-gray-500 mt-3 block">- 강원도 관광청장</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
