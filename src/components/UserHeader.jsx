import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, LogOut, Bell, Settings, Sun, Sparkles } from 'lucide-react';

const UserHeader = ({ user, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [cartItems] = useState(5); // Mock cart items count
  const [notifications] = useState(3); // Mock notification count
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement search functionality here
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/profile" className="flex items-center gap-3 group">
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
                My Profile
              </span>
              <span className="text-xs sm:text-sm text-slate-600 -mt-1 font-medium hidden sm:block">Aditya Astrology</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products, classes, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
                />
              </div>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            
            {/* Mobile Search Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Search className="w-5 h-5 text-slate-600" />
            </button>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
              {notifications > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">{notifications}</span>
                </div>
              )}
            </button>

            {/* Cart */}
            <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <ShoppingCart className="w-5 h-5 text-slate-600" />
              {cartItems > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">{cartItems}</span>
                </div>
              )}
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden sm:block text-sm font-medium text-slate-700">
                  {user?.name || 'User'}
                </span>
              </button>

              {showProfileDropdown && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-3 border-b border-slate-200">
                    <p className="font-semibold text-slate-800">{user?.name || 'User'}</p>
                    <p className="text-sm text-slate-600">{user?.email || 'user@example.com'}</p>
                    <p className="text-xs text-blue-600 font-medium">{user?.membershipType || 'Premium'} Member</p>
                  </div>
                  
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <User className="w-4 h-4" />
                      My Profile
                    </Link>
                    
                    <Link
                      to="/my-readings"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <Settings className="w-4 h-4" />
                      My Readings
                    </Link>
                    
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-red-600 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
              />
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default UserHeader;
