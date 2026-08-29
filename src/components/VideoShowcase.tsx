import React, { useState, useRef } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, 
  Video, Sparkles, ShieldCheck, CheckCircle2,
  HardHat, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface VideoShowcaseProps {
  onOpenQuoteWizard: () => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onOpenQuoteWizard }) => {
  const { isFrench } = useLanguage();
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!mainVideoRef.current) return;
    if (isPlaying) {
      mainVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      mainVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!mainVideoRef.current) return;
    mainVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!mainVideoRef.current) return;
    if (mainVideoRef.current.requestFullscreen) {
      mainVideoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest border border-brand-orange/30">
            <Video className="w-3.5 h-3.5" />
            <span>{isFrench ? 'IMMERSION SUR NOS CHANTIERS' : 'ON-SITE PROJECT IMMERSION'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold uppercase tracking-tight text-white">
            {isFrench 
              ? 'Découvrez nos Réalisations & Savoir-Faire en Vidéo' 
              : 'Watch Our Real Transformations & Craftsmanship in Action'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isFrench
              ? 'Plongez au cœur de nos chantiers en Île-de-France. Du gros œuvre aux finitions haut de gamme, découvrez la rigueur et l\'exigence de nos équipes.'
              : 'Step inside our active renovation projects in Île-de-France. From initial structural works to luxury finishes, explore our precision and standards.'}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Walkthrough Video Player (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                ref={mainVideoRef}
                src="/videos/bati-projet-realisation.mp4"
                playsInline
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Play / Pause Center Overlay Button */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group/btn"
                  aria-label="Lire la vidéo"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center shadow-luxury transform group-hover/btn:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1 fill-white" />
                  </div>
                  <span className="mt-3 text-xs uppercase font-bold tracking-widest text-white drop-shadow">
                    {isFrench ? 'Lancer la visite de chantier' : 'Play Project Walkthrough'}
                  </span>
                </button>
              )}

              {/* Top Badge */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-brand-orange" />
                <span>{isFrench ? 'Chantier Réalisé • Île-de-France' : 'Completed Project • Île-de-France'}</span>
              </div>

              {/* Controls Bar (Visible when playing or on hover) */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={togglePlay} 
                      className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button 
                      onClick={toggleMute} 
                      className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                  <button 
                    onClick={toggleFullscreen} 
                    className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Video Footer Caption */}
            <div className="p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  {isFrench ? 'Rénovation Complète Clé en Main' : 'Turnkey Full Property Renovation'}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isFrench 
                    ? 'Supervision globale : Électricité, Placo, Peinture, Parquet et Plomberie' 
                    : 'Complete trade management: Electrical, Plastering, Painting, Flooring & Plumbing'}
                </p>
              </div>
              <button
                onClick={onOpenQuoteWizard}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider px-4 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>{isFrench ? 'Projet similaire' : 'Similar Project'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Secondary Live Action Loop & Commitments (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Action Autoplay Loop Card */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider">
                <HardHat className="w-4 h-4" />
                <span>{isFrench ? 'Nos Artisans en Action' : 'Our Craftsmen at Work'}</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-800">
                <video
                  src="/videos/bati-travaux-artisans.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-white text-[11px] font-bold">
                  {isFrench ? 'Travaux de second œuvre & finitions' : 'Finishing & technical works'}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {isFrench
                  ? 'Nos équipes interviennent avec rigueur et précision sur l\'ensemble des corps de métiers pour garantir un résultat durable et conforme aux normes en vigueur.'
                  : 'Our dedicated trade teams work with precision across all specialties to deliver lasting quality conforming to the highest French standards.'}
              </p>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-brand-orange text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isFrench ? 'Garantie Décennale' : '10-Year Warranty'}</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {isFrench ? 'Assurance AXA BTP sur tous nos chantiers' : 'Comprehensive French insurance coverage'}
                </p>
              </div>

              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-brand-orange text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isFrench ? 'Planning Garanti' : 'On-Time Delivery'}</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {isFrench ? 'Engagement sur délais avec suivi régulier' : 'Contractually committed milestone calendar'}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
