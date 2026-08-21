import React, { useState } from 'react';
import { Project } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { 
  X, MapPin, Clock, Sparkles, 
  CheckCircle, ArrowRight, Layers, ShieldCheck 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuoteWizard: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuoteWizard }) => {
  const [activeTab, setActiveTab] = useState<'slider' | 'gallery'>('slider');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-brand-navy text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              {project.categoryLabel} • {project.arrondissement}
            </div>
            <h3 className="text-lg sm:text-2xl font-heading font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors shrink-0 ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Key Specs Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-gray-700">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
              <div>
                <span className="text-[10px] uppercase text-gray-400 block font-semibold">Localisation</span>
                <span className="font-bold text-brand-slate">{project.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-brand-orange shrink-0" />
              <div>
                <span className="text-[10px] uppercase text-gray-400 block font-semibold">Surface Réhabilitée</span>
                <span className="font-bold text-brand-slate">{project.surface} m²</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-brand-orange shrink-0" />
              <div>
                <span className="text-[10px] uppercase text-gray-400 block font-semibold">Durée du Chantier</span>
                <span className="font-bold text-brand-slate">{project.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
              <div>
                <span className="text-[10px] uppercase text-gray-400 block font-semibold">Garanties</span>
                <span className="font-bold text-emerald-600">Décennale AXA</span>
              </div>
            </div>
          </div>

          {/* Tab buttons for View mode */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('slider')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'slider'
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Comparateur Avant / Après
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'gallery'
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Galerie Photos ({project.gallery.length})
              </button>
            </div>
          </div>

          {/* Media Tab Body */}
          {activeTab === 'slider' ? (
            <BeforeAfterSlider
              beforeImage={project.imageBefore}
              afterImage={project.imageAfter}
              title={project.title}
              subtitle={`${project.surface} m² • ${project.location}`}
            />
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedGalleryImage(img)}
                    className="h-44 rounded-xl overflow-hidden cursor-pointer group relative shadow-sm border border-gray-100"
                  >
                    <img 
                      src={img} 
                      alt={`Photo ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                      Agrandir
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Details and Scope */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            <div className="md:col-span-7 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                Le Projet & Le Défi Architectural
              </h4>
              <p className="text-xs leading-relaxed text-gray-600">
                {project.description}
              </p>
            </div>

            <div className="md:col-span-5 bg-orange-50/50 border border-orange-100 rounded-xl p-4 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Lots de Travaux Réalisés (TCE)
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-gray-500 text-center sm:text-left">
            Vous avez un projet similaire dans le <strong>{project.arrondissement}</strong> ?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenQuoteWizard();
            }}
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Demander une étude pour mon bien</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox for single gallery image */}
      {selectedGalleryImage && (
        <div 
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <img 
            src={selectedGalleryImage} 
            alt="Plein écran" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
          />
        </div>
      )}

    </div>
  );
};
