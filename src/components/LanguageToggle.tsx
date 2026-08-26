import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  variant?: 'compact' | 'full';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'compact', className = '' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'full') {
    return (
      <div className={`flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl ${className}`}>
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
          <span>Français (FR)</span>
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
          <span>English (EN)</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center bg-slate-100/90 border border-slate-200/80 p-0.5 rounded-lg text-[11px] font-bold tracking-wider select-none ${className}`}>
      <div className="pl-1.5 pr-1 text-slate-400">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        className={`px-2 py-1 rounded-md transition-all flex items-center gap-1 ${
          language === 'fr'
            ? 'bg-white text-brand-dark shadow-sm font-extrabold border border-slate-200/60'
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
        className={`px-2 py-1 rounded-md transition-all flex items-center gap-1 ${
          language === 'en'
            ? 'bg-white text-brand-dark shadow-sm font-extrabold border border-slate-200/60'
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
