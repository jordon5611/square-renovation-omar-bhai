import React from 'react';
import { 
  Hammer, ShieldCheck, Palette, Ruler 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface WoodworkPageProps {
  onOpenQuoteWizard: () => void;
}

export const WoodworkPage: React.FC<WoodworkPageProps> = ({ onOpenQuoteWizard }) => {
  const { t } = useLanguage();

  const highlightIcons = [Ruler, Palette, ShieldCheck];

  return (
    <div className="pt-24 pb-20 space-y-20">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=80" 
            alt="Menuiserie BATI" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Hammer className="w-3.5 h-3.5" />
            {t.woodworkPage.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            {t.woodworkPage.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.woodworkPage.subtitle}
          </p>
        </div>
      </section>

      {/* 1. Presentation & Essences */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              {t.woodworkPage.savoirFaireTag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight leading-tight">
              {t.woodworkPage.savoirFaireTitle}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {t.woodworkPage.savoirFaireDesc}
            </p>

            <div className="space-y-3 pt-2">
              {t.woodworkPage.highlights.map((item, idx) => {
                const Icon = highlightIcons[idx] || Ruler;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs text-gray-700">
                      <strong>{item.title} :</strong> {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Bibliothèque sur mesure"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" 
              alt="Cuisine sur mesure"
              className="w-full h-64 object-cover rounded-2xl shadow-md mt-8"
            />
          </div>

        </div>
      </section>

      {/* 2. Ce que nous fabriquons */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              {t.woodworkPage.catalogueTag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              {t.woodworkPage.catalogueTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.woodworkPage.catalogueItems.map((item, idx) => {
              const images = [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
              ];
              return (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                  <img 
                    src={images[idx]} 
                    alt={item.title} 
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold uppercase text-brand-dark">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark">
          {t.woodworkPage.ctaTitle}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          {t.woodworkPage.ctaDesc}
        </p>
        <div className="flex justify-center pt-2">
          <button
            onClick={onOpenQuoteWizard}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded-xl shadow-md transition-all"
          >
            {t.woodworkPage.ctaBtn}
          </button>
        </div>
      </section>

    </div>
  );
};
