import React from 'react';
import { DollarSign, ShieldCheck, Globe, LucideIcon } from 'lucide-react';
import { FEATURES } from '../constants';

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  ShieldCheck,
  Globe
};

const Features: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-xs">Why Choose US Real Estate</span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-3 mb-6">
            변하지 않는 가치, <br/>미래를 위한 확실한 약속
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.iconName];
            return (
              <div key={idx} className="group p-8 border border-slate-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-500 bg-slate-50 hover:bg-white rounded-sm text-center">
                <div className="w-16 h-16 mx-auto bg-slate-200 group-hover:bg-amber-100 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-slate-600 group-hover:text-amber-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;