import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import config from '../config';
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
import { TbFlagSearch } from 'react-icons/tb';
const API_BASE_URL = config.API_BASE_URL;
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
    description: '',
     categoryId: "" // ✅ add categoryId
  });
  const [blog, setBlog] = useState([]);         // all blogs
//  const [EditBlog, setEditBlog] = useState(false); // modal open/close
  const [selectedBlog, setSelectedBlog] = useState(null); // blog to edit
  const [EditBlog,isEditBlog]=useState(false);
  const [onClose,setonClose]=useState(false);
  const [onBlogUpdated,setonBlogUpdated]=useState(false); 
   const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(null);
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


  const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeSection !== "users") return;

    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/users-list`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // ✅ better than hardcoding
          },
        });

        const data = await res.json();
        setUsers(data.data || []);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [activeSection]);

///manage blogs

const [blogs, setBlogs] = useState([]);

useEffect(() => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`${API_BASE_URL}/api/get-blogs`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("Fetched blogs:", result);
      if (result.blogs) {
        setBlogs(result.blogs);
      }
    })
    .catch((error) => console.error("Error fetching blogs:", error));
}, []);

const handleEdit = (id) => {
  console.log("Edit blog:", id);
  // TODO: open edit modal or navigate to edit page
};

const handleDelete = (id: string) => {
  console.log("Delete blog:", id);
  // TODO: call delete API and update state
};

const openEditModal = (blog) => {
  setFormData({
    title: blog.title || "",
    category: blog.category || "",
    tags: blog.tags || "",
    excerpt: blog.excerpt || "",
    content: blog.content || "",
    author: blog.author || "",
    status: blog.status || "draft",
    publishDate: blog.publishDate
      ? new Date(blog.publishDate).toISOString().split("T")[0]
      : "",
    metaTitle: blog.metaTitle || "",
    metaDescription: blog.metaDescription || "",
    featuredImage: blog.featuredImage || null, // keep string path until user changes
  });

  isEditBlog(true); // show modal
};


////Edit blogs 
 const [formData, setFormData] = useState({
    title: "",
    category: "",
    tags: "",
    excerpt: "",
    content: "",
    author: "",
    status: "draft",
    publishDate: "",
    metaTitle: "",
    metaDescription: "",
    featuredImage: null,
  });

  // Pre-fill form when blog data is passed
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        category: blog.category || "",
        tags: blog.tags || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        author: blog.author || "",
        status: blog.status || "draft",
        publishDate: blog.publishDate
          ? blog.publishDate.split("T")[0]
          : "",
        metaTitle: blog.metaTitle || "",
        metaDescription: blog.metaDescription || "",
        featuredImage: null,
      });
    }
  }, [blog]);

  // Local change handler
  const localHandleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        featuredImage: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Renamed submit handler
 const handleEditSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("tags", formData.tags);
    data.append("excerpt", formData.excerpt);
    data.append("content", formData.content);
    data.append("author", formData.author);
    data.append("status", formData.status);
    data.append("publishDate", formData.publishDate);
    data.append("metaTitle", formData.metaTitle);
    data.append("metaDescription", formData.metaDescription);

    if (formData.featuredImage instanceof File) {
      data.append("file", formData.featuredImage);
    }

    const res = await fetch(
      `${API_BASE_URL}/api/update-blog/${blog._id}`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!res.ok) throw new Error("Failed to update blog");

    const result = await res.json();
    console.log("Updated Blog:", result);

    isEditBlog(false); // close modal
  } catch (err) {
    console.error("Error updating blog:", err);
  }
};




  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    //console.log("Saved user:", localStorage.getItem('user'));  
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      // Check if user is admin
      //console.log("userData.role",userData.role);
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

  // Fetch categories on load
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/categories`, {
          method: "GET",
          headers: {
            Authorization: "Bearer YOUR_TOKEN_HERE",
          },
        });
         const json = await res.json();
        //console.log("categories", json);

        // ✅ Store only array from `data`
        setCategories(Array.isArray(json.data) ? json.data : []);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);


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

   //console.log("activeSection",activeSection);
   //console.log("products",products);







   

