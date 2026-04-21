import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, Calendar, Image, Phone } from 'lucide-react';
import './MobileBottomBar.css';

interface MobileBottomBarProps {
  onOpenAppointment: () => void;
  isAppointmentModalOpen: boolean;
}

const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAppointment, isAppointmentModalOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: LayoutGrid },
    { name: 'Book', action: onOpenAppointment, icon: Calendar, isActive: isAppointmentModalOpen },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <div className="mobile-bottom-bar-container lg:hidden">
      <div className="mobile-bottom-bar">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = item.action ? item.isActive : item.path === location.pathname;

          if (item.action) {
            return (
              <button 
                key={index} 
                onClick={item.action}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <div className="icon-wrapper">
                  <Icon size={20} />
                  {isActive && <div className="active-dot" />}
                </div>
                <span className="nav-label">{item.name}</span>
              </button>
            );
          }

          return (
            <Link 
              key={index} 
              to={item.path!} 
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <div className="icon-wrapper">
                <Icon size={20} />
                {isActive && <div className="active-dot" />}
              </div>
              <span className="nav-label">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomBar;
