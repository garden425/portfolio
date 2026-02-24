
import React from 'react';
import { TOOLS } from '../constants';

const ToolStack: React.FC = () => {
  return (
    <section id="tools" className="py-24 bg-[#f8f7f5] px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-5xl font-black mb-6 tracking-tight text-gray-900">Tool Stack</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            아이디어를 실제 경험으로 구현하기 위해 활용하는 디자인 툴과 작업 환경입니다.<br />
            프로젝트 성격에 맞춰 최적의 툴을 선택하고 사용합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-8">
          {TOOLS.map((tool) => (
            <div 
              key={tool.name} 
              className="flex flex-col items-center group cursor-default"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3 border border-gray-100">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-500"
                />
              </div>
              <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-900 tracking-[0.2em] transition-colors uppercase">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
