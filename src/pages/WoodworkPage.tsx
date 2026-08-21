import React from 'react';
import { 
  Hammer, ShieldCheck, Palette, Ruler 
} from 'lucide-react';

interface WoodworkPageProps {
  onOpenQuoteWizard: () => void;
}

export const WoodworkPage: React.FC<WoodworkPageProps> = ({ onOpenQuoteWizard }) => {
  return (
    <div className="pt-24 pb-20 space-y-20">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=80" 
            alt="Atelier de Menuiserie Square" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Hammer className="w-3.5 h-3.5" />
            ATELIER SQUARE • ÉBÉNISTERIE D'ART
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            Notre Atelier de Menuiserie Sur-Mesure
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            L'alliance de l'artisanat français traditionnel et de la précision contemporaine pour créer des meubles intégrés uniques au millimètre près.
          </p>
        </div>
      </section>

      {/* 1. Presentation & Essences */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              SAVOIR-FAIRE UNIQUE
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight leading-tight">
              Pourquoi une menuiserie intégrée fait toute la différence ?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Dans les appartements parisiens, les surfaces sont précieuses et les murs rarement d'équerre. Notre atelier dédié fabrique des agencements sur-mesure qui épousent parfaitement les particularités de votre intérieur : sous-pentes, renfoncements, niches et grandes hauteurs sous plafond.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Ruler className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Relevé laser 3D :</strong> Prise de cotes millimétrique et plans 3D détaillés avec rendus photoréalistes.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Palette className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Finitions d'exception :</strong> Laques mates italiennes veloutées, chêne de fil, noyer d'Amérique et cannage naturel.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Quincaillerie haut de gamme :</strong> Coulisses et charnières invisibles avec amortisseurs intégrés garantis à vie.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Bibliothèque sur mesure"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" 
              alt="Cuisine de prestige"
              className="w-full h-64 object-cover rounded-2xl shadow-md mt-8"
            />
          </div>

        </div>
      </section>

      {/* 2. Ce que nous fabriquons */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              NOTRE CATALOGUE SUR-MESURE
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              Créations d’Ébénisterie pour votre Intérieur
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" 
                alt="Dressings sur-mesure" 
                className="w-full h-52 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-base font-bold uppercase text-brand-dark">Dressings & Suites Parentales</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Aménagements sur-mesure toute hauteur avec penderies basculantes, tiroirs pour montres/bijoux, éclairage LED intégré et portes miroirs teintés.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Bibliothèques monumentales" 
                className="w-full h-52 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-base font-bold uppercase text-brand-dark">Bibliothèques & Meubles TV</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Compositions murales majestueuses avec intégration discrète des câbles, rétroéclairage d'ambiance et niches décoratives en noyer.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" 
                alt="Cuisines d’architecte" 
                className="w-full h-52 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-base font-bold uppercase text-brand-dark">Cuisines d’Architecte</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Cuisines monoblocs avec îlots en marbre ou céramique Dekton, meubles sans poignées (gorges discrètes) et électroménager encastré Miele / Gaggenau.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark">
          Vous souhaitez intégrer des menuiseries sur-mesure à votre projet ?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Nos menuisiers étudient vos plans et conçoivent vos meubles sur-mesure dans le cadre de votre rénovation globale.
        </p>
        <div className="flex justify-center pt-2">
          <button
            onClick={onOpenQuoteWizard}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded-xl shadow-md transition-all"
          >
            Demander un chiffrage menuiserie
          </button>
        </div>
      </section>

    </div>
  );
};
