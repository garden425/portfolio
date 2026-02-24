
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailViewProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onClose }) => {
  const accentColor = project.accentColor || '#1a1a1a';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-[110] bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <span className="text-xl font-black tracking-tighter text-gray-900">KIM</span>
            <div className="hidden md:flex space-x-8 text-[11px] font-bold text-gray-400">
              <span className="cursor-pointer hover:text-gray-900">ME</span>
              <span className="cursor-pointer text-gray-900">Projects</span>
              <span className="cursor-pointer hover:text-gray-900">Tools</span>
              <span className="cursor-pointer hover:text-gray-900">Contact</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="group flex items-center space-x-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span>Close</span>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-12 pb-32 px-6 min-h-[600px] flex items-center">
        {/* Background Image positioned behind text */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={project.imageUrl} 
            className="w-full h-full object-cover opacity-20 blur-[10px] scale-105"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          {/* Header Top: Tags & Title */}
          <div className="mb-20">
            <div className="flex space-x-3 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-black text-gray-500 border border-gray-200 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-sm uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4 flex flex-wrap items-baseline">
              {project.title}
              {project.titleAccent && (
                <span 
                  className="ml-4 font-serif-display italic drop-shadow-sm"
                  style={{ color: accentColor }}
                >
                  {project.titleAccent}
                </span>
              )}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-bold tracking-tight max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          {/* Header Bottom: Overview & Role */}
          <div className="grid md:grid-cols-2 gap-12 border-t border-gray-200/50 pt-16 bg-white/30 backdrop-blur-sm rounded-xl p-8 md:p-0 md:bg-transparent md:backdrop-blur-none">
            <div>
              <h2 className="text-2xl font-black mb-6 tracking-tight">Overview</h2>
              <p className="text-gray-500 leading-relaxed font-medium whitespace-pre-wrap">
                {project.overview}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-6 tracking-tight">Role</h2>
              <div className="space-y-1">
                <p className="font-black text-gray-900 text-lg mb-2">{project.role}</p>
                {project.roleList?.map(item => (
                  <p key={item} className="text-gray-400 font-medium">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section - Red Theme (#FF5C4D) */}
      <section className="py-32 px-6 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-black text-3xl mb-4 block text-[#FF5C4D]">Problem</span>
            <h2 className="text-5xl font-black mb-10 tracking-tight text-gray-900">{project.problemTitle || '기존의 문제점'}</h2>
            <div className="max-w-4xl">
              <p className="text-gray-600 text-lg leading-relaxed mb-16 font-medium whitespace-pre-wrap">
                {project.problemText}
              </p>
              
              <div className="space-y-8">
                {project.problemBullets?.map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-5">
                    <div 
                      className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#FF5C4D] flex items-center justify-center text-[#FF5C4D] font-black text-xs mt-1"
                    >✕</div>
                    <p className="text-gray-500 font-medium leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Display Section (Grayish Background) */}
      <section className="py-32 px-6 bg-[#f8f7f5]">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <img 
              src={project.mockupUrl || project.imageUrl} 
              alt="Mockups" 
              className="rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] w-full object-cover"
            />
            <div className="absolute inset-0 rounded-3xl border border-gray-900/5 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Solution Section - Blue Theme (#3B82F6) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-black text-3xl mb-4 block text-[#3B82F6]">Solution</span>
            <h2 className="text-5xl font-black mb-10 tracking-tight text-gray-900">{project.solutionTitle || '해결 방향 및 결과'}</h2>
            <div className="max-w-4xl">
              <p className="text-gray-600 text-lg leading-relaxed mb-16 font-medium whitespace-pre-wrap">
                {project.solutionText}
              </p>
              
              <div className="space-y-10">
                {project.solutionBullets?.map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#3B82F6] flex items-center justify-center text-[#3B82F6] font-black text-xs mt-1">✓</div>
                    <p className="text-gray-500 font-medium leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Case Study Sections */}
      {(project.background || project.detailedSections || project.results || project.lessons) && (
        <section className="py-32 px-6 bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Background */}
            {project.background && (
              <div className="mb-32">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 block">Background</span>
                <div className="max-w-4xl">
                  <p className="text-gray-600 text-lg font-medium leading-relaxed whitespace-pre-wrap">
                    {project.background}
                  </p>
                </div>
              </div>
            )}

            {/* Detailed Sections */}
            {project.detailedSections?.map((section, idx) => (
              <div key={idx} className="mb-32 last:mb-0">
                <h3 className="text-4xl font-black mb-16 tracking-tight text-gray-900">{section.title}</h3>
                
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">왜 바꿨는가 (Why)</h4>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                      {section.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">어떻게 접근했는가 (How)</h4>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8">
                      {section.how}
                    </p>
                    {section.howBullets && (
                      <ul className="space-y-4">
                        {section.howBullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                            <p className="text-gray-500 font-medium leading-relaxed">{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Results */}
            {project.results && (
              <div className="mt-32 pt-32 border-t border-gray-100">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-12 block">Result</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {project.results.map((result, idx) => {
                    const [label, value] = result.split(' 약 ');
                    const [val, suffix] = value ? value.split(' ') : [result, ''];
                    return (
                      <div key={idx} className="bg-gray-50 p-8 rounded-2xl">
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mb-4">{label}</p>
                        <p className="text-3xl font-black text-gray-900 tracking-tighter">
                          {value ? `약 ${val}` : result}
                          <span className="text-sm ml-1 font-bold text-gray-400">{suffix}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Lessons */}
            {project.lessons && (
              <div className="mt-32 pt-32 border-t border-gray-100">
                <div className="max-w-4xl">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 block">What This Project Taught Me</span>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed italic">
                    "{project.lessons}"
                  </p>
                </div>
              </div>
            )}

            {/* Prototype & Figma Buttons */}
            {(project.prototypeUrl || project.figmaUrl) && (
              <div className="mt-32 flex flex-col items-center space-y-6">
                {project.prototypeUrl && (
                  <a 
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-12 py-6 bg-gray-900 text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl w-full max-w-sm"
                  >
                    <span className="relative z-10 text-lg font-black uppercase tracking-[0.2em]">View Prototype</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <svg className="ml-4 w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
                
                {project.figmaUrl && (
                  <a 
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-12 py-6 border-2 border-gray-900 text-gray-900 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 w-full max-w-sm"
                  >
                    <span className="relative z-10 text-lg font-black uppercase tracking-[0.2em] flex items-center group-hover:text-white transition-colors duration-500">
                      <svg className="mr-3 w-6 h-6" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 28.5C19 25.8478 20.0536 23.3043 21.9289 21.4289C23.8043 19.5536 26.3478 18.5 29 18.5C31.6522 18.5 34.1957 19.5536 36.0711 21.4289C37.9464 23.3043 39 25.8478 39 28.5C39 31.1522 37.9464 33.6957 36.0711 35.5711C34.1957 37.4464 31.6522 38.5 29 38.5C26.3478 38.5 23.8043 37.4464 21.9289 35.5711C20.0536 33.6957 19 31.1522 19 28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 44.8478 1.05357 42.3043 2.92893 40.4289C4.8043 38.5536 7.34784 37.5 10 37.5C12.6522 37.5 15.1957 38.5536 17.0711 40.4289C18.9464 42.3043 20 44.8478 20 47.5C20 50.1522 18.9464 52.6957 17.0711 54.5711C15.1957 56.4464 12.6522 57.5 10 57.5C7.34784 57.5 4.8043 56.4464 2.92893 54.5711C1.05357 52.6957 0 50.1522 0 47.5Z" fill="#0ACF83"/>
                        <path d="M0 28.5C0 25.8478 1.05357 23.3043 2.92893 21.4289C4.8043 19.5536 7.34784 18.5 10 18.5H19V38.5H10C7.34784 38.5 4.8043 37.4464 2.92893 35.5711C1.05357 33.6957 0 31.1522 0 28.5Z" fill="#A259FF"/>
                        <path d="M0 9.5C0 6.84784 1.05357 4.3043 2.92893 2.42893C4.8043 0.553571 7.34784 -0.5 10 -0.5H19V18.5H10C7.34784 18.5 4.8043 17.4464 2.92893 15.5711C1.05357 13.6957 0 11.1522 0 9.5Z" fill="#F24E1E"/>
                        <path d="M19 -0.5H29C31.6522 -0.5 34.1957 0.553571 36.0711 2.42893C37.9464 4.3043 39 6.84784 39 9.5C39 12.1522 37.9464 14.6957 36.0711 16.5711C34.1957 18.4464 31.6522 19.5 29 19.5H19V-0.5Z" fill="#FF7262"/>
                      </svg>
                      View on Figma
                    </span>
                    <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-16 border-t border-gray-100 text-center">
        <p className="text-gray-300 font-black text-[10px] uppercase tracking-[0.5em]">
          2026 KIM PORTFOLIO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetailView;
