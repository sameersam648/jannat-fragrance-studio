import React from 'react';
import Navigation from '@/components/Navigation';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
