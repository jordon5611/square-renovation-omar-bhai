import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { PROJECTS } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface InteractiveMapProps {
  onSelectProject?: (project: Project) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectProject }) => {
  const { t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Initialize map centered on Île-de-France
      const map = L.map(mapContainerRef.current, {
        center: [48.8625, 2.3350],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: false
      });

      // Clean free OpenStreetMap tiles with no watermarks and no API keys required
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear previous markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    // Custom Orange Marker Icon
    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="
          width: 32px; 
          height: 32px; 
          background: #EF7D00; 
          color: white; 
          border-radius: 50% 50% 50% 0; 
          transform: rotate(-45deg); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          border: 2px solid #ffffff; 
          box-shadow: 0 4px 10px rgba(239, 125, 0, 0.4);
          cursor: pointer;
        ">
          <div style="
            width: 10px; 
            height: 10px; 
            background: white; 
            border-radius: 50%; 
            transform: rotate(45deg);
          "></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    // Add markers for filtered projects
    filteredProjects.forEach(project => {
      const marker = L.marker([project.lat, project.lng], { icon: customIcon }).addTo(map);
      
      marker.on('click', () => {
        setActiveProject(project);
      });

      const popupContent = `
        <div style="width: 240px; font-family: sans-serif; padding: 12px; background: #ffffff;">
          <img src="${project.imageAfter}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; margin-bottom: 8px;" />
          <div style="font-size: 10px; color: #EF7D00; text-transform: uppercase; font-weight: bold; margin-bottom: 2px;">${project.categoryLabel} • ${project.location}</div>
          <div style="font-size: 13px; font-weight: bold; color: #1E293B; line-height: 1.3; margin-bottom: 4px;">${project.title}</div>
          <div style="font-size: 11px; color: #64748B; margin-bottom: 8px;">Surface : ${project.surface} m² | Durée : ${project.duration}</div>
          <button id="btn-project-${project.id}" style="width: 100%; background: #495D74; color: white; border: none; padding: 6px 0; border-radius: 4px; font-size: 11px; font-weight: bold; cursor: pointer;">
            ${t.map.discoverBtn}
          </button>
        </div>
      `;

      const popup = L.popup({ minWidth: 240 }).setContent(popupContent);
      marker.bindPopup(popup);

      marker.on('popupopen', () => {
        setTimeout(() => {
          const btn = document.getElementById(`btn-project-${project.id}`);
          if (btn) {
            btn.onclick = () => {
              if (onSelectProject) onSelectProject(project);
            };
          }
        }, 50);
      });

      markersRef.current.push(marker);
    });

  }, [filteredProjects, onSelectProject, t]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      
      {/* Map Control Bar */}
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-orange" />
            <h3 className="text-base font-bold text-brand-dark uppercase tracking-wider">
              {t.map.title}
            </h3>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            {t.map.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'all' 
                ? 'bg-brand-orange text-white shadow-sm' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {t.map.filters.all} ({PROJECTS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('haussmannien')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'haussmannien' 
                ? 'bg-brand-orange text-white shadow-sm' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {t.map.filters.haussmannien}
          </button>
          <button
            onClick={() => setSelectedCategory('contemporain')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'contemporain' 
                ? 'bg-brand-orange text-white shadow-sm' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {t.map.filters.contemporain}
          </button>
          <button
            onClick={() => setSelectedCategory('loft')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'loft' 
                ? 'bg-brand-orange text-white shadow-sm' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {t.map.filters.loft}
          </button>
        </div>
      </div>

      {/* Map Element */}
      <div className="relative">
        <div ref={mapContainerRef} className="w-full h-[520px] z-10" />

        {/* Active Project Floating Overlay on Desktop */}
        {activeProject && (
          <div className="hidden lg:block absolute bottom-6 left-6 z-20 w-80 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 p-4 animate-fade-in">
            <div className="relative h-32 rounded-lg overflow-hidden mb-3">
              <img 
                src={activeProject.imageAfter} 
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                {activeProject.location}
              </div>
            </div>
            <h4 className="text-xs font-bold text-brand-dark leading-snug line-clamp-2">
              {activeProject.title}
            </h4>
            <div className="flex items-center gap-3 text-[11px] text-gray-500 my-2">
              <span>📐 {activeProject.surface} m²</span>
              <span>⏱️ {activeProject.duration}</span>
              <span>📅 {activeProject.year}</span>
            </div>
            <button
              onClick={() => onSelectProject && onSelectProject(activeProject)}
              className="w-full mt-1 bg-brand-slate hover:bg-slate-700 text-white text-xs uppercase font-bold tracking-wider py-2 rounded flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{t.map.viewFullSheet}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>{t.map.coverageNote}</span>
        <span className="font-semibold text-brand-slate">{t.map.freeEstimateNote}</span>
      </div>

    </div>
  );
};
