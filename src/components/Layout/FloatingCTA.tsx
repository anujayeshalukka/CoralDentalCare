import React from 'react';
import { MessageCircle, HelpCircle } from 'lucide-react';
import { getWhatsAppLink, getDentistWhatsAppLink } from '../../utils/whatsapp';

const FloatingCTA: React.FC = () => {
  const openWhatsApp = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  const askDentist = () => {
    window.open(getDentistWhatsAppLink(), '_blank');
  };

  const ctaClasses = "rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative group cursor-pointer border-none";

  return (
    <div className="fixed bottom-24 right-6 lg:bottom-8 lg:right-8 flex flex-col gap-3 lg:gap-4 z-[1200] floating-cta-container">
      <button 
        className={`${ctaClasses} w-12 h-12 lg:w-14 lg:h-14 bg-primary text-white`} 
        onClick={askDentist}
        title="Ask the Dentist"
      >
        <HelpCircle size={20} className="lg:hidden" />
        <HelpCircle size={24} className="hidden lg:block" />
        <span className="absolute right-[70px] bg-text-main text-white px-4 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:right-[-5px] after:top-1/2 after:-translate-y-1/2 after:border-l-4 after:border-l-text-main after:border-t-4 after:border-t-transparent after:border-b-4 after:border-b-transparent">
          Ask the Dentist
        </span>
      </button>
      
      <button className={`${ctaClasses} w-12 h-12 lg:w-14 lg:h-14 bg-[#25D366] text-white`} onClick={openWhatsApp} title="Chat on WhatsApp">
        <MessageCircle size={24} className="lg:hidden" />
        <MessageCircle size={28} className="hidden lg:block" />
        <span className="absolute right-[70px] bg-text-main text-white px-4 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:right-[-5px] after:top-1/2 after:-translate-y-1/2 after:border-l-4 after:border-l-text-main after:border-t-4 after:border-t-transparent after:border-b-4 after:border-b-transparent">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};

export default FloatingCTA;
