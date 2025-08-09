import React from 'react';
import { Bell, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';

const NotificationBadge = ({ 
  type = 'info', 
  message, 
  time, 
  read = false, 
  onMarkRead,
  onDismiss,
  className = '' 
}) => {
  const getTypeConfig = (notificationType) => {
    const configs = {
      success: {
        icon: CheckCircle,
        bgColor: 'bg-green-100',
        iconColor: 'text-green-600',
        borderColor: 'border-green-200'
      },
      warning: {
        icon: AlertTriangle,
        bgColor: 'bg-amber-100',
        iconColor: 'text-amber-600',
        borderColor: 'border-amber-200'
      },
      error: {
        icon: XCircle,
        bgColor: 'bg-red-100',
        iconColor: 'text-red-600',
        borderColor: 'border-red-200'
      },
      info: {
        icon: Info,
        bgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
        borderColor: 'border-blue-200'
      }
    };
    return configs[notificationType] || configs.info;
  };

  const config = getTypeConfig(type);
  const IconComponent = config.icon;

  return (
    <div className={`flex items-start gap-4 p-4 rounded-lg border ${
      read ? 'bg-slate-50 border-slate-200' : `bg-blue-50 ${config.borderColor}`
    } ${className}`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${config.bgColor}`}>
        <IconComponent className={`w-5 h-5 ${config.iconColor}`} />
      </div>
      <div className="flex-1">
        <p className={`font-medium ${read ? 'text-slate-700' : 'text-slate-900'}`}>
          {message}
        </p>
        {time && (
          <p className="text-slate-500 text-sm mt-1">{time}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {!read && onMarkRead && (
          <button 
            onClick={onMarkRead}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Mark Read
          </button>
        )}
        {onDismiss && (
          <button 
            onClick={onDismiss}
            className="text-slate-600 hover:text-slate-700 text-sm"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  );
};

export default NotificationBadge;
