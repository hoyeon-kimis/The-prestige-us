import React from 'react';
import { Building2, FileCheck, Users, Briefcase } from 'lucide-react';

const FundingInfo: React.FC = () => {
  return (
    <section className="bg-slate-50">
      {/* Expertise Section */}
      <div className="bg-slate-900 py-20 px-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto md:flex items-center justify-between relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              <span className="text-amber-400">Trust</span> Built on<br />
              Decades of Experience
            </h2>
            <div className="w-16 h-1 bg-amber-500 mb-8"></div>
            <p className="text-slate-300 text-lg font-light leading-relaxed max-w-lg">
              불확실한 시장일수록 전문가의 안목이 필요합니다.<br/>
              The Prestige는 검증된 베테랑 전문가들이 당신의 투자를 설계합니다.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors">
              <Briefcase className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Top-Tier Financial</h3>
              <p className="text-sm text-slate-300">
                미국 3대 은행 15년 이상<br/>
                재정 전문가 그룹
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors">
              <Building2 className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Real Estate Expert</h3>
              <p className="text-sm text-slate-300">
                미국 부동산 실무 10년 이상<br/>
                현지 베테랑 전문가
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Funding Benefits Section */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-xs">Smart Investment</span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-3 mb-4">
            New York Funding Opportunity
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            직접 매입의 부담은 줄이고, 수익성은 높였습니다. 
            <br className="md:hidden"/> 소액 펀딩으로 맨해튼의 랜드마크를 소유하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-xl border border-slate-100">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full shrink-0">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">1억 원 미만의 시작</h3>
                  <p className="text-slate-600 leading-relaxed">
                    수십억 원이 필요한 미국 빌딩 투자, 이제 1억 원 미만의 합리적인 금액으로 
                    뉴욕 핵심 상권의 지분을 확보하실 수 있습니다. 진입 장벽을 낮춘 스마트한 포트폴리오를 구성하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-200 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-xl border border-slate-100">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-full shrink-0">
                  <FileCheck className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">투명한 운용과 안전성</h3>
                  <p className="text-slate-600 leading-relaxed">
                    모든 재무 계획과 운용 현황이 투명하게 공개됩니다. 
                    현지 법률 준수 및 철저한 리스크 관리 시스템으로 투자자분들의 자산을 안전하게 보호합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingInfo;