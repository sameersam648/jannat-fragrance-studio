
import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Perfume Bottle Illustration */}
          <div className="w-24 h-40 bg-gradient-to-br from-cream-200 via-cream-100 to-white rounded-t-[40%] rounded-b-lg shadow-lg relative">
            {/* Liquid */}
            <div className="absolute bottom-2 left-2 right-2 h-4/5 bg-gradient-to-t from-gold-300 to-gold-200 rounded-t-[35%] rounded-b-sm opacity-70"></div>
            
            {/* Neck */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-cream-200 rounded-sm"></div>
            
            {/* Cap */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-gradient-to-b from-gold-500 to-gold-700 rounded-sm"></div>
            
            {/* Label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-white/90 rounded flex flex-col items-center justify-center">
              <div className="text-[6px] font-bold text-charcoal-800">{name.slice(0, 8)}</div>
              <div className="text-[4px] text-gold-600">{category}</div>
            </div>
          </div>
        </div>

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
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-charcoal-900 font-playfair">
            ₹{prices[selectedSize].price}
          </div>
          {prices.length > 1 && (
            <div className="text-sm text-charcoal-500">
              {prices.map((p, i) => i !== selectedSize && `₹${p.price} (${p.size})`).filter(Boolean).join(', ')}
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-charcoal-800 hover:bg-charcoal-900 text-white transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
