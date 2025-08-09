


import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, ChevronDown, Star, Heart, Calendar, User, Phone, BookOpen, Sparkles } from 'lucide-react';

const HomeNavbar = ({ title = 'Aditya Astrology' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const servicesDropdown = [
    { name: 'Birth Chart Reading', icon: Star, path: '/services/birth-chart', desc: 'Complete natal chart analysis' },
    { name: 'Love & Relationship', icon: Heart, path: '/services/love', desc: 'Romantic compatibility insights' },
    { name: 'Career Guidance', icon: BookOpen, path: '/services/career', desc: 'Professional path guidance' },
    { name: 'Daily Horoscope', icon: Calendar, path: '/horoscope', desc: 'Personalized daily predictions' }
  ];

  const aboutDropdown = [
    { name: 'About Aditya', icon: User, path: '/about/aditya', desc: 'Meet our expert astrologer' },
    { name: 'Our Story', icon: Star, path: '/about/story', desc: 'Journey of cosmic wisdom' },
    { name: 'Testimonials', icon: Heart, path: '/about/testimonials', desc: 'What clients say' },
    { name: 'Contact Us', icon: Phone, path: '/contact', desc: 'Get in touch with us' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled
        ? 'bg-slate-900/80 backdrop-blur-md border-b border-[#8093f1]/30 shadow-lg'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4" ref={dropdownRef}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Main Sun Icon */}
              <div className="w-12 h-12 rounded-full border-2 border-orange-400/60 bg-gradient-to-br from-orange-400/70 to-red-500/70 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-orange-400/50 transition-all duration-300">
                <Sun className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '8s' }} />
                {/* Animated rays */}
                <div className="absolute inset-0 rounded-full">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-300/80 rounded-full animate-pulse"
                      style={{
                        top: '2px',
                        left: '50%',
                        transformOrigin: '0 22px',
                        transform: `translateX(-50%) rotate(${i * 45}deg)`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Floating sparkles */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-500/90 to-blue-500/90 rounded-full flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm shadow-lg">
                A
              </div>
              <Sparkles className="absolute -top-2 -left-2 w-4 h-4 text-purple-400/70 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#ffd9ce] via-[#f5cb5c] to-[#8093f1] bg-clip-text text-transparent drop-shadow-lg">
                {title}
              </span>
              <span className="text-xs text-white/70 -mt-1 font-medium">Cosmic Guidance & Wisdom</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-white/90 hover:text-[#f5cb5c] transition-all duration-300 font-medium py-2 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f5cb5c] to-[#8093f1] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            
            {/* Services Dropdown */}
            <li className="relative">
              <button
                className="flex items-center gap-1 text-white/90 hover:text-[#f5cb5c] transition-all duration-300 font-medium py-2 group"
                onClick={() => handleDropdownToggle('services')}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f5cb5c] to-[#8093f1] group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-slate-900/95 backdrop-blur-xl border border-[#8093f1]/30 rounded-2xl shadow-2xl py-4 z-50 animate-fadeIn">
                  {servicesDropdown.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="flex items-start gap-3 px-6 py-3 hover:bg-white/10 transition-all duration-300 group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-10 h-10 bg-[#f5cb5c]/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#f5cb5c]/30 transition-all duration-300 border border-[#f5cb5c]/30">
                        <item.icon className="w-5 h-5 text-[#f5cb5c]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-[#ffd9ce] transition-colors">{item.name}</h3>
                        <p className="text-sm text-white/60">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link 
                to="/horoscope" 
                className="text-white/90 hover:text-orange-400 transition-all duration-300 font-medium py-2 relative group"
              >
                Horoscope
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            <li>
              <Link 
                to="/blog" 
                className="text-white/90 hover:text-orange-400 transition-all duration-300 font-medium py-2 relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="relative">
              <button
                className="flex items-center gap-1 text-white/90 hover:text-orange-400 transition-all duration-300 font-medium py-2 group"
                onClick={() => handleDropdownToggle('about')}
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-4 z-50 animate-fadeIn">
                  {aboutDropdown.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="flex items-start gap-3 px-6 py-3 hover:bg-white/10 transition-all duration-300 group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-10 h-10 bg-orange-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300 border border-orange-400/30">
                        <item.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">{item.name}</h3>
                        <p className="text-sm text-white/60">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500/70 to-red-500/70 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 border border-orange-400/40 hover:from-orange-500/90 hover:to-red-500/90"
              >
                Get Reading
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-transparent hover:bg-white/10 transition-all duration-300 border border-white/20 mobile-menu-container"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden mobile-menu-container transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible mt-6' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-white/90 hover:text-orange-400 hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              
              {/* Mobile Services */}
              <li>
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Services
                  </h3>
                  <div className="space-y-1 ml-4">
                    {servicesDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center gap-3 px-3 py-2 text-white/80 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link 
                  to="/horoscope" 
                  className="block px-4 py-3 text-white/90 hover:text-orange-400 hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Horoscope
                </Link>
              </li>

              <li>
                <Link 
                  to="/blog" 
                  className="block px-4 py-3 text-white/90 hover:text-orange-400 hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>

              {/* Mobile About */}
              <li>
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    About
                  </h3>
                  <div className="space-y-1 ml-4">
                    {aboutDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center gap-3 px-3 py-2 text-white/80 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li className="pt-4 border-t border-white/10">
                <Link 
                  to="/contact" 
                  className="block mx-4 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium text-center hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 border border-orange-400/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Reading
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};



export default HomeNavbar;

