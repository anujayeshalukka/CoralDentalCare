import React from 'react';
import { motion } from 'framer-motion';
import preloaderIcon from '../../assets/cute-tooth.png';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Icon */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-32 h-32 md:w-40 md:h-40 mb-8 flex items-center justify-center overflow-hidden"
        >
          <img 
            src={preloaderIcon} 
            alt="Coral Dental Care" 
            className="w-full h-full object-contain" 
            style={{ 
              mixBlendMode: 'multiply',
              filter: 'contrast(1.2) brightness(1.1) saturate(1.1)' 
            }}
          />
        </motion.div>

        {/* Loading Progress Bar - Aesthetic Only */}
        <div className="w-40 h-1.5 bg-gray-100 rounded-full overflow-hidden relative shadow-inner">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute h-full bg-primary"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-[12px] font-bold text-primary uppercase tracking-[0.3em] font-body"
        >
          Getting your smile ready...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
