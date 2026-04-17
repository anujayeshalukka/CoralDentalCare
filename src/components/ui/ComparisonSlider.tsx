import React, { useState, useRef } from 'react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const position = (x / rect.width) * 100;
    setSliderPosition(position);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow-lg cursor-ew-resize select-none" 
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      <div className="absolute inset-0 w-full h-full">
        <img src={afterImage} alt="After" className="w-full h-full object-cover" />
        <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/50 text-white text-[10px] font-bold rounded uppercase z-20">AFTER</span>
      </div>
      
      <div 
        className="absolute inset-0 h-full overflow-hidden z-10" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover max-w-none" style={{ width: containerRef.current?.offsetWidth }} />
        <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/50 text-white text-[10px] font-bold rounded uppercase z-20">BEFORE</span>
      </div>

      <div 
        className="absolute inset-y-0 w-0.5 bg-white z-30 -translate-x-1/2 pointer-events-none" 
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-xl shadow-md">
          <span>‹›</span>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
