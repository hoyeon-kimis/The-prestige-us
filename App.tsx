import React, { useState, useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import RegionSelector from './components/RegionSelector';
import FundingInfo from './components/FundingInfo';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Region } from './types';
import { APP_NAME } from './constants';

function App() {
  const [selectedRegion, setSelectedRegion] = useState<Region | ''>('');
  
  const regionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRegions = () => {
    regionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRegionSelect = (region: Region) => {
    setSelectedRegion(region);
    // Smooth scroll to contact form after selection with a slight delay
    setTimeout(() => {
      scrollToContact();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar (Absolute) */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white font-serif text-2xl font-bold tracking-widest drop-shadow-md">
          {APP_NAME}
        </div>
        <button 
          onClick={scrollToContact}
          className="bg-white/10 hover:bg-white hover:text-slate-900 text-white border border-white/20 px-6 py-2 rounded-sm backdrop-blur-md transition-all duration-300 text-sm font-medium"
        >
          Consultation
        </button>
      </nav>

      <main>
        <Hero onExploreClick={scrollToRegions} />
        
        <Features />
        
        <div ref={regionsRef}>
          <RegionSelector 
            selectedRegion={selectedRegion} 
            onSelect={handleRegionSelect} 
          />
        </div>

        <FundingInfo />

        <div className="bg-slate-50 py-10 text-center">
           <p className="text-slate-500 italic max-w-2xl mx-auto px-4">
             "뉴욕의 센트럴 파크가 내려다보이는 아파트부터,<br/>
             캘리포니아의 해안가 저택까지. <br/>
             당신의 꿈은 이제 현실이 됩니다."
           </p>
        </div>

        <div ref={contactRef}>
          <ContactForm preSelectedRegion={selectedRegion} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;