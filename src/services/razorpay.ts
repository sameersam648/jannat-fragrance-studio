declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: {
    [key: string]: string;
  };
  theme?: {
    color?: string;
  };
  handler?: (response: any) => void;
  modal?: {
    ondismiss?: () => void;
  };
}

export interface PaymentSuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export class RazorpayService {
  private static instance: RazorpayService;
  private isLoaded = false;

  private constructor() {}

  public static getInstance(): RazorpayService {
    if (!RazorpayService.instance) {
      RazorpayService.instance = new RazorpayService();
    }
    return RazorpayService.instance;
  }

  public async loadScript(): Promise<void> {
    if (this.isLoaded) return;

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        this.isLoaded = true;
        resolve();
      };
      script.onerror = () => {
        reject(new Error('Failed to load Razorpay script'));
      };
      document.head.appendChild(script);
    });
  }

  public async createOrder(amount: number, currency: string = 'INR'): Promise<string> {
    // In a real application, this would make an API call to your backend
    // For now, we'll simulate the order creation
    const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    return Promise.resolve(orderId);
  }

  public async initiatePayment(
    amount: number,
    currency: string = 'INR',
    items: Array<{ name: string; quantity: number; price: number }>,
    customerName?: string,
    customerEmail?: string,
    customerPhone?: string
  ): Promise<PaymentSuccessResponse> {
    await this.loadScript();

    const orderId = await this.createOrder(amount, currency);
    
    const options: RazorpayOptions = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE', // Replace with your actual key
      amount: amount * 100, // Razorpay expects amount in paise
      currency,
      name: 'Jannat Perfumes',
      description: `Order for ${items.length} item(s)`,
      order_id: orderId,
      prefill: {
        name: customerName,
        email: customerEmail,
        contact: customerPhone,
      },
      notes: {
        items: JSON.stringify(items),
        order_id: orderId,
      },
      theme: {
        color: '#D97706', // Gold color matching your theme
      },
    };

    return new Promise((resolve, reject) => {
      const razorpay = new window.Razorpay({
        ...options,
        handler: (response: PaymentSuccessResponse) => {
          resolve(response);
        },
        modal: {
          ondismiss: () => {
            reject(new Error('Payment cancelled by user'));
          },
        },
      });

      razorpay.open();
    });
  }

  public verifyPayment(
    paymentId: string,
    orderId: string,
    signature: string
  ): boolean {
    // In a real application, this verification should be done on the backend
    // For now, we'll return true as a placeholder
    return true;
  }
}

export default RazorpayService.getInstance(); 