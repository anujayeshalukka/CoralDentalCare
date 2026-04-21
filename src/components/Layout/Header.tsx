import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Mail, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

interface HeaderProps {
  onOpenAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open', 'overflow-hidden');
    } else {
      document.body.classList.remove('menu-open', 'overflow-hidden');
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isTransparentPage = true; // All pages now have a hero background

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 flex items-center ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm h-20 lg:h-24' : 'h-24 lg:h-32 bg-transparent'
      }`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Coral Dental Care" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-16 lg:h-20' : 'h-22 lg:h-28'
              }`}
              style={isScrolled ? {
                filter: 'invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.2)',
                mixBlendMode: 'multiply'
              } : {
                mixBlendMode: 'screen'
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative font-medium text-[15px] transition-colors py-1 hover:text-primary ${
                  location.pathname === link.path 
                    ? 'text-primary after:w-full' 
                    : (isScrolled ? 'text-text-main after:w-0' : 'text-white/90 after:w-0 font-semibold')
                } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={onOpenAppointment}
              className="bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden transition-colors ${isScrolled ? 'text-text-main' : 'text-white'}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay - Moved outside header for global stacking context */}
      <div className={`fixed inset-0 bg-white transition-all duration-300 z-[99999] flex flex-col ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`} style={{ backgroundColor: '#ffffff' }}>
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white relative z-10">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Coral Dental Care" 
              className="h-10 w-auto"
              style={{
                filter: 'invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.2)',
                mixBlendMode: 'multiply'
              }}
            />
          </Link>
          <button 
            className="p-2 text-text-main hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-6 bg-white">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-lg font-bold py-2 transition-colors flex items-center justify-between border-b ${
                location.pathname === link.path ? 'text-primary border-primary' : 'text-text-main border-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span>{link.name}</span>
              <div className={`w-2.5 h-2.5 rounded-full bg-primary transition-all duration-300 ${
                location.pathname === link.path ? 'scale-100' : 'scale-0'
              }`} />
            </Link>
          ))}
          
          <div className="mt-10 flex flex-col gap-4">
            <button 
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
              onClick={() => {
                setIsOpen(false);
                onOpenAppointment();
              }}
            >
              <Calendar size={24} />
              <span>Book Appointment</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
