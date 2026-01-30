
import React, { useState, useMemo, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.tsx';
import ProductCard from './components/ProductCard.tsx';
import ProductModal from './components/ProductModal.tsx';
import Footer from './components/Footer.tsx';
import AdminDashboard from './components/AdminDashboard.tsx';
import AIStylist from './components/AIStylist.tsx';
import { PRODUCTS as INITIAL_PRODUCTS, INITIAL_FOOTER_CONFIG } from './constants.ts';
import { Category, Product, FooterConfig } from './types.ts';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [footerConfig, setFooterConfig] = useState<FooterConfig>(INITIAL_FOOTER_CONFIG);
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [password, setPassword] = useState('');
  const [isCatalogRevealed, setIsCatalogRevealed] = useState(false);
  
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const savedProducts = localStorage.getItem('gold_boss_catalog');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(INITIAL_PRODUCTS);
    }

    const savedFooter = localStorage.getItem('gold_boss_footer_config');
    if (savedFooter) {
      setFooterConfig(JSON.parse(savedFooter));
    }
  }, []);

  const handleUpdateProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('gold_boss_catalog', JSON.stringify(newProducts));
  };

  const handleUpdateFooter = (newConfig: FooterConfig) => {
    setFooterConfig(newConfig);
    localStorage.setItem('gold_boss_footer_config', JSON.stringify(newConfig));
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory, products]);

  const startLongPress = () => {
    timerRef.current = window.setTimeout(() => {
      setShowAuthModal(true);
    }, 3000);
  };

  const endLongPress = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'adm2026') {
      setIsAdminMode(true);
      setShowAuthModal(false);
      setPassword('');
    } else {
      alert('Acesso negado.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col selection:bg-gold/30 relative overflow-x-hidden">
      <div className="ambient-glow" />
      <div className="vignette-overlay" />
      <div className="side-light-beam left-2 md:left-4 opacity-50 md:opacity-100" />
      <div className="side-light-beam right-2 md:right-4 opacity-50 md:opacity-100" />

      {/* Hero Header */}
      <header 
        className={`relative transition-all duration-1000 ease-in-out flex flex-col items-center justify-center overflow-hidden ${
          isCatalogRevealed 
            ? 'h-0 min-h-0 opacity-0 py-0 border-none pointer-events-none absolute w-full' 
            : 'min-h-screen py-10 md:py-20 border-b border-zinc-900 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_75%)] z-50'
        }`}
      >
        {!isCatalogRevealed && (
          <>
            <div className="absolute top-8 flex items-center gap-2 md:gap-4 opacity-60 z-20">
              <div className="h-[1px] w-8 md:w-12 bg-gold-gradient"></div>
              <span className="text-gold text-[7px] md:text-[8px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold whitespace-nowrap">Exclusividade & Poder</span>
              <div className="h-[1px] w-8 md:w-12 bg-gold-gradient"></div>
            </div>
            
            <div 
              onMouseDown={startLongPress}
              onMouseUp={endLongPress}
              onMouseLeave={endLongPress}
              onTouchStart={startLongPress}
              onTouchEnd={endLongPress}
              className="relative z-10 w-full cursor-default select-none flex flex-col items-center justify-center scale-100 md:scale-110 px-4"
            >
              <img 
                src="https://i.postimg.cc/pTqrGnBr/f12aebec-2f44-4274-b18b-0011508b0785.png" 
                alt="Gold Boss Logo" 
                className="w-full max-w-screen-2xl h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] pointer-events-none"
              />

              <button 
                onClick={() => {
                  setIsCatalogRevealed(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="absolute bg-black border border-gold/40 py-4 md:py-5 px-8 md:px-14 shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)] active:scale-95 md:hover:scale-105 transition-all duration-700 group"
              >
                <span className="text-gold font-luxury text-xs md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] group-hover:tracking-[0.5em] transition-all">
                  Exibir Catálogo
                </span>
              </button>
            </div>

            <p className="relative z-20 text-zinc-500 uppercase tracking-[0.6em] md:tracking-[0.8em] font-light mt-6 animate-pulse text-center text-[9px] md:text-xs opacity-60 px-4">
              Handcrafted Signature Collection
            </p>
          </>
        )}
      </header>

      {/* Main Content Reveal Area */}
      {isCatalogRevealed && (
        <div className="flex flex-col flex-grow animate-fade-up">
          <Navbar 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />

          <main className="container mx-auto px-4 md:px-6 py-10 md:py-20 flex-grow relative z-10">
            <div className="mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-900 pb-8 md:pb-10 gap-4 md:gap-6">
              <div className="space-y-1 md:space-y-2">
                <h2 className="font-luxury text-3xl md:text-4xl text-white uppercase tracking-wider">
                  {activeCategory}
                </h2>
                <div className="flex items-center gap-3">
                  <div className="w-6 md:w-8 h-[1px] bg-gold"></div>
                  <p className="text-zinc-600 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">
                    {filteredProducts.length} Peças Magistrais
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-10 md:gap-y-16">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={setSelectedProduct} 
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-32 md:py-40 text-center">
                <div className="w-10 md:w-12 h-[1px] bg-gold/30 mx-auto mb-6 md:mb-8"></div>
                <h3 className="font-luxury text-xl md:text-2xl text-zinc-800 uppercase tracking-widest px-4">Nenhuma peça encontrada no acervo atual</h3>
              </div>
            )}
          </main>

          <Footer 
            config={footerConfig} 
            onLongPressStart={startLongPress}
            onLongPressEnd={endLongPress}
          />
          
          <AIStylist />
        </div>
      )}

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4">
          <div className="bg-zinc-950 border border-gold/30 p-8 md:p-16 max-w-md w-full text-center shadow-[0_0_100px_rgba(212,175,55,0.1)]">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 className="font-luxury text-gold text-xl md:text-2xl mb-8 md:mb-10 uppercase tracking-[0.3em] md:tracking-[0.4em]">Vault Access</h3>
            <form onSubmit={handleAuth} className="space-y-6 md:space-y-8">
              <input 
                type="password" 
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ACCESS KEY"
                className="w-full bg-black border border-zinc-900 p-4 md:p-5 text-white text-center tracking-[0.5em] md:tracking-[1em] focus:border-gold outline-none transition-all placeholder:tracking-widest"
              />
              <div className="flex flex-col gap-3 md:gap-4">
                <button type="submit" className="w-full bg-gold-gradient text-black font-bold py-4 text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:scale-105 transition-transform">Authorize</button>
                <button type="button" onClick={() => setShowAuthModal(false)} className="text-zinc-600 hover:text-white uppercase text-[8px] md:text-[9px] tracking-[0.4em] mt-2 md:mt-4">Abort Connection</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isAdminMode && (
        <AdminDashboard 
          products={products}
          onUpdate={handleUpdateProducts}
          footerConfig={footerConfig}
          onUpdateFooter={handleUpdateFooter}
          onClose={() => setIsAdminMode(false)}
        />
      )}
    </div>
  );
};

export default App;
