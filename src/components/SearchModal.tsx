import React, { useState, useEffect } from 'react';
import { X, Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';

interface Product {
  name: string;
  category: 'Attar' | 'Perfume';
  prices: { size: string; price: number }[];
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery, products]);

  const handleAddToCart = (product: Product, sizeIndex: number = 0) => {
    addItem({
      id: `${product.name}-${product.prices[sizeIndex].size}`,
      name: product.name,
      category: product.category,
      size: product.prices[sizeIndex].size,
      price: product.prices[sizeIndex].price,
      image: product.image,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Search Modal */}
      <div className={`fixed top-0 left-0 right-0 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cream-200">
          <div className="flex items-center space-x-3">
            <Search className="h-6 w-6 text-gold-600" />
            <h2 className="text-xl font-semibold text-charcoal-900">Search Products</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-charcoal-600 hover:text-charcoal-900"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Input */}
        <div className="p-6 border-b border-cream-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
            <Input
              type="text"
              placeholder="Search for perfumes, attars, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-cream-300 focus:border-gold-500 focus:ring-gold-500"
              autoFocus
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() === '' ? (
            <div className="p-6 text-center text-charcoal-500">
              <Search className="h-12 w-12 mx-auto mb-4 text-cream-400" />
              <p>Start typing to search for products...</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-6 text-center text-charcoal-500">
              <p>No products found for "{searchQuery}"</p>
              <p className="text-sm mt-2">Try searching for different keywords</p>
            </div>
          ) : (
            <div className="p-6">
              <p className="text-sm text-charcoal-600 mb-4">
                Found {searchResults.length} product{searchResults.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((product, index) => (
                  <div key={index} className="bg-cream-50 rounded-lg p-4 border border-cream-200">
                    <div className="flex items-start space-x-3">
                      {/* Product Image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      
                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-charcoal-900 truncate">
                          {product.name}
                        </h3>
                        <p className="text-sm text-charcoal-500 capitalize">
                          {product.category}
                        </p>
                        <p className="text-sm font-semibold text-gold-600 mt-1">
                          Starting from {formatPrice(product.prices[0].price)}
                        </p>
                        
                        {/* Quick Add Button */}
                        <Button
                          size="sm"
                          className="mt-2 bg-gold-600 hover:bg-gold-700 text-white"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchModal; 