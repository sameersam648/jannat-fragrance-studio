import React from 'react';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface OrderSuccessProps {
  orderId: string;
  paymentId: string;
  amount: number;
  onContinueShopping: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({
  orderId,
  paymentId,
  amount,
  onContinueShopping,
}) => {
  const { state } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-gold-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-playfair font-bold text-charcoal-900 mb-4">
          Order Successful!
        </h1>
        <p className="text-lg text-charcoal-600 mb-8">
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
        </p>

        {/* Order Details */}
        <div className="bg-cream-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-charcoal-900 mb-4">Order Details</h2>
          <div className="space-y-3 text-left">
            <div className="flex justify-between">
              <span className="text-charcoal-600">Order ID:</span>
              <span className="font-medium text-charcoal-900">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-600">Payment ID:</span>
              <span className="font-medium text-charcoal-900">{paymentId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-600">Total Amount:</span>
              <span className="font-bold text-gold-600">{formatPrice(amount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-600">Items:</span>
              <span className="font-medium text-charcoal-900">{state.totalItems}</span>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-cream-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Order Summary</h3>
          <div className="space-y-3">
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="text-left">
                    <p className="font-medium text-charcoal-900">{item.name}</p>
                    <p className="text-sm text-charcoal-500">
                      {item.category} • {item.size} • Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-charcoal-900">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gold-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-charcoal-900 mb-4">What's Next?</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Package className="h-5 w-5 text-gold-600" />
              <span className="text-charcoal-700">We'll process your order within 24 hours</span>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="h-5 w-5 text-gold-600" />
              <span className="text-charcoal-700">You'll receive tracking details via email</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-gold-600" />
              <span className="text-charcoal-700">Expected delivery in 3-5 business days</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={onContinueShopping}
            className="flex-1 bg-gold-600 hover:bg-gold-700 text-white py-3"
          >
            <Home className="h-5 w-5 mr-2" />
            Continue Shopping
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-gold-600 text-gold-600 hover:bg-gold-50 py-3"
            onClick={() => window.print()}
          >
            Download Receipt
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-cream-200">
          <p className="text-sm text-charcoal-500">
            Need help? Contact us at{' '}
            <a href="mailto:support@jannatperfumes.com" className="text-gold-600 hover:text-gold-700">
              support@jannatperfumes.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess; 