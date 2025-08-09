import React, { useState } from 'react';
import { Star, Calendar, MapPin, Clock, User, Sparkles, Sun, Moon } from 'lucide-react';

const BirthChart = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
    gender: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Birth Chart Form Data:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-blue-200 shadow-lg">
              <Star className="w-5 h-5 text-amber-600" />
              <span>Complete Natal Chart Analysis</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Birth Chart Reading
            </h1>
            
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover your cosmic blueprint through detailed natal chart analysis. Understand your personality, strengths, challenges, and life purpose based on the exact moment of your birth.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-blue-600" />
                Your Birth Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Time of Birth</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Place of Birth</label>
                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City, State, Country"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  Generate Birth Chart - ₹2,999
                </button>
              </form>
            </div>

            {/* What You Get */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                  What You'll Receive
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Complete Natal Chart</h4>
                      <p className="text-slate-600">Detailed planetary positions and house placements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Personality Analysis</h4>
                      <p className="text-slate-600">Deep insights into your character and traits</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Life Purpose</h4>
                      <p className="text-slate-600">Understanding your soul's mission and path</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Strengths & Challenges</h4>
                      <p className="text-slate-600">Areas of natural talent and growth opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Remedies & Guidance</h4>
                      <p className="text-slate-600">Personalized recommendations for spiritual growth</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Birth Chart Reading?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Your birth chart is a cosmic snapshot of the sky at the exact moment you were born. It reveals your unique personality blueprint, life patterns, and spiritual journey. Understanding your chart helps you make informed decisions and live in alignment with your true nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthChart;
