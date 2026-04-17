import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-off pt-24 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="max-w-[300px]">
          <Link to="/" className="font-heading font-bold text-2xl text-text-main mb-6 block">
            Coral <span className="text-primary">Dental Care</span>
          </Link>
          <p className="text-text-muted mb-8 leading-relaxed">
            Providing expert dental care with a focus on comfort, precision, and trust. 
            Serving families with premium healthcare since 2010.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Instagram, link: 'https://www.instagram.com/coral_dental_care?igsh=eTlzdmkwZXUzZ2Nm' },
              { icon: Facebook, link: 'https://www.facebook.com/coral.dentalcares' }
            ].map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-main transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-8 text-text-main">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Our Services', path: '/services' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Contact', path: '/contact' },
            ].map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="text-text-muted transition-all hover:text-primary hover:pl-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-8 text-text-main">Services</h4>
          <ul className="flex flex-col gap-3">
            {['General Dentistry', 'Orthodontics', 'Pediatric Care', 'Dental Implants', 'Root Canal Treatment'].map((service, idx) => (
              <li key={idx}>
                <Link to="/services" className="text-text-muted transition-all hover:text-primary hover:pl-1">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-8 text-text-main">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-start text-text-muted">
              <MapPin size={20} className="text-primary flex-shrink-0" />
              <span>Above State Bank of India,<br />Pereppadan Towers, Puliyanm,<br />Kerala – 683572</span>
            </li>
            <li className="flex gap-4 items-center text-text-muted">
              <Phone size={20} className="text-primary flex-shrink-0" />
              <a href="tel:+919747612370" className="hover:text-primary">+91 97476 12370</a>
            </li>
            <li className="flex gap-4 items-center text-text-muted">
              <Mail size={20} className="text-primary flex-shrink-0" />
              <a href="mailto:info@coraldental.com" className="hover:text-primary">info@coraldental.com</a>
            </li>
            <li className="flex gap-4 items-center text-text-muted">
              <Clock size={20} className="text-primary flex-shrink-0" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-8 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-text-light text-sm">
          <p>&copy; {currentYear} Coral Dental Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
