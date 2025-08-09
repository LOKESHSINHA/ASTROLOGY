import {
  Star,
  Sun,
  Sparkles,
  ArrowRight,
  Play,
  Heart,
  Calendar,
  Moon,
  Zap,
  Users,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Shield,
  Award,
  Clock,
  TrendingUp,
  Eye,
  Globe
} from "lucide-react";
import StylishBrand from "../components/StylishBrand";
import "../styles/components.css";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
      color: '#1e293b'
    }}>
      {/* Light Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #ec4899 0%, transparent 50%)`,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Star className="w-1 h-1 text-blue-400 opacity-40" />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Side - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-bounce backdrop-blur-sm border border-blue-200 shadow-lg">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                <span className="text-blue-800">Discover Your Cosmic Destiny</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent block">
                  Aditya
                </span>
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent block">
                  Astrology
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 mb-8 sm:mb-12 leading-relaxed font-medium text-center lg:text-justify">
                Unlock the mysteries of the cosmos and discover your true path through ancient wisdom and modern insights. Your journey to self-discovery begins here with personalized astrological guidance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-12 sm:mb-16">
                <button className="bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:shadow-2xl hover:shadow-slate-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-xl">
                  <Play className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="text-white">Start Your Reading</span>
                </button>
                <button className="border-2 border-slate-700 text-slate-800 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-slate-50 hover:border-slate-800 transition-all duration-300 backdrop-blur-sm">
                  <span className="text-slate-800">Explore Services</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-700 mb-1 sm:mb-2">50K+</div>
                  <div className="text-slate-700 font-semibold text-sm sm:text-base">Happy Clients</div>
                </div>
                <div className="text-center lg:text-left bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">1M+</div>
                  <div className="text-slate-700 font-semibold text-sm sm:text-base">Readings Done</div>
                </div>
                <div className="text-center lg:text-left bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-700 mb-1 sm:mb-2">4.9★</div>
                  <div className="text-slate-700 font-semibold text-sm sm:text-base">User Rating</div>
                </div>
              </div>
            </div>

            {/* Right Side - Rotating Astrology Circle */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
                {/* Main Rotating Circle */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '60s' }}>
                  <img
                    src="https://mysta.peerduck.com/wp-content/uploads/2022/01/astrology-circle-orance-dots-1024x1024.png"
                    alt="Astrology Circle"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Center Glow Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-amber-400/30 to-orange-500/30 rounded-full blur-xl animate-pulse"></div>
                </div>

                {/* Floating Elements Around Circle */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-10 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
                <div className="absolute top-1/4 right-0 w-3 h-3 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cosmic Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-amber-200/40 to-orange-200/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Our Sacred Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed text-center sm:text-justify font-medium">
              Discover the ancient wisdom of astrology through our comprehensive range of services designed to guide you on your spiritual journey and life path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {/* Birth Chart Reading */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-slate-700 to-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Birth Chart Reading</h3>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-justify text-sm sm:text-base font-medium">Complete natal chart analysis revealing your personality, strengths, challenges, and life purpose based on your birth details.</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-800 font-bold text-lg sm:text-xl">₹2,999</span>
                <button className="bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg transition-all">
                  Book Now
                </button>
              </div>
            </div>

            {/* Love & Relationships */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-rose-200 hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Love & Relationships</h3>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-justify text-sm sm:text-base font-medium">Discover your romantic compatibility, understand relationship patterns, and find guidance for lasting love connections.</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-800 font-bold text-lg sm:text-xl">₹1,999</span>
                <button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg transition-all">
                  Book Now
                </button>
              </div>
            </div>

            {/* Career Guidance */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Career Guidance</h3>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-justify text-sm sm:text-base font-medium">Unlock your professional potential with insights into career paths, timing for job changes, and business opportunities.</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-800 font-bold text-lg sm:text-xl">₹2,499</span>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg transition-all">
                  Book Now
                </button>
              </div>
            </div>

            {/* Daily Horoscope */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Daily Horoscope</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-justify">Get personalized daily insights, lucky numbers, colors, and guidance to navigate your day with cosmic wisdom.</p>
              <div className="flex items-center justify-between">
                <span className="text-amber-600 font-bold text-lg">₹499</span>
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Spiritual Guidance */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Spiritual Guidance</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-justify">Connect with your higher self through meditation guidance, chakra balancing, and spiritual awakening practices.</p>
              <div className="flex items-center justify-between">
                <span className="text-emerald-600 font-bold text-lg">₹1,799</span>
                <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                  Book Now
                </button>
              </div>
            </div>

            {/* Vedic Consultation */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Vedic Consultation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-justify">Ancient Vedic astrology consultation for life decisions, remedies, gemstone recommendations, and spiritual practices.</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-600 font-bold text-lg">₹3,999</span>
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rudraksha Section */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm border border-amber-200 shadow-lg">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              <span className="text-amber-800">Sacred & Authentic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent">
              Sacred Rudraksha Collection
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-700 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium text-center sm:text-justify">
              Discover the divine power of authentic Rudraksha beads, blessed by ancient traditions and energized for spiritual growth. Each bead carries the sacred vibrations of Lord Shiva, offering protection, peace, and prosperity to the wearer.
            </p>
          </div>

          {/* Rudraksha Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">

            {/* 1 Mukhi Rudraksha */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4 sm:p-6 border-2 border-amber-300 shadow-lg">
                  <img
                    src="/rudraksh.png"
                    alt="1 Mukhi Rudraksha"
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  1 Mukhi
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 text-center">Ek Mukhi Rudraksha</h3>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-justify text-sm sm:text-base font-medium">
                The most powerful and rare Rudraksha, representing Lord Shiva himself. Brings supreme consciousness and spiritual enlightenment.
              </p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  Enhances concentration & meditation
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Removes obstacles & negativity
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-800 font-bold text-lg sm:text-xl">₹15,999</span>
                <span className="text-slate-500 line-through text-sm">₹19,999</span>
              </div>
              <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300">
                Add to Cart
              </button>
            </div>

            {/* 5 Mukhi Rudraksha */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4 sm:p-6 border-2 border-amber-300 shadow-lg">
                  <img
                    src="/rudraksh.png"
                    alt="5 Mukhi Rudraksha"
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  5 Mukhi
                </div>
                <div className="absolute -top-2 -left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Popular
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 text-center">Panch Mukhi Rudraksha</h3>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-justify text-sm sm:text-base font-medium">
                Most common and beneficial Rudraksha representing Lord Kalagni. Ideal for health, peace, and overall well-being.
              </p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Improves health & immunity
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Brings mental peace & stability
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-800 font-bold text-lg sm:text-xl">₹1,299</span>
                <span className="text-slate-500 line-through text-sm">₹1,599</span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300">
                Add to Cart
              </button>
            </div>

            {/* 7 Mukhi Rudraksha */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4 sm:p-6 border-2 border-amber-300 shadow-lg">
                  <img
                    src="/rudraksh.png"
                    alt="7 Mukhi Rudraksha"
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  7 Mukhi
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 text-center">Sapt Mukhi Rudraksha</h3>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-justify text-sm sm:text-base font-medium">
                Represents Goddess Lakshmi, bringing wealth, prosperity, and abundance. Perfect for business success and financial growth.
              </p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Attracts wealth & prosperity
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Enhances business success
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-800 font-bold text-lg sm:text-xl">₹3,499</span>
                <span className="text-slate-500 line-through text-sm">₹4,299</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300">
                Add to Cart
              </button>
            </div>

            {/* 14 Mukhi Rudraksha */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4 sm:p-6 border-2 border-amber-300 shadow-lg">
                  <img
                    src="/rudraksh.png"
                    alt="14 Mukhi Rudraksha"
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  14 Mukhi
                </div>
                <div className="absolute -top-2 -left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Rare
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 text-center">Chaturdash Mukhi</h3>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-justify text-sm sm:text-base font-medium">
                The most precious gem representing Lord Hanuman. Provides divine protection, courage, and removes all obstacles.
              </p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Divine protection & courage
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Removes all obstacles
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-800 font-bold text-lg sm:text-xl">₹25,999</span>
                <span className="text-slate-500 line-through text-sm">₹32,999</span>
              </div>
              <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300">
                Add to Cart
              </button>
            </div>

            {/* Rudraksha Mala */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4 sm:p-6 border-2 border-amber-300 shadow-lg">
                  <img
                    src="/rudraksh.png"
                    alt="Rudraksha Mala"
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Mala
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 text-center">Rudraksha Mala (108 Beads)</h3>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-justify text-sm sm:text-base font-medium">
                Complete 108 bead mala for meditation and chanting. Made with authentic 5 Mukhi Rudraksha beads for daily spiritual practice.
              </p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Perfect for meditation & chanting
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  108 authentic Rudraksha beads
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-800 font-bold text-lg sm:text-xl">₹4,999</span>
                <span className="text-slate-500 line-through text-sm">₹6,999</span>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300">
                Add to Cart
              </button>
            </div>

            {/* Rudraksha Bracelet */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4 sm:p-6 border-2 border-amber-300 shadow-lg">
                  <img
                    src="/rudraksh.png"
                    alt="Rudraksha Bracelet"
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Bracelet
                </div>
                <div className="absolute -top-2 -left-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Trending
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 text-center">Rudraksha Bracelet</h3>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-justify text-sm sm:text-base font-medium">
                Stylish and spiritual bracelet with authentic Rudraksha beads. Perfect for daily wear and constant divine protection.
              </p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Stylish & spiritual design
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  Constant divine protection
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-800 font-bold text-lg sm:text-xl">₹899</span>
                <span className="text-slate-500 line-through text-sm">₹1,299</span>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-amber-200 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              Why Choose Our Rudraksha Collection?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">100% Authentic</h4>
                <p className="text-slate-700 text-sm">Certified genuine Rudraksha from Nepal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Energized</h4>
                <p className="text-slate-700 text-sm">Blessed and energized by expert pandits</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Quality Assured</h4>
                <p className="text-slate-700 text-sm">Premium quality with lifetime guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Expert Guidance</h4>
                <p className="text-slate-700 text-sm">Free consultation on Rudraksha selection</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-gradient-to-r from-slate-800 to-amber-700 hover:from-slate-900 hover:to-amber-800 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:shadow-2xl hover:shadow-slate-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl">
                <Star className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>View All Products</span>
              </button>
              <button className="border-2 border-slate-700 text-slate-800 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-slate-50 hover:border-slate-800 transition-all duration-300">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 inline mr-2" />
                <span>Call for Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent text-center lg:text-left">
                About Aditya Astrology
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-800 mb-4 sm:mb-6 leading-relaxed text-center lg:text-justify font-semibold">
                With over 15 years of experience in Vedic astrology and spiritual guidance, Aditya brings ancient wisdom to modern life challenges. Our mission is to help individuals discover their true potential and navigate life's journey with cosmic insights.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed text-center lg:text-justify font-medium">
                We combine traditional astrological practices with contemporary understanding to provide accurate, meaningful, and transformative readings that empower our clients to make informed decisions and live their best lives.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-sm mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1 sm:mb-2">15+</div>
                  <div className="text-slate-700 font-semibold text-sm sm:text-base">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1 sm:mb-2">50K+</div>
                  <div className="text-slate-700 font-semibold text-sm sm:text-base">Satisfied Clients</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-slate-200 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-slate-700 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <Sun className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-4">Master Aditya</h3>
                  <p className="text-slate-700 font-semibold text-sm sm:text-base">Certified Vedic Astrologer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-emerald-700 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium text-center sm:text-justify">
              Discover how our astrological guidance has transformed lives and provided clarity to thousands of seekers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai, India",
                text: "Aditya's birth chart reading was incredibly accurate and insightful. It helped me understand my life purpose and make important career decisions with confidence.",
                rating: 5,
                service: "Birth Chart Reading"
              },
              {
                name: "Rajesh Kumar",
                location: "Delhi, India",
                text: "The relationship compatibility reading saved my marriage. The guidance provided was practical and helped us understand each other better.",
                rating: 5,
                service: "Love & Relationships"
              },
              {
                name: "Anita Patel",
                location: "Bangalore, India",
                text: "Daily horoscope predictions are amazingly accurate. I plan my important meetings and decisions based on the cosmic guidance provided.",
                rating: 5,
                service: "Daily Horoscope"
              },
              {
                name: "Vikram Singh",
                location: "Jaipur, India",
                text: "The career guidance session was a turning point in my professional life. I got promoted within 3 months of following the suggested remedies.",
                rating: 5,
                service: "Career Guidance"
              },
              {
                name: "Meera Reddy",
                location: "Chennai, India",
                text: "Spiritual guidance sessions helped me find inner peace and connect with my higher self. Truly transformative experience.",
                rating: 5,
                service: "Spiritual Guidance"
              },
              {
                name: "Arjun Gupta",
                location: "Pune, India",
                text: "Vedic consultation provided deep insights into my life patterns. The gemstone recommendations have brought positive changes.",
                rating: 5,
                service: "Vedic Consultation"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 hover:shadow-2xl hover:shadow-slate-500/10 transition-all duration-300">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-3 sm:mb-4 leading-relaxed text-justify italic text-sm sm:text-base font-medium">"{testimonial.text}"</p>
                <div className="border-t border-slate-200 pt-3 sm:pt-4">
                  <p className="font-bold text-slate-900 text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">{testimonial.location}</p>
                  <p className="text-xs sm:text-sm text-blue-700 mt-1 font-semibold">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 backdrop-blur-sm border border-slate-200 shadow-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Ready to Discover Your Destiny?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-center sm:text-justify font-medium">
              Take the first step towards understanding your cosmic blueprint. Book a personalized consultation and unlock the secrets of your stars today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:shadow-2xl hover:shadow-slate-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-xl">
                <Calendar className="w-4 h-4 sm:w-6 sm:h-6" />
                <span className="text-white">Book Consultation</span>
              </button>
              <button className="border-2 border-slate-700 text-slate-800 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-slate-100 hover:border-slate-800 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
                <span className="text-slate-800 hidden sm:inline">Call Now: +91 98765 43210</span>
                <span className="text-slate-800 sm:hidden">Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium text-center sm:text-justify">
              Connect with us for personalized astrological guidance and spiritual consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200 text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-slate-700 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Call Us</h3>
              <p className="text-slate-700 mb-3 sm:mb-4 font-medium text-sm sm:text-base">Speak directly with our astrologers</p>
              <p className="text-slate-800 font-bold text-base sm:text-lg">+91 98765 43210</p>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 font-medium">Available 9 AM - 9 PM IST</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-emerald-200 text-center hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Email Us</h3>
              <p className="text-slate-700 mb-3 sm:mb-4 font-medium text-sm sm:text-base">Send us your queries anytime</p>
              <p className="text-slate-800 font-bold text-sm sm:text-base break-all">contact@adityaastrology.com</p>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 font-medium">Response within 24 hours</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-rose-200 text-center hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Visit Us</h3>
              <p className="text-slate-700 mb-3 sm:mb-4 font-medium text-sm sm:text-base">Personal consultation available</p>
              <p className="text-slate-800 font-bold text-base sm:text-lg">Mumbai, Maharashtra</p>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 font-medium">By appointment only</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
