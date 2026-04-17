import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Send, CheckCircle, MessageSquare } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import CountrySelector from '../ui/CountrySelector';
import { countries } from '../../utils/countryData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Dentistry',
    date: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

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

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request Appointment">
      <div className="px-2 pb-2 ">
        {isSubmitted ? (
          <div className="text-center py-12 px-4">
            <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-text-main mb-3">Appointment Requested</h3>
            <p className="text-text-muted text-lg mb-8 leading-relaxed max-w-sm mx-auto">
              Your appointment is under processing. Our team will contact you shortly to confirm the timings.
            </p>
            <Button size="lg" onClick={onClose} className="w-full sm:w-auto">
              Close Window
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="text-center mb-2">
              <p className="text-text-muted">Fill out the form below and we'll get back to you immediately.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-text-main flex items-center gap-2">
                  <User size={16} className="text-primary" />
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-text-main flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-text-main flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  Phone Number
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CountrySelector 
                    selectedCountry={selectedCountry} 
                    onSelect={setSelectedCountry} 
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your Number"
                    className="flex-1 px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-text-main">Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option>General Dentistry</option>
                    <option>Root Canal Treatment</option>
                    <option>Orthodontics</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Dental Implants</option>
                    <option>Pediatric Care</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-text-main flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    Date
                  </label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-text-main flex items-center gap-2">
                  <MessageSquare size={16} className="text-primary" />
                  Message (Optional)
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your concern..."
                  className="w-full px-5 py-4 bg-brand-off/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all duration-300 resize-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              size="full" 
              className="mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending Request...' : 'Confirm Appointment'}
            </Button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default AppointmentModal;
