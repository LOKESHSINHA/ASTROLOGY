import React, { useState } from 'react';
import { TrendingUp, Briefcase, Star, Target, Calendar, User, Award, BookOpen } from 'lucide-react';

const CareerGuidance = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
    currentField: '',
    experience: '',
    concerns: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Career Guidance Form Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-blue-200 shadow-lg">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Professional Path Analysis</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Career Guidance
            </h1>
            
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Unlock your professional potential with cosmic insights. Discover ideal career paths, timing for job changes, and business opportunities aligned with your planetary influences.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Career Analysis Form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Place of Birth</label>
                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="City, State, Country"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Current Field/Industry</label>
                  <select
                    name="currentField"
                    value={formData.currentField}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Your Field</option>
                    <option value="technology">Technology/IT</option>
                    <option value="finance">Finance/Banking</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="business">Business/Management</option>
                    <option value="creative">Creative/Arts</option>
                    <option value="government">Government/Public Service</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Experience Level</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="fresher">Fresher (0-1 years)</option>
                    <option value="junior">Junior (1-3 years)</option>
                    <option value="mid">Mid-level (3-7 years)</option>
                    <option value="senior">Senior (7-15 years)</option>
                    <option value="executive">Executive (15+ years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Career Concerns/Questions</label>
                  <textarea
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="What specific career guidance are you seeking?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Career Guidance - ₹2,499
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  Career Analysis Includes
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Ideal Career Paths</h4>
                      <p className="text-slate-600">Professions aligned with your planetary strengths</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Timing Analysis</h4>
                      <p className="text-slate-600">Best periods for job changes and promotions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Business Opportunities</h4>
                      <p className="text-slate-600">Entrepreneurial potential and favorable ventures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Financial Growth</h4>
                      <p className="text-slate-600">Income potential and wealth-building strategies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Skill Development</h4>
                      <p className="text-slate-600">Areas to focus for professional growth</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Success Stories</h3>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-4">
                    <p className="text-slate-700 text-sm italic">"Changed my career from finance to technology based on the guidance. Now earning 3x more!"</p>
                    <p className="text-blue-600 font-semibold text-sm mt-2">- Rahul S., Software Engineer</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <p className="text-slate-700 text-sm italic">"Started my own business at the recommended time. It's thriving beyond expectations!"</p>
                    <p className="text-blue-600 font-semibold text-sm mt-2">- Priya M., Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerGuidance;
