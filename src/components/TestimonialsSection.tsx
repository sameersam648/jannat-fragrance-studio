
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'The Black Currant attar is absolutely divine! The scent lasts all day and I receive compliments everywhere I go. Jannat Perfumes has become my go-to brand.',
      product: 'Black Currant Attar'
    },
    {
      name: 'Ahmed Khan',
      location: 'Delhi',
      rating: 5,
      comment: 'Customized a perfume for my wife\'s birthday with her name on it. The quality is exceptional and the personal touch made it extra special. Highly recommended!',
      product: 'Custom White Oud'
    },
    {
      name: 'Sneha Patel',
      location: 'Ahmedabad',
      rating: 5,
      comment: 'The CR7 perfume is fantastic! Great longevity and the bottle design is so elegant. The pricing is very reasonable for such premium quality.',
      product: 'CR7 Perfume'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream-50 to-plum-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made Jannat Perfumes their signature scent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-gold-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-charcoal-600 text-center mb-6 italic leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="text-center border-t border-cream-200 pt-6">
                <h4 className="font-semibold text-charcoal-900 font-playfair">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-charcoal-500 mb-2">{testimonial.location}</p>
                <div className="inline-block bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.product}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-cream-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-700 font-playfair mb-2">50K+</div>
            <div className="text-charcoal-600 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-700 font-playfair mb-2">4.9★</div>
            <div className="text-charcoal-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-700 font-playfair mb-2">100+</div>
            <div className="text-charcoal-600 font-medium">Unique Scents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-700 font-playfair mb-2">24/7</div>
            <div className="text-charcoal-600 font-medium">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
