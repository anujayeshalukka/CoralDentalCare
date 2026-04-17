import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxEffectProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  horizontal?: boolean;
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({ 
  children, 
  offset = 50, 
  className = "",
  horizontal = false 
}) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create a spring-smoothed value for the parallax
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothYProgress = useSpring(scrollYProgress, springConfig);

  // Transform scroll progress to movement
  const movement = useTransform(smoothYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div
      ref={ref}
      style={{
        [horizontal ? 'x' : 'y']: movement
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxEffect;
