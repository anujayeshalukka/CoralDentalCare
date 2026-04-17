import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  path: string;
  variant?: 'white' | 'gold';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  path,
  variant = 'white'
}) => {
  const isGold = variant === 'gold';

  return (
    <div className={`group relative flex flex-col gap-4 px-8 py-4 rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl ${
      isGold ? 'bg-primary text-white border-primary' : 'bg-white text-text-main border-gray-200 hover:border-primary-light'
    }`}>
      {/* Accent Top Line */}
      {!isGold && <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />}

      <div className="flex items-center gap-6">
        <div className={`w-14 h-14 shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isGold ? 'bg-white/20 text-white' : 'bg-brand-off text-primary group-hover:bg-primary group-hover:text-white'
        }`}>
          <Icon size={28} />
        </div>
        <h3 className={`text-xl font-semibold leading-tight ${isGold ? 'text-white' : 'text-text-main'}`}>{title}</h3>
      </div>
      <p className={`text-sm leading-relaxed ${isGold ? 'text-white' : 'text-text-muted'}`}>{description}</p>
      
      <Link to={path} className={`mt-auto font-semibold flex items-center gap-1 text-sm group-hover:gap-2 transition-all duration-300 ${isGold ? 'text-white' : 'text-primary'}`}>
        Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
};

export default ServiceCard;
