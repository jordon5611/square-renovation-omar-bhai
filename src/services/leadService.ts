const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'a2705743-eace-4300-82ee-7aafb16b96bd';

export interface QuoteLeadData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  surface: number;
  postalCode: string;
  trades: string[];
  startDate: string;
  message?: string;
  filesCount?: number;
}

export interface ContactLeadData {
  name: string;
  phone: string;
  email: string;
  postalCode?: string;
  trade: string;
  message: string;
}

/**
 * Sends a full quote inquiry to Web3Forms
 */
export async function submitQuoteLead(data: QuoteLeadData): Promise<{ success: boolean; message?: string }> {
  try {
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `[BATI] Devis ${data.propertyType} (${data.surface} m²) - ${data.fullName} [${data.postalCode}]`,
      from_name: 'BATI Site Web',
      'Nom & Prénom': data.fullName,
      'Téléphone': data.phone,
      'Email': data.email,
      'Type de Bien': data.propertyType,
      'Surface (m²)': `${data.surface} m²`,
      'Localisation (CP / Ville)': data.postalCode,
      'Corps de Métiers Souhaités': data.trades.join(', '),
      'Période de Démarrage': data.startDate,
      'Message / Précisions': data.message || 'Aucun message particulier',
      'Fichiers joints signalés': data.filesCount ? `${data.filesCount} fichier(s)` : '0',
      'Date de demande': new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const json = await res.json();
    if (json.success) {
      return { success: true };
    } else {
      console.warn('Web3Forms response not successful:', json);
      return { success: false, message: json.message || 'Une erreur est survenue lors de l\'envoi' };
    }
  } catch (err: any) {
    console.error('Error submitting quote lead:', err);
    return { success: false, message: err?.message || 'Erreur réseau' };
  }
}

/**
 * Sends a direct contact inquiry to Web3Forms
 */
export async function submitContactLead(data: ContactLeadData): Promise<{ success: boolean; message?: string }> {
  try {
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `[BATI] Contact Direct: ${data.trade} - ${data.name} [${data.phone}]`,
      from_name: 'BATI Site Web',
      'Nom & Prénom': data.name,
      'Téléphone': data.phone,
      'Email': data.email,
      'Prestation Demandée': data.trade,
      'Localisation': data.postalCode || 'Non spécifiée',
      'Message': data.message,
      'Date de demande': new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const json = await res.json();
    if (json.success) {
      return { success: true };
    } else {
      console.warn('Web3Forms response not successful:', json);
      return { success: false, message: json.message || 'Une erreur est survenue lors de l\'envoi' };
    }
  } catch (err: any) {
    console.error('Error submitting contact lead:', err);
    return { success: false, message: err?.message || 'Erreur réseau' };
  }
}
