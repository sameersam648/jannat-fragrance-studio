
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with luxury gradient */}
      <div className="absolute inset-0 luxury-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gold-200/30 blur-3xl animate-luxury-glow"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-plum-200/30 blur-3xl animate-luxury-glow delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="h-6 w-6 text-gold-600 mr-2" />
              <span className="text-sm font-medium text-charcoal-600 uppercase tracking-wider">
                Luxury Fragrances
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-charcoal-900 mb-6 luxury-text-shadow leading-tight">
              Your Scent.
              <span className="block text-gold-700">Your Signature.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              A drop of paradise in every bottle. Discover our curated collection of premium attars and perfumes, crafted to tell your unique story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-plum-600 text-plum-700 hover:bg-plum-600 hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Customize Perfume
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-cream-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold-700 font-playfair">100+</div>
                <div className="text-sm text-charcoal-600 font-medium">Premium Scents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold-700 font-playfair">50K+</div>
                <div className="text-sm text-charcoal-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold-700 font-playfair">5★</div>
                <div className="text-sm text-charcoal-600 font-medium">Customer Rating</div>
              </div>
            </div>
          </div>
          
          {/* Perfume Bottle Mockup */}
          <div className="relative animate-scale-in delay-300">
            <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[500px]">
              {/* Bottle Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-200/20 to-charcoal-400/30 rounded-t-[40%] rounded-b-lg blur-lg transform translate-y-8"></div>
              
              {/* Main Bottle */}
              <div className="relative w-full h-full bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 rounded-t-[40%] rounded-b-lg overflow-hidden glass-effect shadow-2xl">
                {/* Perfume Liquid */}
                <div className="absolute bottom-0 left-4 right-4 h-4/5 bg-gradient-to-t from-gold-400 via-gold-300 to-gold-200 rounded-t-[35%] rounded-b-md opacity-80"></div>
                
                {/* Bottle Neck */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gradient-to-b from-cream-200 to-cream-300 rounded-sm"></div>
                
                {/* Cap */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-gold-500 to-gold-700 rounded-md shadow-lg"></div>
                
                {/* Label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-white/90 rounded-lg shadow-lg flex flex-col items-center justify-center">
                  <div className="text-xs font-playfair font-bold text-charcoal-800">JANNAT</div>
                  <div className="text-[8px] font-dancing text-gold-600">PERFUMES</div>
                  <div className="text-[6px] text-charcoal-600 mt-1">Premium Collection</div>
                </div>
                
                {/* Highlight */}
                <div className="absolute top-8 left-8 w-4 h-32 bg-white/30 rounded-full blur-sm"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-300/60 rounded-full animate-bounce delay-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-plum-300/60 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
