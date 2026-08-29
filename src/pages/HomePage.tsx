import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';
import { TESTIMONIALS, FAQS } from '../data/testimonials';
import { Project } from '../types';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { InteractiveMap } from '../components/InteractiveMap';
import { 
  Award, ArrowRight, Sparkles, Hammer, ChevronRight,
  Star, Phone, Check, ChevronDown, Zap, Paintbrush, 
  Grid, SquareCheck, Wrench
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HomePageProps {
  onNavigate: (page: string, filter?: string) => void;
  onOpenQuoteWizard: (initialData?: any) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteWizard,
  onSelectProject
}) => {
  const { t } = useLanguage();
  const [selectedSliderId, setSelectedSliderId] = useState<string>('electricite-tableau-normes-paris');
  const heroBeforeAfter = PROJECTS.find(p => p.id === selectedSliderId) || PROJECTS[0];

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-32 sm:pt-36 pb-20 bg-slate-950 overflow-hidden">
        {/* Luxury Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85" 
            alt="Rénovation Bâtiment Île-de-France - BATI"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8">
          
          {/* Badge & Values */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs uppercase tracking-widest font-semibold text-brand-orange animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            {t.hero.badge}
          </div>

          {/* Main Title */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight uppercase text-white leading-tight">
              {t.hero.titleStart} <span className="text-brand-orange">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-widest font-bold text-amber-400 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-amber-400/30">
              <span>{t.common.valuesTagline}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteWizard()}
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all hover:shadow-orange-glow active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{t.hero.ctaQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:0619128558"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>06 19 12 85 58</span>
            </a>
          </div>

          {/* 6 Trades Mini Strip */}
          <div className="pt-8 grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-4xl mx-auto border-t border-white/10 text-center">
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Zap className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">{t.hero.trades.electricity}</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Paintbrush className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">{t.hero.trades.painting}</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Hammer className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">{t.hero.trades.parquet}</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Grid className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">{t.hero.trades.tiling}</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <SquareCheck className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">{t.hero.trades.placo}</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Wrench className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">{t.hero.trades.plumbing}</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PHILOSOPHY & ESSENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
              <Award className="w-4 h-4" />
              {t.philosophy.tag}
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold uppercase text-brand-dark tracking-tight leading-tight">
              {t.philosophy.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t.philosophy.description}
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-gray-700">
                  {t.philosophy.bullet1}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-gray-700">
                  {t.philosophy.bullet2}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-gray-700">
                  {t.philosophy.bullet3}
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => onNavigate('societe')}
                className="bg-brand-slate hover:bg-slate-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3.5 rounded-lg shadow-sm transition-all flex items-center gap-2"
              >
                <span>{t.philosophy.discoverBtn}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Before & After Feature Card */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedSliderId('electricite-tableau-normes-paris')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  selectedSliderId === 'electricite-tableau-normes-paris'
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Tableau Électrique NF C 15-100</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedSliderId('haussmann-avenue-montaigne')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  selectedSliderId === 'haussmann-avenue-montaigne'
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Rénovation Appartement</span>
              </button>
            </div>

            <BeforeAfterSlider
              beforeImage={heroBeforeAfter.imageBefore}
              afterImage={heroBeforeAfter.imageAfter}
              title={heroBeforeAfter.title}
              subtitle={`${heroBeforeAfter.location} • ${heroBeforeAfter.duration}`}
            />
          </div>

        </div>
      </section>

      {/* 3. EXPERTISE & SERVICES CATEGORIES */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              {t.services.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              {t.services.title}
            </h2>
            <p className="text-xs text-gray-500">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-luxury transition-all border border-gray-200/80 flex flex-col justify-between group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white font-bold text-sm uppercase tracking-wide">
                    {service.title}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="space-y-1.5 pt-2 border-t border-gray-100">
                      {service.trades.slice(0, 3).map((tItem, idx) => (
                        <div key={idx} className="text-[11px] text-gray-500 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                          {tItem}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('realisations', service.id === 'atelier-menuiserie' ? 'all' : service.id)}
                    className="w-full mt-4 py-2.5 border border-slate-200 hover:border-brand-orange hover:bg-orange-50/50 text-brand-slate hover:text-brand-orange text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{t.services.viewProjects}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE 6-STEP METHOD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            {t.method.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
            {t.method.title}
          </h2>
          <p className="text-xs text-gray-500">
            {t.method.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.method.steps.map((item, i) => (
            <div 
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-brand-orange/50 transition-all space-y-3 relative group"
            >
              <div className="text-3xl font-extrabold font-heading text-brand-orange/30 group-hover:text-brand-orange transition-colors">
                {item.step}
              </div>
              <h4 className="text-sm font-bold uppercase text-brand-dark tracking-wide">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE MAP OF PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <InteractiveMap onSelectProject={onSelectProject} />
      </section>

      {/* 6. TESTIMONIALS & REVIEWS */}
      <section className="bg-slate-50 py-16 sm:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              {t.testimonials.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              {t.testimonials.title}
            </h2>
            <div className="flex items-center justify-center gap-1.5 text-amber-500 text-sm font-bold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 ml-1">{t.testimonials.verifiedScore}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testi) => (
              <div 
                key={testi.id}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 italic leading-relaxed">
                    « {testi.quote} »
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs font-bold text-brand-dark">{testi.author}</div>
                  <div className="text-[11px] text-brand-slate font-medium">{testi.location}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{testi.projectType}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            {t.faq.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <details 
              key={idx}
              className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer"
            >
              <summary className="flex items-center justify-between text-xs sm:text-sm font-bold text-brand-dark">
                <span>{faq.question}</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-xs text-gray-600 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 8. FINAL BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold uppercase tracking-tight text-white">
              {t.ctaBanner.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.ctaBanner.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteWizard()}
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all hover:shadow-orange-glow active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{t.ctaBanner.quoteBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:0619128558"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>06 19 12 85 58</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
