import { Quote, Heart, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold mb-8 text-center" style={{ color: '#d5ae5d' }}>
          강원매거진 소개
        </h1>
        
        {/* 대표 소개 & 창업 스토리 */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-12 border border-amber-100">
          <div className="flex items-start mb-6">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <Quote className="text-gold" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-2" style={{ color: '#d5ae5d' }}>
                대표 인사말
              </h2>
              <p className="text-lg text-gray-600">춘천 48년 토박이, 강원매거진 대표</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-lg">
                안녕하세요, 강원매거진 대표 박현기입니다.
              </p>
              
              <p>
                저는 춘천에서 태어나 48년을 이곳에서 살아온 토박이입니다.
                이 땅에서 자라고, 공부하고, 일하며 수많은 분들과 인연을 맺어왔습니다.
              </p>
              
              <p>
                48년을 살면서 정말 다양한 사업을 하는 분들을 만났습니다.
                새벽 4시부터 반죽하는 빵집 사장님,
                20년째 한 자리에서 단골들을 돌보는 미용실 원장님,
                아이들의 꿈을 키워주는 학원 선생님들,
                어르신들을 가족처럼 돌보는 요양원 시설장님,
                환자 한 분 한 분 정성스럽게 진료하는 병원 원장님들...
              </p>
              
              <p>
                모든 분들이 진심으로 일하고 계시지만,
                <span className="font-semibold text-gray-800">'어떻게 하면 더 많은 분들이 우리를 알 수 있을까'</span>
                고민하는 모습을 자주 봤습니다.
              </p>
              
              <p>
                특히 코로나19 이후로는 더 절실해졌죠.
                온라인 마케팅이 필수가 됐는데, 어디서부터 시작해야 할지 
                모르겠다는 분들이 너무 많았습니다.
              </p>
              
              <p>
                그때 깨달았습니다.
                <span className="font-semibold text-gold">'내가 48년 살아온 이 지역 네트워크와 
                디지털 기술을 결합하면, 
                우리 동네 모든 사업자분들께 도움이 될 수 있겠구나'</span>
              </p>
              
              <p>
                단순히 맛집이나 관광지만 소개하는 것이 아니라,
                지역민들의 삶과 직결된 의료, 교육, 복지는 물론
                작은 가게부터 전문 서비스까지,
                진심으로 일하는 모든 분들의 이야기를
                제대로 전하고 싶어 강원매거진을 시작했습니다.
              </p>
              
              <div className="bg-white/60 rounded-lg p-6 mt-6 border-l-4 border-gold">
                <p className="text-lg font-semibold text-gray-800 italic">
                  토박이로서의 신뢰와 책임감으로,
                  우리 지역의 모든 좋은 사업들이 
                  더 많은 분들에게 알려질 수 있도록 
                  평생 함께하는 파트너가 되겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mr-4">
                <Target className="text-gold" size={24} />
              </div>
              <h2 className="text-3xl font-serif font-bold" style={{ color: '#d5ae5d' }}>
                우리의 미션
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              강원도의 진정한 매력을 발견하고 전하는 것입니다. 
              로컬 전문 매거진으로서 강원도의 숨겨진 이야기, 문화, 그리고 사람들을 세상에 알리고자 합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gold/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mr-3">
                  <Heart className="text-gold" size={20} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#d5ae5d' }}>설립 배경</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                2021년, 강원도의 아름다운 자연과 독특한 문화를 더 많은 사람들에게 알리고자 시작되었습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border border-gold/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mr-3">
                  <Users className="text-gold" size={20} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#d5ae5d' }}>핵심 가치</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                진정성, 전문성, 그리고 지역 사회와의 상생을 바탕으로 콘텐츠를 제작합니다.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: '#d5ae5d' }}>
              성과 현황
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2" style={{ color: '#d5ae5d' }}>15,000+</div>
                <div className="text-gray-600">월 독자 수</div>
              </div>
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2" style={{ color: '#d5ae5d' }}>25+</div>
                <div className="text-gray-600">협업 파트너</div>
              </div>
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2" style={{ color: '#d5ae5d' }}>180+</div>
                <div className="text-gray-600">발행 기사</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}