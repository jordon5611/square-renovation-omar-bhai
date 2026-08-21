import React, { useState } from 'react';
import { 
  X, Check, ArrowRight, ArrowLeft, Upload, 
  Sparkles, CheckCircle2, ShieldCheck, Phone, Mail, User
} from 'lucide-react';

interface QuoteWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const QuoteWizardModal: React.FC<QuoteWizardModalProps> = ({ isOpen, onClose, initialData }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    requestType: 'Rénovation Complète',
    propertyType: 'Appartement',
    surface: initialData?.surface || 75,
    postalCode: '75020',
    city: 'Paris',
    trades: [
      'Électricité & Éclairage',
      'Peinture & Enduits',
      'Plomberie & Salle de Bains',
      'Parquet & Revêtements'
    ],
    startDate: 'Dans les 3 prochains mois',
    estimatedBudget: initialData?.estimatedRange || '75 000 € - 120 000 €',
    fullName: '',
    email: '',
    phone: '',
    message: '',
    filesCount: 0,
    acceptTerms: true
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleTrade = (trade: string) => {
    setFormData(prev => {
      const exists = prev.trades.includes(trade);
      return {
        ...prev,
        trades: exists ? prev.trades.filter(t => t !== trade) : [...prev.trades, trade]
      };
    });
  };

  const handleFakeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, filesCount: prev.filesCount + e.target.files!.length }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  const allTradesList = [
    'Électricité & Éclairage',
    'Peinture murs & plafonds',
    'Parquet (pose, ponçage, vitrification)',
    'Carrelage & Faïence',
    'Placo, Doublage & Cloisons',
    'Plomberie & Sanitaires',
    'Salle de Bains complète clé en main',
    'Cuisine intégrée & Raccordements',
    'Menuiserie & Agencements sur-mesure',
    'Maçonnerie & Démolition'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8 relative">
        
        {/* Close Button */}
        <button 
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            MR ZAHID • Demande d’Étude & Devis Gratuit
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
            Concrétisons vos travaux de rénovation à Paris
          </h3>
          
          {/* Progress Bar */}
          {!submitted && (
            <div className="mt-6">
              <div className="flex justify-between text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                <span>Étape {step} sur 4 : {
                  step === 1 ? 'Votre bien' :
                  step === 2 ? 'Prestations souhaitées' :
                  step === 3 ? 'Planning & Précisions' :
                  'Vos Coordonnées'
                }</span>
                <span>{step * 25}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-orange transition-all duration-300 rounded-full"
                  style={{ width: `${step * 25}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            /* Success View */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-brand-dark uppercase tracking-wide">
                Demande transmise avec succès !
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Merci <strong>{formData.fullName || 'Monsieur/Madame'}</strong>. Mr Zahid étudie votre demande pour vos travaux de <strong>{formData.surface} m² à {formData.postalCode}</strong>.
              </p>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 max-w-md mx-auto text-xs text-brand-dark text-left space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-orange">
                  <ShieldCheck className="w-4 h-4" />
                  Engagements MR ZAHID :
                </div>
                <p>1. Contact téléphonique direct sous <strong>24 heures ouvrées</strong>.</p>
                <p>2. Déplacement gratuit sur place pour métrés et diagnostic.</p>
                <p>3. Remise d'un devis clair et transparent sans engagement.</p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:0619128558"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-lg shadow-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Joindre Mr Zahid : 06 19 12 85 58</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="bg-slate-800 hover:bg-slate-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-lg"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: Property Info */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Type de bien immobilier
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        'Appartement Haussmannien',
                        'Appartement Ancien',
                        'Appartement Contemporain',
                        'Maison / Pavillon',
                        'Studio / Deux Pièces',
                        'Locaux Professionnels / Bureaux'
                      ].map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: type })}
                          className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                            formData.propertyType === type
                              ? 'border-brand-orange bg-orange-50/60 text-brand-dark font-bold ring-1 ring-brand-orange'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Surface approximative (m²) *
                      </label>
                      <input 
                        type="number"
                        min="10"
                        max="1000"
                        value={formData.surface}
                        onChange={(e) => setFormData({ ...formData, surface: Number(e.target.value) })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Arrondissement / Code postal *
                      </label>
                      <input 
                        type="text"
                        placeholder="ex: 75020, 75011, 75008..."
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Trades selection */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Sélectionnez les travaux souhaités
                    </label>
                    <p className="text-[11px] text-gray-500 mb-3">
                      MR ZAHID prend en charge l'ensemble de ces corps de métiers sans intermédiaire.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {allTradesList.map(trade => {
                        const checked = formData.trades.includes(trade);
                        return (
                          <div 
                            key={trade}
                            onClick={() => toggleTrade(trade)}
                            className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs cursor-pointer select-none transition-all ${
                              checked 
                                ? 'border-brand-orange bg-orange-50/50 text-brand-dark font-semibold' 
                                : 'border-gray-200 hover:border-gray-300 text-gray-600'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                              checked ? 'bg-brand-orange border-brand-orange text-white' : 'border-gray-300 bg-white'
                            }`}>
                              {checked && <Check className="w-3 h-3" />}
                            </div>
                            <span>{trade}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Timeline, files, notes */}
              {step === 3 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Quand souhaitez-vous démarrer vos travaux ?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        'Immédiat (sous 1 mois)',
                        'Dans les 3 prochains mois',
                        'D’ici 6 mois / En réflexion'
                      ].map(period => (
                        <button
                          key={period}
                          type="button"
                          onClick={() => setFormData({ ...formData, startDate: period })}
                          className={`p-3 text-center rounded-xl border text-xs font-medium transition-all ${
                            formData.startDate === period
                              ? 'border-brand-orange bg-orange-50/60 text-brand-dark font-bold ring-1 ring-brand-orange'
                              : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Plan / Files Upload */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Photos actuelles ou plans (Facultatif)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 hover:border-brand-orange rounded-xl p-5 text-center transition-colors">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-600 font-medium">
                        Glissez vos fichiers ici ou <span className="text-brand-orange underline cursor-pointer">parcourez vos documents</span>
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1">JPG, PNG, PDF (Max 20 Mo)</p>
                      <input 
                        type="file" 
                        multiple 
                        onChange={handleFakeFileUpload}
                        className="hidden" 
                        id="wizard-file" 
                      />
                      <label 
                        htmlFor="wizard-file" 
                        className="inline-block mt-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded cursor-pointer"
                      >
                        Sélectionner des photos
                      </label>
                      {formData.filesCount > 0 && (
                        <div className="mt-2 text-xs font-bold text-emerald-600">
                          ✓ {formData.filesCount} fichier(s) joint(s)
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Détails ou demandes particulières
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Précisez votre demande (ex: refaire tableau électrique, peinture salon et pose de parquet...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Information */}
              {step === 4 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Nom & Prénom *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input 
                          type="text"
                          placeholder="Jean Dupont"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input 
                          type="tel"
                          placeholder="06 12 34 56 78"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Adresse E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input 
                        type="email"
                        placeholder="jean.dupont@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 text-[11px] text-gray-500 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                        className="w-4 h-4 mt-0.5 text-brand-orange rounded border-gray-300 focus:ring-brand-orange accent-brand-orange"
                        required
                      />
                      <span>
                        J'accepte d'être recontacté(e) par Mr Zahid pour l'établissement de mon devis. Données protégées.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Retour
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Étape suivante</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 hover:shadow-orange-glow active:scale-95"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Envoyer ma demande à Mr Zahid</span>
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
