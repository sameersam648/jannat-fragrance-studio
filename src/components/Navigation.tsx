
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';
import SearchModal from './SearchModal';
import razorpayService from '@/services/razorpay';
import OrderSuccess from './OrderSuccess';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  
  const { state } = useCart();

  // Sample products data for search (you can replace this with your actual products)
  const products = [
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
    },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Shop All', href: '#shop' },
    { name: 'Customize', href: '#customize' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleCheckout = async () => {
    try {
      const items = state.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      }));

      const response = await razorpayService.initiatePayment(
        state.totalAmount,
        'INR',
        items
      );

      // Handle successful payment
      setOrderDetails({
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount: state.totalAmount,
      });
      setShowOrderSuccess(true);
      setIsCartOpen(false);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const handleContinueShopping = () => {
    setShowOrderSuccess(false);
    setOrderDetails(null);
    // Clear cart after successful order
    // This would be handled by the cart context
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal-900">
              JANNAT
              <span className="block text-sm font-dancing text-gold-600 -mt-1">PERFUMES</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-charcoal-700 hover:text-gold-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-charcoal-700 hover:text-gold-600"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-charcoal-700 hover:text-gold-600 relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag className="h-5 w-5" />
              {state.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-cream-200">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-charcoal-700 hover:text-gold-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-cream-200">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-charcoal-700"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-charcoal-700" onClick={() => setIsCartOpen(true)}>
                <ShoppingBag className="h-5 w-5" />
                {state.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
      />

      {/* Order Success Modal */}
      {showOrderSuccess && orderDetails && (
        <OrderSuccess
          orderId={orderDetails.orderId}
          paymentId={orderDetails.paymentId}
          amount={orderDetails.amount}
          onContinueShopping={handleContinueShopping}
        />
      )}
    </nav>
  );
};

export default Navigation;
