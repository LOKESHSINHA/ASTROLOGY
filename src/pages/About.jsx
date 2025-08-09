import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Aditya Astrology
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Aditya - Astrologer" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Meet Aditya</h2>
              <p className="text-gray-300 mb-4">
                With over 15 years of experience in Vedic astrology, Aditya has guided thousands of souls 
                on their spiritual journey. His deep understanding of planetary movements and their impact 
                on human life has made him a trusted advisor for people seeking clarity and direction.
              </p>
              <p className="text-gray-300">
                Specializing in birth chart analysis, compatibility readings, and spiritual guidance, 
                Aditya combines ancient wisdom with modern insights to provide accurate and meaningful predictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


