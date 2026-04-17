import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Search, Filter } from 'lucide-react';
import PageHero from '../components/ui/PageHero';

const Testimonials: React.FC = () => {
  const allTestimonials = [
    { 
      name: 'Rahul K. Nair', 
      location: 'Kochi', 
      comment: 'Excellent service! The doctors are very professional and explain everything clearly. The clinic is very clean and follows all safety protocols. My root canal was painless.', 
      rating: 5, 
      date: '2 weeks ago' 
    },
    { 
      name: 'Sneha Joseph', 
      location: 'Puliyanm', 
      comment: 'Best dental clinic for kids. My daughter was very scared, but the pediatric dentist was so patient and gentle. Now she loves going to the dentist!', 
      rating: 5, 
      date: '1 month ago' 
    },
    { 
      name: 'Mathew Thomas', 
      location: 'Aluva', 
      comment: 'I got my dental implants done here. The results are amazing, they look and feel like my natural teeth. Great value for money and very caring staff.', 
      rating: 5, 
      date: '3 months ago' 
    },
    { 
      name: 'Priya S.', 
      location: 'Angamaly', 
      comment: 'Very professional orthodontists. I am doing my clear aligner treatment here and the progress is fantastic. Very happy with the service.', 
      rating: 4, 
      date: '2 months ago' 
    },
    { 
      name: 'George Varghese', 
      location: 'Kochi', 
      comment: 'State of the art technology and very hygiene environment. Reasonable pricing compared to other premium clinics in the area.', 
      rating: 5, 
      date: '4 months ago' 
    },
    { 
      name: 'Anupama R.', 
      location: 'Kerala', 
      comment: 'Highly recommend Coral Dental. They helped me with a dental emergency late in the evening. Truly grateful for their service.', 
      rating: 5, 
      date: '5 months ago' 
    }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      <PageHero 
        title="Patient" 
        highlight="Reviews" 
        subtitle="Read the stories of patients who have experienced our compassionate and professional dental care."
      />

      <section className="py-12 border-b border-gray-200 bg-brand-off">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-wrap justify-center items-center gap-12 md:gap-24 text-center">
          <div className="flex flex-col gap-1 items-center">
            <div className="text-4xl font-bold text-primary">4.9/5</div>
            <div className="flex gap-0.5 my-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-primary fill-primary" />)}
            </div>
            <p className="text-text-muted font-bold text-xs uppercase tracking-widest leading-none mt-1">Google Rating</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-200" />
          <div className="flex flex-col gap-1 items-center">
            <div className="text-4xl font-bold text-primary">2,500+</div>
            <p className="text-text-muted font-bold text-xs uppercase tracking-widest leading-none mt-4">Verified Reviews</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-200" />
          <div className="flex flex-col gap-1 items-center">
            <div className="text-4xl font-bold text-primary">99%</div>
            <p className="text-text-muted font-bold text-xs uppercase tracking-widest leading-none mt-4">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((t, idx) => (
              <motion.div 
                key={idx} 
                className="p-8 md:p-10 bg-white border border-gray-200 rounded-3xl shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="w-9 h-9 bg-brand-off rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Quote size={20} />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="text-primary fill-primary" />)}
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-text-muted italic mb-10 flex-grow text-[15px]">"{t.comment}"</p>
                <div className="flex items-center gap-4 pt-8 border-t border-brand-off">
                  <div className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {t.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-text-main group-hover:text-primary transition-colors">{t.name}</h4>
                    <span className="text-xs text-text-light font-medium">{t.location} • {t.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Write a Review Section */}
      <section className="py-24 bg-brand-off">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-text-main">Share Your <span className="text-primary">Experience</span></h2>
            <p className="text-lg text-text-muted">Your feedback helps us grow and serve you better.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://google.com/search?q=Coral+Dental+Care+Puliyanm" target="_blank" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-md">Write a Google Review</a>
            <a href="mailto:feedback@coraldental.com" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-md">Send Private Feedback</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
