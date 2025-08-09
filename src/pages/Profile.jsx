import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import {
  User, Mail, Phone, Calendar, Star, BookOpen, CreditCard,
  Settings, LogOut, Edit, Camera, Award, Clock, Heart,
  TrendingUp, Shield, Bell, Eye, MapPin, Gift, Truck,
  RotateCcw, HelpCircle, ChevronRight, Package
} from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('account');
  const navigate = useNavigate();

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
    },
    {
      title: 'MY STUFF',
      items: [
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'help', name: 'Help Center', icon: HelpCircle }
      ]
    }
  ];

  return (
    <>
      <Header />
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
                      <p className="text-slate-600 font-medium">{user.name}</p>
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
                              value={user.name}
                              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input
                              type="email"
                              value={user.email}
                              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              value={user.phone || '+91 98765 43210'}
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

              {/* Default content for other sections */}
              {!['account', 'readings', 'payments'].includes(activeSection) && (
                <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                  <div className="p-6 border-b border-slate-200">
                    <h2 className="text-xl font-semibold text-slate-900">Coming Soon</h2>
                    <p className="text-slate-600 mt-1">This section is under development</p>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600">We're working on bringing you more features. Stay tuned!</p>
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
