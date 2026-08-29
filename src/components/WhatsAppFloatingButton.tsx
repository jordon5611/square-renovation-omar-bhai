import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const WhatsAppFloatingButton: React.FC = () => {
  const { isFrench } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const phone = '33619128558'; // 06 19 12 85 58
  const defaultMessage = isFrench
    ? 'Bonjour BATI, je souhaite des informations ou un devis pour un projet de travaux en Île-de-France.'
    : 'Hello BATI, I would like information or a quote for a renovation project in Île-de-France.';
  
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Pill Label (Desktop) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden md:flex items-center gap-2 px-3.5 py-2 bg-slate-900/95 text-white text-xs font-semibold rounded-full shadow-xl border border-slate-700/80 backdrop-blur-md transition-all duration-300 transform ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-90 translate-x-1'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        <span>{isFrench ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}</span>
      </a>

      {/* Main WhatsApp Circular Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="relative group w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Official SVG Icon */}
        <svg 
          className="w-7 h-7 fill-current transition-transform group-hover:scale-105" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.777.978-.953 1.179-.175.2-.351.225-.652.075-.301-.15-1.272-.469-2.424-1.496-.895-.799-1.5-1.786-1.675-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.636-.928-2.239-.244-.588-.492-.508-.678-.518-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.513 0 1.482 1.08 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.119.579-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.076-.126-.277-.201-.578-.351zM12.042 21.84c-1.802 0-3.567-.484-5.11-1.401l-.366-.217-3.798.996 1.013-3.702-.239-.38a9.79 9.79 0 0 1-1.503-5.195C2.039 6.518 6.526 2.03 12.043 2.03c2.671 0 5.182 1.04 7.071 2.929 1.888 1.888 2.928 4.399 2.928 7.07 0 5.419-4.488 9.907-10.005 9.907zM12.042 0C5.399 0 0 5.398 0 12.041c0 2.122.553 4.195 1.606 6.017L0 24l6.115-1.604a12.01 12.01 0 0 0 5.927 1.564h.005c6.643 0 12.042-5.399 12.042-12.042C24.089 5.398 18.685 0 12.042 0z"/>
        </svg>

        {/* Active Online Green Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