//fetching product details

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/get-all-products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // correct header
        },
      });

      if (!response.ok) throw new Error("Failed to fetch products");

      const result = await response.json();
      //console.log("products", result);
      setProducts(result.data || []); // safe mapping
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchProducts(); // ✅ call once when component mounts


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
const handleBlogSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    // Append all blog fields
    formData.append("title", blogForm.title);
    formData.append("category", blogForm.category || "");
    formData.append("tags", blogForm.tags || ""); // send as comma-separated string
    formData.append("content", blogForm.content);
    formData.append("excerpt", blogForm.excerpt || "");
    formData.append("status", blogForm.status || "draft");
    formData.append("publishDate", blogForm.publishDate || "");
    formData.append("author", blogForm.author);
    formData.append("metaTitle", blogForm.metaTitle || "");
    formData.append("metaDescription", blogForm.metaDescription || "");

    // Append file under "file" to match backend
    if (blogForm.featuredImage) {
      formData.append("file", blogForm.featuredImage);
    }

    // Send POST request with multipart/form-data
    const response = await fetch(`${API_BASE_URL}/api/create-blog`, {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Blog created:", result);

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
        author: '',
        metaTitle: '',
        metaDescription: ''
      });
      setBlogImagePreview(null);

      alert("Blog created successfully!");
    } else {
      console.error("Error creating blog:", result);
      alert("Failed to create blog: " + result.message);
    }
  } catch (error) {
    console.error("Error creating blog:", error);
    alert("Failed to create blog");
  }
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
   console.log("Item Form Data:", itemForm);
  try {
    setLoading(true);
    setError('');
    setSuccess('');

    // ✅ Validate form
    if (!itemForm.name.trim()) {
      setError('Item name is required');
      return;
    }
    if (!itemForm.categoryId) {
      setError('Category is required');
      return;
    }
    if (!itemForm.price || parseFloat(itemForm.price) < 0) {
      setError('Valid price is required');
      return;
    }

    // ✅ Build FormData instead of JSON
    const formdata = new FormData();
    formdata.append("productName", itemForm.name);
    formdata.append("description", itemForm.description || "");
    formdata.append("productPrice", itemForm.price);
    formdata.append("discountPrice", itemForm.discountPrice || "0");
    formdata.append("stock", itemForm.stock || "50");
    formdata.append("categoryMasterId", itemForm.categoryId);
    formdata.append("brand", "Aditya Astrology");
    formdata.append("attributes", "");
    formdata.append("isFeatured", "false");
    formdata.append("isLive", "true");
    formdata.append("metaTitle", itemForm.name);
    formdata.append("metaDescription", itemForm.description || "");
    
    // ✅ Image file (if uploaded)
    if (itemForm.image) {
      formdata.append("images", itemForm.image);
    }

    // ✅ Headers with Bearer Token
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer YOUR_TOKEN_HERE"); // replace with real token

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    console.log("Add Item Request:", requestOptions);

    const response = await fetch(`${API_BASE_URL}/api/add-product`, requestOptions);
    const result = await response.json();

    console.log("Add Item Response:", response);
    console.log("Add Item Result:", result);

    if (response.ok) {
      setSuccess("Item added successfully!");
      // Reset form
      setItemForm({
        name: "",
        categoryId: "",
        price: "",
        discountPrice: "",
        stock: "50",
        image: null,
        description: "",
      });
      setImagePreview(null);
        alert("Product created successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } else {
      const errorMessage =
        result.message || result.error || "Failed to add item. Please try again.";
      setError(errorMessage);
    }
  } catch (error) {
    console.error("Error adding item:", error);
    setError("Network error. Please check your connection and try again.");
  } finally {
    setLoading(false);
  }
};




   














  return (
    <>
      <AdminHeader user={user} onLogout={handleLogout} />
      <div className="max-h-screen bg-slate-50 pt-20">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                <div className="py-8">
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
                             <button
      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
      onClick={() => {
        openEditModal(blog);
      }}
    >
      Edit
    </button>
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
                          onClick={() => { setActiveSection('products'); fetchProducts(); }}
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
    Category Type *
  </label>
  <select
    name="categoryId"
    value={itemForm.categoryId}
    onChange={handleItemFormChange}
    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    required
  >
    {/* Placeholder option */}
    <option value="">Select category</option>

    {/* Map through categories */}
    {categories?.map((cat) => (
      <option key={cat.id} value={cat.id}>
        {cat.categoryNameEng}
      </option>
    ))}
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
    type="date" // ✅ only date
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
              
               {activeSection === 'products' && (
                 <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🛒 Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => {
            const images = product.images ? JSON.parse(product.images) : [];

            return (
              <div
                key={product.id}
                className="border rounded-lg shadow-md p-4 bg-white"
              >
                {/* Product Images */}
                {images.length > 0 ? (
                  <img
                    src={images[0]}
                    alt={product.productName}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                ) : (
                  <div className="w-full h-40 flex items-center justify-center bg-gray-100 mb-3 text-gray-400">
                    No Image
                  </div>
                )}

                {/* Product Details */}
                <h3 className="text-lg font-semibold">{product.productName}</h3>
                <p className="text-sm text-gray-600 mb-1">{product.description}</p>
                <p className="text-blue-600 font-bold mb-1">
                  ₹{product.productPrice} 
                  {product.discountPrice && product.discountPrice !== "0.00" && (
                    <span className="text-red-500 ml-2 line-through">
                      ₹{product.discountPrice}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-500 mb-1">Stock: {product.stock}</p>
                <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>

                {/* Category */}
                {product.categoryMaster && (
                  <p className="text-sm text-gray-700">
                    Category: {product.categoryMaster.categoryNameEng} ({product.categoryMaster.categoryNameHin})
                  </p>
                )}

                {/* Attributes */}
                {product.attributes && product.attributes !== '""' && (
                  <p className="text-sm text-gray-500 mt-1">Attributes: {product.attributes}</p>
                )}

                {/* Status */}
                <p className="text-sm mt-2">
                  Status:{" "}
                  <span className={product.isLive ? "text-green-600" : "text-red-600"}>
                    {product.isLive ? "Live" : "Inactive"}
                  </span>
                </p>

                {/* Created/Updated */}
                <p className="text-xs text-gray-400 mt-1">
                  Created: {new Date(product.createdAt).toLocaleString()}
                </p>
                <p className="text-xs text-gray-400">
                  Updated: {new Date(product.updatedAt).toLocaleString()}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
              )}

              {activeSection === "blog-management" && (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Blog Management</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white rounded-xl shadow-md text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border text-left">Image</th>
            <th className="px-4 py-2 border text-left">Title</th>
            <th className="px-4 py-2 border text-left">Category</th>
            <th className="px-4 py-2 border text-left">Tags</th>
            <th className="px-4 py-2 border text-left">Excerpt</th>
            <th className="px-4 py-2 border text-left">Content</th>
            <th className="px-4 py-2 border text-left">Author</th>
            <th className="px-4 py-2 border text-left">Status</th>
            <th className="px-4 py-2 border text-left">Publish Date</th>
            <th className="px-4 py-2 border text-left">Meta Title</th>
            <th className="px-4 py-2 border text-left">Meta Description</th>
            <th className="px-4 py-2 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">
                  <img
                    src={`${API_BASE_URL}${blog.featuredImage}`}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded-lg mx-auto"
                  />
                </td>
                <td className="px-4 py-2 border font-semibold">{blog.title}</td>
                <td className="px-4 py-2 border">{blog.category}</td>
                <td className="px-4 py-2 border">{blog.tags}</td>
                <td className="px-4 py-2 border">{blog.excerpt}</td>
                <td
                  className="px-4 py-2 border max-w-[200px] truncate"
                  title={blog.content}
                >
                  {blog.content}
                </td>
                <td className="px-4 py-2 border">{blog.author}</td>
                <td className="px-4 py-2 border capitalize">{blog.status}</td>
                <td className="px-4 py-2 border">
                  {new Date(blog.publishDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border">{blog.metaTitle || "-"}</td>
                <td className="px-4 py-2 border">{blog.metaDescription || "-"}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() =>{
                      openEditModal(blog);
      }}
                    className="px-3 py-1 mr-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12} className="text-center py-4 text-gray-500">
                No blogs available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)}

{/* Edit Modal */}
{EditBlog && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 overflow-y-auto max-h-[90vh]">
      <h2 className="text-xl font-bold mb-4">Edit Blog</h2>

      <form onSubmit={handleEditSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium">Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Comma separated"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
            rows="2"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
            rows="4"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* Publish Date */}
        <div>
          <label className="block text-sm font-medium">Publish Date</label>
          <input
            type="date"
            name="publishDate"
            value={formData.publishDate}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Meta Title */}
        <div>
          <label className="block text-sm font-medium">Meta Title</label>
          <input
            type="text"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-sm font-medium">Meta Description</label>
          <textarea
            name="metaDescription"
            value={formData.metaDescription}
            onChange={localHandleChange}
            className="w-full p-2 border rounded-lg"
            rows="2"
          />
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-sm font-medium">Featured Image</label>
          <input
            type="file"
            name="featuredImage"
            accept="image/*"
            onChange={(e) =>
              setFormData({ ...formData, featuredImage: e.target.files[0] })
            }
            className="w-full"
          />
          {formData.featuredImage && typeof formData.featuredImage === "string" && (
            <img
              src={`${API_BASE_URL}${formData.featuredImage}`}
              alt="Current Featured"
              className="mt-2 w-24 h-24 object-cover rounded-lg"
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={() => isEditBlog(false)}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
             onClick={() => handleEditSubmit()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
)}



{activeSection === "users" && (
  <div className="p-6 bg-white shadow rounded-lg">
    <h2 className="text-2xl font-bold mb-4">User List</h2>

    {users.length === 0 ? (
      <p className="text-gray-500 text-center py-6">No users found.</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-center">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr
                key={u.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="border p-2 text-center">{idx + 1}</td>
                <td className="border p-2">
                  {u.firstName} {u.lastName}
                </td>
                <td className="border p-2">{u.username}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">{u.mobile}</td>
                <td className="border p-2 capitalize">{u.role}</td>
                <td
                  className={`border p-2 font-medium ${
                    u.status === "active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {u.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
)}






              {/* Default content for other sections */}
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
