import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6" style={{ color: '#d5ae5d' }}>
            문의하기
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            강원매거진과 함께 브랜드의 이야기를 만들어보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#d5ae5d' }}>
              연락처 정보
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#d5ae5d' }}>이메일</h3>
                  <p className="text-gray-600">phg5698@naver.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#d5ae5d' }}>전화번호</h3>
                  <p className="text-gray-600">010-8969-8344</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#d5ae5d' }}>주소</h3>
                  <p className="text-gray-600">강원도 춘천시 석사동 강원매거진<br />강원매거진 사무실</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#d5ae5d' }}>운영시간</h3>
                  <p className="text-gray-600">
                    평일: 오전 9시 - 오후 6시<br />
                    주말 및 공휴일: 휴무
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg">
              <h3 className="font-bold text-lg mb-3" style={{ color: '#d5ae5d' }}>빠른 상담</h3>
              <p className="text-gray-600 mb-4">
                카카오톡 오픈채팅으로 더 빠르게 상담받으세요
              </p>
              <button 
                className="px-6 py-3 rounded-full font-bold transition-all duration-300"
                style={{ backgroundColor: '#d5ae5d', color: '#000000' }}
              >
                카카오톡 상담하기
              </button>
            </div>
          </div>

          {/* 문의 폼 */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#d5ae5d' }}>
              문의 양식
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>
                    이름 *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg" 
                    placeholder="이름을 입력해주세요" 
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>
                    연락처 *
                  </label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg" 
                    placeholder="연락처를 입력해주세요" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>
                  이메일 *
                </label>
                <input 
                  type="email" 
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg" 
                  placeholder="이메일을 입력해주세요" 
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>
                  서비스 유형 *
                </label>
                <select 
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg"
                >
                  <option value="">서비스를 선택해주세요</option>
                  <option value="협찬">브랜드 협찬</option>
                  <option value="대행">블로그 대행</option>
                  <option value="종합">종합 마케팅</option>
                  <option value="기타">기타 문의</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>
                  예산 범위
                </label>
                <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg">
                  <option value="">예산을 선택해주세요 (선택사항)</option>
                  <option value="50만원 이하">월 50만원 이하</option>
                  <option value="50-100만원">월 50-100만원</option>
                  <option value="100-200만원">월 100-200만원</option>
                  <option value="200만원 이상">월 200만원 이상</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3" style={{ color: '#d5ae5d' }}>
                  상세 문의 내용 *
                </label>
                <textarea 
                  rows={6} 
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-lg resize-none" 
                  placeholder="문의 내용을 자세히 입력해주세요"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  required
                  className="mr-3 w-5 h-5 text-gold" 
                />
                <label htmlFor="privacy" className="text-gray-600">
                  개인정보 수집 및 이용에 동의합니다 *
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl" 
                style={{ backgroundColor: '#d5ae5d', color: '#000000' }}
              >
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}