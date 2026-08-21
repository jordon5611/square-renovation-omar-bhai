import React from 'react';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';
import { TESTIMONIALS, FAQS } from '../data/testimonials';
import { Project } from '../types';
import { CostEstimator } from '../components/CostEstimator';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { InteractiveMap } from '../components/InteractiveMap';
import { 
  Award, ArrowRight, Sparkles, Hammer, ChevronRight,
  Star, Phone, Check, ChevronDown, Zap, Paintbrush, 
  Grid, SquareCheck, Wrench
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, filter?: string) => void;
  onOpenQuoteWizard: (initialData?: any) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteWizard,
  onSelectProject
}) => {
  const heroBeforeAfter = PROJECTS[0];

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 bg-slate-950 overflow-hidden">
        {/* Luxury Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85" 
            alt="Rénovation Appartement Paris - MR ZAHID"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8">
          
          {/* Badge & Values */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs uppercase tracking-widest font-semibold text-brand-orange animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            MR ZAHID • TOUS TRAVAUX DU BÂTIMENT • PARIS & IDF
          </div>

          {/* Main Title */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight uppercase text-white leading-tight">
              Rénovation & Travaux du Bâtiment <span className="text-brand-orange">à Paris</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Spécialistes de la rénovation tout corps d'état d’appartements, maisons et locaux. Électricité, peinture, parquet, carrelage, placo et plomberie.
            </p>
            
            <div className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-widest font-bold text-amber-400 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-amber-400/30">
              <span>Réactivité</span>
              <span>•</span>
              <span>Qualité</span>
              <span>•</span>
              <span>Fiabilité</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteWizard()}
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all hover:shadow-orange-glow active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:0619128558"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>06 19 12 85 58</span>
            </a>
          </div>

          {/* 6 Trades Mini Strip */}
          <div className="pt-8 grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-4xl mx-auto border-t border-white/10 text-center">
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Zap className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">Électricité</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Paintbrush className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">Peinture</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Hammer className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">Parquet</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Grid className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">Carrelage</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <SquareCheck className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">Placo</div>
            </div>
            <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col items-center">
              <Wrench className="w-4 h-4 text-brand-orange mb-1" />
              <div className="text-[11px] font-bold text-white uppercase">Plomberie</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PHILOSOPHY & ESSENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
              <Award className="w-4 h-4" />
              MR ZAHID • TOUS CORPS D'ÉTAT À PARIS
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold uppercase text-brand-dark tracking-tight leading-tight">
              Une exécution soignée pour tous vos travaux
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Basée au <strong>2 bis Dupont de l'eure, 75020 Paris</strong>, l'entreprise <strong>MR ZAHID (SARL BATI 75)</strong> intervient sur l’ensemble de la région parisienne. Nous prenons en charge votre chantier de A à Z avec un interlocuteur unique et réactif.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Réactivité immédiate :</strong> Déplacement rapide sur Paris et devis détaillé sous 24h à 48h.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Qualité & Respect des normes :</strong> Électricité NF C 15-100, plomberie multicouche, enduits lisses et parquets vitrifiés.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-gray-700">
                  <strong>Fiabilité & Délais tenus :</strong> Engagement contractuel sur les dates de livraison du chantier.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => onNavigate('societe')}
                className="bg-brand-slate hover:bg-slate-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3.5 rounded-lg shadow-sm transition-all flex items-center gap-2"
              >
                <span>En savoir plus sur l'entreprise</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Before & After Feature Card */}
          <div className="lg:col-span-6">
            <BeforeAfterSlider
              beforeImage={heroBeforeAfter.imageBefore}
              afterImage={heroBeforeAfter.imageAfter}
              title={heroBeforeAfter.title}
              subtitle={`${heroBeforeAfter.surface} m² • ${heroBeforeAfter.arrondissement}`}
            />
          </div>

        </div>
      </section>

      {/* 3. EXPERTISE & SERVICES CATEGORIES */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              NOS EXPERTISES TECHNIQUES
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              Tous Travaux du Bâtiment à Paris
            </h2>
            <p className="text-xs text-gray-500">
              Des compétences complètes pour rénover vos intérieurs du sol au plafond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-luxury transition-all border border-gray-200/80 flex flex-col justify-between group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white font-bold text-sm uppercase tracking-wide">
                    {service.title}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="space-y-1.5 pt-2 border-t border-gray-100">
                      {service.trades.slice(0, 3).map((t, idx) => (
                        <div key={idx} className="text-[11px] text-gray-500 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('realisations', service.id === 'atelier-menuiserie' ? 'all' : service.id)}
                    className="w-full mt-4 py-2.5 border border-slate-200 hover:border-brand-orange hover:bg-orange-50/50 text-brand-slate hover:text-brand-orange text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Voir les chantiers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE 6-STEP METHOD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            MÉTHODOLOGIE ÉPROUVÉE
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
            Votre chantier en 6 étapes sereines avec MR ZAHID
          </h2>
          <p className="text-xs text-gray-500">
            Un processus cadré pour garantir le budget, la qualité des finitions et le respect des délais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Visite & Diagnostic Gratuit',
              desc: 'Rendez-vous sur place à Paris par Mr Zahid pour évaluer l\'état du bien, les réseaux et vos besoins.'
            },
            {
              step: '02',
              title: 'Devis Détaillé & Transparent',
              desc: 'Chiffrage clair par corps d\'état (électricité, plomberie, peinture...) sans mauvaise surprise.'
            },
            {
              step: '03',
              title: 'Préparation & Approvisionnement',
              desc: 'Protection soignée des parties communes de la copropriété et commande des matériaux sélectionnés.'
            },
            {
              step: '04',
              title: 'Réalisation Tous Corps d’État',
              desc: 'Démolition, placo, électricité, plomberie, ragréage, carrelage, parquet et peintures soignées.'
            },
            {
              step: '05',
              title: 'Suivi de Chantier en Direct',
              desc: 'Communication continue avec Mr Zahid pour suivre l\'avancement quotidien des travaux.'
            },
            {
              step: '06',
              title: 'Nettoyage & Livraison Clé en Main',
              desc: 'Nettoyage complet du chantier, contrôle qualité minutieux et remise des clés.'
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-brand-orange/50 transition-all space-y-3 relative group"
            >
              <div className="text-3xl font-extrabold font-heading text-brand-orange/30 group-hover:text-brand-orange transition-colors">
                {item.step}
              </div>
              <h4 className="text-sm font-bold uppercase text-brand-dark tracking-wide">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE COST ESTIMATOR */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              ESTIMATION INSTANTANÉE
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-white tracking-tight">
              Calculez le budget de vos travaux à Paris
            </h2>
            <p className="text-xs text-slate-300">
              Ajustez les curseurs pour obtenir une estimation immédiate
            </p>
          </div>

          <CostEstimator onOpenQuoteWizard={onOpenQuoteWizard} />
        </div>
      </section>

      {/* 6. INTERACTIVE MAP OF PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            ANCRAGE PARISIEN
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
            La carte de nos chantiers réalisés à Paris
          </h2>
          <p className="text-xs text-gray-500">
            Explorez nos réalisations dans votre quartier (Paris 20e, 11e, 4e, 16e, 17e, 8e...)
          </p>
        </div>

        <InteractiveMap onSelectProject={onSelectProject} />
      </section>

      {/* 7. TESTIMONIALS & REVIEWS */}
      <section className="bg-slate-50 py-16 sm:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              TÉMOIGNAGES CLIENTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
              La satisfaction de nos clients à Paris
            </h2>
            <div className="flex items-center justify-center gap-1.5 text-amber-500 text-sm font-bold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 ml-1">4.9 / 5 sur Avis Vérifiés</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testi) => (
              <div 
                key={testi.id}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 italic leading-relaxed">
                    « {testi.quote} »
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs font-bold text-brand-dark">{testi.author}</div>
                  <div className="text-[11px] text-brand-slate font-medium">{testi.location}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{testi.projectType}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            QUESTIONS FRÉQUENTES
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-brand-dark tracking-tight">
            Tout savoir avant de démarrer vos travaux
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <details 
              key={idx}
              className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer"
            >
              <summary className="flex items-center justify-between text-xs sm:text-sm font-bold text-brand-dark">
                <span>{faq.question}</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-xs text-gray-600 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 9. FINAL BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold uppercase tracking-tight text-white">
              Vous avez un projet de travaux à Paris ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mr Zahid se déplace gratuitement pour étudier votre projet et vous remettre un devis sur-mesure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteWizard()}
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all hover:shadow-orange-glow active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Demander un devis en ligne</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:0619128558"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs uppercase font-bold tracking-widest px-8 py-4 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>06 19 12 85 58</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
