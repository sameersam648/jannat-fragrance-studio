
import React, { useRef } from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const perfumeNotes = [
  'Oud', 'Rose', 'Amber', 'Musk', 'Citrus', 'Sandalwood', 'Jasmine', 'Patchouli'
];

const Hero = () => {
  // Parallax effect (optional)
  const heroRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const section = heroRef.current;
    if (!section) return;
    const { left, top, width, height } = section.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    section.style.setProperty('--parallax-x', `${x * 20}px`);
    section.style.setProperty('--parallax-y', `${y * 20}px`);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Sparkle Overlay */}
      <div className="pointer-events-none absolute inset-0 z-30">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className={`absolute sparkle sparkle-${i}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      {/* Floating Perfume Notes */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {perfumeNotes.map((note, i) => (
          <div
            key={note}
            className={`absolute perfume-note perfume-note-${i}`}
            style={{
              top: `${10 + Math.random() * 70}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          >
            {note}
          </div>
        ))}
      </div>
      {/* Animated Bokeh Background */}
      <div className="absolute inset-0 luxury-gradient z-0">
        {/* Bokeh circles */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gold-200/40 rounded-full blur-3xl animate-bokeh-move1 parallax-bokeh" />
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-plum-200/40 rounded-full blur-3xl animate-bokeh-move2 parallax-bokeh" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gold-100/30 rounded-full blur-2xl animate-bokeh-move3 parallax-bokeh" />
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-plum-100/30 rounded-full blur-2xl animate-bokeh-move4 parallax-bokeh" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-gold-50/40 to-plum-50/60 pointer-events-none" />
      </div>
      {/* Decorative elements (kept for extra luxury) */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gold-200/30 blur-3xl animate-luxury-glow" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-plum-200/30 blur-3xl animate-luxury-glow delay-1000" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex flex-col items-center lg:items-start mb-6 relative">
              <Sparkles className="h-6 w-6 text-gold-600 mr-2 animate-spin-slow" />
              <span className="text-sm font-medium text-charcoal-600 uppercase tracking-wider">
                Luxury Fragrances
              </span>
              {/* Shimmering "Your Signature." text brought to front */}
              <span className="block animate-gradient-text bg-gradient-to-r from-gold-600 via-plum-500 to-gold-400 bg-clip-text text-transparent font-extrabold shimmer-gradient-text text-4xl md:text-5xl lg:text-6xl mt-8 mb-2 z-40 relative drop-shadow-lg">
                Your Signature.
              </span>
            </div>
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl p-8 inline-block max-w-2xl mx-auto lg:mx-0 border border-gold-100">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-charcoal-900 mb-4 luxury-text-shadow leading-tight">
                Your Scent.
              </h1>
              <div className="text-gold-700 text-lg md:text-xl font-semibold mb-2 tracking-wide animate-fade-in delay-200">
                Elevate your presence with a fragrance as unique as you are.
              </div>
              <p className="text-xl md:text-2xl text-charcoal-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
                A drop of paradise in every bottle. Discover our curated collection of premium attars and perfumes, crafted to tell your unique story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-to-r from-gold-500 to-gold-700 hover:from-gold-600 hover:to-gold-800 text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl ring-2 ring-gold-200/60 focus:ring-4 focus:ring-gold-400/40 animate-glow"
                >
                  <Link to="/explore">
                    Explore Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-plum-600 text-plum-700 hover:bg-plum-600 hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md animate-glow2"
                >
                  <Link to="/customize">Customize Perfume</Link>
                </Button>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-cream-300 glassy-stats">
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
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[500px] bottle-pulse-glow">
              {/* Bottle Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-200/20 to-charcoal-400/30 rounded-t-[40%] rounded-b-lg blur-lg transform translate-y-8" />
              {/* Floating Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-2 rounded-full shadow-lg font-bold text-base flex items-center gap-2 animate-bounce">
                  <Star className="h-4 w-4 text-white" /> Best Seller
                </div>
              </div>
              {/* Main Bottle */}
              <div className="relative w-full h-full bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 rounded-t-[40%] rounded-b-lg overflow-hidden glass-effect shadow-2xl border-4 border-gold-200">
                {/* Perfume Liquid */}
                <div className="absolute bottom-0 left-4 right-4 h-4/5 bg-gradient-to-t from-gold-400 via-gold-300 to-gold-200 rounded-t-[35%] rounded-b-md opacity-80" />
                {/* Bottle Neck */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gradient-to-b from-cream-200 to-cream-300 rounded-sm" />
                {/* Cap */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-gold-500 to-gold-700 rounded-md shadow-lg" />
                {/* Label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-white/90 rounded-lg shadow-lg flex flex-col items-center justify-center border border-gold-100">
                  <div className="text-xs font-playfair font-bold text-charcoal-800">JANNAT</div>
                  <div className="text-[8px] font-dancing text-gold-600">PERFUMES</div>
                  <div className="text-[6px] text-charcoal-600 mt-1">Premium Collection</div>
                </div>
                {/* Highlight */}
                <div className="absolute top-8 left-8 w-4 h-32 bg-white/30 rounded-full blur-sm" />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-300/60 rounded-full animate-bounce delay-500" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-plum-300/60 rounded-full animate-bounce delay-700" />
            </div>
          </div>
        </div>
      </div>
      {/* Animations and effects for bokeh, sparkles, notes, shimmer, glass, and bottle pulse */}
      <style>{`
        @keyframes bokeh-move1 { 0%{transform:translateY(0);} 100%{transform:translateY(30px);} }
        @keyframes bokeh-move2 { 0%{transform:translateY(0);} 100%{transform:translateY(-40px);} }
        @keyframes bokeh-move3 { 0%{transform:translateX(0);} 100%{transform:translateX(40px);} }
        @keyframes bokeh-move4 { 0%{transform:translateX(0);} 100%{transform:translateX(-30px);} }
        .animate-bokeh-move1 { animation: bokeh-move1 6s ease-in-out infinite alternate; }
        .animate-bokeh-move2 { animation: bokeh-move2 7s ease-in-out infinite alternate; }
        .animate-bokeh-move3 { animation: bokeh-move3 8s ease-in-out infinite alternate; }
        .animate-bokeh-move4 { animation: bokeh-move4 5s ease-in-out infinite alternate; }
        .animate-glow { box-shadow: 0 0 24px 4px #f6e27a66, 0 0 0 0 #fff0; }
        .animate-glow2 { box-shadow: 0 0 16px 2px #bfa5e066, 0 0 0 0 #fff0; }
        .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(.39,.575,.565,1) both; }
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px);} 100% { opacity: 1; transform: none; } }
        .animate-spin-slow { animation: spin 4s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        /* Sparkle overlay */
        .sparkle {
          width: 8px; height: 8px; border-radius: 50%;
          background: radial-gradient(circle, #fffbe6 60%, #f6e27a 100%);
          opacity: 0.7;
          filter: blur(0.5px);
          animation: sparkle-fade 2.5s infinite alternate;
        }
        @keyframes sparkle-fade {
          0% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
          100% { opacity: 0.5; transform: scale(1); }
        }
        /* Perfume notes */
        .perfume-note {
          font-size: 1.2rem;
          font-family: 'Playfair Display', serif;
          color: #bfa5e0cc;
          opacity: 0.18;
          filter: blur(1.5px);
          pointer-events: none;
          animation: note-float 8s linear infinite alternate;
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        @keyframes note-float {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.1); }
        }
        /* Shimmering gradient text */
        .shimmer-gradient-text {
          background-size: 200% 100%;
          animation: shimmer-gradient 2.5s linear infinite;
        }
        @keyframes shimmer-gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        /* Bottle pulse glow */
        .bottle-pulse-glow {
          animation: bottle-pulse 2.5s infinite alternate;
        }
        @keyframes bottle-pulse {
          0% { box-shadow: 0 0 0 0 #f6e27a33, 0 0 0 0 #fff0; }
          100% { box-shadow: 0 0 32px 8px #f6e27a55, 0 0 0 0 #fff0; }
        }
        /* Parallax effect for bokeh */
        .parallax-bokeh {
          will-change: transform;
          transform: translate(var(--parallax-x, 0), var(--parallax-y, 0));
        }
        /* Glassy stats section */
        .glassy-stats {
          background: rgba(255,255,255,0.45);
          border-radius: 1.5rem;
          box-shadow: 0 4px 32px 0 #bfa5e033;
          backdrop-filter: blur(8px);
          border: 1.5px solid #f6e27a33;
        }
      `}</style>
    </section>
  );
};

export default Hero;
