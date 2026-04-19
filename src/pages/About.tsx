import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Target, Star, CheckCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SEO from '../components/ui/SEO';
import aboutBg from '../assets/about.webp';
import founderImg from '../assets/team/founder.png';
import interiorImg from '../assets/interior.jpg';
import orthoDoctorImg from '../assets/team/doctor-ortho.jpg';
import implantDoctorImg from '../assets/team/doctor-implat1.jpeg';
import endoDoctorImg from '../assets/team/doctor-endo.jpg';
import maxilloDoctorImg from '../assets/team/doctor-maxillo.jpg';
import prosthoDoctorImg from '../assets/team/doctor-prostho.png';
import jrSurgeonImg from '../assets/team/doctor-jr-surgeon.png';

const About: React.FC = () => {
  const stats = [
    { label: 'Happy Patients', value: '10,000+' },
    { label: 'Years of Excellence', value: '5+' },
    { label: 'Guest Specialists', value: '5+' },
    { label: 'Successful Procedures', value: '5k+' },
  ];

  const guestSpecialists = [
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
      qualification: 'BDS, MDS',
      image: prosthoDoctorImg
    },
    {
      name: 'Dr. Reshma Ramachandran',
      role: 'Jr. Dental Surgeon',
      qualification: 'BDS',
      image: jrSurgeonImg
    },
  ];

  return (
    <div className="overflow-hidden">
      <SEO 
        title="About Dr. Saranya S & Coral Dental" 
        description="Learn about the vision of Dr. Saranya S and our commitment to clinical excellence at Coral Dental Care Kerala. Over 15 years of surgical expertise." 
      />
      <PageHero
        title="Leadership at"
        highlight="Coral Dental"
        subtitle="Driven by the clinical excellence and personal vision of Dr. Saranya S."
        backgroundImage={aboutBg}
      />

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary-dark font-bold text-xs rounded-full w-fit tracking-wider uppercase">THE VISION</span>
            <h2 className="text-4xl font-heading font-bold mb-4 text-text-main">
              A Personal Commitment to <span className="text-primary">Clinical Excellence</span>.
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Founded by Dr. Saranya S, Coral Dental Care was established to provide a superior dental experience where clinical expertise meets personalized, compassionate care. Her mission was to create a clinic where every patient is treated like family.
            </p>
            <p className="text-lg text-text-muted leading-relaxed text-justify">
              Since its establishment, the clinic has become a hub for specialized treatments, from painless root canals to complex aesthetic reconstructions, all delivered with the highest standards of sterilization and patient comfort.
            </p>

            <div className="flex flex-col gap-8 mt-6">
              {[
                { icon: Target, title: 'Founder\'s Mission', desc: 'To provide world-class dental care that is accessible, ethical, and entirely patient-centered.', color: 'text-primary' },
                { icon: Heart, title: 'Core Philosophy', desc: 'I believe in treating the person, not just the tooth. Pain management and education are the pillars of my practice.', color: 'text-secondary' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <item.icon size={24} className={`${item.color} flex-shrink-0 mt-1`} />
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-text-main">{item.title}</h4>
                    <p className="text-[15px] text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative z-10">
              <img src={interiorImg} alt="Clinic Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl z-20 border border-gray-50 flex flex-col items-center gap-2">
              <span className="text-4xl font-bold text-primary">15+</span>
              <span className="text-xs font-bold text-text-muted uppercase tracking-widest text-center leading-tight">Years OF clinical<br />Experience</span>
            </div>
            {/* Background Shape */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full z-0 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Founder Detailed Profile */}
      <section className="py-24 bg-brand-off border-y border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img src={founderImg} alt="Dr. Saranya . S" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-4xl font-heading font-bold text-text-main mb-2">Dr. Saranya . S</h2>
                <div className="flex flex-wrap items-center gap-4 text-primary font-bold">
                  <span className="text-xl">BDS, Chief Dental Surgeon</span>
                  <span className="hidden sm:block text-gray-300">|</span>
                  <span className="text-sm bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest font-bold">KDC Reg No: 16033</span>
                </div>
              </div>

              <p className="text-lg text-text-muted leading-relaxed">
                As the Chief Surgeon of Coral Dental Care, Dr. Saranya S brings a Wealth of experience in surgical and aesthetic dentistry. She has pioneered a patient-first approach in Puliyanm, focusing on combining advanced technology with a gentle, personal touch.
              </p>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Star className="text-secondary fill-secondary" /> Clinical Expertise & Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    'Painless Root Canal Treatments',
                    'Precision Crown & Bridge Preparation',
                    'Minor Oral Surgeries',
                    'Impacted Teeth (Wisdom) Treatments',
                    'Specialized Pediatric Dentistry',
                    'Full Mouth Aesthetic Reconstructions',
                    'Advanced Pain Management',
                    'Preventive Oral Hygiene Education'
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-success" />
                      <span className="text-sm font-semibold text-text-main">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <Award size={32} className="text-primary shrink-0" />
                <p className="text-sm font-bold text-text-main leading-relaxed italic">
                  "My goal is to create a personalized treatment journey for every patient, ensuring their oral health and aesthetic goals are met with the highest precision."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Guest Specialists */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-2 text-text-main">
              Guest <span className="text-primary">Specialists</span>
            </h2>
            <p className="text-lg text-text-muted">Experience world-class expertise with our team of highly talented specialists, dedicated to providing precise and personalized care for every complex dental procedure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guestSpecialists.map((member, idx) => (
              <div key={idx} className="bg-brand-off rounded-3xl border border-gray-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <Users size={48} className="text-primary/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-6 flex-col justify-end">
                    <span className="text-xs font-bold text-white uppercase tracking-widest mb-1">{member.role}</span>
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <span className="text-sm font-bold text-primary block mb-2 uppercase tracking-wide">
                    {member.qualification || 'MDS Specialization'}
                  </span>
                  <p className="text-xs text-text-light font-medium flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-success" /> Visiting Consultant
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-white/10">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 flex flex-wrap justify-center items-center gap-x-2">
              The Coral <span className=" text-black px-4 py-1 rounded-xl ">Difference</span>
            </h2>
            <p className="text-lg opacity-80 leading-relaxed">
              We combine advanced clinical expertise with a deeply human approach to redefine your dental experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Pain-Free Systems',
                desc: 'State-of-the-art technology specifically designed for maximum patient comfort in every procedure.',
                icon: Award,
                accent: 'bg-sky-400'
              },
              {
                title: 'Global Protocols',
                desc: 'Strict adherence to international clinical standards for sterilization and dental excellence.',
                icon: Users,
                accent: 'bg-emerald-400'
              },
              {
                title: 'Caring Environment',
                desc: 'A warm, compassionate atmosphere where every patient is treated with the care of a family member.',
                icon: Heart,
                accent: 'bg-rose-400'
              },
              {
                title: 'Total Transparency',
                desc: 'Honest treatment plans, clear communication, and no hidden costs throughout your clinical journey.',
                icon: Target,
                accent: 'bg-amber-400'
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="h-full p-8 md:p-10 bg-white rounded-[2.5rem] text-center flex flex-col items-center gap-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-dark/40 border border-transparent hover:border-white/20">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                    <item.icon size={32} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-normal text-text-main text-xl tracking-tight leading-tight">{item.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                  {/* Decorative accent dot */}
                  <div className={`absolute top-8 right-8 w-2 h-2 rounded-full ${item.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(0,0,0,0.1)]`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
