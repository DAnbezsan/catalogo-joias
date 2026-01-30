
// types.ts - Essential types for Gold Boss store and AI stylist
export type Category = 'Todos' | 'Correntes' | 'Pulseiras' | 'Pingentes';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  specs?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FooterLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterConfig {
  logoUrl: string;
  copyrightText: string;
  evaluationLinks: FooterLink[];
  serviceLinks: FooterLink[];
  showShareButton: boolean;
}
