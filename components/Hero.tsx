import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC<{ onExploreClick: () => void }> = ({ onExploreClick }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay - Distant NYC Skyline */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] hover:scale-100"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-gold-400 text-amber-400 tracking-[0.2em] text-sm md:text-base mb-4 uppercase font-semibold fade-in-up" style={{ animationDelay: '0.2s' }}>
          Premium Real Estate Consultancy
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-6 leading-tight fade-in-up" style={{ animationDelay: '0.4s' }}>
          Beyond <br /> <span className="italic text-amber-100">Investment</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 font-light fade-in-up" style={{ animationDelay: '0.6s' }}>
          투자의 가치와 상속의 미래, <br className="md:hidden"/>두 마리 토끼를 잡는 탁월한 선택.<br/>
          미국 부동산이 당신의 새로운 유산이 됩니다.
        </p>
        
        <button 
          onClick={onExploreClick}
          className="px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm rounded-sm uppercase tracking-widest text-sm fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          Explore Opportunities
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 cursor-pointer" onClick={onExploreClick}>
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;