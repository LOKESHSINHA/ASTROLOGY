import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, Search, Tag, ArrowRight, Star, Heart, BookOpen, TrendingUp } from 'lucide-react';
import { Link } from "react-router-dom";
import config from '../config';
//import { ArrowRight } from "lucide-react"; // keep if you’re using lucide-react

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const API_BASE_URL = config.API_BASE_URL;
  //const [filteredPosts, setFilteredPosts] = useState([]);
  const [blogPostsA, setblogPosts] = useState([]);
  const [selectedblogPost, setSelectedBlogPost] = useState(null);
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/get-blogs`, { method: "GET" })
      .then((res) => res.json())
      .then((result) => {
        const formatted = result.blogs.map((b) => ({
          id: b.id,
          title: b.title,
          excerpt: b.excerpt,
          content: b.content,
          date: b.publishDate,
          author: b.author,
          category: b.category,
          readTime: "5 min read",
          image: b.featuredImage
            ? `${API_BASE_URL}${b.featuredImage}`
            : "https://via.placeholder.com/800x400",
          tags: b.tags ? JSON.parse(b.tags) : [],
          featured: b.status === "published",
          views: 0
        }));
        setblogPosts(formatted);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log("blogs",blogPostsA);  
  const blogPosts = blogPostsA;
  console.log("slectedblog",selectedblogPost);
  
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

   // setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

//  const featuredPosts = blogPosts.filter(post => post.featured);
const filteredPosts = blogPostsA.filter((post) => post.featured === true);
console.log("featuredPosts", filteredPosts);

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
                {blogPostsA.slice(0, 2).map((post) => (
  <article
    key={post.id}
    className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-500/30"
  >
    <div className="relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      {post.featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
      )}
    </div>

    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {new Date(post.date).toLocaleDateString("en-GB")}
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
          {(
            Array.isArray(post.tags) ? post.tags : String(post.tags).split(",")
          )
            .slice(0, 2)
            .map((tag, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs"
              >
                {tag.trim()}
              </span>
            ))}
        </div>

       <Link
  to={`/blog/${post.id}`}
  className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
>
  Read More <ArrowRight className="w-4 h-4" />
</Link>
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
      {selectedblogPost ? (
  <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
    {/* Blog Image */}
    {selectedblogPost.image && (
      <img
        src={selectedblogPost.image}
        alt={selectedblogPost.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
    )}

    {/* Blog Title */}
    <h1 className="text-4xl font-bold mb-4 text-gray-900">
      {selectedblogPost.title}
    </h1>

    {/* Blog Meta Info */}
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
      <span>📅 {new Date(selectedblogPost.date).toLocaleDateString("en-GB", {
        day: "numeric", month: "long", year: "numeric"
      })}</span>
      <span>✍️ {selectedblogPost.author}</span>
      <span>📂 {selectedblogPost.category}</span>
      <span>⏱ {selectedblogPost.readTime}</span>
      <span>👁 {selectedblogPost.views} views</span>
    </div>

    {/* Blog Content */}
    <div className="prose max-w-none text-gray-700 leading-relaxed">
      {selectedblogPost.content}
    </div>

    {/* Tags */}
    {selectedblogPost.tags && (
      <div className="mt-6 flex flex-wrap gap-2">
        {String(selectedblogPost.tags)
          .split(",")
          .map((tag, idx) => (
            <span
              key={idx}
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
            >
              #{tag.trim()}
            </span>
          ))}
      </div>
    )}

    {/* Back Button */}
    <button
      onClick={() => setSelectedBlogPost(null)}
      className="mt-8 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all"
    >
      ← Back to Blogs
    </button>
  </div>
) : (
  <div className="grid gap-6">
    {blogPostsA.map((post) => (
      <div
        key={post.id}
        className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all"
        onClick={() => setSelectedBlogPost(post)}
      >
        <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.excerpt}</p>
        <button className="text-purple-600 hover:text-purple-700 font-medium mt-3">
          Read More →
        </button>
      </div>
    ))}
  </div>
)}

    </div>
  );
};

export default Blog;


