import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'haussmann-avenue-montaigne',
    title: 'Rénovation d’un Appartement Haussmannien de Prestige',
    category: 'haussmannien',
    categoryLabel: 'Haussmannien',
    location: 'Avenue Montaigne, Triangle d’Or',
    arrondissement: 'Paris 8e',
    surface: 185,
    duration: '5 mois',
    budgetTier: '€€€€',
    imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Réhabilitation complète d’un appartement d’angle sous les toits avec conservation et restauration des moulures d’époque en staff, pose d’un parquet massif point de Hongrie et création d’une suite parentale avec dressing sur-mesure.',
    scope: [
      'Restauration des moulures et corniches en staff',
      'Parquet chêne massif Point de Hongrie huilé',
      'Menuiseries sur-mesure laquées (Atelier Square)',
      'Plomberie & Sanitaires en marbre de Carrare',
      'Climatisation réversible gainée invisible',
      'Électricité & Domotique intégrée Lutron'
    ],
    lat: 48.8662,
    lng: 2.3082,
    year: 2024,
    featured: true
  },
  {
    id: 'loft-bastille-canal',
    title: 'Transformation d’un Ancien Atelier en Loft Contemporain',
    category: 'loft',
    categoryLabel: 'Loft & Espace Atypique',
    location: 'Proximité Canal Saint-Martin',
    arrondissement: 'Paris 11e',
    surface: 140,
    duration: '4 mois',
    budgetTier: '€€€',
    imageBefore: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Transformation d’un plateau brut industriel en un loft chaleureux avec verrière métallique artisanale double vitrage, sol en béton ciré micro-lissé et mezzanine suspendue à structure acier IPN.',
    scope: [
      'Création de verrières d’atelier en acier sur-mesure',
      'Ouverture de trémie et mezzanine avec escalier limon central',
      'Sol béton ciré teinté dans la masse',
      'Cuisine îlot central en quartz noir mat',
      'Isolation phonique et thermique renforcée'
    ],
    lat: 48.8592,
    lng: 2.3734,
    year: 2024,
    featured: true
  },
  {
    id: 'familial-saint-germain',
    title: 'Restructuration d’un Grand Appartement Familial',
    category: 'familial',
    categoryLabel: 'Appartement Familial',
    location: 'Boulevard Saint-Germain',
    arrondissement: 'Paris 6e',
    surface: 210,
    duration: '6 mois',
    budgetTier: '€€€€',
    imageBefore: 'https://images.unsplash.com/photo-1502005229762-ee152da915d6?auto=format&fit=crop&w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Création d’un espace de vie ouvert de 75 m² reliant salon, salle à manger et cuisine dînatoire, tout en créant 4 chambres indépendantes dotées chacune de leurs pièces d’eau privatives.',
    scope: [
      'Abattage de murs porteurs avec note de calcul BET & IPN',
      'Réseaux complets (électricité triphasée & plomberie multicouche)',
      'Menuiseries intérieures en noyer d’Amérique sur-mesure',
      '4 salles de bains contemporaines clé en main',
      'Peintures Farrow & Ball aux tons poudrés'
    ],
    lat: 48.8538,
    lng: 2.3331,
    year: 2023,
    featured: true
  },
  {
    id: 'contemporain-passy-trocadero',
    title: 'Rénovation Épurée avec Vue Tour Eiffel',
    category: 'contemporain',
    categoryLabel: 'Contemporain',
    location: 'Quartier Passy / Trocadéro',
    arrondissement: 'Paris 16e',
    surface: 125,
    duration: '3.5 mois',
    budgetTier: '€€€',
    imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Lignes minimalistes, jeux de lumière indirecte LED, bibliothèque sculpturale murale et cuisine monobloc en céramique calacatta.',
    scope: [
      'Éclairage architectural avec gorges lumineuses LED indirectes',
      'Bibliothèque cintrée sur-mesure avec niche rétroéclairée',
      'Parquet chêne semi-massif brossé mat',
      'Double vitrage acoustique haute performance phonique'
    ],
    lat: 48.8629,
    lng: 2.2872,
    year: 2024,
    featured: false
  },
  {
    id: 'maison-villa-montmorency',
    title: 'Rénovation & Extension d’un Hôtel Particulier',
    category: 'maison',
    categoryLabel: 'Maison & Hôtel Particulier',
    location: 'Villa Montmorency / Auteuil',
    arrondissement: 'Paris 16e',
    surface: 320,
    duration: '8 mois',
    budgetTier: '€€€€',
    imageBefore: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Rénovation intégrale des 3 niveaux d’une maison de maître avec aménagement des combles, création d’une véranda acier sur jardin privatif et cave à vin climatisée.',
    scope: [
      'Gros œuvre, reprise en sous-œuvre et extension véranda acier',
      'Pompe à chaleur réversible et plancher chauffant basse température',
      'Escalier hélicoïdal sur-mesure bois et métal',
      'Façade pierre de taille ravalée et menuiseries bois neuves'
    ],
    lat: 48.8475,
    lng: 2.2618,
    year: 2023,
    featured: false
  },
  {
    id: 'bureau-cabinet-avocats-madeleine',
    title: 'Agencement Haut de Gamme d’un Cabinet d’Avocats',
    category: 'pro',
    categoryLabel: 'Locaux Professionnels',
    location: 'Place de la Madeleine',
    arrondissement: 'Paris 8e',
    surface: 260,
    duration: '3 mois',
    budgetTier: '€€€',
    imageBefore: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Aménagement de bureaux de direction, salles de réunion acoustiques et espace d’accueil prestigieux dans un immeuble en pierre de taille.',
    scope: [
      'Cloisons vitrées double vitrage bord à bord à affaiblissement acoustique 48dB',
      'Réseau informatique RJ45 cat 6A et baie de brassage climatisée',
      'Comptoir d’accueil en chêne massif et laiton brossé',
      'Contrôle d’accès biométrique et éclairage DALI'
    ],
    lat: 48.8702,
    lng: 2.3245,
    year: 2024,
    featured: false
  },
  {
    id: 'haussmann-monceau',
    title: 'Rénovation d’un Appartement d’Exception Parc Monceau',
    category: 'haussmannien',
    categoryLabel: 'Haussmannien',
    location: 'Boulevard Malesherbes / Parc Monceau',
    arrondissement: 'Paris 17e',
    surface: 160,
    duration: '4.5 mois',
    budgetTier: '€€€€',
    imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Sublimation des éléments historiques (cheminées en marbre Napoléon III fonctionnelles, dorures à la feuille restaurées, trumeaux) alliée à une cuisine contemporaine ouverte.',
    scope: [
      'Restauration de 3 cheminées en marbre et tubage',
      'Parquet chêne d’époque décapé et ciré au tampon',
      'Cuisine îlot en noyer et plan Dekton',
      'Dressing d’angle sur mesure avec éclairage LED sous tringle'
    ],
    lat: 48.8805,
    lng: 2.3115,
    year: 2023,
    featured: true
  },
  {
    id: 'contemporain-marais',
    title: 'Pied-à-Terre Rénové au Cœur du Marais',
    category: 'contemporain',
    categoryLabel: 'Contemporain',
    location: 'Rue des Francs-Bourgeois',
    arrondissement: 'Paris 4e',
    surface: 72,
    duration: '2.5 mois',
    budgetTier: '€€€',
    imageBefore: 'https://images.unsplash.com/photo-1502005229762-ee152da915d6?auto=format&fit=crop&w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Optimisation de chaque mètre carré avec des meubles escamotables créés dans notre atelier, poutres anciennes blanchies et verrière sur mesure.',
    scope: [
      'Poutres apparentes du XVIIe sablées et traitées',
      'Menuiserie modulable gain de place',
      'Salle de douche à l’italienne en terrazzo vénitien',
      'Isolation acoustique du plancher par chape allégée'
    ],
    lat: 48.8576,
    lng: 2.3602,
    year: 2024,
    featured: false
  }
];
