import React from 'react';
import { APP_NAME, TARGET_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white text-lg font-serif mb-4">{APP_NAME}</h4>
          <p className="text-sm leading-relaxed">
            미국 부동산 투자의 새로운 기준.<br/>
            신뢰와 전문성으로 당신의 자산을 지킵니다.
          </p>
        </div>
        <div>
          <h4 className="text-white text-lg font-serif mb-4">Contact</h4>
          <p className="text-sm">Email: {TARGET_EMAIL}</p>
          <p className="text-sm">Seoul Office: Gangnam-gu, Seoul</p>
          <p className="text-sm">NY Office: Manhattan, New York</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-serif mb-4">Legal</h4>
          <p className="text-xs">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.<br/>
            본 사이트는 데모용 포트폴리오 사이트입니다.<br/>
            실제 투자는 전문가와 상담하십시오.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;