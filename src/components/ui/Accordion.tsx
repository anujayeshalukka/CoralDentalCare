import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div 
            key={index} 
            className={`transition-all duration-300 border rounded-xl overflow-hidden bg-white ${
              isActive ? 'border-primary-light shadow-md' : 'border-gray-200'
            }`}
          >
            <button 
              className={`w-full p-6 flex justify-between items-center bg-transparent transition-all duration-200 text-left font-heading font-semibold text-lg hover:bg-brand-off hover:text-primary ${
                isActive ? 'text-primary' : 'text-text-main'
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 text-text-muted leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
