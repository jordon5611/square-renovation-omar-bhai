import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'haussmannien',
    title: 'Rénovation d’Appartements Haussmanniens',
    shortDesc: 'Préservation du cachet d’époque (moulures, parquets, cheminées) et modernisation technique invisible.',
    description: 'La rénovation d’un appartement haussmannien exige une maîtrise absolue des techniques artisanales traditionnelles : restauration de staff, conservation des parquets d’époque (point de Hongrie, bâton rompu), isolation phonique adaptée aux planchers bois et intégration soignée des réseaux de plomberie et d’électricité.',
    icon: 'Building2',
    trades: ['Staff & Moulures', 'Parquet massif', 'Restauration de cheminées', 'Électricité encastrée', 'Peintures haut de gamme'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'contemporain',
    title: 'Rénovation d’Appartements Contemporains',
    shortDesc: 'Design épuré, volumes ouverts, intégration domotique et matériaux nobles.',
    description: 'Nous transformons les intérieurs pour créer des espaces de vie fluides, lumineux et fonctionnels. Nos artisans réalisent des finitions sans compromis : béton ciré, faux plafonds avec gorges lumineuses LED, portes affleurantes invisibles et verrières sur-mesure.',
    icon: 'Sparkles',
    trades: ['Volumes ouverts & IPN', 'Éclairage architectural LED', 'Céramiques grand format', 'Domotique', 'Portes sous tenture'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maisons-pavillons',
    title: 'Rénovation de Maisons & Pavillons',
    shortDesc: 'Rénovation intérieure et extérieure, réagencement des espaces et isolation thermique en Île-de-France.',
    description: 'De la remise aux normes complète à l’embellissement de votre maison ou pavillon, nos équipes qualifiées réalisent l’ensemble des travaux de second œuvre et d’agencement pour valoriser votre patrimoine.',
    icon: 'Home',
    trades: ['Isolation thermique & phonique', 'Réfection sols & cloisons', 'Rénovation globale', 'Chauffage & plomberie', 'Finitions soignées'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'familial-lofts',
    title: 'Appartements Familiaux & Lofts Atypiques',
    shortDesc: 'Restructuration totale de l’espace : création de suites parentales, chambres d’enfants et mezzanines.',
    description: 'Adapter un appartement à l’évolution d’une famille demande de repenser les circulations, d’insonoriser les pièces d’eau et de créer des rangements généreux sans encombrer les pièces de vie. Nos conducteurs de travaux coordonnent tous les corps d’état avec un planning au jour le jour.',
    icon: 'Home',
    trades: ['Cloisonnement phonique Placostil', 'Multiples salles d’eau', 'Mezzanines acier & bois', 'Rangements sous plafond', 'VMC double flux'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tous-corps-etat',
    title: 'Entreprise Générale Tous Corps d’État (TCE)',
    shortDesc: 'Un interlocuteur unique pour la gestion intégrale de votre chantier de A à Z.',
    description: 'Vous n’avez pas à coordonner 10 artisans différents. Votre conducteur de travaux BATI dédié assure le pilotage complet : démolition, maçonnerie, plomberie, électricité, carrelage, placo et peinture, dans le respect absolu des délais et des devis validés.',
    icon: 'ShieldCheck',
    trades: ['Interlocuteur unique', 'Comptes-rendus de chantier', 'Assurance Professionnelle BTP', 'Planning garanti contractuellement', 'Nettoyage de fin de chantier'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tertiaire-bureaux',
    title: 'Bureaux & Espaces Professionnels',
    shortDesc: 'Rénovation et agencement de locaux d’entreprises, cabinets médicaux et commerces en Île-de-France.',
    description: 'Nous concevons des environnements de travail soignés, alliant confort acoustique, ergonomie, conformité ERP / accessibilité et esthétique valorisante pour l’image de marque de votre entreprise.',
    icon: 'Briefcase',
    trades: ['Cloisons vitrées acoustiques', 'Courants forts & faibles', 'Contrôle d’accès', 'Espaces d’accueil prestigieux', 'Respect des normes ERP'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
  }
];
