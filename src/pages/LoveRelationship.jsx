import React, { useState } from 'react';
import { Heart, Users, Star, Sparkles, Calendar, User } from 'lucide-react';

const LoveRelationship = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    yourDate: '',
    yourTime: '',
    yourPlace: '',
    partnerName: '',
    partnerDate: '',
    partnerTime: '',
    partnerPlace: '',
    relationshipType: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Love & Relationship Form Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-rose-200 shadow-lg">
              <Heart className="w-5 h-5 text-rose-600" />
              <span>Romantic Compatibility Analysis</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-rose-700 bg-clip-text text-transparent">
              Love & Relationship Reading
            </h1>
            
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover your romantic compatibility and understand relationship patterns through cosmic insights. Find guidance for lasting love connections and harmonious partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-rose-200 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-rose-600" />
                Compatibility Analysis
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Your Details */}
                <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-rose-600" />
                    Your Details
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="yourName"
                      value={formData.yourName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="date"
                      name="yourDate"
                      value={formData.yourDate}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                      required
                    />
                    <input
                      type="time"
                      name="yourTime"
                      value={formData.yourTime}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                      required
                    />
                    <input
                      type="text"
                      name="yourPlace"
                      value={formData.yourPlace}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                      placeholder="Birth Place"
                      required
                    />
                  </div>
                </div>

                {/* Partner Details */}
                <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-600" />
                    Partner's Details
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="partnerName"
                      value={formData.partnerName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                      placeholder="Partner's Name"
                      required
                    />
                    <input
                      type="date"
                      name="partnerDate"
                      value={formData.partnerDate}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                      required
                    />
                    <input
                      type="time"
                      name="partnerTime"
                      value={formData.partnerTime}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                      required
                    />
                    <input
                      type="text"
                      name="partnerPlace"
                      value={formData.partnerPlace}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                      placeholder="Birth Place"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Relationship Type</label>
                  <select
                    name="relationshipType"
                    value={formData.relationshipType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                    required
                  >
                    <option value="">Select Relationship Type</option>
                    <option value="dating">Dating</option>
                    <option value="engaged">Engaged</option>
                    <option value="married">Married</option>
                    <option value="potential">Potential Partner</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Compatibility Report - ₹1,999
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-rose-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-rose-600" />
                  Compatibility Analysis Includes
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Love Compatibility Score</h4>
                      <p className="text-slate-600">Detailed percentage-based compatibility analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Emotional Harmony</h4>
                      <p className="text-slate-600">Understanding emotional needs and expressions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Communication Patterns</h4>
                      <p className="text-slate-600">How you connect and resolve conflicts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Long-term Potential</h4>
                      <p className="text-slate-600">Marriage and partnership prospects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Relationship Guidance</h4>
                      <p className="text-slate-600">Tips for strengthening your bond</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Find Your Perfect Match</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Love is written in the stars! Our compatibility analysis reveals the cosmic connection between you and your partner, helping you understand your relationship dynamics and build a stronger, more harmonious bond.
                </p>
                <div className="flex items-center gap-2 text-rose-600 font-semibold">
                  <Heart className="w-5 h-5" />
                  <span>Over 5000 couples guided to happiness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoveRelationship;
