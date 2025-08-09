import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, Search, Tag, ArrowRight, Star, Heart, BookOpen, TrendingUp } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Your Birth Chart: A Complete Guide',
      excerpt: 'Learn how to read and interpret your natal chart for deeper self-understanding. Discover the secrets hidden in your cosmic blueprint.',
      content: 'Your birth chart is a snapshot of the sky at the exact moment you were born. It reveals your personality traits, life purpose, and potential challenges...',
      date: '2024-01-15',
      author: 'Aditya Sharma',
      category: 'Birth Charts',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      tags: ['Birth Chart', 'Astrology Basics', 'Self-Discovery'],
      featured: true,
      views: 2450
    },
    {
      id: 2,
      title: 'Mercury Retrograde: What It Really Means',
      excerpt: 'Debunking myths and understanding the true effects of Mercury retrograde on communication, technology, and travel.',
      content: 'Mercury retrograde occurs 3-4 times per year when Mercury appears to move backward in its orbit. This phenomenon affects communication...',
      date: '2024-01-12',
      author: 'Aditya Sharma',
      category: 'Planetary Movements',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=400&fit=crop',
      tags: ['Mercury Retrograde', 'Planets', 'Communication'],
      featured: false,
      views: 1890
    },
    {
      id: 3,
      title: 'Love Compatibility Through Astrology',
      excerpt: 'How to use astrology to understand relationship dynamics and compatibility. Find your perfect cosmic match.',
      content: 'Astrological compatibility goes beyond just sun signs. Learn about Venus signs, Mars signs, and composite charts...',
      date: '2024-01-10',
      author: 'Aditya Sharma',
      category: 'Love & Relationships',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=400&fit=crop',
      tags: ['Love', 'Compatibility', 'Relationships'],
      featured: true,
      views: 3200
    },
    {
      id: 4,
      title: 'The Power of Moon Phases in Daily Life',
      excerpt: 'Harness the energy of lunar cycles for manifestation, release, and personal growth in your everyday routine.',
      content: 'The moon affects tides, emotions, and energy levels. Learn how to align your activities with lunar phases...',
      date: '2024-01-08',
      author: 'Aditya Sharma',
      category: 'Moon & Cycles',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=400&fit=crop',
      tags: ['Moon Phases', 'Manifestation', 'Energy'],
      featured: false,
      views: 1650
    },
    {
      id: 5,
      title: 'Career Guidance Through Astrology',
      excerpt: 'Discover your ideal career path using your birth chart. Learn about the 10th house and vocational astrology.',
      content: 'Your career potential is written in the stars. The 10th house, Midheaven, and planetary aspects reveal...',
      date: '2024-01-05',
      author: 'Aditya Sharma',
      category: 'Career & Finance',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      tags: ['Career', 'Vocational Astrology', 'Success'],
      featured: false,
      views: 2100
    },
    {
      id: 6,
      title: 'Zodiac Signs and Their Hidden Strengths',
      excerpt: 'Explore the unique gifts and talents each zodiac sign possesses. Unlock your cosmic superpowers.',
      content: 'Every zodiac sign has special strengths and abilities. From Aries leadership to Pisces intuition...',
      date: '2024-01-03',
      author: 'Aditya Sharma',
      category: 'Zodiac Signs',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=400&fit=crop',
      tags: ['Zodiac', 'Strengths', 'Personality'],
      featured: true,
      views: 2800
    }
  ];

  const categories = ['All', 'Birth Charts', 'Planetary Movements', 'Love & Relationships', 'Moon & Cycles', 'Career & Finance', 'Zodiac Signs'];

  const popularTags = ['Birth Chart', 'Love', 'Mercury Retrograde', 'Moon Phases', 'Career', 'Compatibility', 'Zodiac'];

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-blue-900/3 to-indigo-900/5"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-purple-300 rounded-full opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Aditya's Astrology Blog
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover cosmic wisdom, astrological insights, and guidance for your spiritual journey
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
              >
                <option value="All">All Categories</option>
                <option value="Horoscopes">Horoscopes</option>
                <option value="Astrology">Astrology</option>
                <option value="Spirituality">Spirituality</option>
                <option value="Crystals">Crystals</option>
              </select>
            </div>

            {/* Featured Posts */}
            {selectedCategory === 'All' && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-2">
                  <Star className="w-8 h-8 text-yellow-500" />
                  Featured Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-500/30">
                      <div className="relative">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-purple-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
                            Read More <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              </h2>
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img src={post.image} alt={post.title} className="w-full h-48 md:h-full object-cover" />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {post.views} views
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-purple-600 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              A
                            </div>
                            <span className="text-gray-700 font-medium">{post.author}</span>
                          </div>
                          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            Read Article <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* About Author */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">About Aditya</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Aditya Sharma</h4>
                    <p className="text-sm text-gray-600">Vedic Astrologer</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  With over 15 years of experience in Vedic astrology, Aditya helps people understand their cosmic blueprint and navigate life's challenges.
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Book Consultation
                </button>
              </div>

              {/* Popular Tags */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3 group cursor-pointer">
                      <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-lg" />
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors text-sm leading-tight">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-sm mb-4 opacity-90">
                  Get weekly astrological insights and cosmic guidance delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-purple-600 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Blog;


