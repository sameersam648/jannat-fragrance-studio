
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import CustomizationSection from '@/components/CustomizationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductSection />
      <CustomizationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
