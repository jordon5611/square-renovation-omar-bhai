import React from 'react';
import { 
  Building2, Phone, 
  Zap, Paintbrush, Hammer, Grid, SquareCheck, Wrench
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface CompanyPageProps {
  onOpenQuoteWizard: () => void;
  onNavigate?: (page: string) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onOpenQuoteWizard }) => {
  const { t } = useLanguage();

  const domainIcons = [Zap, Paintbrush, Hammer, Grid, SquareCheck, Wrench];

  return (
    <div className="pt-24 pb-20 space-y-20">
      
      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80" 
            alt="BATI Société Bâtiment Île-de-France" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            {t.companyPage.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            {t.companyPage.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.companyPage.subtitle}
          </p>
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/50 border border-amber-400/40 text-amber-400 font-bold text-xs uppercase tracking-widest">
            {t.common.valuesTagline}
          </div>
        </div>
      </section>

      {/* 1. Notre Vision & Valeurs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              {t.companyPage.philosophyTag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              {t.companyPage.philosophyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {t.companyPage.desc1}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {t.companyPage.desc2}
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-brand-orange font-heading">{t.companyPage.statTrades}</div>
                <div className="text-xs text-gray-600 font-semibold">{t.companyPage.statTradesLabel}</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-brand-slate font-heading">{t.companyPage.statQuotes}</div>
                <div className="text-xs text-gray-600 font-semibold">{t.companyPage.statQuotesLabel}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1600585155433-4f96440db7f9?auto=format&fit=crop&w=1000&q=80" 
              alt="Travaux Bâtiment Île-de-France"
              className="w-full h-[420px] object-cover rounded-2xl shadow-luxury border border-gray-100" 
            />
          </div>
        </div>
      </section>

      {/* 2. Nos 6 Corps de métiers */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              {t.companyPage.domainsTag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              {t.companyPage.domainsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.companyPage.domains.map((dom, idx) => {
              const Icon = domainIcons[idx] || Zap;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold uppercase text-brand-dark">{dom.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {dom.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Call to action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark">
          {t.companyPage.ctaTitle}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          {t.companyPage.ctaDesc}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenQuoteWizard}
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded-xl shadow-md transition-all"
          >
            {t.companyPage.ctaBtn}
          </button>
          <a
            href="tel:0619128558"
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-900 text-white text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>{t.companyPage.ctaCall}</span>
          </a>
        </div>
      </section>

    </div>
  );
};
