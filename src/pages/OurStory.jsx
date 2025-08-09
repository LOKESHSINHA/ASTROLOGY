import React from 'react';
import { Star, Heart, Users, BookOpen, Sparkles, Sun, Calendar, Award } from 'lucide-react';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-purple-200 shadow-lg">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <span>Journey of Cosmic Wisdom</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent">
              Our Story
            </h1>
            
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
              From humble beginnings to becoming a trusted name in Vedic astrology, discover the journey that transformed ancient wisdom into modern guidance for thousands of souls.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              
              {/* 2008 - The Beginning */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 text-center border border-purple-200 shadow-lg">
                    <div className="text-3xl font-bold text-purple-700 mb-2">2008</div>
                    <div className="text-purple-600 font-semibold">The Beginning</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Star className="w-6 h-6 text-purple-600" />
                      A Sacred Calling
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      Master Aditya began his formal practice after completing 8 years of intensive study under renowned Vedic scholars. Starting with a small consultation room in Mumbai, he dedicated himself to helping people understand their cosmic connections. The first year saw 100 consultations, each one deepening his commitment to this sacred art.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2012 - Growing Recognition */}
              <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 text-center border border-blue-200 shadow-lg">
                    <div className="text-3xl font-bold text-blue-700 mb-2">2012</div>
                    <div className="text-blue-600 font-semibold">Growing Recognition</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      Word of Mouth Magic
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      As accurate predictions and life-changing guidance spread through word of mouth, the practice grew exponentially. Media appearances on local TV channels and radio shows brought Vedic astrology to mainstream audiences. The client base expanded to over 1,000 regular consultees, including celebrities and business leaders.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2016 - Digital Transformation */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-6 text-center border border-emerald-200 shadow-lg">
                    <div className="text-3xl font-bold text-emerald-700 mb-2">2016</div>
                    <div className="text-emerald-600 font-semibold">Digital Era</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-emerald-600" />
                      Embracing Technology
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      Recognizing the need to reach souls across the globe, Aditya Astrology launched its first website and online consultation platform. This digital transformation made ancient wisdom accessible to seekers worldwide, with consultations reaching clients in over 25 countries. The integration of technology with tradition became our signature approach.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2020 - Pandemic Pivot */}
              <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 text-center border border-orange-200 shadow-lg">
                    <div className="text-3xl font-bold text-orange-700 mb-2">2020</div>
                    <div className="text-orange-600 font-semibold">Global Reach</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Heart className="w-6 h-6 text-orange-600" />
                      Healing Through Crisis
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      During the global pandemic, when people needed guidance most, our online platform became a beacon of hope. We provided free consultations to healthcare workers and conducted virtual group sessions for mental wellness. This period saw our community grow to over 25,000 active members seeking cosmic comfort and clarity.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2024 - Present Day */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 text-center border border-amber-200 shadow-lg">
                    <div className="text-3xl font-bold text-amber-700 mb-2">2024</div>
                    <div className="text-amber-600 font-semibold">Present Day</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Award className="w-6 h-6 text-amber-600" />
                      Legacy of Wisdom
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      Today, Aditya Astrology stands as a trusted name with over 50,000 satisfied clients worldwide. Our comprehensive platform offers everything from detailed birth chart analysis to daily horoscopes, spiritual products, and educational content. We continue to bridge ancient wisdom with modern needs, helping souls find their true path in an ever-changing world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Sun className="w-6 h-6 text-purple-600" />
                Our Mission
              </h3>
              <p className="text-slate-700 leading-relaxed text-justify mb-6">
                To make the profound wisdom of Vedic astrology accessible to every soul seeking guidance, helping individuals understand their cosmic blueprint and make informed decisions that align with their highest purpose.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600 font-medium">Authentic Vedic knowledge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600 font-medium">Personalized guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-600 font-medium">Global accessibility</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-blue-600" />
                Our Vision
              </h3>
              <p className="text-slate-700 leading-relaxed text-justify mb-6">
                To create a world where ancient cosmic wisdom guides modern living, where every individual can access their spiritual blueprint and live in harmony with universal energies for a more conscious and fulfilling existence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600 font-medium">Spiritual awakening</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-600 font-medium">Conscious living</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600 font-medium">Universal harmony</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/90 rounded-2xl p-6 border border-purple-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Authenticity</h3>
              <p className="text-slate-600 text-sm">Pure Vedic knowledge without compromise</p>
            </div>

            <div className="text-center bg-white/90 rounded-2xl p-6 border border-blue-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Compassion</h3>
              <p className="text-slate-600 text-sm">Caring guidance for every soul</p>
            </div>

            <div className="text-center bg-white/90 rounded-2xl p-6 border border-indigo-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Wisdom</h3>
              <p className="text-slate-600 text-sm">Ancient knowledge for modern times</p>
            </div>

            <div className="text-center bg-white/90 rounded-2xl p-6 border border-emerald-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Transformation</h3>
              <p className="text-slate-600 text-sm">Empowering positive life changes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
