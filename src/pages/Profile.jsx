import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import {
  User, Mail, Phone, Calendar, Star, BookOpen, CreditCard,
  Settings, LogOut, Edit, Camera, Award, Clock, Heart,
  TrendingUp, Shield, Bell, Eye, MapPin, Gift, Truck,
  RotateCcw, HelpCircle, ChevronRight, Package, Play,
  ShoppingBag, Filter, Grid, List
} from 'lucide-react';
import { getToken, getUser } from "../utils/auth";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [viewMode, setViewMode] = useState('grid');
  const [filterCategory, setFilterCategory] = useState('all');
  const navigate = useNavigate();
   const token = getToken();  // raw token
  const user_details = getUser();   
  console.log("user_details",user_details);
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const sidebarMenu = [
    {
      title: 'EXPLORE',
      items: [
        { id: 'dashboard', name: 'Overview', icon: TrendingUp },
        { id: 'items', name: 'Items & Products', icon: Package },
        { id: 'classes', name: 'Video Classes', icon: Play },
        { id: 'blogs', name: 'Blog Posts', icon: BookOpen }
      ]
    },
    {
      title: 'MY ACCOUNT',
      items: [
        { id: 'account', name: 'Account Information', icon: User },
        { id: 'profile', name: 'Profile Information', icon: Edit },
        { id: 'addresses', name: 'Manage Addresses', icon: MapPin }
      ]
    },
    {
      title: 'MY READINGS',
      items: [
        { id: 'readings', name: 'My Readings', icon: BookOpen },
        { id: 'wishlist', name: 'My Wishlist', icon: Heart },
        { id: 'reviews', name: 'My Reviews & Ratings', icon: Star }
      ]
    },
    {
      title: 'PAYMENTS',
      items: [
        { id: 'payments', name: 'Payment Methods', icon: CreditCard },
        { id: 'gift-cards', name: 'Gift Cards', icon: Gift },
        { id: 'wallet', name: 'Aditya Wallet', icon: Award }
      ]
    }
  ];

  // Mock data for items, products, and classes uploaded by admin
  const mockItems = [
    {
      id: 1,
      name: 'Birth Chart Reading',
      type: 'service',
      price: 2999,
      image: '/api/placeholder/300/200',
      description: 'Complete natal chart analysis with detailed predictions',
      rating: 4.8,
      category: 'reading',
      uploadedBy: 'Admin',
      uploadDate: '2024-01-15',
      inStock: true,
      reviews: 247
    },
    {
      id: 2,
      name: 'Rudraksha Beads Set',
      type: 'product',
      price: 1499,
      image: '/api/placeholder/300/200',
      description: 'Authentic 5-mukhi Rudraksha beads for spiritual healing',
      rating: 4.6,
      category: 'product',
      uploadedBy: 'Admin',
      uploadDate: '2024-01-12',
      inStock: true,
      reviews: 156
    },
    {
      id: 3,
      name: 'Love & Relationship Reading',
      type: 'service',
      price: 1999,
      image: '/api/placeholder/300/200',
      description: 'Romantic compatibility insights and relationship guidance',
      rating: 4.9,
      category: 'reading',
      uploadedBy: 'Admin',
      uploadDate: '2024-01-10',
      inStock: true,
      reviews: 189
    },
    {
      id: 4,
      name: 'Crystal Healing Kit',
      type: 'product',
      price: 2499,
      image: '/api/placeholder/300/200',
      description: 'Complete crystal healing set with 7 chakra stones',
      rating: 4.7,
      category: 'product',
      uploadedBy: 'Admin',
      uploadDate: '2024-01-08',
      inStock: true,
      reviews: 98
    },
    {
      id: 5,
      name: 'Career Guidance Reading',
      type: 'service',
      price: 2499,
      image: '/api/placeholder/300/200',
      description: 'Professional path guidance and career predictions',
      rating: 4.8,
      category: 'reading',
      uploadedBy: 'Admin',
      uploadDate: '2024-01-05',
      inStock: true,
      reviews: 134
    },
    {
      id: 6,
      name: 'Yantra Collection',
      type: 'product',
      price: 3999,
      image: '/api/placeholder/300/200',
      description: 'Sacred geometric yantras for prosperity and protection',
      rating: 4.5,
      category: 'product',
      uploadedBy: 'Admin',
      uploadDate: '2024-01-03',
      inStock: true,
      reviews: 67
    }
  ];

  const mockClasses = [
    {
      id: 1,
      title: 'Beginner Astrology Course',
      instructor: 'Master Aditya',
      duration: '4 hours',
      price: 3999,
      thumbnail: '/api/placeholder/300/200',
      description: 'Learn the basics of astrology from scratch',
      level: 'Beginner',
      rating: 4.8,
      students: 1247,
      uploadedBy: 'Admin',
      uploadDate: '2024-01-20',
      category: 'beginner-astrology',
      lessons: 12,
      language: 'English'
    },
    {
      id: 2,
      title: 'Advanced Birth Chart Reading',
      instructor: 'Master Aditya',
      duration: '6 hours',
      price: 5999,
      thumbnail: '/api/placeholder/300/200',
      description: 'Master the art of chart interpretation and prediction',
      level: 'Advanced',
      rating: 4.9,
      students: 856,
      uploadedBy: 'Admin',
      uploadDate: '2024-01-18',
      category: 'birth-chart-reading',
      lessons: 18,
      language: 'English'
    },
    {
      id: 3,
      title: 'Vedic Astrology Fundamentals',
      instructor: 'Master Aditya',
      duration: '8 hours',
      price: 7999,
      thumbnail: '/api/placeholder/300/200',
      description: 'Deep dive into traditional Vedic astrology principles',
      level: 'Intermediate',
      rating: 4.7,
      students: 623,
      uploadedBy: 'Admin',
      uploadDate: '2024-01-15',
      category: 'vedic-astrology',
      lessons: 24,
      language: 'English'
    },
    {
      id: 4,
      title: 'Numerology Mastery',
      instructor: 'Master Aditya',
      duration: '5 hours',
      price: 4999,
      thumbnail: '/api/placeholder/300/200',
      description: 'Complete guide to numerology and number predictions',
      level: 'Intermediate',
      rating: 4.6,
      students: 445,
      uploadedBy: 'Admin',
      uploadDate: '2024-01-12',
      category: 'numerology',
      lessons: 15,
      language: 'English'
    },
    {
      id: 5,
      title: 'Tarot Card Reading Basics',
      instructor: 'Master Aditya',
      duration: '3 hours',
      price: 2999,
      thumbnail: '/api/placeholder/300/200',
      description: 'Learn to read tarot cards for guidance and insight',
      level: 'Beginner',
      rating: 4.5,
      students: 789,
      uploadedBy: 'Admin',
      uploadDate: '2024-01-10',
      category: 'tarot',
      lessons: 10,
      language: 'English'
    }
  ];

  const mockBlogs = [
    {
      id: 1,
      title: 'Understanding Your Birth Chart: A Complete Guide',
      excerpt: 'Learn how to read and interpret your natal chart with this comprehensive guide to astrological symbols and meanings.',
      content: 'Your birth chart is a snapshot of the sky at the exact moment you were born...',
      author: 'Master Aditya',
      publishDate: '2024-01-25',
      category: 'astrology',
      tags: ['birth chart', 'astrology', 'beginner'],
      featuredImage: '/api/placeholder/400/250',
      readTime: '8 min read',
      views: 2847,
      likes: 156,
      status: 'published'
    },
    {
      id: 2,
      title: 'Mercury Retrograde: What It Really Means',
      excerpt: 'Debunking myths and explaining the real effects of Mercury retrograde on communication, technology, and travel.',
      content: 'Mercury retrograde is one of the most talked about astrological events...',
      author: 'Master Aditya',
      publishDate: '2024-01-22',
      category: 'predictions',
      tags: ['mercury retrograde', 'planets', 'astrology'],
      featuredImage: '/api/placeholder/400/250',
      readTime: '6 min read',
      views: 1923,
      likes: 89,
      status: 'published'
    },
    {
      id: 3,
      title: 'The Power of Gemstones in Vedic Astrology',
      excerpt: 'Discover how different gemstones can enhance planetary energies and bring positive changes to your life.',
      content: 'Gemstones have been used in Vedic astrology for thousands of years...',
      author: 'Master Aditya',
      publishDate: '2024-01-20',
      category: 'remedies',
      tags: ['gemstones', 'vedic astrology', 'remedies'],
      featuredImage: '/api/placeholder/400/250',
      readTime: '10 min read',
      views: 3156,
      likes: 234,
      status: 'published'
    },
    {
      id: 4,
      title: '2024 Horoscope Predictions for All Zodiac Signs',
      excerpt: 'Get insights into what the year 2024 holds for each zodiac sign in love, career, health, and finances.',
      content: 'As we step into 2024, the planetary alignments suggest...',
      author: 'Master Aditya',
      publishDate: '2024-01-18',
      category: 'horoscope',
      tags: ['2024', 'predictions', 'zodiac signs'],
      featuredImage: '/api/placeholder/400/250',
      readTime: '12 min read',
      views: 4521,
      likes: 312,
      status: 'published'
    },
    {
      id: 5,
      title: 'Vastu Shastra: Creating Harmony in Your Home',
      excerpt: 'Learn the ancient principles of Vastu Shastra to create positive energy flow in your living spaces.',
      content: 'Vastu Shastra is the ancient Indian science of architecture...',
      author: 'Master Aditya',
      publishDate: '2024-01-15',
      category: 'vastu',
      tags: ['vastu shastra', 'home', 'energy'],
      featuredImage: '/api/placeholder/400/250',
      readTime: '9 min read',
      views: 2134,
      likes: 167,
      status: 'published'
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      <UserHeader user={user} onLogout={handleLogout} />
      <div className="min-h-screen bg-slate-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200">

                {/* Profile Header */}
                <div className="p-6 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Hello,</h3>
                      <p className="text-slate-600 font-medium">{user_details.fullName}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Menu */}
                <div className="py-4">
                  {sidebarMenu.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6">
                      <h4 className="px-6 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {section.title}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full flex items-center justify-between px-6 py-3 text-left hover:bg-slate-50 transition-colors ${
                              activeSection === item.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' : 'text-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <item.icon className="w-4 h-4" />
                              <span className="text-sm font-medium">{item.name}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Logout */}
                  <div className="px-6 pt-4 border-t border-slate-200">
                    <button
                      onClick={() => {
                        localStorage.removeItem('user');
                        navigate('/');
                      }}
                      className="flex items-center gap-3 text-red-600 hover:text-red-700 font-medium text-sm"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Dashboard Overview */}
              {activeSection === 'dashboard' && (
                <div className="space-y-6">
                  {/* Welcome Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Welcome back, {user_details.fullName}!</h2>
                        <p className="text-slate-600 mt-1">Explore our products, services, and classes</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                          className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
                        </button>
                        <select
                          value={filterCategory}
                          onChange={(e) => setFilterCategory(e.target.value)}
                          className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
                        >
                          <option value="all">All Categories</option>
                          <option value="reading">Readings</option>
                          <option value="product">Products</option>
                          <option value="class">Classes</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-slate-900">{mockItems.length}</p>
                          <p className="text-slate-600 text-sm">Items & Products</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Play className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-slate-900">{mockClasses.length}</p>
                          <p className="text-slate-600 text-sm">Video Classes</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-slate-900">{mockBlogs.length}</p>
                          <p className="text-slate-600 text-sm">Blog Articles</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-slate-900">{user.membershipType || 'Premium'}</p>
                          <p className="text-slate-600 text-sm">Membership</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Items & Products Section */}
              {activeSection === 'items' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Items & Products</h2>
                        <p className="text-slate-600 mt-1">Browse astrology services and products uploaded by our admin</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <select
                          value={filterCategory}
                          onChange={(e) => setFilterCategory(e.target.value)}
                          className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
                        >
                          <option value="all">All Items</option>
                          <option value="service">Services</option>
                          <option value="product">Products</option>
                        </select>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          <ShoppingBag className="w-4 h-4 inline mr-2" />
                          View Cart (5)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockItems
                      .filter(item => filterCategory === 'all' || item.type === filterCategory)
                      .map((item) => (
                      <div key={item.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-video bg-slate-100 flex items-center justify-center relative">
                          <Package className="w-12 h-12 text-slate-400" />
                          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-700">
                            By {item.uploadedBy}
                          </div>
                          {item.inStock && (
                            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                              In Stock
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-slate-900">{item.name}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.type === 'service' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                            }`}>
                              {item.type}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm mb-3">{item.description}</p>
                          <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-amber-400 fill-current" />
                              <span className="font-medium">{item.rating}</span>
                              <span>({item.reviews})</span>
                            </div>
                            <div className="text-xs">
                              Added {new Date(item.uploadDate).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-slate-900">₹{item.price.toLocaleString()}</span>
                            <div className="flex items-center gap-2">
                              <button className="border border-slate-300 text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                                <Heart className="w-4 h-4" />
                              </button>
                              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                {item.type === 'service' ? 'Book Now' : 'Add to Cart'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Classes Section */}
              {activeSection === 'classes' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Video Classes</h2>
                        <p className="text-slate-600 mt-1">Expert-led astrology courses uploaded by our admin</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                          <option value="all">All Levels</option>
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                        <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
                          <Filter className="w-4 h-4 inline mr-2" />
                          More Filters
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Classes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockClasses.map((classItem) => (
                      <div key={classItem.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative aspect-video bg-slate-100 flex items-center justify-center">
                          <Play className="w-12 h-12 text-slate-400" />
                          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-700">
                            By {classItem.uploadedBy}
                          </div>
                          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            {classItem.duration}
                          </div>
                          <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                            {classItem.lessons} Lessons
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-slate-900">{classItem.title}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              classItem.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                              classItem.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {classItem.level}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm mb-2">by {classItem.instructor}</p>
                          <p className="text-slate-600 text-sm mb-3">{classItem.description}</p>
                          <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-amber-400 fill-current" />
                              <span>{classItem.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{classItem.students.toLocaleString()}</span>
                            </div>
                            <div className="text-xs">
                              {classItem.language}
                            </div>
                          </div>
                          <div className="text-xs text-slate-500 mb-3">
                            Uploaded {new Date(classItem.uploadDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-slate-900">₹{classItem.price.toLocaleString()}</span>
                            <div className="flex items-center gap-2">
                              <button className="border border-slate-300 text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                                Preview
                              </button>
                              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                                Enroll Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blogs Section */}
              {activeSection === 'blogs' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Blog Articles</h2>
                        <p className="text-slate-600 mt-1">Read insightful articles about astrology and spirituality</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                          <option value="all">All Categories</option>
                          <option value="astrology">Astrology</option>
                          <option value="horoscope">Horoscope</option>
                          <option value="predictions">Predictions</option>
                          <option value="remedies">Remedies</option>
                          <option value="vastu">Vastu</option>
                        </select>
                        <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
                          <Filter className="w-4 h-4 inline mr-2" />
                          Sort by Date
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Blog Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockBlogs.map((blog) => (
                      <div key={blog.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-video bg-slate-100 flex items-center justify-center relative">
                          <BookOpen className="w-12 h-12 text-slate-400" />
                          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-700">
                            {blog.category}
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            {blog.readTime}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-slate-900 line-clamp-2">{blog.title}</h3>
                          </div>
                          <p className="text-slate-600 text-sm mb-2">by {blog.author}</p>
                          <p className="text-slate-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.slice(0, 2).map((tag, index) => (
                              <span key={index} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                            {blog.tags.length > 2 && (
                              <span className="text-slate-500 text-xs">+{blog.tags.length - 2} more</span>
                            )}
                          </div>

                          <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{blog.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{blog.likes}</span>
                            </div>
                            <div className="text-xs">
                              {new Date(blog.publishDate).toLocaleDateString()}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                              Published {new Date(blog.publishDate).toLocaleDateString()}
                            </span>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load More */}
                  <div className="text-center">
                    <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                      Load More Articles
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'account' && (
                <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                  <div className="p-6 border-b border-slate-200">
                    <h2 className="text-xl font-semibold text-slate-900">Account Information</h2>
                    <p className="text-slate-600 mt-1">Manage your account details and preferences</p>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-slate-900">Personal Information</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                            <input
                              type="text"
                              value={user_details.fullName}
                              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input
                              type="email"
                              value={user_details.email}
                              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              value={user_details.mobile || '+91 98765 43210'}
                              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              readOnly
                            />
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                          Edit Information
                        </button>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-slate-900">Account Statistics</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <BookOpen className="w-5 h-5 text-blue-600" />
                              <span className="text-sm font-medium text-slate-700">Total Readings</span>
                            </div>
                            <p className="text-2xl font-bold text-slate-900">{user.totalReadings || 5}</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Award className="w-5 h-5 text-amber-600" />
                              <span className="text-sm font-medium text-slate-700">Membership</span>
                            </div>
                            <p className="text-lg font-bold text-slate-900">{user.membershipType || 'Premium'}</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-5 h-5 text-emerald-600" />
                              <span className="text-sm font-medium text-slate-700">Member Since</span>
                            </div>
                            <p className="text-lg font-bold text-slate-900">
                              {new Date(user.joinDate || '2024-01-01').getFullYear()}
                            </p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Star className="w-5 h-5 text-purple-600" />
                              <span className="text-sm font-medium text-slate-700">Rating</span>
                            </div>
                            <p className="text-lg font-bold text-slate-900">4.8/5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'readings' && (
                <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                  <div className="p-6 border-b border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">My Readings</h2>
                        <p className="text-slate-600 mt-1">View your consultation history and reports</p>
                      </div>
                      <Link
                        to="/services"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Book New Reading
                      </Link>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        { id: 1, type: 'Birth Chart Reading', date: '2024-01-15', status: 'Completed', price: '₹2,999' },
                        { id: 2, type: 'Love & Relationship', date: '2024-01-10', status: 'Completed', price: '₹1,999' },
                        { id: 3, type: 'Career Guidance', date: '2024-01-05', status: 'Pending', price: '₹2,499' }
                      ].map((reading) => (
                        <div key={reading.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-medium text-slate-900">{reading.type}</h4>
                                <p className="text-sm text-slate-600">Date: {reading.date}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-slate-900">{reading.price}</p>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                reading.status === 'Completed'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {reading.status}
                              </span>
                            </div>
                          </div>
                          {reading.status === 'Completed' && (
                            <div className="mt-3 pt-3 border-t border-slate-200">
                              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                View Report
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        to="/my-readings"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        View All Readings →
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'payments' && (
                <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                  <div className="p-6 border-b border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">Payment Methods</h2>
                        <p className="text-slate-600 mt-1">Manage your saved payment methods</p>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                        Add New Card
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        { id: 1, type: 'Credit Card', last4: '4242', brand: 'Visa', expiry: '12/25' },
                        { id: 2, type: 'Debit Card', last4: '8888', brand: 'Mastercard', expiry: '08/26' }
                      ].map((method) => (
                        <div key={method.id} className="border border-slate-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-slate-600" />
                              </div>
                              <div>
                                <p className="font-medium text-slate-900">{method.brand} •••• {method.last4}</p>
                                <p className="text-sm text-slate-600">Expires {method.expiry}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                Edit
                              </button>
                              <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}


          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
