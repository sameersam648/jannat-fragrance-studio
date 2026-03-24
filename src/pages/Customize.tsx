import React from 'react';
import Navigation from '@/components/Navigation';
import CustomizationSection from '@/components/CustomizationSection';
import Footer from '@/components/Footer';

const Customize = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <CustomizationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Customize;
