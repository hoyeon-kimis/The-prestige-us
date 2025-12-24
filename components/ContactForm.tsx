import React, { useState } from 'react';
import { BudgetRange, ContactFormData, Region, InvestmentType } from '../types';
import { BUDGET_OPTIONS, REGION_DATA, TARGET_EMAIL } from '../constants';
import { CheckCircle, Send, Loader2 } from 'lucide-react';

interface Props {
  preSelectedRegion: Region | '';
}

const ContactForm: React.FC<Props> = ({ preSelectedRegion }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    investmentType: '',
    region: preSelectedRegion,
    budget: '',
    message: ''
  });

  // Update formData when prop changes
  React.useEffect(() => {
    if (preSelectedRegion) {
      setFormData(prev => ({ ...prev, region: preSelectedRegion }));
    }
  }, [preSelectedRegion]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`[문의] ${formData.name}님의 미국 부동산 상담 요청`);
    const body = encodeURIComponent(`
이름: ${formData.name}
연락처: ${formData.phone}
이메일: ${formData.email}
투자 방식: ${formData.investmentType}
관심 지역: ${formData.region}
예산 범위: ${formData.budget}

상담 내용:
${formData.message}
    `);
    return `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      console.log('Form Submitted Payload:', formData);
      
      // Optional: Open mail client as fallback or primary method
      window.location.href = generateMailtoLink();
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-lg p-10 shadow-xl border border-amber-100 text-center max-w-2xl mx-auto my-10">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">상담 요청이 접수되었습니다.</h3>
        <p className="text-slate-600 mb-6">
          귀하의 소중한 정보가 안전하게 전달되었습니다.<br/>
          담당 컨설턴트가 검토 후 <strong>{TARGET_EMAIL}</strong> 계정을 통해<br/>
          24시간 이내에 연락드리겠습니다.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-amber-600 hover:text-amber-700 font-semibold underline"
        >
          다른 상담 요청하기
        </button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Decorative */}
        <div className="bg-slate-900 w-full md:w-1/3 p-10 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-serif mb-4 text-amber-400">Private Consultation</h3>
            <p className="text-slate-300 text-sm font-light mb-8">
              미국 부동산 전문가와 1:1 프라이빗 상담을 시작하세요. 고객님의 자산 상황에 맞는 최적의 포트폴리오를 제안해 드립니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-slate-400">
                <div className="w-8 border-t border-slate-600 mr-3"></div>
                <span>Premium Service</span>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <div className="w-8 border-t border-slate-600 mr-3"></div>
                <span>Legal & Tax Advisory</span>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <div className="w-8 border-t border-slate-600 mr-3"></div>
                <span>Immigration Support</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/3 p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">상담 신청서 작성</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Investment Type Selector */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <label className="block text-sm font-medium text-slate-700 mb-3">투자 방식 (Investment Type)</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md cursor-pointer border transition-all ${formData.investmentType === InvestmentType.DIRECT ? 'bg-slate-800 text-white border-slate-800 shadow-md' : 'bg-white text-slate-600 border-slate-300 hover:border-slate-400'}`}>
                  <input 
                    type="radio" 
                    name="investmentType" 
                    value={InvestmentType.DIRECT}
                    checked={formData.investmentType === InvestmentType.DIRECT}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span className="font-medium">{InvestmentType.DIRECT}</span>
                </label>
                <label className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md cursor-pointer border transition-all ${formData.investmentType === InvestmentType.FUNDING ? 'bg-amber-500 text-white border-amber-500 shadow-md' : 'bg-white text-slate-600 border-slate-300 hover:border-slate-400'}`}>
                  <input 
                    type="radio" 
                    name="investmentType" 
                    value={InvestmentType.FUNDING}
                    checked={formData.investmentType === InvestmentType.FUNDING}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span className="font-medium">{InvestmentType.FUNDING}</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">성함 (Name)</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">연락처 (Phone)</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">이메일 (Email)</label>
              <input 
                type="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                placeholder="example@email.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">관심 지역 (Region)</label>
                <select 
                  name="region" 
                  value={formData.region} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors bg-white"
                >
                  <option value="">지역 선택</option>
                  {REGION_DATA.map(r => (
                    <option key={r.id} value={r.id}>{r.titleKo}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">투자 예산 (Budget)</label>
                <select 
                  name="budget" 
                  value={formData.budget} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors bg-white"
                >
                  <option value="">예산 범위 선택</option>
                  {BUDGET_OPTIONS.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">추가 문의사항 (Message)</label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors resize-none"
                placeholder="특별히 찾으시는 매물 조건이나 궁금한 점을 적어주세요."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  <span>처리 중...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>상담 신청하기</span>
                </>
              )}
            </button>
            <p className="text-xs text-center text-slate-400 mt-4">
              신청 시 개인정보 수집 및 이용에 동의하는 것으로 간주됩니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;