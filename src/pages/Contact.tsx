import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Calendar, User, MessageSquare, Instagram, Facebook, MessageCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import contactBg from '../assets/heroes/contact.png';
import MapSection from '../components/ui/MapSection';
import CountrySelector from '../components/ui/CountrySelector';
import { countries } from '../utils/countryData';
import { getWhatsAppLink } from '../utils/whatsapp';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Dentistry',
    date: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('access_key', '1c28bba5-4277-4918-9395-facce221879b');
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', `${selectedCountry.dialCode} ${formData.phone}`);
    formDataToSubmit.append('service', formData.service);
    formDataToSubmit.append('date', formData.date);
    formDataToSubmit.append('message', formData.message);
    formDataToSubmit.append('subject', `New Appointment Request from ${formData.name}`);
    formDataToSubmit.append('from_name', 'Coral Dental Care Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        alert('Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error connecting to the server. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="overflow-hidden bg-brand-white relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-[20%] -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <PageHero 
        title="Book Your" 
        highlight="Appointment" 
        subtitle="Schedule your visit today and take the first step towards a healthier, brighter smile."
        backgroundImage={contactBg}
      />

      <section className="py-24 relative z-10">
        <div className="container-wide">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start"
          >
            {/* Contact Info */}
            <div className="flex flex-col gap-12">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                  Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-main">
                  We're Here for <br/><span className="text-primary">Your Smile</span>
                </h2>
                <p className="text-text-muted mb-10 leading-relaxed text-lg max-w-md">
                  Have questions or ready to book? Reach out through any of our channels below.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {[
                    { icon: MapPin, title: 'Location', content: 'Above State Bank of India, Pereppadan Towers, Puliyanm, Kerala – 683572' },
                    { icon: Phone, title: 'Phone', content: '+91 97476 12370', isLink: 'tel:+919747612370' },
                    { icon: Mail, title: 'Email', content: 'info@coraldental.com', isLink: 'mailto:info@coraldental.com' },
                    { icon: Clock, title: 'Working Hours', content: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Emergency Only'] },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="group flex gap-6 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-brand-off flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <item.icon size={26} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-text-main">{item.title}</h4>
                        {Array.isArray(item.content) ? (
                          item.content.map((line, lIdx) => <p key={lIdx} className="text-text-muted text-sm leading-relaxed">{line}</p>)
                        ) : item.isLink ? (
                          <a href={item.isLink} className="text-secondary font-medium hover:text-primary transition-colors block text-sm">{item.content}</a>
                        ) : (
                          <p className="text-text-muted text-sm leading-relaxed">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Booking Form */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl -z-10 group-hover:bg-primary/10 transition-colors" />
              <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-2xl border border-white/50 relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10" />

                {isSubmitted ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <Calendar size={48} />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-text-main mb-4">Request Received!</h3>
                    <p className="text-text-muted text-lg mb-10 leading-relaxed max-w-sm mx-auto">
                      Your appointment is being processed. Our team will reach out shortly for confirmation.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="px-10 border-2">Send Another Request</Button>
                  </motion.div>
                ) : (
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <h3 className="text-3xl font-heading font-bold text-text-main mb-3">Online Booking</h3>
                      <p className="text-text-muted leading-relaxed">Fill in the details below to request your priority appointment slot.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex flex-col gap-2.5">
                        <label className="text-sm font-bold text-text-main flex items-center gap-2 px-1">
                          <User size={16} className="text-primary" /> Full Name
                        </label>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your full name" 
                          className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-400"
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <label className="text-sm font-bold text-text-main flex items-center gap-2 px-1">
                          <Mail size={16} className="text-primary" /> Email Address
                        </label>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="mail@example.com" 
                          className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-400"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <label className="text-sm font-bold text-text-main flex items-center gap-2 px-1">
                          <Phone size={16} className="text-primary" /> Phone Number
                        </label>
                        <div className="flex gap-3">
                          <CountrySelector 
                            selectedCountry={selectedCountry} 
                            onSelect={setSelectedCountry} 
                          />
                          <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Your Number" 
                            className="flex-1 px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-400"
                            value={formData.phone}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2.5">
                          <label className="text-sm font-bold text-text-main px-1">Service Type</label>
                          <div className="relative">
                            <select 
                              name="service" 
                              className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 cursor-pointer appearance-none"
                              value={formData.service} 
                              onChange={handleChange}
                            >
                              <option>General Dentistry</option>
                              <option>Root Canal Treatment</option>
                              <option>Orthodontics</option>
                              <option>Cosmetic Dentistry</option>
                              <option>Dental Implants</option>
                              <option>Pediatric Care</option>
                            </select>
                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" size={20} />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                          <label className="text-sm font-bold text-text-main flex items-center gap-2 px-1">
                            <Calendar size={16} className="text-primary" /> Preferred Date
                          </label>
                          <input 
                            type="date" 
                            name="date" 
                            className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300"
                            value={formData.date}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <label className="text-sm font-bold text-text-main flex items-center gap-2 px-1">
                          <MessageSquare size={16} className="text-primary" /> Additional Notes
                        </label>
                        <textarea 
                          name="message" 
                          rows={4} 
                          placeholder="How can we help you?"
                          className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 resize-none placeholder:text-gray-400"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                    <Button type="submit" size="full" className="mt-6 py-4 shadow-lg shadow-primary/20 hover:shadow-primary/30" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </div>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Booking Request
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Connections Section */}
      <section className="pb-24 pt-12 relative z-10">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-text-main">
              Social <span className="text-primary ">Connections</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Follow us on social media for dental tips, patient results, and clinic updates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Instagram', 
                icon: Instagram, 
                username: '@coraldentalcare', 
                link: 'https://instagram.com/coraldentalcare', 
                color: 'bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
                desc: 'See our patients smiles and dental tips.'
              },
              { 
                name: 'Facebook', 
                icon: Facebook, 
                username: 'Coral Dental Care', 
                link: 'https://facebook.com/coraldentalcare', 
                color: 'bg-[#1877F2]',
                desc: 'Connect with our community and reviews.'
              },
              { 
                name: 'WhatsApp', 
                icon: MessageCircle, 
                username: 'Chat with Us', 
                link: getWhatsAppLink(), 
                color: 'bg-[#25D366]',
                desc: 'Instant consultation and bookings.'
              }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[32px] blur opacity-5 group-hover:opacity-10 transition duration-500" />
                <div className="relative bg-white border border-gray-200 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${social.color} flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      <social.icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-text-main leading-tight">{social.name}</h4>
                      <p className="text-primary font-medium text-sm">{social.username}</p>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">{social.desc}</p>
                  <div className="w-full py-3 bg-brand-off rounded-xl font-bold text-text-main text-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    Visit Now
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
};

export default Contact;
