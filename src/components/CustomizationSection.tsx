
import React, { useState } from 'react';
import { Palette, Sparkles, Type, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CustomizationSection = () => {
  const [customization, setCustomization] = useState({
    bottleShape: 'Classic',
    stickerDesign: 'Minimal',
    labelColor: 'Gold',
    fontStyle: 'Elegant Serif',
    customerName: ''
  });

  const bottleShapes = ['Classic', 'Modern', 'Vintage'];
  const stickerDesigns = ['Minimal', 'Floral', 'Calligraphy'];
  const labelColors = ['Black', 'Gold', 'White', 'Custom'];
  const fontStyles = ['Elegant Serif', 'Arabic Calligraphy', 'Modern Sans'];

  const updateCustomization = (key: string, value: string) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section id="customize" className="py-20 bg-gradient-to-br from-plum-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 mb-4">
            Craft Your Signature Fragrance
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Personalize every detail of your perfume bottle to create something uniquely yours. 
            From bottle shape to custom labels, make it truly special.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Customization Options */}
          <div className="space-y-8 animate-slide-up">
            {/* Bottle Shape */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Package className="h-6 w-6 text-gold-600 mr-3" />
                <h3 className="text-xl font-semibold text-charcoal-900">Bottle Shape</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {bottleShapes.map((shape) => (
                  <button
                    key={shape}
                    onClick={() => updateCustomization('bottleShape', shape)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      customization.bottleShape === shape
                        ? 'border-gold-600 bg-gold-50 text-gold-700'
                        : 'border-cream-200 hover:border-gold-400 text-charcoal-600'
                    }`}
                  >
                    <div className="text-sm font-medium">{shape}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Sticker Design */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-gold-600 mr-3" />
                <h3 className="text-xl font-semibold text-charcoal-900">Sticker Design</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {stickerDesigns.map((design) => (
                  <button
                    key={design}
                    onClick={() => updateCustomization('stickerDesign', design)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      customization.stickerDesign === design
                        ? 'border-gold-600 bg-gold-50 text-gold-700'
                        : 'border-cream-200 hover:border-gold-400 text-charcoal-600'
                    }`}
                  >
                    <div className="text-sm font-medium">{design}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Label Color */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Palette className="h-6 w-6 text-gold-600 mr-3" />
                <h3 className="text-xl font-semibold text-charcoal-900">Label Color</h3>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {labelColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => updateCustomization('labelColor', color)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      customization.labelColor === color
                        ? 'border-gold-600 bg-gold-50 text-gold-700'
                        : 'border-cream-200 hover:border-gold-400 text-charcoal-600'
                    }`}
                  >
                    <div className="text-sm font-medium">{color}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Style */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Type className="h-6 w-6 text-gold-600 mr-3" />
                <h3 className="text-xl font-semibold text-charcoal-900">Font Style</h3>
              </div>
              <div className="space-y-3">
                {fontStyles.map((font) => (
                  <button
                    key={font}
                    onClick={() => updateCustomization('fontStyle', font)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      customization.fontStyle === font
                        ? 'border-gold-600 bg-gold-50 text-gold-700'
                        : 'border-cream-200 hover:border-gold-400 text-charcoal-600'
                    }`}
                  >
                    <div className={`text-sm font-medium ${
                      font === 'Elegant Serif' ? 'font-playfair' :
                      font === 'Arabic Calligraphy' ? 'font-dancing' :
                      'font-inter'
                    }`}>{font}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Name */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Label htmlFor="customerName" className="text-xl font-semibold text-charcoal-900 mb-4 block">
                Name on Bottle
              </Label>
              <Input
                id="customerName"
                placeholder="Enter your name or message"
                value={customization.customerName}
                onChange={(e) => updateCustomization('customerName', e.target.value)}
                className="text-lg p-4"
              />
            </div>
          </div>

          {/* Live Preview */}
          <div className="animate-scale-in delay-300">
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <h3 className="text-2xl font-semibold text-charcoal-900 mb-6 text-center">
                Live Preview
              </h3>
              
              {/* Bottle Preview */}
              <div className="relative mx-auto w-64 h-80 mb-8">
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
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-24 rounded-lg shadow-lg flex flex-col items-center justify-center ${
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
                      JANNAT
                    </div>
                    <div className="text-[8px] font-dancing text-gold-600">PERFUMES</div>
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

              {/* Customization Summary */}
              <div className="space-y-2 text-sm text-charcoal-600 mb-6">
                <div><strong>Shape:</strong> {customization.bottleShape}</div>
                <div><strong>Design:</strong> {customization.stickerDesign}</div>
                <div><strong>Label:</strong> {customization.labelColor}</div>
                <div><strong>Font:</strong> {customization.fontStyle}</div>
                {customization.customerName && (
                  <div><strong>Name:</strong> {customization.customerName}</div>
                )}
              </div>

              {/* Price and Order */}
              <div className="text-center">
                <div className="text-2xl font-bold text-charcoal-900 font-playfair mb-4">
                  ₹399 <span className="text-sm text-charcoal-500 font-medium">+ base perfume</span>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-plum-600 hover:bg-plum-700 text-white transition-all duration-300 transform hover:scale-105"
                >
                  Create Custom Perfume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;
