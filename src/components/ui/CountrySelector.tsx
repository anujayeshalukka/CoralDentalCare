import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { countries, Country } from '../../utils/countryData';

interface CountrySelectorProps {
  selectedCountry: Country;
  onSelect: (country: Country) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ selectedCountry, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.dialCode.includes(searchQuery)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl hover:bg-white hover:border-primary/30 transition-all duration-300 min-w-[110px] h-full shadow-sm"
      >
        <img 
          src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`} 
          alt={selectedCountry.name}
          className="w-6 h-4 object-cover rounded-sm shadow-sm"
        />
        <span className="font-bold text-text-main text-sm">{selectedCountry.dialCode}</span>
        <ChevronDown size={14} className={`text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 z-[60] w-72 mt-2 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-3 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                <input
                  type="text"
                  placeholder="Search country..."
                  className="w-full pl-10 pr-4 py-2 bg-brand-off/50 border border-transparent rounded-xl focus:bg-white focus:border-primary/30 outline-none text-sm transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </div>

            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      onSelect(country);
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary/5 transition-colors ${selectedCountry.code === country.code ? 'bg-primary/5' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`} 
                        alt={country.name}
                        className="w-5 h-3.5 object-cover rounded-sm"
                      />
                      <span className="text-sm font-medium text-text-main">{country.name}</span>
                      <span className="text-xs text-text-muted">{country.dialCode}</span>
                    </div>
                    {selectedCountry.code === country.code && <Check size={14} className="text-primary" />}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-sm text-text-muted">No countries found.</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountrySelector;
