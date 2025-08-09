import React from 'react';
import { Star, Award, BookOpen, Users, Calendar, Sparkles, Sun, Heart } from 'lucide-react';

const AboutAditya = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-amber-200 shadow-lg">
                <Star className="w-5 h-5 text-amber-600" />
                <span>Master Astrologer & Spiritual Guide</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent">
                Master Aditya
              </h1>
              
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                A renowned Vedic astrologer with over 15 years of experience in guiding souls through cosmic wisdom. Master Aditya combines ancient astrological knowledge with modern understanding to provide transformative insights.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center bg-white/80 rounded-xl p-4 border border-amber-200 shadow-lg">
                  <div className="text-3xl font-bold text-amber-700 mb-2">15+</div>
                  <div className="text-slate-700 font-semibold text-sm">Years Experience</div>
                </div>
                <div className="text-center bg-white/80 rounded-xl p-4 border border-orange-200 shadow-lg">
                  <div className="text-3xl font-bold text-orange-700 mb-2">50K+</div>
                  <div className="text-slate-700 font-semibold text-sm">Lives Transformed</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full border-4 border-amber-300 shadow-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Sun className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-6 h-6 bg-amber-400 rounded-full animate-bounce opacity-70"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-orange-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent">
              Spiritual Journey
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
              From a young seeker to a master guide, discover the path that led to cosmic wisdom.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Early Calling</h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  Born into a family with deep spiritual roots, Master Aditya showed an early fascination with the stars and their influence on human life. At the age of 12, he began studying under renowned Vedic scholars, immersing himself in ancient texts and astronomical calculations.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Years of Learning</h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  Spent over a decade studying classical texts like Brihat Parashara Hora Shastra, Jaimini Sutras, and Phaladeepika. Traveled across India to learn from master astrologers in Varanasi, Rishikesh, and South Indian temples, gaining deep insights into various astrological traditions.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Modern Integration</h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  Recognizing the need to bridge ancient wisdom with contemporary life, Master Aditya developed unique methodologies that make Vedic astrology accessible and relevant to modern seekers. His approach combines traditional calculations with psychological insights and practical guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent">
              Areas of Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 rounded-2xl p-6 border border-amber-200 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vedic Astrology</h3>
              <p className="text-slate-600 text-sm">Traditional birth chart analysis and predictions</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-6 border border-orange-200 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Relationship Counseling</h3>
              <p className="text-slate-600 text-sm">Marriage compatibility and love guidance</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-6 border border-blue-200 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Career Guidance</h3>
              <p className="text-slate-600 text-sm">Professional path and business timing</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-6 border border-purple-200 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Spiritual Healing</h3>
              <p className="text-slate-600 text-sm">Remedies and spiritual practices</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-6 border border-emerald-200 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Muhurat Selection</h3>
              <p className="text-slate-600 text-sm">Auspicious timing for important events</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-6 border border-red-200 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Gemstone Therapy</h3>
              <p className="text-slate-600 text-sm">Planetary remedies through sacred stones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent">
              Guiding Philosophy
            </h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 shadow-xl">
              <blockquote className="text-xl text-slate-700 leading-relaxed italic mb-6">
                "Astrology is not about predicting a fixed destiny, but about understanding the cosmic energies that influence our choices. When we align with these energies, we can create the life we truly desire."
              </blockquote>
              <p className="text-amber-700 font-semibold">- Master Aditya</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAditya;
