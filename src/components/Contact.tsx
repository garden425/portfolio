import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-48 bg-white px-6 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-xl">
            <span className="text-beige-accent font-black tracking-[0.4em] text-[10px] uppercase block mb-6">Get in touch</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[1.1]">
              새로운 가치를<br />함께 만듭니다.
            </h2>
          </div>
          <div className="md:text-right">
             <p className="text-gray-400 text-lg font-medium leading-relaxed mb-4">
              기획부터 디자인까지,<br />협업의 문은 언제나 열려있습니다.
            </p>
          </div>
        </div>

        <a 
          href="mailto:wjd7569@naver.com"
          className="group relative inline-block px-6 py-2.5 border border-gray-900/20 rounded-full overflow-hidden transition-all duration-500 hover:border-gray-900 hover:bg-gray-900"
        >
          <span className="relative z-10 text-[13px] font-semibold tracking-normal text-gray-900 group-hover:text-white transition-colors duration-500">
            wjd7569@naver.com
          </span>
          <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </a>

        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
          <div>
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Social</h4>
            <div className="flex flex-col space-y-2 text-sm font-bold">
              <a href="https://www.instagram.com/bb0ddo_425/" target="_blank" rel="noopener noreferrer" className="hover:text-beige-dark transition-colors">Instagram</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Location</h4>
            <p className="text-sm font-bold">Seoul, South Korea</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;