import React, { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { CartItem } from '@/contexts/CartContext';
import { resolveAssetUrl } from '@/lib/utils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, onCheckout }) => {
  const { state, removeItem, updateQuantity } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
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

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl border-l-4 border-gold-600 z-[9999] transform transition-transform duration-300 ease-in-out backdrop-blur-none ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cream-200 bg-white">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="h-6 w-6 text-gold-600" />
            <h2 className="text-xl font-semibold text-charcoal-900">Shopping Cart</h2>
            {state.totalItems > 0 && (
              <span className="bg-gold-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {state.totalItems}
              </span>
            )}
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

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 bg-cream-50">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-cream-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-charcoal-600 mb-2">Your cart is empty</h3>
              <p className="text-charcoal-500">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex space-x-4 p-4 bg-cream-50 rounded-lg">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={resolveAssetUrl(item.image)}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-charcoal-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-500 capitalize">
                      {item.category} • {item.size}
                    </p>
                    <p className="text-sm font-semibold text-gold-600 mt-1">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="text-sm font-medium text-charcoal-900 min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-cream-200 p-6 space-y-4 bg-white">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-charcoal-900">Subtotal</span>
              <span className="text-xl font-bold text-charcoal-900">
                {formatPrice(state.totalAmount)}
              </span>
            </div>

            {/* Shipping Info */}
            <div className="text-sm text-charcoal-600 bg-cream-50 p-3 rounded-lg">
              <p>Free shipping on orders above ₹999</p>
              <p className="text-xs mt-1">
                {state.totalAmount >= 999 
                  ? '✓ Free shipping applied' 
                  : `Add ₹${999 - state.totalAmount} more for free shipping`
                }
              </p>
            </div>

            {/* Checkout Button */}
            <Button
              onClick={onCheckout}
              className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 text-lg font-medium"
            >
              Checkout with Razorpay
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer; 