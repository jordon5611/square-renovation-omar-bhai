export type ProjectCategory = 
  | 'all'
  | 'haussmannien'
  | 'contemporain'
  | 'familial'
  | 'loft'
  | 'maison'
  | 'pro';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  arrondissement: string;
  surface: number; // m²
  duration: string;
  budgetTier: '€€' | '€€€' | '€€€€';
  imageBefore: string;
  imageAfter: string;
  videoBefore?: string;
  videoAfter?: string;
  gallery: string[];
  description: string;
  scope: string[];
  lat: number;
  lng: number;
  year: number;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  trades: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  projectType: string;
  surface: number;
  date: string;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'prix' | 'delais' | 'demarches' | 'garanties';
}
