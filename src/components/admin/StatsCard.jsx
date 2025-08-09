import React from 'react';

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon: Icon, 
  iconColor = 'blue',
  className = '' 
}) => {
  const getIconColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      amber: 'bg-amber-100 text-amber-600',
      red: 'bg-red-100 text-red-600',
      slate: 'bg-slate-100 text-slate-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getChangeColorClasses = (type) => {
    return type === 'positive' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-slate-200 p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${getChangeColorClasses(changeType)}`}>
              {change}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconColorClasses(iconColor)}`}>
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
