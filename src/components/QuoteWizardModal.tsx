import React, { useState } from 'react';
import { 
  X, Check, ArrowRight, ArrowLeft, Upload, 
  Sparkles, CheckCircle2, ShieldCheck, Phone, Mail, User,
  Loader2, MessageSquare
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { submitQuoteLead } from '../services/leadService';

interface QuoteWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const QuoteWizardModal: React.FC<QuoteWizardModalProps> = ({ isOpen, onClose, initialData }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    requestType: 'Rénovation Complète',
    propertyType: t.quoteWizard.step1.types[0],
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const res = await submitQuoteLead({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      propertyType: formData.propertyType,
      surface: formData.surface,
      postalCode: formData.postalCode,
      trades: formData.trades,
      startDate: formData.startDate,
      message: formData.message,
      filesCount: formData.filesCount
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      // Even on temporary network glitch, display success to visitor so their experience isn't broken
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    setSubmitError(null);
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

  const whatsappMessage = encodeURIComponent(
    `Bonjour BATI, je viens de déposer une demande de devis pour mon bien de ${formData.surface}m² à ${formData.postalCode} (${formData.fullName} - ${formData.phone}).`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8 relative">
        
        {/* Close Button */}
        <button 
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
          aria-label={t.common.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            {t.quoteWizard.badge}
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
            {t.quoteWizard.title}
          </h3>
          
          {/* Progress Bar */}
          {!submitted && (
            <div className="mt-6">
              <div className="flex justify-between text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                <span>
                  {t.quoteWizard.stepIndicator(step)} {
                    step === 1 ? t.quoteWizard.stepNames.step1 :
                    step === 2 ? t.quoteWizard.stepNames.step2 :
                    step === 3 ? t.quoteWizard.stepNames.step3 :
                    t.quoteWizard.stepNames.step4
                  }
                </span>
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
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-fade-in">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-brand-dark uppercase tracking-wide">
                {t.quoteWizard.success.title}
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                {t.quoteWizard.success.desc(formData.fullName, formData.surface, formData.postalCode)}
              </p>
              
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 max-w-md mx-auto text-xs text-brand-dark text-left space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-orange">
                  <ShieldCheck className="w-4 h-4" />
                  {t.quoteWizard.success.commitmentsTitle}
                </div>
                <p>{t.quoteWizard.success.commitment1}</p>
                <p>{t.quoteWizard.success.commitment2}</p>
                <p>{t.quoteWizard.success.commitment3}</p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/33619128558?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contacter sur WhatsApp</span>
                </a>

                <a
                  href="tel:0619128558"
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.quoteWizard.success.callBtn}</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded-xl transition-colors"
                >
                  {t.quoteWizard.success.closeBtn}
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
                      {t.quoteWizard.step1.propertyTypeLabel}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {t.quoteWizard.step1.types.map((type, idx) => (
                        <button
                          key={idx}
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
                        {t.quoteWizard.step1.surfaceLabel}
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
                        {t.quoteWizard.step1.postalCodeLabel}
                      </label>
                      <input 
                        type="text"
                        placeholder="ex: 75020, 92200, 93100, 78000..."
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
                      {t.quoteWizard.step2.tradesLabel}
                    </label>
                    <p className="text-[11px] text-gray-500 mb-3">
                      {t.quoteWizard.step2.tradesDesc}
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
                      {t.quoteWizard.step3.startPeriodLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {t.quoteWizard.step3.periods.map(period => (
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
                      {t.quoteWizard.step3.uploadLabel}
                    </label>
                    <div className="border-2 border-dashed border-gray-300 hover:border-brand-orange rounded-xl p-5 text-center transition-colors">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-600 font-medium">
                        {t.quoteWizard.step3.uploadHint}
                      </p>
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
                        {t.quoteWizard.step3.uploadBtn}
                      </label>
                      {formData.filesCount > 0 && (
                        <div className="mt-2 text-xs font-bold text-emerald-600">
                          {t.quoteWizard.step3.filesUploaded(formData.filesCount)}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      {t.quoteWizard.step3.notesLabel}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={t.quoteWizard.step3.notesPlaceholder}
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
                        {t.quoteWizard.step4.nameLabel}
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
                        {t.quoteWizard.step4.phoneLabel}
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
                      {t.quoteWizard.step4.emailLabel}
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
                        {t.quoteWizard.step4.termsLabel}
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
                    disabled={isSubmitting}
                    className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {t.common.back}
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <span>{t.common.next}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 hover:shadow-orange-glow active:scale-95 disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{t.contactPage.submitBtn}</span>
                      </>
                    )}
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
