'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-6 bg-gradient-to-r from-gold to-gold/80 rounded-sm flex items-center justify-center">
            <div className="text-black text-xs font-bold">강원</div>
          </div>
          <h1 className="text-2xl font-bold" style={{ color: '#d5ae5d' }}>GANGWON MAGAZINE</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gold transition-colors">홈</Link>
          <Link href="/about" className="text-gray-700 hover:text-gold transition-colors">소개</Link>
          <Link href="/services" className="text-gray-700 hover:text-gold transition-colors">서비스</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gold transition-colors">문의</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/" className="text-gray-700 hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>홈</Link>
              <Link href="/about" className="text-gray-700 hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>소개</Link>
              <Link href="/services" className="text-gray-700 hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>서비스</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>문의</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}