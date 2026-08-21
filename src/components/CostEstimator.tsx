import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

interface CostEstimatorProps {
  onOpenQuoteWizard: (initialData?: any) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenQuoteWizard }) => {
  const [surface, setSurface] = useState<number>(85);
  const [renovationType, setRenovationType] = useState<'light' | 'complete' | 'heavy'>('complete');
  const [tier, setTier] = useState<'standard' | 'premium' | 'prestige'>('premium');
  const [includeJoinery, setIncludeJoinery] = useState<boolean>(true);
  const [includeArchitect, setIncludeArchitect] = useState<boolean>(false);

  // Pricing matrix per m² (Paris market averages calibrated with Square Renovation standards)
  const rates = {
    light: { standard: 900, premium: 1200, prestige: 1500 },
    complete: { standard: 1500, premium: 1950, prestige: 2500 },
    heavy: { standard: 2400, premium: 2900, prestige: 3600 },
  };

  const baseRate = rates[renovationType][tier];
  const joineryAddon = includeJoinery ? 150 : 0;
  const architectMultiplier = includeArchitect ? 1.12 : 1.0;

  const estimatedMin = Math.round(surface * (baseRate * 0.9 + joineryAddon) * architectMultiplier);
  const estimatedMax = Math.round(surface * (baseRate * 1.1 + joineryAddon * 1.2) * architectMultiplier);
  const avgPerM2 = Math.round((estimatedMin + estimatedMax) / 2 / surface);

  const handleLaunchQuote = () => {
    onOpenQuoteWizard({
      surface,
      renovationType,
      tier,
      includeJoinery,
      includeArchitect,
      estimatedRange: `${estimatedMin.toLocaleString('fr-FR')} € - ${estimatedMax.toLocaleString('fr-FR')} €`
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 max-w-4xl mx-auto">
      
      {/* Header of the calculator */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-gray-100 gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark uppercase tracking-wide">
              Simulateur de Devis au M²
            </h3>
            <p className="text-xs text-gray-500">
              Estimez votre budget de rénovation d'appartement à Paris en quelques clics
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-slate flex items-center gap-1.5 self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Barème Parisien 2025 / 2026
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Surface Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                1. Surface du bien à rénover
              </label>
              <div className="text-base font-bold text-brand-orange bg-orange-50 px-3 py-0.5 rounded-lg">
                {surface} m²
              </div>
            </div>
            <input 
              type="range" 
              min="20" 
              max="250" 
              step="5"
              value={surface}
              onChange={(e) => setSurface(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>Studio (20 m²)</span>
              <span>Familial (100 m²)</span>
              <span>Prestige (250 m²+)</span>
            </div>
          </div>

          {/* 2. Type of Renovation */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              2. Ampleur des travaux
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setRenovationType('light')}
                className={`p-3 text-left rounded-xl border transition-all text-xs ${
                  renovationType === 'light'
                    ? 'border-brand-orange bg-orange-50/50 text-brand-dark font-semibold shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <div className="font-bold text-brand-slate">Rafraîchissement</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Peinture, parquet, déco</div>
              </button>

              <button
                type="button"
                onClick={() => setRenovationType('complete')}
                className={`p-3 text-left rounded-xl border transition-all text-xs ${
                  renovationType === 'complete'
                    ? 'border-brand-orange bg-orange-50/50 text-brand-dark font-semibold shadow-sm ring-1 ring-brand-orange'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <div className="font-bold text-brand-orange">Rénovation Complète</div>
                <div className="text-[10px] text-gray-500 mt-0.5">SdB, cuisine, réseaux</div>
              </button>

              <button
                type="button"
                onClick={() => setRenovationType('heavy')}
                className={`p-3 text-left rounded-xl border transition-all text-xs ${
                  renovationType === 'heavy'
                    ? 'border-brand-orange bg-orange-50/50 text-brand-dark font-semibold shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <div className="font-bold text-brand-slate">Rénovation Lourde</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Porteurs IPN, restructuration</div>
              </button>
            </div>
          </div>

          {/* 3. Materials & Finish Tier */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              3. Gamme de matériaux & finitions
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setTier('standard')}
                className={`py-2 px-3 text-center rounded-lg border text-xs font-medium transition-all ${
                  tier === 'standard'
                    ? 'bg-slate-800 text-white border-slate-800 font-semibold'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                Qualité Soignée
              </button>
              <button
                type="button"
                onClick={() => setTier('premium')}
                className={`py-2 px-3 text-center rounded-lg border text-xs font-medium transition-all ${
                  tier === 'premium'
                    ? 'bg-slate-800 text-white border-slate-800 font-semibold ring-1 ring-brand-orange'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                Haut de Gamme ★
              </button>
              <button
                type="button"
                onClick={() => setTier('prestige')}
                className={`py-2 px-3 text-center rounded-lg border text-xs font-medium transition-all ${
                  tier === 'prestige'
                    ? 'bg-slate-800 text-white border-slate-800 font-semibold'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                Prestige & Marbre
              </button>
            </div>
          </div>

          {/* 4. Optional Add-ons */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <label className="flex items-center gap-3 cursor-pointer text-xs text-gray-700">
              <input 
                type="checkbox"
                checked={includeJoinery}
                onChange={(e) => setIncludeJoinery(e.target.checked)}
                className="w-4 h-4 text-brand-orange rounded border-gray-300 focus:ring-brand-orange accent-brand-orange"
              />
              <span>Inclure agencements sur-mesure de notre <strong>Atelier de Menuiserie</strong></span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer text-xs text-gray-700">
              <input 
                type="checkbox"
                checked={includeArchitect}
                onChange={(e) => setIncludeArchitect(e.target.checked)}
                className="w-4 h-4 text-brand-orange rounded border-gray-300 focus:ring-brand-orange accent-brand-orange"
              />
              <span>Mission complète conception & suivi par <strong>Architecte d'Intérieur</strong> (+12%)</span>
            </label>
          </div>

        </div>

        {/* Results Card Column (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">
              Estimation Budgétaire Globale
            </div>
            
            {/* Price display */}
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight my-2">
              {estimatedMin.toLocaleString('fr-FR')} € <span className="text-sm font-normal text-slate-400">à</span> {estimatedMax.toLocaleString('fr-FR')} €
            </div>
            
            <div className="inline-block bg-brand-orange/20 text-brand-orange px-2.5 py-1 rounded-md text-xs font-bold mb-4">
              Moyenne : ~ {avgPerM2.toLocaleString('fr-FR')} € / m² TTC
            </div>

            {/* Breakdown recap */}
            <div className="space-y-2 text-xs text-slate-300 border-t border-slate-700/80 pt-4 mb-6">
              <div className="flex justify-between">
                <span>Surface chiffrée :</span>
                <span className="font-semibold text-white">{surface} m²</span>
              </div>
              <div className="flex justify-between">
                <span>Niveau de travaux :</span>
                <span className="font-semibold text-white capitalize">
                  {renovationType === 'light' ? 'Rafraîchissement' : renovationType === 'complete' ? 'Rénovation Complète' : 'Rénovation Lourde'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Garanties incluses :</span>
                <span className="font-semibold text-emerald-400">Décennale AXA + Parfait Achèvement</span>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleLaunchQuote}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs uppercase font-bold tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group hover:shadow-orange-glow active:scale-95"
            >
              <span>Obtenir mon étude détaillée gratuite</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-2.5">
              Sans engagement • Réponse sous 24h avec visite conseil sur place
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
