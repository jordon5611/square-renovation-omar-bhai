import { Testimonial, FAQItem } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Alexandre & Sophie D.',
    role: 'Propriétaires',
    location: 'Paris 7e (Champ-de-Mars)',
    projectType: 'Rénovation complète Haussmannien 145 m²',
    surface: 145,
    rating: 5,
    date: 'Janvier 2025',
    quote: 'Nous avions une appréhension énorme avant de lancer les travaux dans notre appartement haussmannien. L’équipe BATI a été exemplaire : un suivi rigoureux avec photos, un respect au jour près de la date de livraison et des finitions en placo, électricité et peinture d’une qualité irréprochable.'
  },
  {
    id: '2',
    author: 'Me François L.',
    role: 'Avocat Associé',
    location: 'Paris 8e (Madeleine)',
    projectType: 'Agencement de Cabinet 260 m²',
    surface: 260,
    rating: 5,
    date: 'Novembre 2024',
    quote: 'Chantier mené tambour battant pendant les 3 mois d’été. Zéro dépassement de budget, un interlocuteur BATI toujours joignable et un niveau de finition exceptionnel sur les cloisons acoustiques et l’électricité.'
  },
  {
    id: '3',
    author: 'Camille & Julien V.',
    role: 'Propriétaires',
    location: 'Paris 11e (Oberkampf)',
    projectType: 'Création d’un Loft sous verrière 130 m²',
    surface: 130,
    rating: 5,
    date: 'Octobre 2024',
    quote: 'La réactivité et le savoir-faire de l’équipe font toute la différence ! Ils ont transformé notre intérieur avec une précision d’orfèvre et des matériaux de grande qualité. Nous recommandons BATI les yeux fermés.'
  },
  {
    id: '4',
    author: 'Stéphane B.',
    role: 'Architecte d’Intérieur',
    location: 'Paris 16e (Ranelagh)',
    projectType: 'Rénovation Prestige 190 m²',
    surface: 190,
    rating: 5,
    date: 'Décembre 2024',
    quote: 'En tant qu’architecte, trouver une entreprise générale capable de lire et respecter scrupuleusement les détails d’exécution est rare. BATI est notre partenaire de confiance en Île-de-France.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'prix',
    question: 'Quel est le délai d’obtention d’un devis chez BATI ?',
    answer: 'Après visite sur place ou transmission de vos plans, nous vous remettons un devis détaillé poste par poste sous 48h à 72h ouvrées, 100% gratuit et sans engagement.'
  },
  {
    category: 'delais',
    question: 'Quels sont les délais moyens pour rénover un appartement ou une maison ?',
    answer: 'Pour un appartement classique de 60 à 120 m², comptez en moyenne 2 à 4 mois de travaux selon l’ampleur des lots. Chez BATI, nous nous engageons contractuellement sur un calendrier précis avec pénalités de retard.'
  },
  {
    category: 'demarches',
    question: 'Faut-il obligatoirement un architecte pour mon projet ?',
    answer: 'Non, faire appel à un architecte n’est pas obligatoire si la structure porteuse est préservée. En tant qu’entreprise générale Tous Corps d’État, nos conducteurs de travaux et chefs de chantier réalisent vos plans d’implantation et l’ensemble des études techniques.'
  },
  {
    category: 'garanties',
    question: 'Quelles sont les assurances et garanties incluses ?',
    answer: 'Tous nos chantiers bénéficient de la Garantie Décennale (couvrant la structure et les réseaux pendant 10 ans), de la Garantie de Parfait Achèvement (1 an) et d’une assurance Responsabilité Civile Professionnelle complète souscrite auprès de grandes compagnies françaises (AXA / SMABTP).'
  },
  {
    category: 'demarches',
    question: 'Comment gérez-vous la copropriété et les nuisances sonores ?',
    answer: 'Nous prenons en charge la protection intégrale des parties communes (ascenseur, tapis d’escalier, couloirs), affichons les avis légaux en avance et respectons strictement les horaires légaux de bruit en Île-de-France (interdiction le week-end et en soirée).'
  }
];
