import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';

const Blog: React.FC = () => {
  const posts = [
    {
      title: '5 Tips for Maintaining Your Child’s Oral Health',
      excerpt: 'Establishing good dental habits early is key to a lifetime of healthy smiles. Discover 5 practical tips for parents...',
      category: 'Pediatric Care',
      date: 'April 2, 2024',
      author: 'Dr. Anjali Menon',
      image: '/blog-1.jpg'
    },
    {
      title: 'Understanding the Benefits of Invisible Braces',
      excerpt: 'Clear aligners have revolutionized orthodontics. Learn how they work and why they might be the right choice for you...',
      category: 'Orthodontics',
      date: 'March 28, 2024',
      author: 'Dr. Sarah Johnson',
      image: '/blog-2.jpg'
    },
    {
      title: 'Common Causes of Tooth Sensitivity and How to Treat It',
      excerpt: 'Does cold or hot food cause sharp pain? You might have sensitive teeth. Here is everything you need to know...',
      category: 'General Dentistry',
      date: 'March 15, 2024',
      author: 'Dr. Michael Chen',
      image: '/blog-3.jpg'
    },
    {
      title: 'The Truth About Teeth Whitening: Safe vs. Unsafe Methods',
      excerpt: 'Professional whitening vs. home remedies. What works and what could potentially damage your enamel...',
      category: 'Cosmetic',
      date: 'March 10, 2024',
      author: 'Dr. Sarah Johnson',
      image: '/blog-4.jpg'
    }
  ];

  const categories = ['All', 'General Dentistry', 'Orthodontics', 'Pediatric Care', 'Cosmetic', 'Root Canal'];

  return (
    <div className="pt-20">
      <PageHero 
        title="Dental Tips &" 
        highlight="Education" 
        subtitle="Stay informed about oral health, the latest dental technologies, and tips for a brighter smile."
      />

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 flex flex-col gap-12 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input type="text" placeholder="Search articles..." className="flex-grow px-4 py-2 border border-gray-200 rounded-lg focus:border-primary outline-none transition-all" />
                <Button variant="primary" size="sm" className="rounded-lg"><Search size={18} /></Button>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 pb-2 border-b-2 border-primary-light text-text-main">Categories</h4>
              <ul className="flex flex-col gap-2">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <button className={`w-full text-left py-1.5 font-medium text-[15px] transition-all hover:text-primary hover:pl-1 border-none bg-transparent cursor-pointer ${idx === 0 ? 'text-primary' : 'text-text-muted'}`}>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-off p-8 rounded-2xl border border-gray-200 flex flex-col gap-4">
              <h4 className="text-xl font-bold text-text-main">Stay Updated</h4>
              <p className="text-sm text-text-muted leading-relaxed">Get the latest dental tips delivered to your inbox.</p>
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-primary outline-none" />
              <Button size="full" className="mt-2 shadow-sm">Subscribe</Button>
            </div>
          </aside>

          {/* Main Feed */}
          <div className="flex flex-col gap-12 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, idx) => (
                <motion.article 
                  key={idx} 
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="aspect-video bg-brand-off overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-bold rounded uppercase tracking-widest leading-none">{post.category}</div>
                  </div>
                  <div className="p-8 flex flex-col gap-4">
                    <div className="flex gap-6 text-[11px] font-bold text-text-light uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><User size={14} className="text-primary" /> {post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight"><a href="#">{post.title}</a></h3>
                    <p className="text-text-muted text-[15px] leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <a href="#" className="flex items-center gap-1 font-bold text-primary text-sm group-hover:gap-2 transition-all mt-2">
                      Read More <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-12">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <div className="flex gap-2">
                {[1, 2, 3].map((num) => (
                  <span key={num} className={`w-9 h-9 flex items-center justify-center rounded-full font-bold text-sm cursor-pointer transition-all ${num === 1 ? 'bg-primary text-white shadow-md' : 'bg-brand-off text-text-main hover:bg-gray-200'}`}>
                    {num}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
