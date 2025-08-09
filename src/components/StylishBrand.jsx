import React from 'react';
import { Star, Sparkles, Sun, Moon } from 'lucide-react';

const StylishBrand = ({ 
  size = 'large', 
  theme = 'light', 
  showDescription = true, 
  showDecorations = true,
  className = '' 
}) => {
  const sizeClasses = {
    small: {
      title: 'text-2xl sm:text-3xl',
      subtitle: 'text-xs sm:text-sm',
      description: 'text-sm sm:text-base',
      icon: 'w-4 h-4 sm:w-5 sm:h-5'
    },
    medium: {
      title: 'text-3xl sm:text-4xl lg:text-5xl',
      subtitle: 'text-sm sm:text-base',
      description: 'text-base sm:text-lg',
      icon: 'w-5 h-5 sm:w-6 sm:h-6'
    },
    large: {
      title: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
      subtitle: 'text-base sm:text-lg',
      description: 'text-lg sm:text-xl lg:text-2xl',
      icon: 'w-6 h-6 sm:w-8 sm:h-8'
    }
  };

  const themeClasses = {
    light: {
      titleGradient: 'from-slate-800 via-blue-700 to-purple-700',
      subtitleColor: 'text-slate-600',
      descriptionColor: 'text-slate-700',
      decorationColors: ['text-amber-500', 'text-blue-500', 'text-purple-500', 'text-rose-500'],
      lineGradient: 'from-amber-300 via-blue-400 to-purple-400'
    },
    dark: {
      titleGradient: 'from-white via-blue-300 to-purple-300',
      subtitleColor: 'text-slate-300',
      descriptionColor: 'text-slate-200',
      decorationColors: ['text-amber-400', 'text-blue-400', 'text-purple-400', 'text-rose-400'],
      lineGradient: 'from-amber-400 via-blue-500 to-purple-500'
    }
  };

  const currentSize = sizeClasses[size];
  const currentTheme = themeClasses[theme];

  return (
    <div className={`text-center ${className}`}>
      {/* Main Brand Title */}
      <div className="relative inline-block mb-4 sm:mb-6">
        <h1 className={`${currentSize.title} font-bold bg-gradient-to-r ${currentTheme.titleGradient} bg-clip-text text-transparent leading-tight relative`}>
          <span className="relative">
            Aditya
            {showDecorations && (
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            )}
          </span>
          <br />
          <span className="relative">
            Astrology
            {showDecorations && (
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            )}
          </span>
        </h1>
        
        {/* Floating cosmic elements around title */}
        {showDecorations && (
          <>
            <div className="absolute -top-4 left-1/4 animate-float">
              <Star className={`${currentSize.icon} ${currentTheme.decorationColors[0]} opacity-70`} />
            </div>
            <div className="absolute -top-2 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
              <Sparkles className={`${currentSize.icon} ${currentTheme.decorationColors[1]} opacity-70`} />
            </div>
            <div className="absolute -bottom-4 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
              <Sun className={`${currentSize.icon} ${currentTheme.decorationColors[2]} opacity-70`} />
            </div>
            <div className="absolute -bottom-2 right-1/3 animate-float" style={{ animationDelay: '0.5s' }}>
              <Moon className={`${currentSize.icon} ${currentTheme.decorationColors[3]} opacity-70`} />
            </div>
          </>
        )}
      </div>

      {/* Subtitle */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className={`flex-1 max-w-16 h-px bg-gradient-to-r ${currentTheme.lineGradient}`}></div>
          <p className={`${currentSize.subtitle} ${currentTheme.subtitleColor} font-semibold tracking-wider`}>
            Cosmic Guidance & Wisdom
          </p>
          <div className={`flex-1 max-w-16 h-px bg-gradient-to-l ${currentTheme.lineGradient}`}></div>
        </div>
        
        {/* Animated dots */}
        {showDecorations && (
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-1 h-1 bg-rose-500 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          </div>
        )}
      </div>

      {/* Description */}
      {showDescription && (
        <div className="max-w-4xl mx-auto">
          <p className={`${currentSize.description} ${currentTheme.descriptionColor} leading-relaxed font-medium text-center sm:text-justify mb-6`}>
            Unlock the mysteries of the cosmos and discover your true path through ancient wisdom and modern insights. Your journey to self-discovery begins here with personalized astrological guidance.
          </p>
          
          {/* Decorative quote */}
          {showDecorations && (
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className={`flex-1 max-w-24 h-px bg-gradient-to-r ${currentTheme.lineGradient} opacity-50`}></div>
                <div className="flex items-center gap-2">
                  <Star className={`w-3 h-3 ${currentTheme.decorationColors[0]} animate-pulse`} />
                  <Sparkles className={`w-4 h-4 ${currentTheme.decorationColors[1]} animate-pulse`} style={{ animationDelay: '0.5s' }} />
                  <Star className={`w-3 h-3 ${currentTheme.decorationColors[2]} animate-pulse`} style={{ animationDelay: '1s' }} />
                </div>
                <div className={`flex-1 max-w-24 h-px bg-gradient-to-l ${currentTheme.lineGradient} opacity-50`}></div>
              </div>
              
              <p className={`text-sm sm:text-base ${currentTheme.subtitleColor} font-medium italic text-center`}>
                "Where Ancient Wisdom Meets Modern Life"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StylishBrand;
