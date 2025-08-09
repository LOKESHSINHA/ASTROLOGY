import React from 'react';

const Horoscope = () => {
  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', horoscope: 'Today brings new opportunities for leadership and adventure.' },
    { name: 'Taurus', symbol: '♉', horoscope: 'Focus on stability and practical matters today.' },
    { name: 'Gemini', symbol: '♊', horoscope: 'Communication and learning are highlighted today.' },
    { name: 'Cancer', symbol: '♋', horoscope: 'Family and emotional connections take priority.' },
    { name: 'Leo', symbol: '♌', horoscope: 'Your creativity and confidence shine brightly today.' },
    { name: 'Virgo', symbol: '♍', horoscope: 'Attention to detail and organization serve you well.' },
    { name: 'Libra', symbol: '♎', horoscope: 'Balance and harmony in relationships are key.' },
    { name: 'Scorpio', symbol: '♏', horoscope: 'Deep transformation and intuition guide you.' },
    { name: 'Sagittarius', symbol: '♐', horoscope: 'Adventure and philosophical insights await.' },
    { name: 'Capricorn', symbol: '♑', horoscope: 'Discipline and ambition lead to success.' },
    { name: 'Aquarius', symbol: '♒', horoscope: 'Innovation and humanitarian efforts are favored.' },
    { name: 'Pisces', symbol: '♓', horoscope: 'Intuition and compassion guide your path.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Daily Horoscopes
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zodiacSigns.map((sign) => (
            <div key={sign.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{sign.symbol}</div>
                <h3 className="text-xl font-semibold">{sign.name}</h3>
              </div>
              <p className="text-gray-300 text-center">{sign.horoscope}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horoscope;