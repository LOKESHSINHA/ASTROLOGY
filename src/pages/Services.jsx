import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Birth Chart Reading',
      description: 'A detailed analysis of your natal chart, revealing your personality traits, strengths, and life path based on the exact time and location of your birth.',
      price: '₹1,999',
      duration: '60 min'
    },
    {
      id: 2,
      title: 'Love & Relationship',
      description: 'Gain insights into your love life, compatibility with your partner, and timing for important relationship decisions.',
      price: '₹1,499',
      duration: '45 min'
    },
    {
      id: 3,
      title: 'Career Guidance',
      description: 'Discover your vocational strengths, ideal career paths, and auspicious times for career changes or new ventures.',
      price: '₹1,799',
      duration: '60 min'
    },
    {
      id: 4,
      title: 'Compatibility Report',
      description: 'Comprehensive analysis of relationship compatibility between you and your partner using detailed astrological charts.',
      price: '₹2,299',
      duration: '75 min'
    },
    {
      id: 5,
      title: 'Annual Forecast',
      description: 'Year-ahead predictions covering all major life areas including career, relationships, health, and finances.',
      price: '₹2,999',
      duration: '90 min'
    },
    {
      id: 6,
      title: 'Spiritual Guidance',
      description: 'Connect with your higher purpose and spiritual path through ancient astrological wisdom and meditation techniques.',
      price: '₹1,899',
      duration: '60 min'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Astrology Services
          </h1>
          <p className="text-xl text-gray-300">
            Professional astrological guidance tailored to your unique needs and questions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-purple-500/30 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                  <service.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/5 border-t border-purple-500/30 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for a free consultation to determine the best reading for your needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
