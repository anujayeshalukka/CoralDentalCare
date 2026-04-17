import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  backgroundImage?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, highlight, backgroundImage }) => {
  return (
    <section className={`relative overflow-hidden min-h-[500px] flex items-center justify-center ${
      backgroundImage ? 'py-40 pt-48' : 'bg-brand-off py-24 border-b border-gray-200'
    }`}>
      {/* Background Image & Overlay */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <img 
              src={backgroundImage} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
          </div>
        </>
      )}

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 ${
            backgroundImage ? 'text-white' : 'text-text-main'
          }`}>
            {title} <span className={backgroundImage ? 'text-primary' : 'text-primary'}>{highlight}</span>
          </h1>
          {subtitle && (
            <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              backgroundImage ? 'text-white/80' : 'text-text-muted'
            }`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
      
      {!backgroundImage && (
        <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#C9A14A 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
      )}
    </section>
  );
};

export default PageHero;
