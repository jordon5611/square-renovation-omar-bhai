import React from 'react';
import { 
  Building2, Phone, 
  Zap, Paintbrush, Hammer, Grid, SquareCheck, Wrench
} from 'lucide-react';

interface CompanyPageProps {
  onOpenQuoteWizard: () => void;
  onNavigate?: (page: string) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onOpenQuoteWizard }) => {
  return (
    <div className="pt-24 pb-20 space-y-20">
      
      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80" 
            alt="BATI Société Bâtiment Île-de-France" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            ENTREPRISE GÉNÉRALE DE BÂTIMENT EN ÎLE-DE-FRANCE
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            BATI - TOUS TRAVAUX DU BÂTIMENT
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Spécialistes de la rénovation d’appartements, de maisons et de locaux professionnels en Île-de-France. Une structure réactive avec tous les corps d'état intégrés.
          </p>
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/50 border border-amber-400/40 text-amber-400 font-bold text-xs uppercase tracking-widest">
            Réactivité • Qualité • Fiabilité
          </div>
        </div>
      </section>

      {/* 1. Notre Vision & Valeurs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              NOTRE PHILOSOPHIE
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              Une entreprise de confiance pour tous vos travaux
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Implantée au <strong>2 bis Dupont de l'eure, 75020 Paris</strong>, l'entreprise <strong>BATI (SARL BATI 75)</strong> a bâti sa réputation sur l'exigence de la finition, le respect des délais convenus et une relation client directe sans intermédiaire.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Que ce soit pour une remise aux normes électrique complète, des travaux de plomberie et sanitaires, la pose de parquets massifs ou stratifiés, des cloisons placo ou une mise en peinture intégrale, nous vous garantissons un travail soigné.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-brand-orange font-heading">6</div>
                <div className="text-xs text-gray-600 font-semibold">Corps de métiers intégrés</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-brand-slate font-heading">100%</div>
                <div className="text-xs text-gray-600 font-semibold">Devis gratuits & conseils</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" 
              alt="Travaux Bâtiment Île-de-France"
              className="w-full h-[420px] object-cover rounded-2xl shadow-luxury border border-gray-100" 
            />
          </div>
        </div>
      </section>

      {/* 2. Nos 6 Corps de métiers */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              SAVOIR-FAIRE MULTI-DISCIPLINAIRE
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              Nos 6 Domaines d'Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-brand-dark">1. Électricité</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mise en conformité tableau, passage de câbles, appareillages modernes, éclairages LED et raccordements sécurisés.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center">
                <Paintbrush className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-brand-dark">2. Peinture</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Préparation soignée des supports, ratissage, enduits de finition lisses et mise en peinture mate, satinée ou velours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center">
                <Hammer className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-brand-dark">3. Parquet</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pose de parquet massif, contrecollé, stratifié, ponçage de parquets anciens et vitrification haute résistance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center">
                <Grid className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-brand-dark">4. Carrelage</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pose de carrelage grand format, grès cérame, faïence murale de salle de bains et crédence de cuisine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center">
                <SquareCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-brand-dark">5. Placo</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Doublage thermique et acoustique, création de cloisons distributives, faux-plafonds et coffrages soignés.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-brand-dark">6. Plomberie</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Création et rénovation complète de salles d'eau, réseaux d'évacuation et d'alimentation, robinetterie et chauffe-eau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Call to action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark">
          Vous avez des travaux à réaliser en Île-de-France ?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Contactez directement BATI au <strong>06 19 12 85 58</strong> ou par e-mail à <strong>sarl.bati75@gmail.com</strong> pour convenir d'un rendez-vous sur place.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenQuoteWizard}
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded-xl shadow-md transition-all"
          >
            Demander un devis en ligne
          </button>
          <a
            href="tel:0619128558"
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-900 text-white text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Appeler le 06 19 12 85 58</span>
          </a>
        </div>
      </section>

    </div>
  );
};
