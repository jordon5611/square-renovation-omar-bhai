import React from 'react';
import { CostEstimator } from '../components/CostEstimator';
import { Calculator, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface GuideEstimatorPageProps {
  onOpenQuoteWizard: (initialData?: any) => void;
}

export const GuideEstimatorPage: React.FC<GuideEstimatorPageProps> = ({ onOpenQuoteWizard }) => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 space-y-20">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80" 
            alt="Guide Rénovation Île-de-France" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            {t.guidePage.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            {t.guidePage.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.guidePage.subtitle}
          </p>
        </div>
      </section>

      {/* 1. Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimator onOpenQuoteWizard={onOpenQuoteWizard} />
      </section>

      {/* 2. Detailed Price Matrix Guide */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
            {t.guidePage.matrixTitle}
          </h2>
          <p className="text-xs text-gray-500">
            {t.guidePage.matrixSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tier 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{t.guidePage.tier1.tag}</div>
              <h3 className="text-lg font-bold text-brand-dark uppercase">{t.guidePage.tier1.title}</h3>
              <div className="text-2xl font-extrabold text-brand-slate mt-2">
                {t.guidePage.tier1.price}
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {t.guidePage.tier1.desc}
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              {t.guidePage.tier1.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">✓ {f}</li>
              ))}
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-brand-orange shadow-luxury space-y-4 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow">
              {t.guidePage.tier2.badge}
            </div>
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">{t.guidePage.tier2.tag}</div>
              <h3 className="text-lg font-bold text-brand-dark uppercase">{t.guidePage.tier2.title}</h3>
              <div className="text-2xl font-extrabold text-brand-orange mt-2">
                {t.guidePage.tier2.price}
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {t.guidePage.tier2.desc}
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              {t.guidePage.tier2.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">✓ {f}</li>
              ))}
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{t.guidePage.tier3.tag}</div>
              <h3 className="text-lg font-bold text-brand-dark uppercase">{t.guidePage.tier3.title}</h3>
              <div className="text-2xl font-extrabold text-brand-navy mt-2">
                {t.guidePage.tier3.price}
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {t.guidePage.tier3.desc}
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              {t.guidePage.tier3.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">✓ {f}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 3. Factors influencing price */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold uppercase text-brand-dark">
            {t.guidePage.factorsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-700">
            {t.guidePage.factors.map((factor, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
                <h4 className="font-bold text-sm text-brand-dark">{factor.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl font-bold uppercase text-brand-dark">
          {t.guidePage.bottomCtaTitle}
        </h3>
        <button
          onClick={() => onOpenQuoteWizard()}
          className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <span>{t.guidePage.bottomCtaBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
