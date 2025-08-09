
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Sun, ChevronDown, Star, Heart, Calendar, User, Phone, BookOpen, 
  Sparkles, Search, Bell, Settings, Globe, Zap, Moon, ArrowRight, Home,
  Shield, Award, Target, Compass, Telescope
} from 'lucide-react';

const EnhancedNavbar = ({ title = 'Aditya Astrology' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActivePage = (path) => location.pathname === path;

  const servicesDropdown = [
    { 
      name: 'Birth Chart Reading', 
      icon: Star, 
      path: '/services/birth-chart', 
      desc: 'Complete natal chart analysis',
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-500/10'
    },
    { 
      name: 'Love & Relationship', 
      icon: Heart, 
      path: '/services/love', 
      desc: 'Romantic compatibility insights',
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-pink-500/10'
    },
    { 
      name: 'Career Guidance', 
      icon: Target, 
      path: '/services/career', 
      desc: 'Professional path guidance',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    { 
      name: 'Daily Horoscope', 
      icon: Calendar, 
      path: '/horoscope', 
      desc: 'Personalized daily predictions',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-500/10'
    },
    { 
      name: 'Spiritual Guidance', 
      icon: Compass, 
      path: '/services/spiritual', 
      desc: 'Inner wisdom and growth',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10'
    },
    { 
      name: 'Cosmic Insights', 
      icon: Telescope, 
      path: '/services/cosmic', 
      desc: 'Deep universe connections',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  const aboutDropdown = [
    { 
      name: 'About Aditya', 
      icon: User, 
      path: '/about/aditya', 
      desc: 'Meet our expert astrologer',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Our Story', 
      icon: BookOpen, 
      path: '/about/story', 
      desc: 'Journey of cosmic wisdom',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Testimonials', 
      icon: Award, 
      path: '/about/testimonials', 
      desc: 'What clients say',
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'Privacy & Trust', 
      icon: Shield, 
      path: '/about/privacy', 
      desc: 'Your data security',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const quickActions = [
    { name: 'Daily Reading', icon: Calendar, action: () => console.log('Daily Reading') },
    { name: 'Quick Question', icon: Zap, action: () => console.log('Quick Question') },
    { name: 'Emergency Reading', icon: Phone, action: () => console.log('Emergency') }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl shadow-purple-500/10' 
        : 'bg-white/80 backdrop-blur-lg border-b border-transparent'
    }`}>
      {/* Top notification bar */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-2 px-4 text-center text-sm font-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="relative z-10 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>🌟 Get your FREE daily horoscope - Limited time offer!</span>
          <ArrowRight className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4" ref={dropdownRef}>
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Animated Logo */}
              <div className="w-14 h-14 rounded-full border-3 border-gradient-to-r from-orange-400 to-red-500 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-orange-500/50 transition-all duration-500">
                <Sun className="w-7 h-7 text-white animate-spin" style={{ animationDuration: '8s' }} />
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 rounded-full">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" />
                  ))}
                </div>
                
                {/* Floating sparkles around logo */}
                <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
                <Star className="absolute -bottom-1 -left-1 w-4 h-4 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Notification badge */}
              {notifications > 0 && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse border-2 border-white">
                  {notifications}
                </div>
              )}
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                {title}
              </span>
              <span className="text-xs text-gray-500 -mt-1 font-medium flex items-center gap-1">
                <Globe className="w-3 h-3" />
                Cosmic Guidance & Wisdom
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Search Bar */}
            <div className={`relative transition-all duration-300 ${showSearch ? 'w-64' : 'w-10'}`}>
              {showSearch ? (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services, articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/90 backdrop-blur-sm text-gray-700 placeholder-gray-400"
                    autoFocus
                  />
                  <button
                    onClick={() => setShowSearch(false)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 relative group ${
                    isActivePage('/') 
                      ? 'text-orange-600 bg-orange-100' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  Home
                  {isActivePage('/') && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                  )}
                </Link>
              </li>
              
              {/* Services Mega Dropdown */}
              <li className="relative">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                    activeDropdown === 'services' 
                      ? 'text-purple-600 bg-purple-100' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => handleDropdownToggle('services')}
                >
                  <BookOpen className="w-4 h-4" />
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl py-6 z-50 animate-fadeIn">
                    <div className="px-6 mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Services</h3>
                      <p className="text-sm text-gray-600">Discover your cosmic path with our expert guidance</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 px-4">
                      {servicesDropdown.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className={`flex items-start gap-3 p-3 hover:${item.bgColor} rounded-xl transition-all duration-300 group`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 text-sm">{item.name}</h4>
                            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/horoscope"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 relative group ${
                    isActivePage('/horoscope')
                      ? 'text-purple-600 bg-purple-100'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Horoscope
                  {isActivePage('/horoscope') && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 relative group ${
                    isActivePage('/blog')
                      ? 'text-blue-600 bg-blue-100'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  Blog
                  {isActivePage('/blog') && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </Link>
              </li>

              {/* About Dropdown */}
              <li className="relative">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                    activeDropdown === 'about'
                      ? 'text-green-600 bg-green-100'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => handleDropdownToggle('about')}
                >
                  <User className="w-4 h-4" />
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl py-4 z-50 animate-fadeIn">
                    {aboutDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-start gap-3 px-6 py-3 hover:bg-gray-50 transition-all duration-300 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 group-hover:text-green-600">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Quick Actions */}
              <li className="relative">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                  onClick={() => handleDropdownToggle('actions')}
                >
                  <Zap className="w-4 h-4" />
                  Quick Actions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'actions' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'actions' && (
                  <div className="absolute top-full right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl py-4 z-50 animate-fadeIn">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          action.action();
                          setActiveDropdown(null);
                        }}
                        className="w-full flex items-center gap-3 px-6 py-3 hover:bg-orange-50 transition-all duration-300 group text-left"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <action.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-orange-600">{action.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </li>

              {/* Notifications */}
              <li>
                <button className="relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                  <Bell className="w-4 h-4" />
                  {notifications > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                      {notifications}
                    </div>
                  )}
                </button>
              </li>

              {/* CTA Button */}
              <li>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Star className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Get Reading</span>
                </Link>
              </li>
            </ul>

            {/* Settings */}
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300">
              <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100 visible mt-6'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-6 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <Link
                to="/"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActivePage('/')
                    ? 'text-orange-600 bg-orange-100'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                Home
              </Link>

              <Link
                to="/horoscope"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActivePage('/horoscope')
                    ? 'text-purple-600 bg-purple-100'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="w-5 h-5" />
                Horoscope
              </Link>

              <Link
                to="/blog"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActivePage('/blog')
                    ? 'text-blue-600 bg-blue-100'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-5 h-5" />
                Blog
              </Link>
            </div>

            {/* Mobile Services Grid */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-500" />
                Our Services
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {servicesDropdown.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`flex flex-col items-center gap-2 p-4 ${service.bgColor} rounded-xl transition-all duration-300 hover:scale-105`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Quick Actions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500" />
                Quick Actions
              </h3>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      action.action();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-orange-50 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-orange-600">{action.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              className="block w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Star className="w-5 h-5" />
                Get Your Reading Now
              </span>
            </Link>
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

export default EnhancedNavbar;

