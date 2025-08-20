
import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import ProductCustomizeModal from './ProductCustomizeModal';

interface ProductCardProps {
  name: string;
  category: 'Attar' | 'Perfume';
  prices: { size: string; price: number }[];
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  category, 
  prices, 
  image, 
  isNew = false, 
  isBestseller = false 
}) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();
  const [showCustomize, setShowCustomize] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <Badge className="bg-gold-600 hover:bg-gold-700 text-white">
            NEW
          </Badge>
        )}
        {isBestseller && (
          <Badge className="bg-plum-600 hover:bg-plum-700 text-white">
            BESTSELLER
          </Badge>
        )}
      </div>

      {/* Like Button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart 
          className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-charcoal-600'}`} 
        />
      </Button>

      {/* Product Image */}
      <div className="relative h-64 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            className="bg-white/90 hover:bg-white text-charcoal-800"
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="text-xs font-medium text-gold-600 mb-1 uppercase tracking-wider">
          {category}
        </div>
        
        <h3 className="font-playfair font-semibold text-xl text-charcoal-900 mb-3">
          {name}
        </h3>

        {/* Size Selection */}
        <div className="mb-4">
          <div className="text-sm font-medium text-charcoal-700 mb-2">Size:</div>
          <div className="flex gap-2">
            {prices.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(index)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  selectedSize === index
                    ? 'bg-gold-600 text-white border-gold-600'
                    : 'bg-white text-charcoal-600 border-cream-300 hover:border-gold-400'
                }`}
              >
                {option.size}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-2xl font-bold text-charcoal-900 font-playfair">
            ₹{prices[selectedSize].price}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            className="flex-1 bg-charcoal-800 hover:bg-charcoal-900 text-white transition-all duration-300 transform hover:scale-105"
            size="lg"
            onClick={() => {
              addItem({
                id: `${name}-${prices[selectedSize].size}`,
                name,
                category,
                size: prices[selectedSize].size,
                price: prices[selectedSize].price,
                image,
              });
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105 p-3"
            size="lg"
            onClick={() => {
              const message = `Hi! I'm interested in ${name} (${prices[selectedSize].size}) - ₹${prices[selectedSize].price}. Can you provide more details?`;
              const whatsappUrl = `https://wa.me/919591518440?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </Button>
          <Button
            className="bg-gold-600 hover:bg-gold-700 text-white transition-all duration-300 transform hover:scale-105"
            size="lg"
            onClick={() => setShowCustomize(true)}
          >
            Customize
          </Button>
        </div>
        <ProductCustomizeModal
          isOpen={showCustomize}
          onClose={() => setShowCustomize(false)}
          product={{ name, category, prices, image }}
        />

      </div>
    </div>
  );
};

export default ProductCard;
