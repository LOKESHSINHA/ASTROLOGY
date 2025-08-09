import React from 'react';
import { BarChart3, PieChart, LineChart, TrendingUp } from 'lucide-react';

const ChartPlaceholder = ({ 
  type = 'bar', 
  title, 
  description,
  height = 'h-64',
  className = '' 
}) => {
  const getChartIcon = (chartType) => {
    const icons = {
      bar: BarChart3,
      pie: PieChart,
      line: LineChart,
      trend: TrendingUp
    };
    return icons[chartType] || BarChart3;
  };

  const IconComponent = getChartIcon(type);

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-slate-200 p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      )}
      <div className={`bg-slate-50 rounded-lg flex items-center justify-center ${height}`}>
        <div className="text-center">
          <IconComponent className="w-12 h-12 text-slate-400 mx-auto mb-2" />
          <p className="text-slate-600">
            {description || `${type.charAt(0).toUpperCase() + type.slice(1)} chart visualization would go here`}
          </p>
          <p className="text-slate-500 text-sm mt-1">
            Chart integration coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartPlaceholder;
