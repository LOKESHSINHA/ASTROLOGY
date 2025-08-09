import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import {
  BookOpen, Star, Calendar, Clock, Download, Eye, Filter,
  Search, ChevronDown, Heart, TrendingUp, Award, FileText
} from 'lucide-react';

const MyReadings = () => {
  const [user, setUser] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const readings = [
    {
      id: 1,
      type: 'Birth Chart Reading',
      date: '2024-01-15',
      status: 'Completed',
      price: '₹2,999',
      astrologer: 'Master Aditya',
      duration: '60 mins',
      rating: 5,
      description: 'Complete natal chart analysis with life predictions',
      reportUrl: '/reports/birth-chart-1.pdf'
    },
    {
      id: 2,
      type: 'Love & Relationship',
      date: '2024-01-10',
      status: 'Completed',
      price: '₹1,999',
      astrologer: 'Master Aditya',
      duration: '45 mins',
      rating: 5,
      description: 'Romantic compatibility and relationship guidance',
      reportUrl: '/reports/love-reading-2.pdf'
    },
    {
      id: 3,
      type: 'Career Guidance',
      date: '2024-01-05',
      status: 'Pending',
      price: '₹2,499',
      astrologer: 'Master Aditya',
      duration: '50 mins',
      rating: null,
      description: 'Professional path and business timing analysis',
      reportUrl: null
    },
    {
      id: 4,
      type: 'Health Astrology',
      date: '2023-12-20',
      status: 'Completed',
      price: '₹2,199',
      astrologer: 'Master Aditya',
      duration: '40 mins',
      rating: 4,
      description: 'Health predictions and wellness guidance',
      reportUrl: '/reports/health-reading-4.pdf'
    },
    {
      id: 5,
      type: 'Gemstone Consultation',
      date: '2023-12-15',
      status: 'Completed',
      price: '₹1,499',
      astrologer: 'Master Aditya',
      duration: '30 mins',
      rating: 5,
      description: 'Personalized gemstone recommendations',
      reportUrl: '/reports/gemstone-5.pdf'
    }
  ];

  const filteredReadings = readings.filter(reading => {
    const matchesStatus = filterStatus === 'all' || reading.status.toLowerCase() === filterStatus;
    const matchesSearch = reading.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reading.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Cancelled':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getReadingIcon = (type) => {
    if (type.includes('Birth Chart')) return Star;
    if (type.includes('Love')) return Heart;
    if (type.includes('Career')) return TrendingUp;
    if (type.includes('Health')) return Award;
    return BookOpen;
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white py-8 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-4">
            My Readings
          </h1>
          <p className="text-slate-600 font-medium">
            Track your spiritual journey and access your consultation reports
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{readings.length}</p>
                <p className="text-slate-600 font-medium text-sm">Total Readings</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {readings.filter(r => r.status === 'Completed').length}
                </p>
                <p className="text-slate-600 font-medium text-sm">Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {readings.filter(r => r.status === 'Pending').length}
                </p>
                <p className="text-slate-600 font-medium text-sm">Pending</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.8</p>
                <p className="text-slate-600 font-medium text-sm">Avg Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search readings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
                />
              </div>

              {/* Filter */}
              <div className="relative">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <p className="text-sm text-slate-600 font-medium">
              Showing {filteredReadings.length} of {readings.length} readings
            </p>
          </div>
        </div>

        {/* Readings List */}
        <div className="space-y-6">
          {filteredReadings.map((reading) => {
            const IconComponent = getReadingIcon(reading.type);
            return (
              <div key={reading.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  
                  {/* Reading Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{reading.type}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(reading.status)}`}>
                            {reading.status}
                          </span>
                        </div>
                        
                        <p className="text-slate-600 mb-3">{reading.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {reading.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {reading.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="font-semibold text-slate-900">{reading.price}</span>
                          </div>
                          {reading.rating && (
                            <div className="flex items-center gap-1">
                              {[...Array(reading.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:w-32">
                    {reading.status === 'Completed' && reading.reportUrl && (
                      <>
                        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                          <Eye className="w-4 h-4" />
                          View Report
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-semibold hover:bg-slate-200 transition-colors">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </>
                    )}
                    
                    {reading.status === 'Pending' && (
                      <button className="flex items-center justify-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-semibold">
                        <Clock className="w-4 h-4" />
                        In Progress
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredReadings.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No readings found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setFilterStatus('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default MyReadings;
