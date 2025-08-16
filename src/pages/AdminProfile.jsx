import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import {
  User, Mail, Phone, Calendar, Star, BookOpen, CreditCard,
  Settings, Edit, Camera, Award, Clock, Heart,
  TrendingUp, Shield, Bell, Eye, MapPin, Gift, Truck,
  RotateCcw, HelpCircle, ChevronRight, Package, Users,
  DollarSign, BarChart3, PieChart, Activity, Target,
  FileText, Database, Zap, Crown, AlertTriangle,
  CheckCircle, XCircle, Plus, Filter, Search, Download,
  Upload, Trash2, MoreVertical, Calendar as CalendarIcon,
  Globe, Smartphone, Tablet, Monitor, Briefcase, Home
} from 'lucide-react';

const AdminProfile = () => {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);
  const [itemForm, setItemForm] = useState({
    name: '',
    type: '',
    price: '',
    stock: '50',
    image: null,
    description: ''
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [blogForm, setBlogForm] = useState({
    title: '',
    category: '',
    tags: '',
    content: '',
    excerpt: '',
    featuredImage: null,
    status: 'draft',
    publishDate: '',
    author: ''
  });
  const [blogImagePreview, setBlogImagePreview] = useState(null);
  const [classForm, setClassForm] = useState({
    title: '',
    description: '',
    category: '',
    level: '',
    duration: '',
    price: '',
    instructor: '',
    video: null,
    thumbnail: null,
    materials: [],
    prerequisites: '',
    learningOutcomes: '',
    tags: ''
  });
  const [classVideoPreview, setClassVideoPreview] = useState(null);
  const [classThumbnailPreview, setClassThumbnailPreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      // Check if user is admin
      if (userData.role !== 'admin') {
        navigate('/profile');
        return;
      }
      setUser(userData);
    } else {
      navigate('/login');
    }

    // Load notifications
    loadNotifications();
  }, [navigate]);

  const loadNotifications = () => {
    // Mock notifications data
    const mockNotifications = [
      { id: 1, type: 'success', message: 'New subscription purchased', time: '2 mins ago', read: false },
      { id: 2, type: 'warning', message: 'Server load high', time: '15 mins ago', read: false },
      { id: 3, type: 'info', message: 'Monthly report ready', time: '1 hour ago', read: true },
      { id: 4, type: 'error', message: 'Payment failed for user #1234', time: '2 hours ago', read: false }
    ];
    setNotifications(mockNotifications);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const sidebarMenu = [
    {
      title: 'DASHBOARD',
      items: [
        { id: 'dashboard', name: 'Overview', icon: BarChart3 },
        { id: 'analytics', name: 'Analytics', icon: TrendingUp },
        { id: 'reports', name: 'Reports', icon: FileText }
      ]
    },
    {
      title: 'USER MANAGEMENT',
      items: [
        { id: 'users', name: 'All Users', icon: Users },
        { id: 'subscriptions', name: 'Subscriptions', icon: Crown },
        { id: 'portfolio-templates', name: 'Portfolio Templates', icon: Briefcase }
      ]
    },
    {
      title: 'BUSINESS',
      items: [
        { id: 'sales', name: 'Sales & Revenue', icon: DollarSign },
        { id: 'products', name: 'Product Analysis', icon: Package },
        { id: 'add-item', name: 'Add Item', icon: Plus },
        { id: 'profit-loss', name: 'Profit & Loss', icon: PieChart }
      ]
    },
    {
      title: 'CONTENT',
      items: [
        { id: 'add-blog', name: 'Add Blog', icon: Edit },
        { id: 'blog-management', name: 'Manage Blogs', icon: BookOpen }
      ]
    },
    {
      title: 'EDUCATION',
      items: [
        { id: 'add-class', name: 'Add Class', icon: Upload },
        { id: 'manage-classes', name: 'Manage Classes', icon: BookOpen }
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'settings', name: 'System Settings', icon: Settings },
        { id: 'database', name: 'Database', icon: Database }
      ]
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleItemFormChange = (e) => {
    const { name, value } = e.target;
    setItemForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setItemForm(prev => ({
        ...prev,
        image: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };



  const handleBlogFormChange = (e) => {
    const { name, value } = e.target;
    setBlogForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlogImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogForm(prev => ({
        ...prev,
        featuredImage: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the data to your backend
    console.log('Blog data:', blogForm);

    // Reset form
    setBlogForm({
      title: '',
      category: '',
      tags: '',
      content: '',
      excerpt: '',
      featuredImage: null,
      status: 'draft',
      publishDate: '',
      author: ''
    });
    setBlogImagePreview(null);

    // Show success message
    alert('Blog post added successfully!');
  };

  const handleClassFormChange = (e) => {
    const { name, value } = e.target;
    setClassForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClassVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (limit to 500MB for demo)
      if (file.size > 500 * 1024 * 1024) {
        alert('Video file size should be less than 500MB');
        return;
      }

      setClassForm(prev => ({
        ...prev,
        video: file
      }));

      // Create video preview URL
      const videoUrl = URL.createObjectURL(file);
      setClassVideoPreview(videoUrl);

      // Simulate upload progress
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const handleClassThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setClassForm(prev => ({
        ...prev,
        thumbnail: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setClassThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClassSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the data to your backend
    console.log('Class data:', classForm);

    // Reset form
    setClassForm({
      title: '',
      description: '',
      category: '',
      level: '',
      duration: '',
      price: '',
      instructor: '',
      video: null,
      thumbnail: null,
      materials: [],
      prerequisites: '',
      learningOutcomes: '',
      tags: ''
    });
    setClassVideoPreview(null);
    setClassThumbnailPreview(null);
    setUploadProgress(0);

    // Show success message
    alert('Class uploaded successfully!');
  };

  ///Add item Functions 


  // Submit handler
  const handleItemSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      setSuccess('');

      // Validate form
      if (!itemForm.name.trim()) {
        setError('Item name is required');
        return;
      }
      if (!itemForm.type) {
        setError('Item type is required');
        return;
      }
      if (!itemForm.price || parseFloat(itemForm.price) < 0) {
        setError('Valid price is required');
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      // Build payload according to API requirements
      const raw = JSON.stringify({
        productName: itemForm.name,
        description: itemForm.description,
        productPrice: parseFloat(itemForm.price),
        stock: parseInt(itemForm.stock) || 50, // Use form stock value or default to 50
        categoryMasterId: '1d49ff91-5245-4440-a61e-23ce48b72fa3', // You may want to make this dynamic
        brand: 'Aditya Astrology', // Brand name
        sku: `AA-${itemForm.type.toUpperCase()}-${Date.now()}`, // Generate SKU
        imageUrl: imagePreview || '',
        tags: itemForm.type ? [itemForm.type, 'astrology'] : ['astrology'],
        isActive: true,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      console.log('Add Item Request:', requestOptions);

      const response = await fetch('/api/add-product', requestOptions);
      const result = await response.json();

      console.log('Add Item Response:', response);
      console.log('Add Item Result:', result);

      if (response.ok) {
        setSuccess('Item added successfully!');
        // Reset form
        setItemForm({
          name: '',
          type: '',
          price: '',
          stock: '50',
          image: null,
          description: '',
        });
        setImagePreview(null);

        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const errorMessage = result.message || result.error || 'Failed to add item. Please try again.';
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error adding item:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };


















  return (
    <>
      <AdminHeader user={user} onLogout={handleLogout} />
      <div className="min-h-screen bg-slate-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Admin Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200">

                {/* Admin Profile Header */}
                <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Crown className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Admin Panel</h3>
                      <p className="text-white/90 font-medium">{user.name}</p>
                      <p className="text-white/70 text-sm">Administrator</p>
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


                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Dashboard Overview */}
              {activeSection === 'dashboard' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Admin Dashboard</h2>
                        <p className="text-slate-600 mt-1">Welcome back, {user.name}! Here's your business overview.</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Export Report
                        </button>
                        <div className="relative">
                          <Bell className="w-6 h-6 text-slate-600 cursor-pointer hover:text-slate-800" />
                          {notifications.filter(n => !n.read).length > 0 && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-slate-600 text-sm font-medium">Total Users</p>
                          <p className="text-2xl font-bold text-slate-900 mt-1">12,847</p>
                          <p className="text-green-600 text-sm mt-1">+12% from last month</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-slate-600 text-sm font-medium">Today's Revenue</p>
                          <p className="text-2xl font-bold text-slate-900 mt-1">₹45,230</p>
                          <p className="text-green-600 text-sm mt-1">+8% from yesterday</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-slate-600 text-sm font-medium">Active Subscriptions</p>
                          <p className="text-2xl font-bold text-slate-900 mt-1">3,247</p>
                          <p className="text-green-600 text-sm mt-1">+15% from last month</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Crown className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-slate-600 text-sm font-medium">Today's Profit</p>
                          <p className="text-2xl font-bold text-slate-900 mt-1">₹28,450</p>
                          <p className="text-red-600 text-sm mt-1">-3% from yesterday</p>
                        </div>
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-amber-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Portfolio Templates Section */}
              {activeSection === 'portfolio-templates' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Portfolio Templates</h2>
                        <p className="text-slate-600 mt-1">Manage standard profile templates for users</p>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Create Template
                      </button>
                    </div>
                  </div>

                  {/* Template Categories */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        name: 'Basic Profile',
                        description: 'Standard user profile template',
                        users: 8547,
                        color: 'blue',
                        icon: User
                      },
                      {
                        name: 'Premium Profile',
                        description: 'Enhanced profile with advanced features',
                        users: 3247,
                        color: 'purple',
                        icon: Crown
                      },
                      {
                        name: 'Astrologer Profile',
                        description: 'Professional astrologer template',
                        users: 156,
                        color: 'amber',
                        icon: Star
                      }
                    ].map((template, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 bg-${template.color}-100 rounded-lg flex items-center justify-center`}>
                            <template.icon className={`w-6 h-6 text-${template.color}-600`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{template.name}</h3>
                            <p className="text-slate-600 text-sm">{template.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 text-sm">{template.users.toLocaleString()} users</span>
                          <div className="flex items-center gap-2">
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                            <button className="text-slate-600 hover:text-slate-700 text-sm">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Template Features */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Template Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        'Personal Information Fields',
                        'Birth Chart Integration',
                        'Reading History',
                        'Subscription Management',
                        'Payment Methods',
                        'Notification Preferences',
                        'Privacy Settings',
                        'Social Media Links',
                        'Custom Themes'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-slate-700 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Analytics Section */}
              {activeSection === 'analytics' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Analytics Dashboard</h2>
                        <p className="text-slate-600 mt-1">Comprehensive business analytics and insights</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                          <option>Last 7 days</option>
                          <option>Last 30 days</option>
                          <option>Last 3 months</option>
                          <option>Last year</option>
                        </select>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          Generate Report
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Revenue Growth</h3>
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">+24.5%</p>
                      <p className="text-green-600 text-sm mt-1">vs last month</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">User Retention</h3>
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">87.3%</p>
                      <p className="text-blue-600 text-sm mt-1">30-day retention</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Conversion Rate</h3>
                        <Target className="w-5 h-5 text-purple-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">12.8%</p>
                      <p className="text-purple-600 text-sm mt-1">visitor to customer</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Avg. Order Value</h3>
                        <DollarSign className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">₹2,847</p>
                      <p className="text-amber-600 text-sm mt-1">+5.2% increase</p>
                    </div>
                  </div>

                  {/* Charts Placeholder */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Revenue Trend</h3>
                      <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-600">Chart visualization would go here</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">User Demographics</h3>
                      <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <PieChart className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-600">Pie chart visualization would go here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Profit & Loss Section */}
              {activeSection === 'profit-loss' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Profit & Loss Analysis</h2>
                        <p className="text-slate-600 mt-1">Detailed financial performance tracking</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                          <option>Today</option>
                          <option>This Week</option>
                          <option>This Month</option>
                          <option>This Quarter</option>
                        </select>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                          Export P&L
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Today's Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Today's Revenue</h3>
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-slate-900">₹45,230</p>
                      <p className="text-green-600 text-sm mt-1">+8.2% from yesterday</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Operating Costs</h3>
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-red-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-slate-900">₹16,780</p>
                      <p className="text-red-600 text-sm mt-1">+2.1% from yesterday</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Net Profit</h3>
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Target className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-slate-900">₹28,450</p>
                      <p className="text-blue-600 text-sm mt-1">+12.5% from yesterday</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Profit Margin</h3>
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <PieChart className="w-4 h-4 text-purple-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-slate-900">62.9%</p>
                      <p className="text-purple-600 text-sm mt-1">+3.2% from yesterday</p>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Revenue Breakdown</h3>
                    <div className="space-y-4">
                      {[
                        { service: 'Birth Chart Readings', revenue: '₹18,450', percentage: 40.8, trend: '+5.2%' },
                        { service: 'Love & Relationship', revenue: '₹12,340', percentage: 27.3, trend: '+8.1%' },
                        { service: 'Career Guidance', revenue: '₹8,920', percentage: 19.7, trend: '+12.4%' },
                        { service: 'Premium Subscriptions', revenue: '₹5,520', percentage: 12.2, trend: '+15.6%' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{item.service}</p>
                              <p className="text-slate-600 text-sm">{item.percentage}% of total revenue</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-slate-900">{item.revenue}</p>
                            <p className="text-green-600 text-sm">{item.trend}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Subscriptions Section */}
              {activeSection === 'subscriptions' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Subscription Management</h2>
                        <p className="text-slate-600 mt-1">Monitor and manage user subscriptions</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
                          <Filter className="w-4 h-4 inline mr-2" />
                          Filter
                        </button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                          <Plus className="w-4 h-4 inline mr-2" />
                          Add Plan
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Subscription Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Active Subscriptions</h3>
                        <Crown className="w-5 h-5 text-purple-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">3,247</p>
                      <p className="text-green-600 text-sm mt-1">+15% this month</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Monthly Recurring Revenue</h3>
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">₹4,85,670</p>
                      <p className="text-green-600 text-sm mt-1">+22% this month</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Churn Rate</h3>
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">2.8%</p>
                      <p className="text-red-600 text-sm mt-1">+0.3% this month</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Avg. Subscription Value</h3>
                        <Target className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">₹1,495</p>
                      <p className="text-blue-600 text-sm mt-1">+5% this month</p>
                    </div>
                  </div>

                  {/* Subscription Plans */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Subscription Plans</h3>
                    <div className="space-y-4">
                      {[
                        {
                          name: 'Basic Plan',
                          price: '₹499/month',
                          subscribers: 1247,
                          revenue: '₹6,22,253',
                          status: 'active',
                          features: ['Monthly Horoscope', 'Basic Birth Chart', 'Email Support']
                        },
                        {
                          name: 'Premium Plan',
                          price: '₹1,499/month',
                          subscribers: 1856,
                          revenue: '₹27,82,344',
                          status: 'active',
                          features: ['All Basic Features', 'Detailed Readings', 'Priority Support', 'Personalized Reports']
                        },
                        {
                          name: 'VIP Plan',
                          price: '₹2,999/month',
                          subscribers: 144,
                          revenue: '₹4,31,856',
                          status: 'active',
                          features: ['All Premium Features', '1-on-1 Consultations', 'Custom Remedies', '24/7 Support']
                        }
                      ].map((plan, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Crown className="w-6 h-6 text-purple-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-900">{plan.name}</h4>
                                <p className="text-slate-600">{plan.price}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-slate-900">{plan.subscribers} subscribers</p>
                              <p className="text-green-600 font-medium">{plan.revenue}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {plan.features.map((feature, idx) => (
                              <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Section */}
              {activeSection === 'notifications' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Notification Center</h2>
                        <p className="text-slate-600 mt-1">Manage system alerts and user notifications</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
                          Mark All Read
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          <Plus className="w-4 h-4 inline mr-2" />
                          Send Notification
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notification Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Unread Notifications</h3>
                        <Bell className="w-5 h-5 text-red-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">{notifications.filter(n => !n.read).length}</p>
                      <p className="text-red-600 text-sm mt-1">Requires attention</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Today's Alerts</h3>
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">12</p>
                      <p className="text-amber-600 text-sm mt-1">System alerts</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">User Messages</h3>
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">47</p>
                      <p className="text-blue-600 text-sm mt-1">Pending responses</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-600">Sent Today</h3>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">234</p>
                      <p className="text-green-600 text-sm mt-1">Notifications sent</p>
                    </div>
                  </div>

                  {/* Recent Notifications */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Notifications</h3>
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`flex items-start gap-4 p-4 rounded-lg border ${
                          notification.read ? 'bg-slate-50 border-slate-200' : 'bg-blue-50 border-blue-200'
                        }`}>
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            notification.type === 'success' ? 'bg-green-100' :
                            notification.type === 'warning' ? 'bg-amber-100' :
                            notification.type === 'error' ? 'bg-red-100' : 'bg-blue-100'
                          }`}>
                            {notification.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
                            {notification.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-600" />}
                            {notification.type === 'error' && <XCircle className="w-5 h-5 text-red-600" />}
                            {notification.type === 'info' && <Bell className="w-5 h-5 text-blue-600" />}
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${notification.read ? 'text-slate-700' : 'text-slate-900'}`}>
                              {notification.message}
                            </p>
                            <p className="text-slate-500 text-sm mt-1">{notification.time}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                Mark Read
                              </button>
                            )}
                            <button className="text-slate-600 hover:text-slate-700">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Notification Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-slate-900">System Alerts</h4>
                        {[
                          'Server performance issues',
                          'Payment processing errors',
                          'Database backup status',
                          'Security alerts'
                        ].map((setting, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-slate-700">{setting}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium text-slate-900">Business Alerts</h4>
                        {[
                          'New user registrations',
                          'Subscription cancellations',
                          'Revenue milestones',
                          'Customer feedback'
                        ].map((setting, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-slate-700">{setting}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Add Item Section */}
              {activeSection === 'add-item' && (
                <div className="space-y-6">
                  {/* Error/Success Messages */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  {success && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      {success}
                    </div>
                  )}

                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Add New Item</h2>
                        <p className="text-slate-600 mt-1">Add products and services to your catalog</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveSection('products')}
                          className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                        >
                          View All Items
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Add Item Form */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <form onSubmit={handleItemSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Left Column */}
                        <div className="space-y-6">
                          {/* Item Name */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Item Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={itemForm.name}
                              onChange={handleItemFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Enter item name"
                              required
                            />
                          </div>

                          {/* Item Type */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Item Type *
                            </label>
                            <select
                              name="type"
                              value={itemForm.type}
                              onChange={handleItemFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            >
                              <option value="">Select item type</option>
                              <option value="service">Service</option>
                              <option value="product">Product</option>
                              <option value="consultation">Consultation</option>
                              <option value="reading">Reading</option>
                              <option value="course">Course</option>
                              <option value="subscription">Subscription</option>
                            </select>
                          </div>

                          {/* Item Price */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Price (₹) *
                            </label>
                            <input
                              type="number"
                              name="price"
                              value={itemForm.price}
                              onChange={handleItemFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                              required
                            />
                          </div>

                          {/* Stock Quantity */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Stock Quantity
                            </label>
                            <input
                              type="number"
                              name="stock"
                              value={itemForm.stock}
                              onChange={handleItemFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="50"
                              min="0"
                            />
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          {/* Item Image */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Item Image
                            </label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                              {imagePreview ? (
                                <div className="space-y-4">
                                  <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="mx-auto h-32 w-32 object-cover rounded-lg"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setImagePreview(null);
                                      setItemForm(prev => ({ ...prev, image: null }));
                                    }}
                                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                                  >
                                    Remove Image
                                  </button>
                                </div>
                              ) : (
                                <div>
                                  <Camera className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                                  <div className="text-slate-600">
                                    <label htmlFor="image-upload" className="cursor-pointer">
                                      <span className="text-blue-600 hover:text-blue-700 font-medium">
                                        Click to upload
                                      </span>
                                      <span> or drag and drop</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mt-1">
                                      PNG, JPG, GIF up to 10MB
                                    </p>
                                  </div>
                                </div>
                              )}
                              <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Description
                        </label>
                        <textarea
                          name="description"
                          value={itemForm.description}
                          onChange={handleItemFormChange}
                          rows={4}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter item description..."
                        />
                      </div>

                      {/* Form Actions */}
                      <div className="flex items-center justify-end gap-4 pt-6 border-t border-slate-200">
                        <button
                          type="button"
                          onClick={() => {
                            setItemForm({
                              name: '',
                              type: '',
                              price: '',
                              stock: '50',
                              image: null,
                              description: ''
                            });
                            setImagePreview(null);
                            setError('');
                            setSuccess('');
                          }}
                          disabled={loading}
                          className={`px-6 py-2 border border-slate-300 text-slate-700 rounded-lg transition-colors font-medium ${
                            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50'
                          }`}
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className={`px-6 py-2 rounded-lg transition-colors font-medium flex items-center gap-2 ${
                            loading
                              ? 'bg-slate-400 cursor-not-allowed text-white'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Adding Item...
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4" />
                              Add Item
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Add Blog Section */}
              {activeSection === 'add-blog' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Add New Blog Post</h2>
                        <p className="text-slate-600 mt-1">Create and publish blog content for your audience</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveSection('blog-management')}
                          className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                        >
                          Manage Blogs
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Add Blog Form */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <form onSubmit={handleBlogSubmit} className="space-y-6">

                      {/* Basic Information */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">

                          {/* Blog Title */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Blog Title *
                            </label>
                            <input
                              type="text"
                              name="title"
                              value={blogForm.title}
                              onChange={handleBlogFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Enter blog title"
                              required
                            />
                          </div>

                          {/* Blog Content */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Blog Content *
                            </label>
                            <textarea
                              name="content"
                              value={blogForm.content}
                              onChange={handleBlogFormChange}
                              rows={12}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Write your blog content here..."
                              required
                            />
                            <p className="text-xs text-slate-500 mt-1">
                              You can use markdown formatting for rich text
                            </p>
                          </div>

                          {/* Blog Excerpt */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Excerpt
                            </label>
                            <textarea
                              name="excerpt"
                              value={blogForm.excerpt}
                              onChange={handleBlogFormChange}
                              rows={3}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Brief description of the blog post..."
                            />
                            <p className="text-xs text-slate-500 mt-1">
                              This will be shown in blog previews and search results
                            </p>
                          </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">

                          {/* Featured Image */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Featured Image
                            </label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                              {blogImagePreview ? (
                                <div className="space-y-3">
                                  <img
                                    src={blogImagePreview}
                                    alt="Preview"
                                    className="mx-auto h-24 w-full object-cover rounded-lg"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setBlogImagePreview(null);
                                      setBlogForm(prev => ({ ...prev, featuredImage: null }));
                                    }}
                                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                                  >
                                    Remove Image
                                  </button>
                                </div>
                              ) : (
                                <div>
                                  <Camera className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                                  <div className="text-slate-600">
                                    <label htmlFor="blog-image-upload" className="cursor-pointer">
                                      <span className="text-blue-600 hover:text-blue-700 font-medium">
                                        Upload image
                                      </span>
                                    </label>
                                    <p className="text-xs text-slate-500 mt-1">
                                      PNG, JPG up to 5MB
                                    </p>
                                  </div>
                                </div>
                              )}
                              <input
                                id="blog-image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleBlogImageChange}
                                className="hidden"
                              />
                            </div>
                          </div>

                          {/* Category */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Category *
                            </label>
                            <select
                              name="category"
                              value={blogForm.category}
                              onChange={handleBlogFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            >
                              <option value="">Select category</option>
                              <option value="astrology">Astrology</option>
                              <option value="horoscope">Horoscope</option>
                              <option value="zodiac">Zodiac Signs</option>
                              <option value="predictions">Predictions</option>
                              <option value="remedies">Remedies</option>
                              <option value="spirituality">Spirituality</option>
                              <option value="lifestyle">Lifestyle</option>
                              <option value="news">News</option>
                            </select>
                          </div>

                          {/* Tags */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Tags
                            </label>
                            <input
                              type="text"
                              name="tags"
                              value={blogForm.tags}
                              onChange={handleBlogFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="astrology, horoscope, zodiac"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                              Separate tags with commas
                            </p>
                          </div>

                          {/* Author */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Author
                            </label>
                            <input
                              type="text"
                              name="author"
                              value={blogForm.author}
                              onChange={handleBlogFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Author name"
                            />
                          </div>

                          {/* Status */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Status
                            </label>
                            <select
                              name="status"
                              value={blogForm.status}
                              onChange={handleBlogFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="draft">Draft</option>
                              <option value="published">Published</option>
                              <option value="scheduled">Scheduled</option>
                            </select>
                          </div>

                          {/* Publish Date */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Publish Date
                            </label>
                            <input
                              type="datetime-local"
                              name="publishDate"
                              value={blogForm.publishDate}
                              onChange={handleBlogFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Form Actions */}
                      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                        <button
                          type="button"
                          onClick={() => {
                            setBlogForm({
                              title: '',
                              category: '',
                              tags: '',
                              content: '',
                              excerpt: '',
                              featuredImage: null,
                              status: 'draft',
                              publishDate: '',
                              author: ''
                            });
                            setBlogImagePreview(null);
                          }}
                          className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                        >
                          Reset
                        </button>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              setBlogForm(prev => ({ ...prev, status: 'draft' }));
                              handleBlogSubmit();
                            }}
                            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                          >
                            Save as Draft
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                          >
                            <Edit className="w-4 h-4" />
                            Publish Blog
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Add Class Section */}
              {activeSection === 'add-class' && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Upload New Class</h2>
                        <p className="text-slate-600 mt-1">Create educational content and video classes</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveSection('manage-classes')}
                          className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                        >
                          Manage Classes
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Add Class Form */}
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                    <form onSubmit={handleClassSubmit} className="space-y-6">

                      {/* Basic Information */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">

                          {/* Class Title */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Class Title *
                            </label>
                            <input
                              type="text"
                              name="title"
                              value={classForm.title}
                              onChange={handleClassFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Enter class title"
                              required
                            />
                          </div>

                          {/* Class Description */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Class Description *
                            </label>
                            <textarea
                              name="description"
                              value={classForm.description}
                              onChange={handleClassFormChange}
                              rows={6}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Describe what students will learn in this class..."
                              required
                            />
                          </div>

                          {/* Video Upload */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Class Video *
                            </label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                              {classVideoPreview ? (
                                <div className="space-y-4">
                                  <video
                                    src={classVideoPreview}
                                    controls
                                    className="mx-auto h-48 w-full max-w-md rounded-lg"
                                  />
                                  {uploadProgress > 0 && uploadProgress < 100 && (
                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                      <div
                                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${uploadProgress}%` }}
                                      ></div>
                                    </div>
                                  )}
                                  {uploadProgress === 100 && (
                                    <p className="text-green-600 text-sm font-medium">✓ Video uploaded successfully</p>
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setClassVideoPreview(null);
                                      setClassForm(prev => ({ ...prev, video: null }));
                                      setUploadProgress(0);
                                    }}
                                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                                  >
                                    Remove Video
                                  </button>
                                </div>
                              ) : (
                                <div>
                                  <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                                  <div className="text-slate-600">
                                    <label htmlFor="class-video-upload" className="cursor-pointer">
                                      <span className="text-blue-600 hover:text-blue-700 font-medium">
                                        Click to upload video
                                      </span>
                                      <span> or drag and drop</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mt-1">
                                      MP4, MOV, AVI up to 500MB
                                    </p>
                                  </div>
                                </div>
                              )}
                              <input
                                id="class-video-upload"
                                type="file"
                                accept="video/*"
                                onChange={handleClassVideoChange}
                                className="hidden"
                                required
                              />
                            </div>
                          </div>

                          {/* Learning Outcomes */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Learning Outcomes
                            </label>
                            <textarea
                              name="learningOutcomes"
                              value={classForm.learningOutcomes}
                              onChange={handleClassFormChange}
                              rows={4}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="What will students achieve after completing this class?"
                            />
                          </div>

                          {/* Prerequisites */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Prerequisites
                            </label>
                            <textarea
                              name="prerequisites"
                              value={classForm.prerequisites}
                              onChange={handleClassFormChange}
                              rows={3}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="What should students know before taking this class?"
                            />
                          </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">

                          {/* Thumbnail */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Class Thumbnail
                            </label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                              {classThumbnailPreview ? (
                                <div className="space-y-3">
                                  <img
                                    src={classThumbnailPreview}
                                    alt="Preview"
                                    className="mx-auto h-24 w-full object-cover rounded-lg"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setClassThumbnailPreview(null);
                                      setClassForm(prev => ({ ...prev, thumbnail: null }));
                                    }}
                                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                                  >
                                    Remove Thumbnail
                                  </button>
                                </div>
                              ) : (
                                <div>
                                  <Camera className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                                  <div className="text-slate-600">
                                    <label htmlFor="class-thumbnail-upload" className="cursor-pointer">
                                      <span className="text-blue-600 hover:text-blue-700 font-medium">
                                        Upload thumbnail
                                      </span>
                                    </label>
                                    <p className="text-xs text-slate-500 mt-1">
                                      PNG, JPG up to 5MB
                                    </p>
                                  </div>
                                </div>
                              )}
                              <input
                                id="class-thumbnail-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleClassThumbnailChange}
                                className="hidden"
                              />
                            </div>
                          </div>

                          {/* Category */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Category *
                            </label>
                            <select
                              name="category"
                              value={classForm.category}
                              onChange={handleClassFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            >
                              <option value="">Select category</option>
                              <option value="beginner-astrology">Beginner Astrology</option>
                              <option value="advanced-astrology">Advanced Astrology</option>
                              <option value="birth-chart-reading">Birth Chart Reading</option>
                              <option value="predictive-astrology">Predictive Astrology</option>
                              <option value="vedic-astrology">Vedic Astrology</option>
                              <option value="western-astrology">Western Astrology</option>
                              <option value="numerology">Numerology</option>
                              <option value="tarot">Tarot Reading</option>
                              <option value="palmistry">Palmistry</option>
                              <option value="vastu">Vastu Shastra</option>
                            </select>
                          </div>

                          {/* Level */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Difficulty Level *
                            </label>
                            <select
                              name="level"
                              value={classForm.level}
                              onChange={handleClassFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            >
                              <option value="">Select level</option>
                              <option value="beginner">Beginner</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                              <option value="expert">Expert</option>
                            </select>
                          </div>

                          {/* Duration */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Duration (minutes)
                            </label>
                            <input
                              type="number"
                              name="duration"
                              value={classForm.duration}
                              onChange={handleClassFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="60"
                              min="1"
                            />
                          </div>

                          {/* Price */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Price (₹)
                            </label>
                            <input
                              type="number"
                              name="price"
                              value={classForm.price}
                              onChange={handleClassFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                            />
                          </div>

                          {/* Instructor */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Instructor
                            </label>
                            <input
                              type="text"
                              name="instructor"
                              value={classForm.instructor}
                              onChange={handleClassFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Instructor name"
                            />
                          </div>

                          {/* Tags */}
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Tags
                            </label>
                            <input
                              type="text"
                              name="tags"
                              value={classForm.tags}
                              onChange={handleClassFormChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="astrology, beginner, chart"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                              Separate tags with commas
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Form Actions */}
                      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                        <button
                          type="button"
                          onClick={() => {
                            setClassForm({
                              title: '',
                              description: '',
                              category: '',
                              level: '',
                              duration: '',
                              price: '',
                              instructor: '',
                              video: null,
                              thumbnail: null,
                              materials: [],
                              prerequisites: '',
                              learningOutcomes: '',
                              tags: ''
                            });
                            setClassVideoPreview(null);
                            setClassThumbnailPreview(null);
                            setUploadProgress(0);
                          }}
                          className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                        >
                          Reset
                        </button>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              // Save as draft functionality
                              console.log('Saving as draft:', classForm);
                              alert('Class saved as draft!');
                            }}
                            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                          >
                            Save as Draft
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                          >
                            <Upload className="w-4 h-4" />
                            Upload Class
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Default content for other sections */}
              {!['dashboard', 'portfolio-templates', 'analytics', 'profit-loss', 'subscriptions', 'notifications', 'add-item', 'add-blog', 'add-class'].includes(activeSection) && (
                <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                  <div className="p-6 border-b border-slate-200">
                    <h2 className="text-xl font-semibold text-slate-900">Coming Soon</h2>
                    <p className="text-slate-600 mt-1">This section is under development</p>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600">We're working on bringing you more admin features. Stay tuned!</p>
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

export default AdminProfile;
