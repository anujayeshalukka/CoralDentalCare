import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, Calendar, MessageSquare, Shield, Users, Activity, 
  Smile, CheckCircle, Phone, Stethoscope, Zap, Baby, Anchor,
  Heart, Award, Clock, ArrowRight, Quote, Scissors, UserCheck, Sparkles,
  HeartPulse
} from 'lucide-react';
import Button from '../components/ui/Button';
import ServiceCard from '../components/ui/ServiceCard';
import JawIcon from '../components/ui/JawIcon';
import ComparisonSlider from '../components/ui/ComparisonSlider';
import Accordion from '../components/ui/Accordion';
import AppointmentModal from '../components/modals/AppointmentModal';
import ParallaxEffect from '../components/ui/ParallaxEffect';
import { getWhatsAppLink, getDentistWhatsAppLink } from '../utils/whatsapp';
import SEO from '../components/ui/SEO';

// Team Images
import sectionBg from '../assets/about.webp'; // Using about.webp as a premium blurred background
import founderImg from '../assets/team/founder.png';
import smileAnalysis from '../assets/features/smile-analysis.png';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const services = [
    { title: 'General Dentistry', icon: Stethoscope, description: 'Routine checkups, cleaning, and preventive care for the whole family.', path: '/services' },
    { title: 'Root Canal Treatment', icon: HeartPulse, description: 'Advanced painless root canal procedures to save your natural teeth.', path: '/services' },
    { title: 'Orthodontics', icon: JawIcon, description: 'Braces and aligners to give you the perfect straight smile you deserve.', path: '/services' },
    { title: 'Pediatric Dentistry', icon: Baby, description: 'Gentle and friendly dental care specialized for children and infants.', path: '/services' },
    { title: 'Cosmetic Dentistry', icon: Smile, description: 'Teeth whitening, veneers, and smile makeovers for a confident look.', path: '/services' },
    { title: 'Dental Implants', icon: Anchor, description: 'Permanent and natural-looking replacement for missing teeth.', path: '/services' },
  ];

  const journeySteps = [
    { 
      title: 'Consultation', 
      desc: 'Meet Dr. Saranya for a digital assessment and personalized treatment plan.',
      icon: MessageSquare
    },
    { 
      title: 'Expert Treatment', 
      desc: 'Experience painless procedures using state-of-the-art technology and gentle care.',
      icon: Activity
    },
    { 
      title: 'Lifetime Success', 
      desc: 'Receive ongoing support and care to maintain your perfect, healthy smile forever.',
      icon: Heart
    }
  ];

  const reviews = [
    { name: 'Rahul Krishna', text: 'The most professional dental care I have ever received. Dr. Saranya is incredibly skilled and gentle.', rating: 5, date: '2 days ago' },
    { name: 'Sneha Mathew', text: 'My kids love coming here! The pediatric care is top-notch and stress-free.', rating: 5, date: '1 week ago' },
    { name: 'James Wilson', text: 'High-end technology and very transparent pricing. Best dental clinic in the region.', rating: 5, date: '1 month ago' },
  ];

  const faqs = [
    { title: 'How often should I visit the dentist?', content: 'For most people, a routine checkup every 6 months is recommended to maintain optimal oral health and catch issues early.' },
    { title: 'Is dental treatment painful?', content: 'At Coral Dental Care, we use advanced techniques and local anesthesia to ensure your treatment is as comfortable and pain-free as possible.' },
    { title: 'Do you offer emergency services?', content: 'Yes, we prioritize dental emergencies. Please call us immediately at +91 97476 12370 for urgent care.' },
  ];

  return (
    <div className="pt-0"> 
      <SEO 
        title="Best Dental Clinic in Kerala" 
        description="Experience world-class dental care at Coral Dental Care Kerala. Led by Dr. Saranya S, we offer painless root canals, implants, and pediatric dentistry." 
      />
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex flex-col overflow-hidden bg-text-main">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/coralvideo.mp4" type="video/mp4" />
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Header Spacer - Matches Header h-32 */}
        <div className="h-32 w-full shrink-0" />

        {/* Content Container - Centered vertically in remaining space, left-aligned horizontally */}
        <div className="flex-1 flex items-center relative z-20">
          <div className="container px-6 md:px-12 lg:px-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mr-auto text-left text-white"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-sm shadow-sm mb-2 animate-fade-in">
                <Star size={16} className="text-primary fill-primary" />
                <span>Expert Care led by Dr. Saranya . S</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-normal leading-base mb-4">
                Healthy Smiles for the 
                <span className="text-primary font-bold"> Whole Family</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-12 max-w-2xl leading-relaxed">
                Premium dental care combining clinical excellence with compassion. Dedicated specialist for Root Canal, Cosmetic Dentistry, and Pediatric Care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                  <Calendar size={22} />
                  Book Appointment
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" onClick={() => window.open(getDentistWhatsAppLink(), '_blank')}>
                  <MessageSquare size={22} />
                  Ask Dr. Saranya
                </Button>
              </div>

              <div className="flex flex-wrap justify-start gap-x-6 md:gap-x-12 gap-y-2 md:gap-y-6 mt-8 opacity-90 text-white">
                <div className="flex items-center gap-2 md:gap-3  font-medium text-[12px] md:text-[14px]">
                  <Star size={18} className="text-primary fill-primary" />
                  <span>KDC Reg No: 16033</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 font-medium text-[12px] md:text-[14px] ">
                  <Shield size={18} className="text-primary" />
                  <span>Safe & Sterilized Env</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-white border-b border-gray-200 py-10 relative z-30 mt-0 lg:-mt-10 mx-0 sm:mx-6 md:mx-12 lg:mx-16 rounded-2xl shadow-xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Stat items with improved mobile spacing */}
            {[
              { label: 'Founded by Dr. Saranya', value: 'Since 2019', icon: Award },
              { label: 'Successful Reconstructions', value: '10k+', icon: Smile },
              { label: 'Personalized Care Plans', value: '100%', icon: Zap },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-left md:items-center justify-left md:justify-center gap-4 px-8 py-3 md:py-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="md:text-2xl text-xl font-bold text-text-main">{stat.value}</div>
                  <div className="text-sm text-text-muted font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Highlight - Meet Dr. Saranya . S */}
      <section className="py-16 md:py-22 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-brand-off">
                <img src={founderImg} alt="Dr. Saranya . S" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0" />
              
              <div className="absolute -bottom-6 left-12 bg-primary text-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                 <Award size={32} />
                 <div>
                    <div className="text-xl font-bold">Chief Surgeon</div>
                    <div className="text-xs opacity-80 uppercase tracking-widest font-bold">KDC Reg No: 16033</div>
                 </div>
              </div>
            </motion.div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-brand-off text-primary font-bold text-xs rounded-full mb-6 tracking-widest uppercase">Lead Practitioner</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-main">Dr. Saranya . S <br /><span className="text-primary text-2xl md:text-3xl font-normal block mt-2">BDS, Chief Dental Surgeon</span></h2>
              
              <p className="text-lg text-text-muted mb-10 leading-relaxed italic">
                "I believe every patient deserves a personalized treatment plan that prioritizes both long-term health and aesthetic excellence. My commitment is to provide pain-free, specialized care for all ages."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: 'Root Canal Expert', icon: Activity },
                  { title: 'Crowns & Bridges', icon: Zap },
                  { title: 'Oral Surgery', icon: Scissors },
                  { title: 'Pediatric Care', icon: Baby },
                  { title: 'Smile Makeovers', icon: Smile },
                  { title: 'Full Mouth Reconstruction', icon: UserCheck }
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <skill.icon size={18} />
                    </div>
                    <span className="font-bold text-text-main text-sm">{skill.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>Book a Consultation</Button>
                <div className="flex items-center gap-4 px-6 border-l border-gray-200 italic text-text-muted text-sm leading-tight">
                  Supported by a team of <br className="hidden md:block" /> expert guest specialists.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="py-16 md:py-22 bg-brand-off">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">Your Journey to a <span className="text-primary">Perfect Smile</span></h2>
          <p className="text-lg text-text-muted mb-16 max-w-2xl mx-auto italic">Transparent, professional, and patient-centered care at every step.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Visual connector line for desktop */}
            <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-0.5 bg-gray-200 z-0" />
            
            {journeySteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-white border-4 border-gray-200 shadow-lg rounded-full flex items-center justify-center text-primary mb-6 transition-transform hover:scale-110">
                  <step.icon size={32} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">
                    0{idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed max-w-[250px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-22">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-text-main">
              Our Specialized <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-text-muted">Comprehensive dental solutions tailored to your unique needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" onClick={() => navigate('/services')}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* Aesthetic Reconstruction Showcase */}
      <section className="py-16 md:py-22 bg-text-main text-white overflow-hidden relative border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/20 border border-primary/30 rounded-full font-bold text-xs shadow-sm mb-6 text-primary tracking-widest uppercase">
              Signature Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Full Mouth <span className="text-primary">Aesthetic Reconstructions</span></h2>
            <p className="text-md md:text-lg text-white/70 mb-10 leading-relaxed text-justify">
              Dr. Saranya S specializes in complex reconstructions that restore both function and beauty. Using AI-driven digital technology, we customize every smile transformation to match your unique facial features.
            </p>
            <div className="flex flex-col gap-6">
              {[
                'Personalized Digital Smile Design',
                'Advanced Pain Management',
                'Minimally Invasive Aesthetic Tech'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-semibold text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-start">
                <Button size="lg" className="bg-primary text-white" onClick={() => navigate('/services')}>View All Treatments</Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/gallery')}>View Result Gallery</Button>
            </div>
          </motion.div>
          
          <div className="relative">
            <ParallaxEffect offset={30} className="relative z-10">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl ring-[20px] ring-white/5">
                <img src={smileAnalysis} alt="Modern Dental Tech" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </ParallaxEffect>
            {/* Background elements */}
            <div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-primary/30 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-10 left-[-30px] w-40 h-40 bg-secondary/30 rounded-full blur-2xl z-20" />
          </div>
        </div>
      </section>

      {/* Gallery Section (Before/After) */}
      <section className="py-16 md:py-22">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-text-main">
              See the <span className="text-primary">Transformation</span>
            </h2>
            <p className="text-lg text-text-muted">Real results from our real patients. Excellence in every smile.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
            <div className="w-full">
              <ComparisonSlider 
                beforeImage="/before-4.jpg" 
                afterImage="/after-4.jpg" 
              />
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-heading font-bold text-text-main">Restoring Confidence, One Smile at a Time</h3>
              <p className="text-lg text-text-muted leading-relaxed">
                From whitening to complex reconstructions, our before and after results speak for themselves. We focus on natural aesthetics and lasting health.
              </p>
              <ul className="flex flex-col gap-3 my-4">
                {['Teeth Whitening', 'Invisible Braces', 'Dental Veneers'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold text-success">
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full sm:w-fit" onClick={() => navigate('/gallery')}>View Full Gallery</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Review Feed Section */}
      <section className="py-16 md:py-22 bg-brand-off border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 mb-10 md:mb-16">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-4">Patient Reviews</h2>
              <div className="flex items-center gap-2 md:gap-4">
                <div className="flex gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 md:w-[18px] md:h-[18px] text-primary fill-primary" />)}
                </div>
                <span className="font-bold text-text-main text-sm md:text-base">4.9 / 5</span>
                <span className="text-text-muted text-[10px] md:text-sm border-l border-gray-200 pl-2 md:pl-4">Based on 100+ Google Reviews</span>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2 px-6 bg-white border border-gray-200 rounded-full shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
              <span className="font-bold text-[12px] md:text-sm text-text-muted uppercase tracking-widest">Live Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 md:p-10 rounded-3xl border border-gray-200 shadow-sm relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} className="text-primary fill-primary" />)}
                </div>
                <div className="absolute top-6 md:top-10 right-10 text-brand-off">
                  <Quote size={40} className="fill-current" />
                </div>
                <p className="text-text-muted italic mb-8 leading-relaxed text-md">"{rev.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-text-main">{rev.name}</h4>
                    <span className="text-xs text-text-light font-medium">{rev.date}</span>
                  </div>
                  <CheckCircle size={18} className="text-success" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-22">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-text-main">
              Common <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-text-muted">Everything you need to know about your dental visit.</p>
          </div>
          <Accordion items={faqs} />
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => navigate('/faq')}>View FAQ Page</Button>
          </div>
        </div>
      </section>

      {/* Final CTA - The Booking Hub */}
      <section className="py-16 md:py-22 relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <ParallaxEffect offset={100} className="absolute inset-0 h-[120%] -top-[10%]">
            <img src={sectionBg} alt="Clinical Background" className="w-full h-full object-cover blur-[2px]" />
          </ParallaxEffect>
          <div className="absolute inset-0 bg-black/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                <Sparkles size={14} className="text-primary" />
                <span>Join 10,000+ Happy Patients</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold md:mb-8 mb-4 leading-tight">
                Life is better with a <br />
                <span className="text-primary">Healthy Smile.</span>
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
                Experience the gold standard in dental care with Dr. Saranya. We combine surgical precision with a warm, patient-first approach.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Painless Care', icon: Heart, desc: 'Advanced anesthesia' },
                  { title: 'Expert Surgeon', icon: Award, desc: '15+ Years Mastery' },
                  { title: 'Sterile Clinic', icon: Shield, desc: 'Global safety norms' },
                  { title: 'Kids Friendly', icon: Baby, desc: 'Gentle patient care' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary border border-white/5">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-white/60 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-14 rounded-[40px] shadow-2xl relative overflow-hidden group"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors" />
              
              <h3 className="text-3xl font-heading font-bold text-white mb-4">Start Your Journey</h3>
              <p className="text-white/70 mb-10 text-md">Choose your preferred way to connect with our clinical team.</p>
              
              <div className="flex flex-col gap-6">
                <Button 
                  size="lg" 
                  className="!bg-primary !text-white hover:!bg-primary-dark h-16 group shadow-xl hover:shadow-primary/20 transition-all"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Consultation
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight size={20} className="text-primary" />
                  </div>
                </Button>

                <div className="relative">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white/20 text-white hover:bg-white/10 h-16 justify-start px-8 group"
                    onClick={() => window.open(getWhatsAppLink(), '_blank')}
                  >
                    <MessageSquare size={22} className="mr-3" />
                    Quick WhatsApp Chat
                  </Button>
                  {/* Live Status Indicator */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                    </span>
                    <span className="text-[10px] font-bold text-success uppercase tracking-widest hidden sm:block">Live Now</span>
                  </div>
                </div>
              </div>

              <p className="text-center mt-8 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                No waiting. Instant confirmation available.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
