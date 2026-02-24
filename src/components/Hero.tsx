import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const distFromCenter = Math.sqrt(Math.pow(mousePos.x - 0.5, 2) + Math.pow(mousePos.y - 0.5, 2));
  const focusFactor = Math.max(0, 1 - distFromCenter * 2.5);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#e5e5e5] noise-bg select-none"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[15%] w-96 h-96 bg-gray-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-gray-300/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-10">
        <div className="relative flex flex-col items-center text-center">
          {/* Main Title Area */}
          <div 
            className="relative mb-12 cursor-pointer group"
            onClick={scrollToProjects}
          >
            <h1 className="text-[20vw] md:text-[15rem] font-serif-display font-medium tracking-tighter text-[#1a1a1a] leading-[0.8] z-30 transition-all duration-700 group-hover:scale-[1.02]">
              Hello
            </h1>
            
            {/* Dynamic Shadow Layer 1 */}
            <h1 
              className="absolute inset-0 text-[20vw] md:text-[15rem] font-serif-display font-medium tracking-tighter text-[#1a1a1a] leading-[0.8] z-20 pointer-events-none transition-all duration-300 ease-out"
              style={{
                filter: `blur(${12 * (1 - focusFactor)}px)`,
                opacity: 0.2 + (focusFactor * 0.3),
                transform: `translate(${(mousePos.x - 0.5) * 50}px, ${(mousePos.y - 0.5) * 50}px) scale(${1 + (1 - focusFactor) * 0.04})`
              }}
            >
              Hello
            </h1>

            {/* Dynamic Shadow Layer 2 */}
            <h1 
              className="absolute inset-0 text-[20vw] md:text-[15rem] font-serif-display font-medium tracking-tighter text-[#1a1a1a] leading-[0.8] z-10 pointer-events-none transition-all duration-500 ease-out"
              style={{
                filter: `blur(${35 * (1 - focusFactor * 0.4)}px)`,
                opacity: 0.1,
                transform: `translate(${(mousePos.x - 0.5) * -70}px, ${(mousePos.y - 0.5) * -70}px) scale(${1 + (1 - focusFactor) * 0.08})`
              }}
            >
              Hello
            </h1>
          </div>

          {/* Intro Text */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="text-[12px] md:text-[14px] font-medium tracking-[0.1em] text-gray-400 max-w-lg leading-relaxed">
              사용자의 흐름을 이해하고 의미 있는 디지털 경험을 설계하는 <br className="hidden md:block" />
              <span className="text-gray-900 font-bold">프로덕트 디자이너 김정원</span>입니다.
            </p>
          </div>
        </div>

        {/* Floating info */}
        <div className="absolute bottom-[-100px] right-0 md:right-20 flex flex-col items-end text-right opacity-30">
           <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-900 mb-1">Kim Jung Won</span>
           <span className="text-[9px] font-medium text-gray-500 uppercase tracking-widest">Digital Product Design</span>
        </div>
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <style>{`
        h1 {
          will-change: transform, filter, opacity;
        }
      `}</style>
    </section>
  );
};

export default Hero;