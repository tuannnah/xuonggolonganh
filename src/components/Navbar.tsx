"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-brand">Xưởng Gỗ Long Anh</Link>
          <ul className="nav-links">
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/sofa">Sofa</Link></li>
            <li><Link href="/ban-ghe">Bàn ghế</Link></li>
            <li><Link href="/dich-vu">Dịch vụ</Link></li>
            <li><Link href="/lien-he">Liên hệ</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/lien-he" className="btn-consult">Liên hệ tư vấn</Link>
            <button 
              className={`hamburger ${isOpen ? 'open' : ''}`} 
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Trang chủ</Link></li>
          <li><Link href="/sofa" onClick={() => setIsOpen(false)}>Sofa</Link></li>
          <li><Link href="/ban-ghe" onClick={() => setIsOpen(false)}>Bàn ghế</Link></li>
          <li><Link href="/dich-vu" onClick={() => setIsOpen(false)}>Dịch vụ</Link></li>
          <li><Link href="/lien-he" onClick={() => setIsOpen(false)}>Liên hệ</Link></li>
        </ul>
        <Link href="/lien-he" className="btn-consult block text-center mt-4 p-3" onClick={() => setIsOpen(false)}>
          Liên hệ tư vấn ngay
        </Link>
      </div>
    </>
  );
}
