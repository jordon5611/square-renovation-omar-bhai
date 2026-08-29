import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CompanyPage } from './pages/CompanyPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { WoodworkPage } from './pages/WoodworkPage';
import { GuideEstimatorPage } from './pages/GuideEstimatorPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteWizardModal } from './components/QuoteWizardModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';
import { InteractiveMap } from './components/InteractiveMap';
import { ArrowUp } from 'lucide-react';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function AppContent() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all');
  const [quoteWizardOpen, setQuoteWizardOpen] = useState<boolean>(false);
  const [quoteWizardInitialData, setQuoteWizardInitialData] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string, filter?: string) => {
    setCurrentPage(page);
    if (filter) {
      setPortfolioFilter(filter);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteWizard = (initialData?: any) => {
    setQuoteWizardInitialData(initialData || null);
    setQuoteWizardOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-brand-orange selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteWizard={() => handleOpenQuoteWizard()}
      />

      {/* Main Routed Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteWizard={handleOpenQuoteWizard}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        )}

        {currentPage === 'societe' && (
          <CompanyPage 
            onOpenQuoteWizard={() => handleOpenQuoteWizard()} 
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'realisations' && (
          <PortfolioPage 
            initialFilter={portfolioFilter}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenQuoteWizard={() => handleOpenQuoteWizard()}
          />
        )}

        {currentPage === 'carte' && (
          <div className="pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h1 className="text-3xl font-bold uppercase text-brand-dark">
                {t.nav.mapProjects}
              </h1>
              <p className="text-xs text-gray-500">
                {t.map.subtitle}
              </p>
            </div>
            <InteractiveMap onSelectProject={(proj) => setSelectedProject(proj)} />
          </div>
        )}

        {currentPage === 'menuiserie' && (
          <WoodworkPage onOpenQuoteWizard={() => handleOpenQuoteWizard()} />
        )}

        {currentPage === 'guide' && (
          <GuideEstimatorPage onOpenQuoteWizard={handleOpenQuoteWizard} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onOpenQuoteWizard={() => handleOpenQuoteWizard()} />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenQuoteWizard={() => handleOpenQuoteWizard()}
      />

      {/* Interactive Modals */}
      <QuoteWizardModal 
        isOpen={quoteWizardOpen}
        onClose={() => setQuoteWizardOpen(false)}
        initialData={quoteWizardInitialData}
      />

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuoteWizard={() => {
          setSelectedProject(null);
          handleOpenQuoteWizard();
        }}
      />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-brand-navy hover:bg-brand-orange text-white rounded-full shadow-lg flex items-center justify-center transition-all animate-fade-in group"
          aria-label="Remonter en haut"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
