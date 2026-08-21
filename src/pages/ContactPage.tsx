import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, 
  CheckCircle2, FileText, Zap, Paintbrush, 
  Hammer, Grid, SquareCheck, Wrench, ShieldCheck
} from 'lucide-react';

interface ContactPageProps {
  onOpenQuoteWizard: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteWizard }) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    trade: 'Rénovation Complète / Tous Corps d\'État',
    name: '',
    email: '',
    phone: '',
    surface: '',
    postalCode: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="pt-24 pb-20 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80" 
            alt="Contact MR ZAHID Bâtiment Paris" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            CONTACT DIRECT • MR ZAHID
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            Contactez MR ZAHID - Tous Travaux du Bâtiment
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Pour vos travaux d'électricité, peinture, parquet, carrelage, placo et plomberie à Paris et en Île-de-France. Devis et visite gratuits.
          </p>
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs uppercase font-bold tracking-widest text-brand-orange border border-white/15">
            Réactivité • Qualité • Fiabilité
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-xl font-bold uppercase text-brand-dark tracking-tight">
                Coordonnées & Informations
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Intervention rapide à Paris (75) et dans tous les départements d'Île-de-France.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-brand-dark uppercase">Adresse de l'Entreprise</h4>
                  <p className="text-gray-900 font-semibold mt-0.5">2 bis Dupont de l'eure</p>
                  <p className="text-gray-600 font-medium">75020 PARIS</p>
                  <p className="text-gray-400 text-[11px] mt-0.5">SARL BATI 75</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-brand-dark uppercase">Téléphone Direct (Mr Zahid)</h4>
                  <a href="tel:0619128558" className="text-brand-orange font-extrabold text-base block mt-0.5 hover:underline">
                    06 19 12 85 58
                  </a>
                  <p className="text-gray-500 text-[11px]">Disponible 6j/7 pour urgences et devis</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-brand-dark uppercase">E-mail Officiel</h4>
                  <a href="mailto:sarl.bati75@gmail.com" className="text-gray-900 font-semibold block mt-0.5 hover:text-brand-orange">
                    sarl.bati75@gmail.com
                  </a>
                  <p className="text-gray-400 text-[11px]">Réponse sous 24h ouvrées</p>
                </div>
              </div>
            </div>

            {/* Trades Summary Box */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Nos Corps de Métiers
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-brand-orange" /> Électricité</span>
                <span className="flex items-center gap-1.5"><Paintbrush className="w-3.5 h-3.5 text-brand-orange" /> Peinture</span>
                <span className="flex items-center gap-1.5"><Hammer className="w-3.5 h-3.5 text-brand-orange" /> Parquet</span>
                <span className="flex items-center gap-1.5"><Grid className="w-3.5 h-3.5 text-brand-orange" /> Carrelage</span>
                <span className="flex items-center gap-1.5"><SquareCheck className="w-3.5 h-3.5 text-brand-orange" /> Placo</span>
                <span className="flex items-center gap-1.5"><Wrench className="w-3.5 h-3.5 text-brand-orange" /> Plomberie</span>
              </div>
            </div>

            {/* Quick Interactive Wizard Banner */}
            <div className="bg-orange-50 border border-orange-200 text-brand-dark p-5 rounded-2xl space-y-2.5">
              <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase">
                <FileText className="w-4 h-4" />
                Besoin d'un chiffrage complet ?
              </div>
              <p className="text-xs text-gray-600">
                Calculez le coût estimatif de vos travaux en 2 minutes avec notre questionnaire interactif.
              </p>
              <button
                onClick={onOpenQuoteWizard}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider py-2.5 rounded-lg shadow-sm transition-all text-center"
              >
                Ouvrir le simulateur de devis
              </button>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            {formSent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold uppercase text-brand-dark">
                  Message transmis à Mr Zahid !
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto">
                  Merci <strong>{formData.name}</strong>. Votre demande a bien été reçue. Mr Zahid vous recontactera au <strong>{formData.phone}</strong> dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-4 px-6 py-2.5 bg-brand-slate text-white text-xs uppercase font-bold rounded-lg"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-base font-bold uppercase text-brand-dark mb-1">
                    Envoyer une demande de devis direct
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Remplissez ce formulaire ou appelez directement le <strong className="text-brand-orange">06 19 12 85 58</strong>
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Prestation principale demandée *
                  </label>
                  <select
                    value={formData.trade}
                    onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-orange"
                  >
                    <option value="Rénovation Complète / Tous Corps d'État">Rénovation Complète (Tous Corps d'État)</option>
                    <option value="Électricité">Électricité & Mise aux normes</option>
                    <option value="Peinture">Peinture murs, plafonds & finitions</option>
                    <option value="Parquet">Parquet (Pose, ponçage, vitrification)</option>
                    <option value="Carrelage">Carrelage & Faïence</option>
                    <option value="Placo">Placo, Cloisons & Isolation</option>
                    <option value="Plomberie">Plomberie & Salle de bains</option>
                    <option value="Autre">Autre projet</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      placeholder="Jean Dupont"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Adresse E-mail *
                    </label>
                    <input
                      type="email"
                      placeholder="jean.dupont@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Localisation (Arrondissement / Ville)
                    </label>
                    <input
                      type="text"
                      placeholder="ex: 75020 Paris, 75011..."
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Votre Message / Détails des travaux à réaliser *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez vos besoins (surface en m², pièces à rénover, état actuel...)"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-orange"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-widest py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-orange-glow active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer ma demande à Mr Zahid</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
