import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, Building2, Stethoscope, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ComparisonSlider from '../components/ui/ComparisonSlider';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO';
import AppointmentModal from '../components/modals/AppointmentModal';
import galleryBg from '../assets/heroes/galleryhero.jpg';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'results' | 'clinic'>('results');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryCases = [
    { 
      title: 'Smile Makeover', 
      category: 'Cosmetic', 
      description: 'Complete upper and lower smile reconstruction with porcelain veneers.',
      before: '/before-1.jpg',
      after: '/after-1.jpg'
    },
    { 
      title: 'Invisible Braces', 
      category: 'Orthodontics', 
      description: 'Correction of crowded teeth using clear aligners over 12 months.',
      before: '/before-2.jpg',
      after: '/after-2.jpg'
    },
    { 
      title: 'Teeth Whitening', 
      category: 'Cosmetic', 
      description: 'In-office professional whitening removing deep stains and discoloration.',
      before: '/before-3.jpg',
      after: '/after-3.jpg'
    },
    { 
      title: 'Dental Implants', 
      category: 'Restorative', 
      description: 'Replacement of a missing front tooth with a natural-looking implant.',
      before: '/before-4.jpg',
      after: '/after-4.jpg'
    }
  ];

  const clinicImages = [
    { url: '/dental (1).jpeg', title: 'Precision Crown Prep', category: 'Prosthodontics' },
    { url: '/dental (2).jpeg', title: 'Endodontic Procedure', category: 'Root Canal' },
    { url: '/dental (3).jpeg', title: 'Surgical Mastery', category: 'Oral Surgery' },
    { url: '/dental (4).jpeg', title: 'Aesthetic Reconstruction', category: 'Cosmetic' },
    { url: '/dental (5).jpeg', title: 'Orthodontic Alignment', category: 'Orthodontics' },
    { url: '/dental (6).jpeg', title: 'Detailed Diagnostics', category: 'Technology' },
    { url: '/dental (7).jpeg', title: 'Minimal Invasive Prep', category: 'Clinical' },
    { url: '/dental (8).jpeg', title: 'Advanced Bonded Filling', category: 'Restorative' },
    { url: '/dental (9).jpeg', title: 'Precision Implant Placement', category: 'Surgery' },
    { url: '/dental (10).jpeg', title: 'Pediatric Dental Care', category: 'Pediatrics' },
    { url: '/dental (11).jpeg', title: 'Full Mouth Scan', category: 'Diagnostics' },
  ];

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Smile Transformation Gallery" 
        description="See real before and after results of our dental treatments. From smile makeovers to dental implants, witness the excellence of Coral Dental Care." 
      />
      <PageHero 
        title="Our Clinical" 
        highlight="Excellence" 
        subtitle="Go behind the scenes of our specialized dental procedures and advanced treatments."
        backgroundImage={galleryBg}
      />

      {/* Filter Navigation */}
      <section className="md:py-12 py-6 border-b border-gray-200 sticky top-20 bg-white/95 backdrop-blur-md z-40 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex justify-center gap-2 md:gap-4">
            <button 
              onClick={() => setActiveFilter('results')}
              className={`flex items-center gap-1.5 md:gap-2 md:px-8 md:py-3 px-3 py-2 rounded-full text-[12px] md:text-base font-semibold transition-all duration-300 ${activeFilter === 'results' ? 'bg-primary text-white shadow-lg' : 'bg-brand-off text-text-muted hover:bg-gray-100'}`}
            >
              <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5" />
              Transformation Results
            </button>
            <button 
              onClick={() => setActiveFilter('clinic')}
              className={`flex items-center gap-1.5 md:gap-2 md:px-8 md:py-3 px-3 py-2 rounded-full text-[12px] md:text-base font-semibold transition-all duration-300 ${activeFilter === 'clinic' ? 'bg-primary text-white shadow-lg' : 'bg-brand-off text-text-muted hover:bg-gray-100'}`}
            >
              <Stethoscope className="w-3.5 h-3.5 md:w-5 md:h-5" />
              Treatments & Procedures
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 min-h-[800px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <AnimatePresence mode="wait">
            {activeFilter === 'results' ? (
              <motion.div 
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {galleryCases.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl group">
                    <ComparisonSlider beforeImage={item.before} afterImage={item.after} />
                    <div className="px-8 py-6">
                      <span className="inline-block px-3 py-0.5 bg-primary/20 text-primary-dark font-bold text-[10px] rounded-full uppercase tracking-widest mb-3">{item.category}</span>
                      <h3 className="text-2xl font-bold mb-2 text-text-main group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="clinic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {clinicImages.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-gray-200"
                  >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">{img.category}</span>
                      <h4 className="text-white font-bold text-sm md:text-md">{img.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Gallery Call to Action */}
      <section className="py-24 bg-brand-off border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-main">Your Journey to a <span className="text-primary">Perfect Smile</span></h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">Every case is unique. At Coral Dental Care, we combine state-of-the-art technology with clinical mastery to give you the smile you've always dreamed of.</p>
              
              <div className="flex flex-col gap-6">
                {[
                  { title: 'Personalized Planning', desc: 'Custom treatments designed for your facial aesthetics.' },
                  { title: 'Pain-Free Technology', desc: 'Advanced clinical equipment ensures your comfort.' },
                  { title: 'Lifetime Support', desc: 'Ongoing care to maintain your results forever.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main mb-1">{item.title}</h4>
                      <p className="text-sm text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white md:p-12 p-6 rounded-[40px] shadow-xl border border-gray-50 text-center">
              <Camera size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-heading font-bold mb-4">See Yourself Smiling</h3>
              <p className="text-text-muted mb-8 italic text-md">"Our gallery only tells half the story. The other half is the confidence you feel every time you look in the mirror."</p>
              <div className="bg-brand-off p-6 rounded-2xl mb-10 text-left border border-gray-200">
                <p className="text-sm text-text-main font-bold mb-2">Ready for your transformation?</p>
                <p className="text-xs text-text-muted">Book a 1-on-1 consultation with Dr. Saranya today.</p>
              </div>
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => setIsModalOpen(true)}
              >
                Book My Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Gallery;
