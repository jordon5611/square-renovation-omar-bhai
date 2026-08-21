import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Calculator, ChevronDown, 
  Building2, Hammer, MapPin, Award, CheckCircle2,
  FileText
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, filter?: string) => void;
  onOpenQuoteWizard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuoteWizard }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [realisationsDropdownOpen, setRealisationsDropdownOpen] = useState(false);
  const [societeDropdownOpen, setSocieteDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-white py-3.5 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="h-11 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                src="/logo.png" 
                alt="MR ZAHID - Bâtiment Paris" 
                className="h-11 w-auto max-w-[70px] object-contain drop-shadow-sm"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-wider text-brand-dark">MR ZAHID</span>
                <span className="font-heading font-light text-sm tracking-widest text-brand-orange hidden sm:inline">• BÂTIMENT</span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-semibold -mt-1">
                Tous Travaux du Bâtiment • Paris & IDF
              </p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7">
            <button 
              onClick={() => handleNavClick('home')}
              className={`text-sm font-medium transition-colors hover:text-brand-orange uppercase tracking-wider ${
                currentPage === 'home' ? 'text-brand-orange font-semibold' : 'text-gray-700'
              }`}
            >
              Accueil
            </button>

            {/* Dropdown La Société */}
            <div 
              className="relative"
              onMouseEnter={() => setSocieteDropdownOpen(true)}
              onMouseLeave={() => setSocieteDropdownOpen(false)}
            >
              <button 
                onClick={() => handleNavClick('societe')}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-orange uppercase tracking-wider ${
                  currentPage === 'societe' ? 'text-brand-orange font-semibold' : 'text-gray-700'
                }`}
              >
                L'Entreprise
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {societeDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 mt-1 animate-fade-in">
                  <button 
                    onClick={() => handleNavClick('societe')}
                    className="w-full text-left px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-orange-50 hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <Building2 className="w-4 h-4 text-brand-slate" />
                    Qui sommes-nous ?
                  </button>
                  <button 
                    onClick={() => handleNavClick('societe')}
                    className="w-full text-left px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-orange-50 hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-slate" />
                    Nos Engagements & Valeurs
                  </button>
                  <button 
                    onClick={() => handleNavClick('societe')}
                    className="w-full text-left px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-orange-50 hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <Award className="w-4 h-4 text-brand-slate" />
                    Garantie Décennale & Assurances
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
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-orange uppercase tracking-wider ${
                  currentPage === 'realisations' ? 'text-brand-orange font-semibold' : 'text-gray-700'
                }`}
              >
                Réalisations
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {realisationsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-xl border border-gray-100 py-2 mt-1 animate-fade-in">
                  <button 
                    onClick={() => handleNavClick('realisations', 'haussmannien')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors flex items-center justify-between"
                  >
                    <span>Appartements Haussmanniens</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Cachet & Staff</span>
                  </button>
                  <button 
                    onClick={() => handleNavClick('realisations', 'contemporain')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                  >
                    Appartements Contemporains
                  </button>
                  <button 
                    onClick={() => handleNavClick('realisations', 'familial')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                  >
                    Appartements Familiaux
                  </button>
                  <button 
                    onClick={() => handleNavClick('realisations', 'loft')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                  >
                    Lofts & Espaces Atypiques
                  </button>
                  <button 
                    onClick={() => handleNavClick('realisations', 'maison')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                  >
                    Maisons & Extensions
                  </button>
                  <button 
                    onClick={() => handleNavClick('realisations', 'pro')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                  >
                    Bureaux & Locaux Professionnels
                  </button>
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button 
                      onClick={() => handleNavClick('carte')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-brand-orange hover:bg-orange-50 transition-colors flex items-center gap-1.5"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Carte de nos chantiers à Paris
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Atelier de Menuiserie */}
            <button 
              onClick={() => handleNavClick('menuiserie')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-brand-orange uppercase tracking-wider ${
                currentPage === 'menuiserie' ? 'text-brand-orange font-semibold' : 'text-gray-700'
              }`}
            >
              <Hammer className="w-3.5 h-3.5 text-brand-orange" />
              Menuiserie & Parquet
            </button>

            {/* Guide & Simulateur */}
            <button 
              onClick={() => handleNavClick('guide')}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-orange uppercase tracking-wider ${
                currentPage === 'guide' ? 'text-brand-orange font-semibold' : 'text-gray-700'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-brand-slate" />
              Guide Prix m²
            </button>

            {/* Contact */}
            <button 
              onClick={() => handleNavClick('contact')}
              className={`text-sm font-medium transition-colors hover:text-brand-orange uppercase tracking-wider ${
                currentPage === 'contact' ? 'text-brand-orange font-semibold' : 'text-gray-700'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Quick Actions (Phone & CTA Quote) */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:0619128558" 
              className="flex items-center gap-2 text-xs font-bold text-brand-slate hover:text-brand-orange transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-brand-orange">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block font-normal uppercase">Ligne directe</span>
                <span className="font-extrabold text-sm text-brand-dark">06 19 12 85 58</span>
              </div>
            </a>

            <button 
              onClick={onOpenQuoteWizard}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider px-4 py-2.5 rounded-md shadow-sm transition-all hover:shadow-orange-glow active:scale-95 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Devis Gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:0619128558"
              className="w-9 h-9 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center"
              aria-label="Appeler"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button 
              onClick={onOpenQuoteWizard}
              className="bg-brand-orange text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1.5 rounded"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-brand-orange focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-2xl">
          <button 
            onClick={() => handleNavClick('home')}
            className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-brand-orange"
          >
            Accueil
          </button>
          <button 
            onClick={() => handleNavClick('societe')}
            className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-brand-orange"
          >
            L'Entreprise & Nos Engagements
          </button>
          <button 
            onClick={() => handleNavClick('realisations', 'all')}
            className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-brand-orange"
          >
            Toutes nos Réalisations
          </button>
          <div className="pl-4 space-y-1.5 border-l-2 border-orange-200">
            <button 
              onClick={() => handleNavClick('realisations', 'haussmannien')}
              className="block w-full text-left py-1 text-xs text-gray-600 hover:text-brand-orange"
            >
              • Appartements Haussmanniens
            </button>
            <button 
              onClick={() => handleNavClick('realisations', 'contemporain')}
              className="block w-full text-left py-1 text-xs text-gray-600 hover:text-brand-orange"
            >
              • Appartements Contemporains
            </button>
            <button 
              onClick={() => handleNavClick('realisations', 'loft')}
              className="block w-full text-left py-1 text-xs text-gray-600 hover:text-brand-orange"
            >
              • Lofts & Espaces Atypiques
            </button>
            <button 
              onClick={() => handleNavClick('carte')}
              className="block w-full text-left py-1 text-xs font-semibold text-brand-orange"
            >
              • Carte de nos Chantiers à Paris
            </button>
          </div>
          <button 
            onClick={() => handleNavClick('menuiserie')}
            className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-brand-orange flex items-center gap-1.5"
          >
            <Hammer className="w-4 h-4 text-brand-orange" />
            Menuiserie, Parquet & Agencements
          </button>
          <button 
            onClick={() => handleNavClick('guide')}
            className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-brand-orange flex items-center gap-1.5"
          >
            <Calculator className="w-4 h-4 text-brand-slate" />
            Guide Prix m² & Simulateur
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-brand-orange"
          >
            Contact & Devis
          </button>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a 
              href="tel:0619128558" 
              className="flex items-center justify-center gap-2 py-2.5 bg-gray-100 rounded text-sm font-bold text-brand-dark"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              06 19 12 85 58
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteWizard();
              }}
              className="w-full py-3 bg-brand-orange text-white rounded text-sm font-bold uppercase tracking-wider shadow-sm"
            >
              Demande de Devis Gratuite
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
