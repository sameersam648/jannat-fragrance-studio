# Cart & Razorpay Integration Setup

## Features Implemented

✅ **Cart Functionality**
- Add/remove items from cart
- Update quantities
- Cart data persistence in localStorage
- Cart icon with item count in navigation
- Cart drawer with item summary

✅ **Razorpay Integration**
- Payment gateway integration
- Order creation and payment processing
- Success/failure handling
- Order confirmation page

✅ **UI Components**
- Cart drawer with item list
- Quantity controls
- Price calculations
- Order success page
- Responsive design

## Setup Instructions

### 1. Razorpay Configuration

1. Sign up for a Razorpay account at https://razorpay.com
2. Get your API keys from the Razorpay Dashboard
3. Create a `.env` file in the root directory:

```env
REACT_APP_RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_HERE
REACT_APP_RAZORPAY_KEY_SECRET=YOUR_SECRET_HERE
```

### 2. Backend Integration (Optional)

For production use, you'll need to create a backend API to:
- Create Razorpay orders
- Verify payment signatures
- Store order data
- Handle webhooks

### 3. Usage

1. **Adding to Cart**: Click "Add to Cart" on any product
2. **Viewing Cart**: Click the cart icon in the navigation
3. **Checkout**: Click "Checkout with Razorpay" in the cart
4. **Payment**: Complete payment through Razorpay
5. **Success**: View order confirmation

## File Structure

```
src/
├── contexts/
│   └── CartContext.tsx          # Cart state management
├── components/
│   ├── CartDrawer.tsx           # Cart sidebar
│   ├── OrderSuccess.tsx         # Success page
│   ├── Navigation.tsx           # Updated with cart
│   └── ProductCard.tsx          # Updated with add to cart
├── services/
│   └── razorpay.ts             # Razorpay integration
└── App.tsx                     # Updated with CartProvider
```

## Key Features

### Cart Management
- **Add Items**: Products can be added with selected size
- **Update Quantities**: Increase/decrease quantities in cart
- **Remove Items**: Delete items from cart
- **Persistence**: Cart data saved to localStorage
- **Real-time Updates**: Cart count updates immediately

### Payment Flow
1. User adds items to cart
2. Opens cart drawer
3. Reviews items and total
4. Clicks "Checkout with Razorpay"
5. Razorpay modal opens
6. User completes payment
7. Success page shows order details

### Responsive Design
- Mobile-friendly cart drawer
- Responsive product cards
- Touch-friendly controls
- Optimized for all screen sizes

## Customization

### Styling
- All components use Tailwind CSS
- Consistent with existing design system
- Gold/cream color scheme maintained

### Functionality
- Easy to modify cart behavior
- Razorpay options configurable
- Order success page customizable

## Testing

1. **Test Mode**: Use Razorpay test keys
2. **Test Cards**: Use Razorpay test card numbers
3. **Local Storage**: Cart persists between sessions
4. **Payment Flow**: Test complete checkout process

## Production Considerations

1. **Security**: Move order creation to backend
2. **Webhooks**: Implement payment verification
3. **Error Handling**: Add comprehensive error handling
4. **Analytics**: Track cart and payment events
5. **SEO**: Add meta tags for cart pages

## Support

For issues or questions:
- Check Razorpay documentation
- Review browser console for errors
- Verify environment variables
- Test with different browsers 