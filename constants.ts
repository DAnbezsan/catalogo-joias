
// constants.ts - Configuração inicial do acervo e rodapé
import { Product, Category, FooterConfig } from './types.ts';

export const CATEGORIES: Category[] = ['Todos', 'Correntes', 'Pulseiras', 'Pingentes'];

// Produtos iniciais para evitar catálogo vazio no GitHub Pages
export const PRODUCTS: Product[] = [
  {
    id: 101,
    name: "Corrente Grumet Imperial 12mm",
    category: "Correntes",
    price: 0,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop",
    description: "Malha Grumet com banho de 10 camadas em Ouro 18k. O ápice da presença masculina.",
    specs: ["Espessura: 12mm", "Banho: Ouro 18k (10 camadas)", "Fecho: Gaveta Dupla", "Garantia: 1 Ano"],
    isNew: true
  },
  {
    id: 102,
    name: "Pulseira Rivier Diamond Gold",
    category: "Pulseiras",
    price: 0,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    description: "Elegância discreta com brilho absoluto. Pedras cravejadas individualmente em estrutura banhada.",
    specs: ["Pedras: Zircônias Premium", "Banho: Ouro 18k", "Estilo: Rivier Tradicional"],
    isNew: true
  },
  {
    id: 103,
    name: "Pingente Leão de Judá",
    category: "Pingentes",
    price: 0,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    description: "Símbolo de força e liderança. Detalhes em alto relevo com acabamento fosco e brilhante.",
    specs: ["Material: Liga Nobre", "Acabamento: Polimento Manual", "Detalhe: Escultura 3D"],
    isNew: false
  }
];

export const INITIAL_FOOTER_CONFIG: FooterConfig = {
  logoUrl: 'https://i.postimg.cc/pTqrGnBr/f12aebec-2f44-4274-b18b-0011508b0785.png',
  copyrightText: '© 2024 Gold Boss - Handcrafted for Leaders.',
  evaluationLinks: [
    { id: '1', label: 'Avaliar no Google', url: '#' },
    { id: '2', label: 'Avaliar atendimento', url: '#' }
  ],
  serviceLinks: [
    { id: '3', label: 'Instagram', url: '#' },
    { id: '4', label: 'WhatsApp Vendas', url: '#' },
    { id: '5', label: 'Suporte e Garantia', url: '#' }
  ],
  showShareButton: true
};
