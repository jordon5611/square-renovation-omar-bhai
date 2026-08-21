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
    quote: 'Nous avions une appréhension énorme avant de lancer les travaux dans notre appartement haussmannien. L’équipe Square Rénovation a été exemplaire : un suivi hebdomadaire rigoureux avec photos, un respect au jour près de la date de livraison et des finitions en menuiserie et peinture dignes d’un palace.'
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
    quote: 'Chantier mené tambour battant pendant les 3 mois d’été. Zéro dépassement de budget, un conducteur de travaux toujours joignable et un niveau de finition exceptionnel sur les cloisons acoustiques et la menuiserie.'
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
    quote: 'Leur atelier de menuiserie intégré fait toute la différence ! Ils ont conçu notre bibliothèque monumentale et notre cuisine sur mesure avec une précision d’orfèvre. Nous recommandons Square les yeux fermés.'
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
    quote: 'En tant qu’architecte, trouver une entreprise générale capable de lire et respecter scrupuleusement les détails d’exécution est rare. Square Rénovation est mon partenaire de confiance à Paris.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'prix',
    question: 'Quel est le prix moyen d’une rénovation au m² à Paris ?',
    answer: 'À Paris, une rénovation de qualité varie généralement entre 1 000 € et 3 000 € TTC par m² selon l’état initial du bien. Un simple rafraîchissement (peintures, ponçage parquet) se situe entre 900 € et 1 400 €/m², une rénovation complète (cuisine, salles de bains, plomberie, électricité) entre 1 500 € et 2 400 €/m², et une rénovation lourde avec restructuration structurelle et menuiseries d’art entre 2 500 € et 3 500 €+/m².'
  },
  {
    category: 'delais',
    question: 'Quels sont les délais moyens pour rénover un appartement à Paris ?',
    answer: 'Pour un appartement parisien classique de 80 à 120 m², comptez en moyenne 3 à 5 mois de travaux après validation des plans et commandes des matériaux. Chez Square Rénovation, nous nous engageons contractuellement sur un calendrier précis avec pénalités de retard.'
  },
  {
    category: 'demarches',
    question: 'Faut-il obligatoirement un architecte pour mon projet ?',
    answer: 'Non, faire appel à un architecte n’est pas obligatoire si la structure est préservée. En tant qu’entreprise générale Tous Corps d’État, notre bureau d’études intégré et nos conducteurs de travaux réalisent vos plans d’implantation et notes techniques. Si votre projet comprend des modifications de porteurs complexes, nous travaillons avec nos bureaux d’études de structure (BET) partenaires.'
  },
  {
    category: 'garanties',
    question: 'Quelles sont les assurances et garanties incluses ?',
    answer: 'Tous nos chantiers bénéficient de la Garantie Décennale (couvrant la structure et les réseaux pendant 10 ans), de la Garantie de Parfait Achèvement (1 an) et d’une assurance Responsabilité Civile Professionnelle complète souscrite auprès de grandes compagnies françaises (AXA / SMABTP).'
  },
  {
    category: 'demarches',
    question: 'Comment gérez-vous la copropriété et les nuisances sonores ?',
    answer: 'Nous prenons en charge la protection intégrale des parties communes (ascenseur, tapis d’escalier, couloirs), affichons les avis légaux en avance et respectons strictement les horaires légaux de bruit de la Ville de Paris (interdiction le week-end et en soirée).'
  }
];
