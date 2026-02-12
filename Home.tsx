
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Icons, BRAND } from '../constants';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const services = [
    { title: 'ELV Systems', icon: <Icons.Building className="w-8 h-8" />, desc: 'Integrated Low Voltage solutions for modern facilities.' },
    { title: 'Smart BMS', icon: <Icons.Analytics className="w-8 h-8" />, desc: 'Advanced Building Management for efficiency & control.' },
    { title: 'IoT Solutions', icon: <Icons.IoT className="w-8 h-8" />, desc: 'Interconnected smart sensors and real-time data.' },
    { title: 'Fire Safety', icon: <Icons.Fire className="w-8 h-8" />, desc: 'State-of-the-art protection for critical infrastructure.' },
    { title: 'Security', icon: <Icons.Security className="w-8 h-8" />, desc: 'Next-gen surveillance and access control systems.' },
    { title: 'Networking', icon: <Icons.Networking className="w-8 h-8" />, desc: 'Robust IT infrastructure for seamless connectivity.' }
  ];

  return (
    <section className="py-24 bg-dreamBlack relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Our Core Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="glass p-8 rounded-2xl group transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6 group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{svc.title}</h3>
              <p className="text-dreamSilver text-sm leading-relaxed mb-6">{svc.desc}</p>
              <Link to="/services" className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Learn More →</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { val: '50+', label: 'Projects Completed' },
    { val: '30+', label: 'Elite Clients' },
    { val: '5+', label: 'Years Experience' },
    { val: '24/7', label: 'Tech Support' }
  ];

  return (
    <section className="py-20 glass border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <h4 className="text-4xl md:text-5xl font-heading font-extrabold gradient-text mb-2">{stat.val}</h4>
            <p className="text-dreamSilver text-sm font-medium uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-dreamDark relative">
      <div className="max-w-5xl mx-auto px-4 text-center glass rounded-3xl p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
        
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">Ready to Build Your <br/><span className="gradient-text">Smart Infrastructure?</span></h2>
        <p className="text-dreamSilver text-lg mb-10 max-w-2xl mx-auto">
          Partner with Dreamspire Technologies to transform your vision into reality with cutting-edge engineering and IoT solutions.
        </p>
        <Link 
          to="/contact" 
          className="inline-block px-10 py-5 bg-gradient-to-r from-[#ff2f92] to-[#a600ff] text-white rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(255,47,146,0.6)] transition-all"
        >
          Request a Proposal
        </Link>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <ServicesGrid />
      
      <CTA />
    </div>
  );
};

export default Home;
