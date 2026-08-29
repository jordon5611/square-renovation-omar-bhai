import React from 'react';
import { 
  Phone, Mail, MapPin, ShieldCheck, Award, 
  ArrowUpRight, FileText, CheckCircle2, Zap, Paintbrush, 
  Hammer, Grid, SquareCheck, Wrench
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  onNavigate: (page: string, filter?: string) => void;
  onOpenQuoteWizard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteWizard }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top badges banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-slate-800 text-center md:text-left">
          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.footer.decennialTitle}</h4>
              <p className="text-[11px] text-slate-400">{t.footer.decennialDesc}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.footer.allTradesTitle}</h4>
              <p className="text-[11px] text-slate-400">{t.footer.allTradesDesc}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.footer.valuesTitle}</h4>
              <p className="text-[11px] text-slate-400">{t.footer.valuesDesc}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.footer.quoteTitle}</h4>
              <p className="text-[11px] text-slate-400">{t.footer.quoteDesc}</p>
            </div>
          </div>
        </div>

        {/* 6 Trades Icons Bar */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="text-center mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              {t.footer.sixTradesIntegrated}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center gap-1.5">
              <Zap className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-bold uppercase text-slate-200">{t.hero.trades.electricity}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center gap-1.5">
              <Paintbrush className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-bold uppercase text-slate-200">{t.hero.trades.painting}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center gap-1.5">
              <Hammer className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-bold uppercase text-slate-200">{t.hero.trades.parquet}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center gap-1.5">
              <Grid className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-bold uppercase text-slate-200">{t.hero.trades.tiling}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center gap-1.5">
              <SquareCheck className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-bold uppercase text-slate-200">{t.hero.trades.placo}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center gap-1.5">
              <Wrench className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-bold uppercase text-slate-200">{t.hero.trades.plumbing}</span>
            </div>
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Logo BATI" 
                  className="h-11 w-auto max-w-[60px] object-contain drop-shadow-md"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-wider text-white">
                  BATI
                </span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-orange font-bold -mt-0.5">
                  Tous Travaux du Bâtiment
                </p>
                <p className="text-[9px] text-slate-400">SARL BATI 75</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="inline-block px-3 py-1.5 bg-brand-orange/20 border border-brand-orange/30 rounded-lg text-brand-orange text-xs font-bold uppercase tracking-wider">
              {t.common.valuesTagline}
            </div>
          </div>

          {/* Col 2: Nos Réalisations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              {t.footer.ourProjectsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate('realisations', 'haussmannien')}
                  className="hover:text-brand-orange transition-colors flex items-center gap-1 text-left"
                >
                  <span>{t.nav.haussmannien}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('realisations', 'contemporain')}
                  className="hover:text-brand-orange transition-colors flex items-center gap-1 text-left"
                >
                  <span>{t.nav.contemporain}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('realisations', 'familial')}
                  className="hover:text-brand-orange transition-colors flex items-center gap-1 text-left"
                >
                  <span>{t.nav.familial}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('realisations', 'loft')}
                  className="hover:text-brand-orange transition-colors flex items-center gap-1 text-left"
                >
                  <span>{t.nav.loft}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('realisations', 'maison')}
                  className="hover:text-brand-orange transition-colors flex items-center gap-1 text-left"
                >
                  <span>{t.nav.maison}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('carte')}
                  className="text-brand-orange hover:underline font-semibold flex items-center gap-1 pt-1"
                >
                  <span>{t.nav.mapProjects}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Société & Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              {t.footer.servicesGuidesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('societe')} className="hover:text-brand-orange transition-colors">
                  {t.nav.company} & {t.nav.ourMethod}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menuiserie')} className="hover:text-brand-orange transition-colors">
                  {t.woodworkPage.title}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('societe')} className="hover:text-brand-orange transition-colors">
                  {t.companyPage.domains[0].title} & {t.companyPage.domains[5].title}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('societe')} className="hover:text-brand-orange transition-colors">
                  {t.companyPage.domains[4].title} & {t.companyPage.domains[1].title}
                </button>
              </li>
              <li>
                <button onClick={onOpenQuoteWizard} className="hover:text-brand-orange transition-colors font-semibold text-brand-orange">
                  {t.common.freeQuoteBtn}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Exact Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block font-semibold">Adresse :</span>
                  <a 
                    href="https://share.google/zT9GhpQyW8vW8NbKf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange transition-colors"
                  >
                    <strong className="text-white hover:text-brand-orange">2 bis Dupont de l'eure</strong><br />
                    <span className="text-slate-300">75020 PARIS (Île-de-France) ↗</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block font-semibold">{t.common.directLine} :</span>
                  <a href="tel:0619128558" className="text-white font-bold text-sm hover:text-brand-orange transition-colors block">
                    06 19 12 85 58
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block font-semibold">E-mail :</span>
                  <a href="mailto:sarl.bati75@gmail.com" className="text-slate-300 hover:text-brand-orange transition-colors break-all">
                    sarl.bati75@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <button 
                  onClick={onOpenQuoteWizard}
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider py-2.5 px-3 rounded shadow transition-all"
                >
                  {t.common.freeQuoteBtn}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span>2 bis Dupont de l'eure, 75020 PARIS</span>
            <span>06 19 12 85 58</span>
            <span>Île-de-France</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
