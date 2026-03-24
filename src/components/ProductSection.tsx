
import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const attars = [
    {
      name: 'Black Currant',
      category: 'Attar' as const,
      prices: [
        { size: '20ml', price: 399 },
        { size: '30ml', price: 549 },
        { size: '50ml', price: 799 },
        { size: '100ml', price: 1299 }
      ],
      image: '/images/black_current.jpg',
      isBestseller: true
    },
    {
      name: 'Cool Water',
      category: 'Attar' as const,
      prices: [
        { size: '20ml', price: 349 },
        { size: '30ml', price: 499 },
        { size: '50ml', price: 749 },
        { size: '100ml', price: 1249 }
      ],
      image: '/images/cool_water20m.jpg',
      isNew: true
    },
    {
      name: 'White Oud',
      category: 'Attar' as const,
      prices: [
        { size: '20ml', price: 349 },
        { size: '30ml', price: 499 },
        { size: '50ml', price: 749 },
        { size: '100ml', price: 1249 }
      ],
      image: '/images/white_oud.jpg'
    },
    {
      name: 'CR7',
      category: 'Attar' as const,
      prices: [
        { size: '20ml', price: 349 },
        { size: '30ml', price: 499 },
        { size: '50ml', price: 749 },
        { size: '100ml', price: 1249 }
      ],
      image: '/images/cr720ml.jpg'
    },
    {
      name: 'Ameer Al Oud',
      category: 'Attar' as const,
      prices: [
        { size: '20ml', price: 499 },
        { size: '30ml', price: 699 },
        { size: '50ml', price: 999 },
        { size: '100ml', price: 1599 }
      ],
      image: '/images/ameer_al_oud20ml.jpg'
    },
    {
      name: 'Bin Sheik',
      category: 'Attar' as const,
      prices: [
        { size: '20ml', price: 499 },
        { size: '30ml', price: 699 },
        { size: '50ml', price: 999 },
        { size: '100ml', price: 1599 }
      ],
      image: '/images/bin_sheik20ml.jpg'
    },
    {
      name: 'Oud Al Harmain',
      category: 'Attar' as const,
      prices: [
        { size: '20ml', price: 499 },
        { size: '30ml', price: 699 },
        { size: '50ml', price: 999 },
        { size: '100ml', price: 1599 }
      ],
      image: '/images/oud_al_harmain20ml.jpg'
    }
  ];

  const perfumes = [
    {
      name: 'Black Currant',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 399 },
        { size: '30ml', price: 549 },
        { size: '50ml', price: 799 },
        { size: '100ml', price: 1299 }
      ],
      image: '/images/black_current20ml.jpg',
      isBestseller: true
    },
    {
      name: 'Cool Water',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 299 },
        { size: '30ml', price: 399 },
        { size: '50ml', price: 599 },
        { size: '100ml', price: 999 }
      ],
      image: '/images/cool_water8ml.jpg'
    },
    {
      name: 'White Oud',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 349 },
        { size: '30ml', price: 499 },
        { size: '50ml', price: 749 },
        { size: '100ml', price: 1249 }
      ],
      image: '/images/white_oud.jpg',
      isNew: true
    },
    {
      name: 'CR7',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 349 },
        { size: '30ml', price: 499 },
        { size: '50ml', price: 749 },
        { size: '100ml', price: 1249 }
      ],
      image: '/images/cr720ml.jpg'
    },
    {
      name: 'Bling',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 449 },
        { size: '30ml', price: 599 },
        { size: '50ml', price: 849 },
        { size: '100ml', price: 1349 }
      ],
      image: '/images/bling20ml.jpg'
    },
    {
      name: 'Creed Adventus',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 499 },
        { size: '30ml', price: 699 },
        { size: '50ml', price: 999 },
        { size: '100ml', price: 1599 }
      ],
      image: '/images/creed_adventus20ml.jpg'
    },
    {
      name: 'Paris',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 399 },
        { size: '30ml', price: 549 },
        { size: '50ml', price: 799 },
        { size: '100ml', price: 1299 }
      ],
      image: '/images/paris20ml.jpg'
    }
  ];

  return (
    <section id="shop" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 mb-4">
            Our Premium Collection
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of luxury attars and perfumes, 
            each telling a unique story through exquisite scents.
          </p>
        </div>

        {/* Attars Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-playfair font-semibold text-charcoal-900">
              🧴 Premium Attars
            </h3>
            <div className="text-sm text-charcoal-600">
              Traditional • Concentrated • Long-lasting
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {attars.map((product, index) => (
              <div key={index} className="animate-scale-in h-full" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Perfumes Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-playfair font-semibold text-charcoal-900">
              💧 Luxury Perfumes
            </h3>
            <div className="text-sm text-charcoal-600">
              Modern • Sophisticated • Distinctive
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {perfumes.map((product, index) => (
              <div key={index} className="animate-scale-in h-full" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
