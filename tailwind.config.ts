import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (로고 기반)
        'teal-primary': '#2F5D5A',    // 메인 틸그린 (로고 산맥)
        'beige-primary': '#F5F3F0',   // 베이지/크림 (로고 배경)
        'dark-gray': '#2D3748',       // 다크 그레이 (텍스트용)
        'white': '#FFFFFF',           // 화이트
        
        // Secondary Colors
        'light-teal': '#E6FFFA',      // 라이트 틸 (배경 섹션용)
        'gold-accent': '#D69E2E',     // 골드 액센트 (CTA 버튼)
        
        // Magazine Gold System
        'gold': '#d5ae5d',            // 메인 골드 컬러
        'gold-dark': '#B8941F',       // 다크 골드
        'gold-light': '#E6C547',      // 라이트 골드
        
        // 기존 컬러 유지 (호환성)
        teal: '#2F5D5A',
        beige: '#F5F3F0',
        darkgray: '#2D3748',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
