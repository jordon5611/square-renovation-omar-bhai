import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface PortfolioPageProps {
  initialFilter?: string;
  onSelectProject: (project: Project) => void;
  onOpenQuoteWizard: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ 
  initialFilter = 'all',
  onSelectProject,
  onOpenQuoteWizard 
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(
    (initialFilter as ProjectCategory) || 'all'
  );
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.portfolioPage.allCategories },
    { id: 'haussmannien', label: t.nav.haussmannien },
    { id: 'contemporain', label: t.nav.contemporain },
    { id: 'familial', label: t.nav.familial },
    { id: 'loft', label: t.nav.loft },
    { id: 'maison', label: t.nav.maison },
    { id: 'pro', label: t.nav.pro },
  ];

  const filteredProjects = PROJECTS.filter(project => {
    const matchCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchLoc = selectedLocation === 'all' || project.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchCategory && matchLoc;
  });

  return (
    <div className="pt-24 pb-20 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" 
            alt="Réalisations BATI Île-de-France" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            {t.portfolioPage.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            {t.portfolioPage.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.portfolioPage.subtitle}
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-orange text-white shadow-sm ring-1 ring-brand-orange'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Location Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-semibold uppercase">{t.portfolioPage.zoneLabel}</span>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-white border border-gray-300 text-xs font-semibold rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-brand-orange"
            >
              <option value="all">{t.portfolioPage.allZones}</option>
              <option value="Paris">Paris (75)</option>
              <option value="Hauts-de-Seine">Hauts-de-Seine (92)</option>
              <option value="Seine-Saint-Denis">Seine-Saint-Denis (93)</option>
              <option value="Val-de-Marne">Val-de-Marne (94)</option>
              <option value="Yvelines">Yvelines (78)</option>
            </select>
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-luxury transition-all border border-gray-200/80 flex flex-col justify-between group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={project.imageAfter} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 bg-brand-navy/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {project.location}
                </div>
                <div className="absolute top-3 right-3 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                  {project.categoryLabel}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <span>{t.portfolioPage.hoverDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold uppercase text-brand-dark group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold">📐 {project.surface} {t.common.sqm}</span>
                  <span className="font-semibold">⏱️ {project.duration}</span>
                  <span className="text-brand-orange font-bold">{t.common.viewDetails}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 space-y-4">
          <h3 className="text-xl font-bold uppercase text-brand-dark">
            {t.portfolioPage.ctaTitle}
          </h3>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            {t.portfolioPage.ctaDesc}
          </p>
          <button
            onClick={onOpenQuoteWizard}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded-xl shadow-sm transition-all"
          >
            {t.portfolioPage.ctaBtn}
          </button>
        </div>
      </section>

    </div>
  );
};
