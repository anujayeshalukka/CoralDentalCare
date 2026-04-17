import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Smile, Baby, Star, CheckCircle, HeartPulse, Anchor, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import JawIcon from '../components/ui/JawIcon';
import servicesBg from '../assets/heroes/services.png';

// Team Images
import founderImg from '../assets/team/founder.png';
import orthoDoctorImg from '../assets/team/doctor-ortho.jpg';
import implantDoctorImg from '../assets/team/doctor-implat1.jpeg';
import endoDoctorImg from '../assets/team/doctor-endo.jpg';
import maxilloDoctorImg from '../assets/team/doctor-maxillo.jpg';

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  const allServices = [
    { 
      title: 'General Dentistry', 
      icon: Stethoscope, 
      description: 'Comprehensive dental exams, cleanings, and digital X-rays to maintain your oral health.',
      features: ['Regular Checkups', 'Professional Cleaning', 'Oral Cancer Screening', 'Fillings']
    },
    { 
      title: 'Root Canal Treatment', 
      icon: HeartPulse, 
      description: 'Advanced endodontic therapy to save severely damaged or infected teeth with minimal discomfort.',
      features: ['Pain Management', 'Single Visit RTC', 'Infection Control', 'Post & Core']
    },
    { 
      title: 'Orthodontics', 
      icon: JawIcon, 
      description: 'Modern solutions for misaligned teeth, including traditional braces and clear aligners.',
      features: ['Metal Braces', 'Ceramic Braces', 'Invisalign', 'Retainers']
    },
    { 
      title: 'Pediatric Dentistry', 
      icon: Baby, 
      description: 'Specialized and gentle dental care designed to make children feel safe and comfortable.',
      features: ['Child Prophylaxis', 'Fluoride Treatment', 'Sealants', 'Dental Education']
    },
    { 
      title: 'Cosmetic Dentistry', 
      icon: Smile, 
      description: 'Enhance your smile with our range of aesthetic treatments tailored to your desires.',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeover']
    },
    { 
      title: 'Dental Implants', 
      icon: Anchor, 
      description: 'Long-lasting and stable tooth replacement surgery that looks and feels like natural teeth.',
      features: ['Single Implants', 'Full Mouth Bridge', 'Bone Grafting', 'Sinus Lift']
    },
  ];

  const team = [
    {
      name: 'Dr. Saranya . S',
      role: 'Chief Dental Surgeon',
      qualification: 'BDS',
      image: founderImg,
      isFounder: true
    },
    {
      name: 'Dr. Mithun Paul',
      role: 'Orthodontics Specialist',
      qualification: 'BDS, MDS Orthodontics',
      image: orthoDoctorImg
    },
    {
      name: 'Dr. Jeethu Maria Thomas',
      role: 'Periodontist & Implantologist',
      qualification: 'BDS, MDS Periodontology',
      image: implantDoctorImg
    },
    {
      name: 'Dr. Arya Unnikrishnan',
      role: 'Endodontist',
      qualification: 'BDS, MDS Conservative Dentistry & Endodontics',
      image: endoDoctorImg
    },
    {
      name: 'Dr. Naveen Nandagopal',
      role: 'Maxillofacial Surgeon',
      qualification: 'BDS, MDS Oral & Maxillofacial Surgery',
      image: maxilloDoctorImg
    },
    {
      name: 'Dr. Dhanya Damodaran',
      role: 'Prosthodontist',
      qualification: 'BDS, MDS'
    },
    {
      name: 'Dr. Reshma Ramachandran',
      role: 'Jr. Dental Surgeon',
      qualification: 'BDS'
    },
  ];

  return (
    <div>
      <PageHero 
        title="Comprehensive" 
        highlight="Dental Services" 
        subtitle="We provide a wide range of specialized dental treatments using modern technology and a patient-first approach."
        backgroundImage={servicesBg}
      />

      <section className="py-16 md:py-22">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {allServices.map((service, idx) => (
              <motion.div 
                key={idx} 
                className="group flex flex-col sm:flex-row gap-8 md:p-10 p-6 rounded-3xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-primary-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-20 h-20 bg-brand-off rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-text-main group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-text-muted mb-6 leading-relaxed text-[15px]">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 font-semibold text-success text-sm">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Services */}
      <section className="py-16 md:py-22 bg-brand-off">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-text-main">
              Why Choose <span className="text-primary">Our Care</span>
            </h2>
            <p className="text-lg text-text-muted">We combine expertise with a gentle touch to ensure the best outcomes for our patients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Pain-Free Focus', desc: 'We use advanced techniques and sedation options to make your visit as comfortable as possible.' },
              { title: 'Modern Tech', desc: 'From 3D imaging to laser dentistry, we use the latest tools for precision and faster recovery.' },
              { title: 'Personalized Plans', desc: 'Every patient gets a custom treatment plan based on their specific health needs and goals.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-6 bg-white border-2 border-primary-light rounded-full flex items-center justify-center text-primary shadow-sm group hover:bg-primary hover:text-white transition-all duration-300">
                  <Star size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-text-main">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:pt-22 md:pb-10 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary-dark font-bold text-[10px] rounded-full uppercase tracking-widest mb-4">THE TEAM</span>
            <h2 className="text-4xl font-heading font-bold mb-4 text-text-main">
              Meet Our <span className="text-primary">Clinical Specialists</span>
            </h2>
            <p className="text-lg text-text-muted">A dedicated team of experts combining decades of experience to provide you with the highest standard of dental care.</p>
          </div>

          <div className="relative group/slider">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 -mx-4"
            >
              {team.map((member, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex-shrink-0 w-72 sm:w-64 snap-center bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden group/card hover:shadow-xl transition-all duration-300 ${member.isFounder ? 'ring-2 ring-primary/20' : ''}`}
                >
                  <div className="aspect-[1/1] relative overflow-hidden bg-brand-off">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/5">
                        <Users size={48} className="text-primary/20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest mb-1 block">
                        {member.role}
                      </span>
                      <h4 className="text-white font-bold text-md leading-tight transition-colors">
                        {member.name}
                      </h4>
                    </div>
                  </div>
                  <div className="p-4 bg-white flex flex-col items-center justify-center text-center">
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2">
                      {member.qualification}
                    </p>
                    {member.isFounder ? (
                      <div className="px-2.5 py-1 bg-primary/10 text-primary text-[9px] font-black rounded-full uppercase tracking-tighter">
                        Chief Surgeon
                      </div>
                    ) : (
                      <div className="px-2.5 py-1 bg-gray-50 text-text-light text-[9px] font-bold rounded-full uppercase tracking-tighter">
                        Specialist
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-[60px] left-0 right-0 flex justify-between pointer-events-none px-2 z-10">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg flex items-center justify-center text-text-main pointer-events-auto hover:bg-primary hover:text-white transition-all transform hover:scale-110 -translate-x-4 opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0"
                title="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg flex items-center justify-center text-text-main pointer-events-auto hover:bg-primary hover:text-white transition-all transform hover:scale-110 translate-x-4 opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0"
                title="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
