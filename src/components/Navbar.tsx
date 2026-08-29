import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, ShieldCheck, ChevronDown, 
  Building2, CheckCircle2, Award, ArrowRight,
  FileText
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, filter?: string) => void;
  onOpenQuoteWizard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuoteWizard }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [realisationsDropdownOpen, setRealisationsDropdownOpen] = useState(false);
  const [societeDropdownOpen, setSocieteDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string, filter?: string) => {
    onNavigate(page, filter);
    setMobileMenuOpen(false);
    setRealisationsDropdownOpen(false);
    setSocieteDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* 1. TOP UTILITY MICRO-BAR (Desktop) */}
      <div className="hidden lg:block bg-slate-950 text-slate-300 border-b border-slate-800/80 text-[11px] font-medium py-1.5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Info Badges */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>Île-de-France & Paris (75)</span>
            </div>
            <span className="text-slate-700">•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
              <span>Garantie Décennale • Tous Travaux du Bâtiment</span>
            </div>
          </div>

          {/* Right Direct Contact & Language */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:sarl.bati75@gmail.com" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              <span>sarl.bati75@gmail.com</span>
            </a>
            
            <span className="text-slate-700">•</span>

            <a 
              href="tel:0619128558" 
              className="flex items-center gap-1.5 font-bold text-white hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>06 19 12 85 58</span>
            </a>

            <span className="text-slate-700">•</span>

            {/* Language Switcher */}
            <LanguageToggle variant="dark" />
          </div>

        </div>
      </div>

      {/* 2. MAIN STICKY NAVIGATION BAR */}
      <div className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-slate-100 ${
        isScrolled ? 'shadow-md py-2.5' : 'shadow-sm py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group shrink-0"
            >
              <div className="h-11 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img 
                  src="/logo.png" 
                  alt="Logo BATI" 
                  className="h-11 w-auto max-w-[65px] object-contain drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-2xl tracking-wider text-brand-dark leading-none">
                    BATI
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange px-1.5 py-0.5 rounded bg-orange-50 border border-orange-200/60 hidden sm:inline">
                    BÂTIMENT
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-gray-500 font-semibold mt-0.5 whitespace-nowrap">
                  Rénovation Générale • Île-de-France
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links (Clean & Single-line) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-[13px] font-semibold transition-colors hover:text-brand-orange uppercase tracking-wider whitespace-nowrap ${
                  currentPage === 'home' ? 'text-brand-orange font-bold' : 'text-slate-700'
                }`}
              >
                {t.nav.home}
              </button>

              {/* Dropdown La Société */}
              <div 
                className="relative"
                onMouseEnter={() => setSocieteDropdownOpen(true)}
                onMouseLeave={() => setSocieteDropdownOpen(false)}
              >
                <button 
                  onClick={() => handleNavClick('societe')}
                  className={`flex items-center gap-1 text-[13px] font-semibold transition-colors hover:text-brand-orange uppercase tracking-wider whitespace-nowrap ${
                    currentPage === 'societe' ? 'text-brand-orange font-bold' : 'text-slate-700'
                  }`}
                >
                  {t.nav.company}
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {societeDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 py-2.5 mt-1 animate-fade-in z-50">
                    <button 
                      onClick={() => handleNavClick('societe')}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-orange-50 hover:text-brand-orange transition-colors flex items-center gap-2.5"
                    >
                      <Building2 className="w-4 h-4 text-brand-slate" />
                      {t.nav.aboutUs}
                    </button>
                    <button 
                      onClick={() => handleNavClick('societe')}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-orange-50 hover:text-brand-orange transition-colors flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-slate" />
                      {t.nav.ourMethod}
                    </button>
                    <button 
                      onClick={() => handleNavClick('societe')}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-orange-50 hover:text-brand-orange transition-colors flex items-center gap-2.5"
                    >
                      <Award className="w-4 h-4 text-brand-slate" />
                      {t.nav.insurance}
                    </button>
                  </div>
                )}
              </div>

              {/* Dropdown Réalisations */}
              <div 
                className="relative"
                onMouseEnter={() => setRealisationsDropdownOpen(true)}
                onMouseLeave={() => setRealisationsDropdownOpen(false)}
              >
                <button 
                  onClick={() => handleNavClick('realisations', 'all')}
                  className={`flex items-center gap-1 text-[13px] font-semibold transition-colors hover:text-brand-orange uppercase tracking-wider whitespace-nowrap ${
                    currentPage === 'realisations' ? 'text-brand-orange font-bold' : 'text-slate-700'
                  }`}
                >
                  {t.nav.portfolio}
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {realisationsDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 py-2.5 mt-1 animate-fade-in z-50">
                    <button 
                      onClick={() => handleNavClick('realisations', 'haussmannien')}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors flex items-center justify-between"
                    >
                      <span>{t.nav.haussmannien}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Cachet</span>
                    </button>
                    <button 
                      onClick={() => handleNavClick('realisations', 'contemporain')}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                    >
                      {t.nav.contemporain}
                    </button>
                    <button 
                      onClick={() => handleNavClick('realisations', 'familial')}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                    >
                      {t.nav.familial}
                    </button>
                    <button 
                      onClick={() => handleNavClick('realisations', 'loft')}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                    >
                      {t.nav.loft}
                    </button>
                    <button 
                      onClick={() => handleNavClick('realisations', 'maison')}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                    >
                      {t.nav.maison}
                    </button>
                    <button 
                      onClick={() => handleNavClick('realisations', 'pro')}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                    >
                      {t.nav.pro}
                    </button>
                    <div className="border-t border-gray-100 mt-1.5 pt-1.5">
                      <button 
                        onClick={() => handleNavClick('carte')}
                        className="w-full text-left px-4 py-2 text-xs font-semibold text-brand-orange hover:bg-orange-50 transition-colors flex items-center gap-1.5"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {t.nav.mapProjects}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Menuiserie */}
              <button 
                onClick={() => handleNavClick('menuiserie')}
                className={`text-[13px] font-semibold transition-colors hover:text-brand-orange uppercase tracking-wider whitespace-nowrap ${
                  currentPage === 'menuiserie' ? 'text-brand-orange font-bold' : 'text-slate-700'
                }`}
              >
                {t.nav.woodwork}
              </button>

              {/* Contact */}
              <button 
                onClick={() => handleNavClick('contact')}
                className={`text-[13px] font-semibold transition-colors hover:text-brand-orange uppercase tracking-wider whitespace-nowrap ${
                  currentPage === 'contact' ? 'text-brand-orange font-bold' : 'text-slate-700'
                }`}
              >
                {t.nav.contact}
              </button>
            </nav>

            {/* Desktop CTA Action Button */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <button 
                onClick={onOpenQuoteWizard}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-extrabold tracking-wider px-5 py-3 rounded-xl shadow-md transition-all hover:shadow-orange-glow active:scale-95 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{t.common.freeQuoteBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-80" />
              </button>
            </div>

            {/* Mobile Bar Right Controls */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle variant="light" />
              
              <a
                href="tel:0619128558"
                className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-brand-orange flex items-center justify-center active:scale-95 transition-transform"
                aria-label="Appeler"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 hover:text-brand-orange focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-5 pt-4 pb-8 space-y-4 animate-fade-in shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Full Language Switcher */}
          <div className="pb-3 border-b border-gray-100">
            <LanguageToggle variant="full" />
          </div>

          <div className="space-y-2">
            <button 
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left py-2.5 text-sm font-bold uppercase tracking-wider ${
                currentPage === 'home' ? 'text-brand-orange' : 'text-gray-800'
              }`}
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => handleNavClick('societe')}
              className={`block w-full text-left py-2.5 text-sm font-bold uppercase tracking-wider ${
                currentPage === 'societe' ? 'text-brand-orange' : 'text-gray-800'
              }`}
            >
              {t.nav.company} & {t.nav.ourMethod}
            </button>
            <button 
              onClick={() => handleNavClick('realisations', 'all')}
              className={`block w-full text-left py-2.5 text-sm font-bold uppercase tracking-wider ${
                currentPage === 'realisations' ? 'text-brand-orange' : 'text-gray-800'
              }`}
            >
              {t.portfolioPage.allCategories}
            </button>
            
            <div className="pl-4 space-y-2 border-l-2 border-orange-200 my-1">
              <button 
                onClick={() => handleNavClick('realisations', 'haussmannien')}
                className="block w-full text-left py-1 text-xs text-gray-600 hover:text-brand-orange"
              >
                • {t.nav.haussmannien}
              </button>
              <button 
                onClick={() => handleNavClick('realisations', 'contemporain')}
                className="block w-full text-left py-1 text-xs text-gray-600 hover:text-brand-orange"
              >
                • {t.nav.contemporain}
              </button>
              <button 
                onClick={() => handleNavClick('realisations', 'loft')}
                className="block w-full text-left py-1 text-xs text-gray-600 hover:text-brand-orange"
              >
                • {t.nav.loft}
              </button>
              <button 
                onClick={() => handleNavClick('carte')}
                className="block w-full text-left py-1 text-xs font-bold text-brand-orange"
              >
                • {t.nav.mapProjects}
              </button>
            </div>

            <button 
              onClick={() => handleNavClick('menuiserie')}
              className={`block w-full text-left py-2.5 text-sm font-bold uppercase tracking-wider ${
                currentPage === 'menuiserie' ? 'text-brand-orange' : 'text-gray-800'
              }`}
            >
              {t.nav.woodwork}
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left py-2.5 text-sm font-bold uppercase tracking-wider ${
                currentPage === 'contact' ? 'text-brand-orange' : 'text-gray-800'
              }`}
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a 
              href="tel:0619128558" 
              className="flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold tracking-wider"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>06 19 12 85 58</span>
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteWizard();
              }}
              className="w-full py-3.5 bg-brand-orange text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{t.common.freeQuoteBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
