import React, { useState } from 'react';
import { Star, Heart, Users, Quote, Calendar, MapPin, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      service: "Birth Chart Reading",
      category: "birth-chart",
      rating: 5,
      text: "Master Aditya's birth chart reading was incredibly accurate and insightful. It helped me understand my life purpose and make important career decisions with confidence. The detailed analysis revealed aspects of my personality I never knew existed.",
      date: "March 2024",
      image: "PS"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, India",
      service: "Love & Relationship",
      category: "relationship",
      rating: 5,
      text: "The relationship compatibility reading saved my marriage. The guidance provided was practical and helped us understand each other better. We learned about our communication patterns and how to strengthen our bond.",
      date: "February 2024",
      image: "RK"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Bangalore, India",
      service: "Career Guidance",
      category: "career",
      rating: 5,
      text: "The career guidance session was a turning point in my professional life. I got promoted within 3 months of following the suggested timing and remedies. The insights about my professional strengths were spot-on.",
      date: "January 2024",
      image: "AP"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur, India",
      service: "Business Consultation",
      category: "career",
      rating: 5,
      text: "Started my business based on the auspicious timing suggested by Master Aditya. The venture has been incredibly successful, and I attribute much of it to the cosmic guidance received. The muhurat selection was perfect.",
      date: "December 2023",
      image: "VS"
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Chennai, India",
      service: "Spiritual Guidance",
      category: "spiritual",
      rating: 5,
      text: "The spiritual guidance sessions helped me find inner peace and connect with my higher self. The meditation techniques and remedies suggested have transformed my daily life. I feel more aligned with my purpose.",
      date: "November 2023",
      image: "MR"
    },
    {
      id: 6,
      name: "Arjun Gupta",
      location: "Pune, India",
      service: "Vedic Consultation",
      category: "vedic",
      rating: 5,
      text: "The Vedic consultation provided deep insights into my life patterns. The gemstone recommendations have brought positive changes, and the mantras suggested have enhanced my spiritual practice significantly.",
      date: "October 2023",
      image: "AG"
    },
    {
      id: 7,
      name: "Kavya Nair",
      location: "Kochi, India",
      service: "Marriage Matching",
      category: "relationship",
      rating: 5,
      text: "The marriage compatibility analysis was thorough and accurate. It helped both families understand the cosmic connection between us. We're now happily married and grateful for the guidance received.",
      date: "September 2023",
      image: "KN"
    },
    {
      id: 8,
      name: "Rohit Agarwal",
      location: "Kolkata, India",
      service: "Health Astrology",
      category: "health",
      rating: 5,
      text: "The health astrology consultation identified potential health concerns before they manifested. Following the suggested remedies and lifestyle changes has significantly improved my well-being and energy levels.",
      date: "August 2023",
      image: "RA"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Testimonials', icon: Users },
    { id: 'birth-chart', name: 'Birth Chart', icon: Star },
    { id: 'relationship', name: 'Relationships', icon: Heart },
    { id: 'career', name: 'Career', icon: Calendar },
    { id: 'spiritual', name: 'Spiritual', icon: Sparkles },
    { id: 'vedic', name: 'Vedic', icon: Quote },
    { id: 'health', name: 'Health', icon: Heart }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-blue-200 shadow-lg">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Real Stories, Real Transformations</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Client Testimonials
            </h1>
            
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover how our astrological guidance has transformed lives and provided clarity to thousands of seekers across the globe. Read authentic experiences from our valued clients.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 text-slate-700 border border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                      <div className="flex items-center gap-1 text-slate-600 text-sm">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">{testimonial.date}</div>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {testimonial.service}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                  <p className="text-slate-700 leading-relaxed text-justify italic pl-4">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold text-sm">Verified Client</span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/80 rounded-2xl p-6 border border-blue-200 shadow-lg">
              <div className="text-3xl font-bold text-blue-700 mb-2">50K+</div>
              <div className="text-slate-700 font-semibold">Happy Clients</div>
            </div>
            <div className="text-center bg-white/80 rounded-2xl p-6 border border-purple-200 shadow-lg">
              <div className="text-3xl font-bold text-purple-700 mb-2">1M+</div>
              <div className="text-slate-700 font-semibold">Readings Done</div>
            </div>
            <div className="text-center bg-white/80 rounded-2xl p-6 border border-emerald-200 shadow-lg">
              <div className="text-3xl font-bold text-emerald-700 mb-2">4.9★</div>
              <div className="text-slate-700 font-semibold">Average Rating</div>
            </div>
            <div className="text-center bg-white/80 rounded-2xl p-6 border border-orange-200 shadow-lg">
              <div className="text-3xl font-bold text-orange-700 mb-2">15+</div>
              <div className="text-slate-700 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-200 shadow-xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have found clarity and direction through our astrological guidance.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
              Book Your Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
