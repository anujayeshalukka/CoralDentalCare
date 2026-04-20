import React from 'react';
import { HelpCircle, MessageSquare, Phone, Mail, Calendar } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SEO from '../components/ui/SEO';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import faqBg from '../assets/heroes/faq.png';
import { getWhatsAppLink } from '../utils/whatsapp';
import { CONTACT_INFO } from '../constants/contactInfo';

const FAQ: React.FC = () => {
  const faqCategories = [
    {
      category: 'General Questions',
      items: [
        { title: 'How often should I have a dental checkup?', content: 'We recommend a professional checkup and cleaning every 6 months to maintain optimal oral health and catch potential issues before they become serious.' },
        { title: 'What should I do in case of a dental emergency?', content: 'Contact us immediately at +91 97476 12370. We prioritize emergency cases and will try to see you as soon as possible, often on the same day.' },
        { title: 'Are you accepting new patients?', content: 'Yes! We are always happy to welcome new patients and families to Coral Dental Care. You can book your first appointment online or by phone.' }
      ]
    },
    {
      category: 'Treatments & Procedures',
      items: [
        { title: 'Is a root canal painful?', content: 'Modern root canal therapy is very similar to having a deep filling. With advanced local anesthesia and specialized tools, the procedure is designed to be pain-free.' },
        { title: 'How long does professional teeth whitening last?', content: 'Results typically last from 6 months to 2 years, depending on your lifestyle habits (like smoking or drinking coffee/tea) and oral hygiene.' },
        { title: 'Are dental implants permanent?', content: 'Dental implants are designed to be a lifelong solution. While the crown might need replacement due to wear, the implant post itself can last a lifetime with proper care.' }
      ]
    },
    {
      category: 'Financials & Insurance',
      items: [
        { title: 'What payment methods do you accept?', content: 'We accept Cash, All major Credit/Debit Cards, and UPI payments (Google Pay, PhonePe, etc.).' },
        { title: 'Do you offer EMI or payment plans?', content: 'Yes, for major treatments like Orthodontics and Implants, we offer flexible 0% interest EMI options to make your care affordable.' },
        { title: 'Does dental insurance cover all procedures?', content: 'Most insurance plans cover preventive care fully, but restorative or cosmetic procedures may have partial coverage. We can help you verify your benefits.' }
      ]
    }
  ];

  return (
    <div>
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about dental checkups, root canals, implants, and clinic policies at Coral Dental Care Kerala." 
      />
      <PageHero 
        title="Frequently Asked" 
        highlight="Questions" 
        subtitle="Find quick answers to common dental concerns and learn more about our clinic's policies."
        backgroundImage={faqBg}
      />

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl flex flex-col gap-20">
          {faqCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-10">
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-dark shadow-sm">
                  <HelpCircle size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-text-main text-center">{cat.category}</h2>
              </div>
              <Accordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions? */}
      <section className="py-24 bg-brand-off">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-text-main">Still Have <span className="text-primary">Questions?</span></h2>
            <p className="text-lg text-text-muted">Our friendly team is here to help you with any specific queries you may have.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Phone, title: 'Call Us', desc: 'Speak directly with our front desk.', contact: CONTACT_INFO.phone, link: CONTACT_INFO.phoneLink },
              { icon: MessageSquare, title: 'WhatsApp', desc: 'Quick chat for easy inquiries.', contact: 'Chat Now', link: getWhatsAppLink() },
              { icon: Mail, title: 'Email Us', desc: 'Send us your detailed questions.', contact: CONTACT_INFO.emails },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group">
                <item.icon size={44} className="text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2 text-text-main group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-text-muted mb-6 leading-relaxed text-[15px]">{item.desc}</p>
                {Array.isArray(item.contact) ? (
                  <div className="flex flex-col gap-2">
                    {item.contact.map((email, eIdx) => (
                      <a key={eIdx} href={`mailto:${email}`} className="inline-block text-lg font-bold text-text-main hover:text-primary transition-colors border-b-2 border-primary-light hover:border-primary pb-0.5">{email}</a>
                    ))}
                  </div>
                ) : (
                  <a href={item.link} className="inline-block text-lg font-bold text-text-main hover:text-primary transition-colors border-b-2 border-primary-light hover:border-primary pb-0.5">{item.contact}</a>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button size="lg" onClick={() => window.location.href='/contact'}>
              <Calendar size={20} />
              Visit Contact Page
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
