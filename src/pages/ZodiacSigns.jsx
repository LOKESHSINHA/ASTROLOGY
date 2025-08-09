import React from 'react';

const ZodiacSigns = () => {
  const zodiacSigns = [
    { 
      name: 'Aries', 
      symbol: '♈', 
      dates: 'Mar 21 - Apr 19',
      element: 'Fire',
      traits: 'Energetic, Courageous, Leader',
      description: 'Aries are natural born leaders with a pioneering spirit.'
    },
    { 
      name: 'Taurus', 
      symbol: '♉', 
      dates: 'Apr 20 - May 20',
      element: 'Earth',
      traits: 'Reliable, Patient, Practical',
      description: 'Taurus individuals are known for their stability and determination.'
    },
    // Add more detailed zodiac information...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Zodiac Signs
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {zodiacSigns.map((sign) => (
            <div key={sign.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-purple-500/30 group cursor-pointer">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{sign.symbol}</div>
                <h3 className="text-xl font-semibold text-white">{sign.name}</h3>
                <p className="text-sm text-purple-300">{sign.dates}</p>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p><span className="text-purple-400 font-medium">Element:</span> {sign.element}</p>
                <p><span className="text-purple-400 font-medium">Ruling Planet:</span> {sign.planet}</p>
                <p><span className="text-purple-400 font-medium">Traits:</span> {sign.traits}</p>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZodiacSigns;
