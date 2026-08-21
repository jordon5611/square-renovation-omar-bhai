import React, { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  subtitle?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  subtitle,
  aspectRatio = 'aspect-[16/10]'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="relative group select-none rounded-2xl overflow-hidden shadow-luxury border border-gray-100 bg-gray-100">
      
      {/* Title Bar */}
      <div className="absolute top-4 left-4 z-20 bg-brand-navy/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-white pointer-events-none">
        <h4 className="text-xs font-bold uppercase tracking-wider">{title}</h4>
        {subtitle && <p className="text-[10px] text-slate-300">{subtitle}</p>}
      </div>

      {/* Main Container */}
      <div 
        ref={containerRef}
        className={`relative w-full ${aspectRatio} overflow-hidden cursor-ew-resize`}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* AFTER Image (Full background) */}
        <img 
          src={afterImage} 
          alt={`${title} - Après Rénovation`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        
        <div className="absolute bottom-4 right-4 z-10 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md pointer-events-none flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Après Rénovation
        </div>

        {/* BEFORE Image (Clipped container) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt={`${title} - Avant Rénovation`}
            className="absolute inset-0 w-full h-full object-cover max-w-none filter brightness-90 grayscale-[20%]"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />

          <div className="absolute bottom-4 left-4 z-10 bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md pointer-events-none">
            État Initial
          </div>
        </div>

        {/* Vertical Separator Line & Handle */}
        <div 
          className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-2xl pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-brand-slate shadow-xl border-2 border-brand-orange flex items-center justify-center pointer-events-none">
            <MoveHorizontal className="w-4 h-4 text-brand-orange" />
          </div>
        </div>

      </div>

      <div className="p-3 bg-white text-center text-xs text-gray-500 font-medium">
        Glissez la barre pour comparer la transformation avant / après
      </div>

    </div>
  );
};
