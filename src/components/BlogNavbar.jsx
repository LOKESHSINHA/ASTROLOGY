import React, { useState, useEffect } from 'react';
import { Search, Filter, Calendar, Star, TrendingUp, BookOpen, Tag, Grid, List, Menu, X, ChevronDown } from 'lucide-react';

const BlogNavbar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const sortOptions = [
    { value: 'latest', label: 'Latest First', icon: Calendar },
    { value: 'popular', label: 'Most Popular', icon: TrendingUp },
    { value: 'featured', label: 'Featured', icon: Star },
    { value: 'readTime', label: 'Quick Reads', icon: BookOpen }
  ];

  // Handle scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-lg'
        : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left Section - Logo/Brand (if needed) and Search */}
          <div className="flex items-center gap-4 flex-1">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/80 hover:bg-white/90 border border-slate-300 transition-all duration-200 mobile-menu-container shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-600" />
              ) : (
                <Menu className="w-5 h-5 text-slate-600" />
              )}
            </button>

            {/* Desktop Search */}
            <div className="hidden lg:flex relative w-80 xl:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tags, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-white/90 backdrop-blur-sm text-slate-800 placeholder-slate-500 transition-all duration-200 hover:bg-white shadow-sm"
              />
            </div>
          </div>

          {/* Right Section - Desktop Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-300 bg-white/90 hover:bg-white text-slate-700 transition-all duration-200 backdrop-blur-sm shadow-sm"
              >
                <span className="text-sm font-medium">
                  {sortOptions.find(opt => opt.value === sortBy)?.label || 'Sort'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showSortDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showSortDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-xl shadow-xl overflow-hidden z-10">
                  {sortOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
                          sortBy === option.value ? 'bg-blue-100 text-blue-700' : 'text-slate-700'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-slate-100 rounded-xl p-1 border border-slate-200 backdrop-blur-sm shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-white'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-white'
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Desktop Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-3 rounded-xl border border-slate-300 transition-all duration-200 backdrop-blur-sm shadow-sm ${
                showFilters
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800'
              }`}
              aria-label="Toggle filters"
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden mobile-menu-container transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-4 py-6 bg-white/95 backdrop-blur-lg border-t border-slate-200">
            {/* Mobile Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tags, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-white backdrop-blur-sm text-slate-800 placeholder-slate-500 shadow-sm"
              />
            </div>

            {/* Mobile Sort Options */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-slate-700 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Sort By
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {sortOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        sortBy === option.value
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile View Mode */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-slate-700 mb-3">View Mode</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  <List className="w-4 h-4" />
                  <span>List</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className={`transition-all duration-300 ${
          showFilters ? 'block' : 'hidden'
        } bg-black/80 backdrop-blur-lg border-t border-purple-500/30`}>
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-medium text-gray-300">Categories</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                      : 'bg-black/30 text-gray-300 border border-purple-500/30 hover:bg-black/50 hover:shadow-md hover:border-purple-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(searchTerm || selectedCategory !== 'All') && (
          <div className="bg-black/60 backdrop-blur-lg border-t border-purple-500/20">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Tag className="w-4 h-4" />
                  <span className="font-medium">Active filters:</span>
                </div>

                {searchTerm && (
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full flex items-center gap-2 border border-purple-500/30">
                    <Search className="w-3 h-3" />
                    <span>"{searchTerm}"</span>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="hover:text-purple-100 transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedCategory !== 'All' && (
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full flex items-center gap-2 border border-blue-500/30">
                    <Tag className="w-3 h-3" />
                    <span>{selectedCategory}</span>
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className="hover:text-blue-100 transition-colors"
                      aria-label="Clear category filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="text-purple-400 hover:text-purple-300 font-medium transition-colors px-2 py-1 rounded-lg hover:bg-purple-500/10"
                >
                  Clear all
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogNavbar;
