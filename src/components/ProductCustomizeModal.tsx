import React, { useState } from 'react';
import { X, Palette, Sparkles, Type, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';

interface Product {
  name: string;
  category: 'Attar' | 'Perfume';
  prices: { size: string; price: number }[];
  image: string;
}

interface ProductCustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const bottleShapes = ['Classic', 'Modern', 'Vintage'];
const stickerDesigns = ['Minimal', 'Floral', 'Calligraphy'];
const labelColors = ['Black', 'Gold', 'White', 'Custom'];
const fontStyles = ['Elegant Serif', 'Arabic Calligraphy', 'Modern Sans'];
const concentrations = [
  { name: 'Standard', price: 0 },
  { name: '31-35%', price: 100 },
  { name: '36-40%', price: 150 }
];

const ProductCustomizeModal: React.FC<ProductCustomizeModalProps> = ({ isOpen, onClose, product }) => {
  const [customization, setCustomization] = useState({
    bottleShape: 'Classic',
    stickerDesign: 'Minimal',
    labelColor: 'Gold',
    fontStyle: 'Elegant Serif',
    concentration: 'Standard',
    customerName: '',
    size: product.prices[0].size,
  });
  const [selectedSize, setSelectedSize] = useState(0);
  const { addItem } = useCart();

  const updateCustomization = (key: string, value: string) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
  };

  const handleAddToCart = () => {
    const concPrice = concentrations.find(c => c.name === customization.concentration)?.price || 0;
    const basePrice = product.prices[selectedSize].price;
    addItem({
      id: `${product.name}-${customization.size}-${customization.bottleShape}-${customization.stickerDesign}-${customization.labelColor}-${customization.fontStyle}-${customization.concentration}-${customization.customerName}`,
      name: product.name + ' (Customized)',
      category: product.category,
      size: customization.size,
      price: basePrice + concPrice,
      image: product.image,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-scale-in">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 text-charcoal-600 hover:text-charcoal-900"
          >
            <X className="h-5 w-5" />
          </Button>
          <h2 className="text-2xl font-bold text-charcoal-900 mb-6 text-center font-playfair">
            Customize {product.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Customization Options */}
            <div className="space-y-6">
              {/* Size */}
              <div>
                <Label className="text-lg font-semibold text-charcoal-900 mb-2 block">Size</Label>
                <div className="flex gap-2 flex-wrap">
                  {product.prices.map((option, idx) => (
                    <button
                      key={option.size}
                      onClick={() => {
                        setSelectedSize(idx);
                        updateCustomization('size', option.size);
                      }}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        selectedSize === idx
                          ? 'bg-gold-600 text-white border-gold-600'
                          : 'bg-white text-charcoal-600 border-cream-300 hover:border-gold-400'
                      }`}
                    >
                      {option.size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Bottle Shape */}
              <div>
                <Label className="text-lg font-semibold text-charcoal-900 mb-2 block">Bottle Shape</Label>
                <div className="flex gap-2 flex-wrap">
                  {bottleShapes.map((shape) => (
                    <button
                      key={shape}
                      onClick={() => updateCustomization('bottleShape', shape)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        customization.bottleShape === shape
                          ? 'bg-gold-600 text-white border-gold-600'
                          : 'bg-white text-charcoal-600 border-cream-300 hover:border-gold-400'
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>
              {/* Sticker Design */}
              <div>
                <Label className="text-lg font-semibold text-charcoal-900 mb-2 block">Sticker Design</Label>
                <div className="flex gap-2 flex-wrap">
                  {stickerDesigns.map((design) => (
                    <button
                      key={design}
                      onClick={() => updateCustomization('stickerDesign', design)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        customization.stickerDesign === design
                          ? 'bg-gold-600 text-white border-gold-600'
                          : 'bg-white text-charcoal-600 border-cream-300 hover:border-gold-400'
                      }`}
                    >
                      {design}
                    </button>
                  ))}
                </div>
              </div>
              {/* Label Color */}
              <div>
                <Label className="text-lg font-semibold text-charcoal-900 mb-2 block">Label Color</Label>
                <div className="flex gap-2 flex-wrap">
                  {labelColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => updateCustomization('labelColor', color)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        customization.labelColor === color
                          ? 'bg-gold-600 text-white border-gold-600'
                          : 'bg-white text-charcoal-600 border-cream-300 hover:border-gold-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              {/* Font Style */}
              <div>
                <Label className="text-lg font-semibold text-charcoal-900 mb-2 block">Font Style</Label>
                <div className="flex gap-2 flex-wrap">
                  {fontStyles.map((font) => (
                    <button
                      key={font}
                      onClick={() => updateCustomization('fontStyle', font)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        customization.fontStyle === font
                          ? 'bg-gold-600 text-white border-gold-600'
                          : 'bg-white text-charcoal-600 border-cream-300 hover:border-gold-400'
                      }`}
                    >
                      {font}
                    </button>
                  ))}
                </div>
              </div>
              {/* Concentration */}
              <div>
                <Label className="text-lg font-semibold text-charcoal-900 mb-2 block">Concentration</Label>
                <div className="flex gap-2 flex-wrap">
                  {concentrations.map((conc) => (
                    <button
                      key={conc.name}
                      onClick={() => updateCustomization('concentration', conc.name)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        customization.concentration === conc.name
                          ? 'bg-gold-600 text-white border-gold-600'
                          : 'bg-white text-charcoal-600 border-cream-300 hover:border-gold-400'
                      }`}
                    >
                      {conc.name} {conc.price > 0 && `(+₹${conc.price})`}
                    </button>
                  ))}
                </div>
              </div>
              {/* Customer Name */}
              <div>
                <Label htmlFor="customerName" className="text-lg font-semibold text-charcoal-900 mb-2 block">
                  Name on Bottle
                </Label>
                <Input
                  id="customerName"
                  placeholder="Enter your name or message"
                  value={customization.customerName}
                  onChange={(e) => updateCustomization('customerName', e.target.value)}
                  className="text-base p-2"
                />
              </div>
            </div>
            {/* Live Preview & Summary */}
            <div>
              <div className="bg-cream-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-4 text-center">Live Preview</h3>
                <div className="relative mx-auto w-40 h-52 mb-4">
                  <div className="relative w-full h-full bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 rounded-t-[40%] rounded-b-lg overflow-hidden glass-effect shadow-xl">
                    {/* Perfume Liquid */}
                    <div className="absolute bottom-0 left-4 right-4 h-4/5 bg-gradient-to-t from-gold-400 via-gold-300 to-gold-200 rounded-t-[35%] rounded-b-md opacity-80"></div>
                    {/* Bottle variations based on shape */}
                    {customization.bottleShape === 'Modern' && (
                      <div className="absolute inset-2 rounded-lg border border-white/30"></div>
                    )}
                    {customization.bottleShape === 'Vintage' && (
                      <div className="absolute top-8 left-8 right-8 h-4 bg-gold-300/50 rounded-full"></div>
                    )}
                    {/* Bottle Neck */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gradient-to-b from-cream-200 to-cream-300 rounded-sm"></div>
                    {/* Cap */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-gold-500 to-gold-700 rounded-md shadow-lg"></div>
                    {/* Custom Label */}
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-14 rounded-lg shadow-lg flex flex-col items-center justify-center ${
                      customization.labelColor === 'Black' ? 'bg-charcoal-800 text-white' :
                      customization.labelColor === 'Gold' ? 'bg-gold-100 text-charcoal-800 border border-gold-300' :
                      customization.labelColor === 'White' ? 'bg-white text-charcoal-800 border border-cream-200' :
                      'bg-plum-100 text-plum-800 border border-plum-200'
                    }`}>
                      <div className={`text-xs font-bold ${
                        customization.fontStyle === 'Elegant Serif' ? 'font-playfair' :
                        customization.fontStyle === 'Arabic Calligraphy' ? 'font-dancing' :
                        'font-inter'
                      }`}>
                        {product.name}
                      </div>
                      <div className="text-[8px] font-dancing text-gold-600">{product.category}</div>
                      {customization.customerName && (
                        <div className={`text-[8px] mt-1 ${
                          customization.fontStyle === 'Elegant Serif' ? 'font-playfair' :
                          customization.fontStyle === 'Arabic Calligraphy' ? 'font-dancing' :
                          'font-inter'
                        }`}>
                          {customization.customerName}
                        </div>
                      )}
                      <div className="text-[6px] mt-1 opacity-70">Custom Edition</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-xs text-charcoal-600">
                  <div><strong>Shape:</strong> {customization.bottleShape}</div>
                  <div><strong>Design:</strong> {customization.stickerDesign}</div>
                  <div><strong>Label:</strong> {customization.labelColor}</div>
                  <div><strong>Font:</strong> {customization.fontStyle}</div>
                  <div><strong>Concentration:</strong> {customization.concentration}</div>
                  <div><strong>Size:</strong> {customization.size}</div>
                  {customization.customerName && (
                    <div><strong>Name:</strong> {customization.customerName}</div>
                  )}
                </div>
                <div className="text-center mt-4">
                  <div className="text-lg font-bold text-gold-600">
                    ₹{product.prices[selectedSize].price + (concentrations.find(c => c.name === customization.concentration)?.price || 0)}
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full bg-gold-600 hover:bg-gold-700 text-white transition-all duration-300 transform hover:scale-105"
                onClick={handleAddToCart}
              >
                Add Customized Product to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCustomizeModal; 