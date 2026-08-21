import React from 'react';
import { CostEstimator } from '../components/CostEstimator';
import { Calculator, ArrowRight } from 'lucide-react';

interface GuideEstimatorPageProps {
  onOpenQuoteWizard: (initialData?: any) => void;
}

export const GuideEstimatorPage: React.FC<GuideEstimatorPageProps> = ({ onOpenQuoteWizard }) => {
  return (
    <div className="pt-24 pb-20 space-y-20">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80" 
            alt="Guide Rénovation Paris" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            GUIDE PRIX AU M² • BARÈME OFFICIEL PARIS 2025 / 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            Estimez le Prix de Rénovation de votre Appartement à Paris
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fourchettes de prix réalistes, pièges à éviter, optimisation budgétaire et simulateur interactif pour réussir votre projet sans mauvaise surprise.
          </p>
        </div>
      </section>

      {/* 1. Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimator onOpenQuoteWizard={onOpenQuoteWizard} />
      </section>

      {/* 2. Detailed Price Matrix Guide */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
            Grille Tarifaire Moyenne au M² à Paris
          </h2>
          <p className="text-xs text-gray-500">
            Basée sur notre retour d'expérience de plus de 400 chantiers livrés dans la capitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Niveau 1</div>
              <h3 className="text-lg font-bold text-brand-dark uppercase">Rafraîchissement</h3>
              <div className="text-2xl font-extrabold text-brand-slate mt-2">
                900 € - 1 400 € <span className="text-xs font-normal text-gray-400">/ m²</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Idéal pour moderniser un bien en bon état général sans toucher aux réseaux lourds.
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center gap-2">✓ Ponçage & vitrification de parquet</li>
              <li className="flex items-center gap-2">✓ Peintures murs et plafonds 2 couches</li>
              <li className="flex items-center gap-2">✓ Remplacement appareillages électriques</li>
              <li className="flex items-center gap-2">✓ Remplacement robinetterie et vasques</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-brand-orange shadow-luxury space-y-4 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow">
              Le Plus Fréquent
            </div>
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">Niveau 2</div>
              <h3 className="text-lg font-bold text-brand-dark uppercase">Rénovation Complète</h3>
              <div className="text-2xl font-extrabold text-brand-orange mt-2">
                1 500 € - 2 400 € <span className="text-xs font-normal text-gray-400">/ m²</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Remise à neuf intégrale de l'appartement pour un confort thermique et phonique absolu.
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center gap-2">✓ Électricité complète aux normes NF C 15-100</li>
              <li className="flex items-center gap-2">✓ Plomberie neuve et création salles d'eau</li>
              <li className="flex items-center gap-2">✓ Cuisine d'architecte sur-mesure</li>
              <li className="flex items-center gap-2">✓ Restauration du staff et moulures</li>
              <li className="flex items-center gap-2">✓ Isolation acoustique plancher et cloisons</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Niveau 3</div>
              <h3 className="text-lg font-bold text-brand-dark uppercase">Rénovation Lourde</h3>
              <div className="text-2xl font-extrabold text-brand-navy mt-2">
                2 500 € - 3 500 €+ <span className="text-xs font-normal text-gray-400">/ m²</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Curage total du volume, reprise structurelle, menuiseries d'art et prestations d'exception.
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center gap-2">✓ Abattage murs porteurs avec IPN & BET</li>
              <li className="flex items-center gap-2">✓ Redistribution totale des pièces</li>
              <li className="flex items-center gap-2">✓ Climatisation réversible gainée discrète</li>
              <li className="flex items-center gap-2">✓ Marbres précieux et menuiseries d'art</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. Factors influencing price */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold uppercase text-brand-dark">
            Les 4 facteurs clés qui influencent votre devis à Paris
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-700">
            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <h4 className="font-bold text-sm text-brand-dark">1. L’état initial du bien</h4>
              <p className="text-gray-600 leading-relaxed">
                Un appartement resté dans son jus depuis 40 ans nécessite une réfection totale des sous-couches (enduits, canalisations en plomb, tableau électrique vétuste), augmentant le temps de préparation.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <h4 className="font-bold text-sm text-brand-dark">2. Les contraintes d’accès & d’immeuble</h4>
              <p className="text-gray-600 leading-relaxed">
                Le 5e étage sans ascenseur ou les cours pavées piétonnes à Paris impliquent des manutentions manuelles et des autorisations de bennes de voirie spécifiques.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <h4 className="font-bold text-sm text-brand-dark">3. Le niveau de gamme des fournitures</h4>
              <p className="text-gray-600 leading-relaxed">
                Entre un carrelage standard et un marbre calacatta découpé au laser, ou entre une robinetterie classique et du laiton brossé encastré, le prix des fournitures peut varier du simple au quintuple.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <h4 className="font-bold text-sm text-brand-dark">4. La part de menuiserie sur-mesure</h4>
              <p className="text-gray-600 leading-relaxed">
                L’intégration de meubles d’ébénisterie sur-mesure (dressings, bibliothèques monumentales, claustras) conçus dans notre atelier valorise considérablement le bien à la revente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl font-bold uppercase text-brand-dark">
          Prêt à formaliser le devis précis de votre appartement ?
        </h3>
        <button
          onClick={() => onOpenQuoteWizard()}
          className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <span>Lancer ma demande de devis en ligne</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
