
import React from 'react';
import { Instagram, Facebook, Twitter, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-gold-600 to-gold-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4">
              Stay Fragrant with Our Newsletter
            </h3>
            <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
              Get exclusive access to new launches, special offers, and fragrance tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button 
                className="bg-white text-gold-700 hover:bg-cream-100 font-medium px-8"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-3xl font-playfair font-bold text-white">
                  JANNAT
                </h2>
                <span className="block text-lg font-dancing text-gold-400 -mt-1">PERFUMES</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting luxury fragrances that tell your unique story. 
                A drop of paradise in every bottle.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-gold-400 hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-gold-400 hover:bg-white/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-gold-400 hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-gold-400 hover:bg-white/10">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {['Home', 'Shop All', 'Attars', 'Perfumes', 'Customize', 'About Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Customer Care</h3>
              <ul className="space-y-4">
                {[
                  'Track Your Order',
                  'Shipping Info',
                  'Returns & Exchanges',
                  'Size Guide',
                  'Care Instructions',
                  'FAQ'
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>BTM, 2nd Stage</p>
                    <p>Bangalore, karnataka 560068</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  <a href="tel:+91-9876543210" className="text-gray-300 hover:text-gold-400">
                    +91 95915 18440
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  <a href="mailto:hello@jannatperfumes.com" className="text-gray-300 hover:text-gold-400">
                    @jannatperfumes.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="mt-6">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => window.open('https://wa.me/919591518440', '_blank')}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Jannat Perfumes. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-400">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gold-400">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-gold-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
