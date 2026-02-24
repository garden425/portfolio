import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // 최상단에서는 항상 표시, 그 외에는 스크롤 방향에 따라 제어
        if (currentScrollY < 50) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // 헤더 높이만큼 여백 확보
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto px-6 py-6 max-w-7xl">
        <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-12">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, 'hero')}
              className="text-xl font-black tracking-tighter text-gray-900"
            >
              KIM
            </a>
            
            <div className="hidden md:flex space-x-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-gray-900 transition-colors">Projects</a>
              <a href="#tools" onClick={(e) => scrollToSection(e, 'tools')} className="hover:text-gray-900 transition-colors">Tools Stack</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
          
          <a 
            href="mailto:wjd7569@naver.com"
            className="text-[11px] font-black bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all uppercase tracking-widest inline-block"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;