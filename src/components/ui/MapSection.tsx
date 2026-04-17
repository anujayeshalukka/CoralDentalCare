import React from 'react';
import { motion } from 'framer-motion';

const MapSection: React.FC = () => {
  return (
    <section className="w-full h-[500px] relative overflow-hidden bg-brand-off border-t border-gray-200">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.574917418817!2d76.35186777479664!3d10.215133189901522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0805d426471c59%3A0xb6e34ea8997d3ec4!2sCoral%20Dental%20Care!5e0!3m2!1sen!2sin!4v1776106723775!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Coral Dental Care Location"
        className="grayscale-[0.2] contrast-[1.1]"
      ></iframe>
      
      {/* Decorative Gradient Overlay for softer edges */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_60px_rgba(0,0,0,0.02)]" />
    </section>
  );
};

export default MapSection;
