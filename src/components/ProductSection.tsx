
import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const attars = [
    {
      name: 'Black Currant',
      category: 'Attar' as const,
      prices: [
        { size: '6ml', price: 199 },
        { size: '3ml', price: 99 }
      ],
      image: '/placeholder-perfume.jpg',
      isBestseller: true
    },
    {
      name: 'Cool Water',
      category: 'Attar' as const,
      prices: [
        { size: '6ml', price: 149 },
        { size: '3ml', price: 79 }
      ],
      image: '/placeholder-perfume.jpg',
      isNew: true
    },
    {
      name: 'White Oud',
      category: 'Attar' as const,
      prices: [
        { size: '6ml', price: 149 },
        { size: '3ml', price: 79 }
      ],
      image: '/placeholder-perfume.jpg'
    },
    {
      name: 'CR7',
      category: 'Attar' as const,
      prices: [
        { size: '6ml', price: 149 },
        { size: '3ml', price: 79 }
      ],
      image: '/placeholder-perfume.jpg'
    }
  ];

  const perfumes = [
    {
      name: 'Black Currant',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 299 },
        { size: '8ml', price: 149 }
      ],
      image: '/placeholder-perfume.jpg',
      isBestseller: true
    },
    {
      name: 'Cool Water',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 199 },
        { size: '8ml', price: 99 }
      ],
      image: '/placeholder-perfume.jpg'
    },
    {
      name: 'White Oud',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 249 },
        { size: '8ml', price: 99 }
      ],
      image: '/placeholder-perfume.jpg',
      isNew: true
    },
    {
      name: 'CR7',
      category: 'Perfume' as const,
      prices: [
        { size: '20ml', price: 249 },
        { size: '8ml', price: 99 }
      ],
      image: '/placeholder-perfume.jpg'
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attars.map((product, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perfumes.map((product, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
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
