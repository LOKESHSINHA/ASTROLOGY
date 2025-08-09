import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, ChevronDown, Star, Heart, Calendar, User, Phone, BookOpen, Sparkles } from 'lucide-react';

const Header = ({ title = 'Aditya Astrology' }) => {
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
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg'
        : 'bg-white/90 backdrop-blur-lg border-b border-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4" ref={dropdownRef}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Main Sun Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-300 bg-gradient-to-br from-slate-700 to-blue-600 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-spin" style={{ animationDuration: '8s' }} />
                {/* Animated rays */}
                <div className="absolute inset-0 rounded-full">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-amber-400/80 rounded-full animate-pulse"
                      style={{
                        top: '2px',
                        left: '50%',
                        transformOrigin: '0 18px',
                        transform: `translateX(-50%) rotate(${i * 45}deg)`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Floating sparkles */}
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm shadow-lg">
                A
              </div>
              <Sparkles className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent">
                {title}
              </span>
              <span className="text-xs sm:text-sm text-slate-600 -mt-1 font-medium hidden sm:block">Cosmic Guidance & Wisdom</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <li>
              <Link
                to="/"
                className="text-slate-800 hover:text-blue-700 transition-all duration-300 font-semibold py-2 relative group text-sm lg:text-base"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-800 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            
            {/* Services Dropdown */}
            <li className="relative">
              <button
                className="flex items-center gap-1 text-slate-800 hover:text-blue-700 transition-all duration-300 font-semibold py-2 group text-sm lg:text-base"
                onClick={() => handleDropdownToggle('services')}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-800 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl py-4 z-50 animate-fadeIn">
                  {servicesDropdown.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="flex items-start gap-3 px-6 py-3 hover:bg-slate-50 transition-all duration-300 group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-10 h-10 bg-blue-100 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300 border border-blue-200">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{item.name}</h3>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link
                to="/horoscope"
                className="text-slate-800 hover:text-blue-700 transition-all duration-300 font-semibold py-2 relative group text-sm lg:text-base"
              >
                Horoscope
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-800 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="text-slate-800 hover:text-blue-700 transition-all duration-300 font-semibold py-2 relative group text-sm lg:text-base"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-800 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="relative">
              <button
                className="flex items-center gap-1 text-slate-800 hover:text-blue-700 transition-all duration-300 font-semibold py-2 group text-sm lg:text-base"
                onClick={() => handleDropdownToggle('about')}
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-800 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl py-4 z-50 animate-fadeIn">
                  {aboutDropdown.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="flex items-start gap-3 px-6 py-3 hover:bg-slate-50 transition-all duration-300 group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-10 h-10 bg-purple-100 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-all duration-300 border border-purple-200">
                        <item.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">{item.name}</h3>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-slate-500/30 transform hover:scale-105 transition-all duration-300 border border-slate-300"
              >
                Get Reading
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all duration-300 border border-slate-300 mobile-menu-container"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden mobile-menu-container transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100 visible mt-4 sm:mt-6'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-4 sm:p-6">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block px-3 sm:px-4 py-2 sm:py-3 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              
              {/* Mobile Services */}
              <li>
                <div className="px-3 sm:px-4 py-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    Services
                  </h3>
                  <div className="space-y-1 ml-3 sm:ml-4">
                    {servicesDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link
                  to="/horoscope"
                  className="block px-3 sm:px-4 py-2 sm:py-3 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Horoscope
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="block px-3 sm:px-4 py-2 sm:py-3 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>

              {/* Mobile About */}
              <li>
                <div className="px-3 sm:px-4 py-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    About
                  </h3>
                  <div className="space-y-1 ml-3 sm:ml-4">
                    {aboutDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 text-slate-700 hover:text-purple-700 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li className="pt-3 sm:pt-4 border-t border-slate-200">
                <Link
                  to="/contact"
                  className="block mx-3 sm:mx-4 bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-slate-500/30 transition-all duration-300 border border-slate-300 text-sm sm:text-base"
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

export default Header;

