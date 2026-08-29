import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface LanguageToggleProps {
  variant?: 'compact' | 'full' | 'dark' | 'light';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'compact', className = '' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'full') {
    return (
      <div className={`flex items-center gap-2 p-1 bg-slate-100 rounded-xl ${className}`}>
        <button
          onClick={() => setLanguage('fr')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
            language === 'fr'
              ? 'bg-brand-orange text-white shadow-sm ring-1 ring-brand-orange'
              : 'text-gray-600 hover:text-brand-dark hover:bg-white/60'
          }`}
          aria-label="Passer en français"
        >
          <span className="text-sm">🇫🇷</span>
          <span>FR</span>
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
            language === 'en'
              ? 'bg-brand-orange text-white shadow-sm ring-1 ring-brand-orange'
              : 'text-gray-600 hover:text-brand-dark hover:bg-white/60'
          }`}
          aria-label="Switch to English"
        >
          <span className="text-sm">🇬🇧</span>
          <span>EN</span>
        </button>
      </div>
    );
  }

  // Dark variant for top bar
  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center bg-slate-900 border border-slate-800 p-0.5 rounded-full text-[11px] font-semibold tracking-wider select-none ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('fr')}
          className={`px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 text-[10px] uppercase ${
            language === 'fr'
              ? 'bg-brand-orange text-white font-bold shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
          aria-label="Français"
        >
          <span>🇫🇷</span>
          <span>FR</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 text-[10px] uppercase ${
            language === 'en'
              ? 'bg-brand-orange text-white font-bold shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
          aria-label="English"
        >
          <span>🇬🇧</span>
          <span>EN</span>
        </button>
      </div>
    );
  }

  // Clean light variant
  return (
    <div className={`inline-flex items-center bg-slate-100 border border-slate-200 p-0.5 rounded-full text-[11px] font-semibold tracking-wider select-none ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 text-[11px] uppercase ${
          language === 'fr'
            ? 'bg-white text-brand-dark font-extrabold shadow-sm'
            : 'text-slate-500 hover:text-brand-dark'
        }`}
        aria-label="Français"
      >
        <span>🇫🇷</span>
        <span>FR</span>
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 text-[11px] uppercase ${
          language === 'en'
            ? 'bg-white text-brand-dark font-extrabold shadow-sm'
            : 'text-slate-500 hover:text-brand-dark'
        }`}
        aria-label="English"
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
};
