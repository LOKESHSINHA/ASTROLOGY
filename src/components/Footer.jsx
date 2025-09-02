import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun, Star, Sparkles, Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, ArrowUp,
  BookOpen, Users, Globe
} from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/', icon: Globe },
    { name: 'Services', path: '/services', icon: BookOpen },
    { name: 'About', path: '/about', icon: Users }
  ];



  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-800 overflow-hidden border-t border-slate-200">
      {/* Light Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Star className="w-1 h-1 text-blue-400 opacity-30" />
          </div>
        ))}

        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-2 h-2 text-purple-400 opacity-20" />
          </div>
        ))}

        {/* Light Gradient Orbs */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-blue-500 bg-gradient-to-br from-slate-700 to-blue-600 flex items-center justify-center relative overflow-hidden shadow-lg">
                    <Sun className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-amber-500 animate-pulse" />
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent relative">
                    Aditya Astrology
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-px bg-gradient-to-r from-amber-400 to-blue-500"></div>
                    <p className="text-sm text-slate-600 font-semibold tracking-wide">Cosmic Guidance & Wisdom</p>
                    <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <div className="w-1 h-1 bg-amber-400 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-slate-700 mb-4 leading-relaxed text-base font-medium">
                  Unlock the mysteries of the cosmos and discover your true path through ancient wisdom and modern insights. Your journey to self-discovery begins here with personalized astrological guidance.
                </p>

                {/* Stylish decorative elements */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-500 animate-pulse" />
                    <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <Star className="w-3 h-3 text-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                </div>

                <div className="text-center">
                  <p className="text-slate-600 text-sm font-medium italic">
                    "Where Ancient Wisdom Meets Modern Life"
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:shadow-lg ${social.color} shadow-sm`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-all duration-300 group text-base font-medium"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900 flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-600" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-slate-700 group hover:text-emerald-700 transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-base">Email Us</p>
                    <a href="mailto:support@adityaastro.in" className="text-sm hover:underline font-medium">
                      support@adityaastro.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700 group hover:text-blue-700 transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-base">Call Us</p>
                    <a href="tel:+919669566651" className="text-sm hover:underline font-medium">
                      +91 9669566651
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700 group hover:text-rose-700 transition-colors">
                  <MapPin className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-base">Visit Us</p>
                    <p className="text-sm font-medium">Korba, Chhattisgarh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-300 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-slate-700 text-base font-semibold">
                  © 2024 Aditya Astrology. All rights reserved.
                </p>
                <p className="text-slate-600 text-sm mt-1 font-medium">
                  Crafted with cosmic energy and modern technology
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="#" className="text-slate-600 hover:text-blue-700 transition-colors font-medium">Privacy Policy</a>
                <span className="text-slate-400">•</span>
                <a href="#" className="text-slate-600 hover:text-blue-700 transition-colors font-medium">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 border-2 border-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;





