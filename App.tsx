import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { ProductCollection } from './components/ProductCollection';
import { TasteRefiner } from './components/TasteRefiner';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { FloatingCheckout } from './components/FloatingCheckout';
import { Product } from './types';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product: Product) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-nutribowl-cream text-nutribowl-dark overflow-x-hidden selection:bg-nutribowl-gold/30">
      <Navbar cartCount={cartCount} />

      <main className="relative">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Process />
        </section>
        <section id="products">
          <ProductCollection onAddToCart={handleAddToCart} />
        </section>
        <TasteRefiner />
        <section id="contact">
          <Newsletter />
        </section>
      </main>

      <Footer />
      <FloatingCheckout count={cartCount} />
    </div>
  );
}

export default App;