import React from 'react';
import { Crown, ChevronRight, LogOut } from 'lucide-react';

const AdminSidebar = ({ 
  user, 
  activeSection, 
  setActiveSection, 
  sidebarMenu, 
  onLogout,
  className = '' 
}) => {
  return (
    <div className={`lg:w-80 flex-shrink-0 ${className}`}>
      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
        
        {/* Admin Profile Header */}
        <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Admin Panel</h3>
              <p className="text-white/90 font-medium">{user?.name || 'Administrator'}</p>
              <p className="text-white/70 text-sm">Administrator</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="py-4">
          {sidebarMenu.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <h4 className="px-6 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center justify-between px-6 py-3 text-left hover:bg-slate-50 transition-colors ${
                      activeSection === item.id 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                        : 'text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Logout */}
          <div className="px-6 pt-4 border-t border-slate-200">
            <button
              onClick={onLogout}
              className="flex items-center gap-3 text-red-600 hover:text-red-700 font-medium text-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
