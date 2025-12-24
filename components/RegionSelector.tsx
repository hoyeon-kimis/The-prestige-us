import React from 'react';
import { REGION_DATA } from '../constants';
import { Region } from '../types';

interface Props {
  selectedRegion: Region | '';
  onSelect: (region: Region) => void;
}

const RegionSelector: React.FC<Props> = ({ selectedRegion, onSelect }) => {
  return (
    <section className="py-20 bg-slate-900 text-white px-6" id="regions">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Discover Your Region</h2>
            <p className="text-slate-400 max-w-lg">
              당신의 라이프스타일과 투자 목적에 부합하는 최고의 지역을 선택하세요.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {REGION_DATA.map((region) => (
            <div 
              key={region.id}
              onClick={() => onSelect(region.id)}
              className={`
                relative h-[400px] group cursor-pointer overflow-hidden rounded-sm transition-all duration-500
                ${selectedRegion === region.id ? 'ring-4 ring-amber-500 transform scale-[1.02]' : 'hover:shadow-2xl opacity-90 hover:opacity-100'}
              `}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${region.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                  {region.titleKo}
                </span>
                <h3 className="text-2xl font-serif text-white mb-3">{region.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {region.description}
                </p>
                <div className={`mt-4 w-full h-[1px] bg-amber-500 transform origin-left transition-transform duration-500 ${selectedRegion === region.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </div>

              {selectedRegion === region.id && (
                <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  SELECTED
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionSelector;