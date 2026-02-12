
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const timeline = [
    { year: '2010', event: 'Dreamspire founded as a consulting firm.' },
    { year: '2014', event: 'Expanded into ELV and Security systems.' },
    { year: '2018', event: 'Launched IoT dedicated division for Smart Cities.' },
    { year: '2022', event: 'Achieved ISO 9001 certification and global expansion.' }
  ];

  return (
    <div className="pt-32 pb-24 bg-dreamDark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">Engineering a <span className="gradient-text">Connected World</span></h1>
            <p className="text-dreamSilver text-lg leading-relaxed mb-6 font-light">
              Dreamspire Technologies Pvt Ltd is a premier technology solutions provider specializing in Smart Infrastructure and IoT ecosystems. With over a decade of experience, we have been at the forefront of digital transformation in building management and industrial automation.
            </p>
            <p className="text-dreamSilver text-lg leading-relaxed font-light">
              Our engineering-driven approach ensures that every system we design—from Fire Safety to Cloud Analytics—is robust, scalable, and futuristic.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-3xl"></div>
            <img 
              src="https://picsum.photos/seed/tech-office/800/600" 
              alt="Dreamspire Office" 
              className="relative z-10 rounded-3xl w-full h-[400px] object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="glass p-12 rounded-3xl">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 text-2xl">👁️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-dreamSilver leading-relaxed">
              To be the global leader in providing intelligent infrastructure that enhances safety, efficiency, and sustainability for cities and industries worldwide.
            </p>
          </div>
          <div className="glass p-12 rounded-3xl">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6 text-2xl">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-dreamSilver leading-relaxed">
              To deliver innovative, engineering-driven automation and IoT solutions that empower our clients with actionable insights and seamless control.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Our Journey</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block"></div>
          {timeline.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center mb-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 text-center md:text-left px-8">
                {idx % 2 === 0 ? (
                  <div className="text-right">
                    <h4 className="text-3xl font-bold gradient-text mb-2">{item.year}</h4>
                    <p className="text-dreamSilver">{item.event}</p>
                  </div>
                ) : null}
              </div>
              <div className="w-10 h-10 rounded-full glass border-2 border-primary flex items-center justify-center z-10 bg-dreamDark mb-4 md:mb-0">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="flex-1 text-center md:text-left px-8">
                {idx % 2 !== 0 ? (
                  <div className="text-left">
                    <h4 className="text-3xl font-bold gradient-text mb-2">{item.year}</h4>
                    <p className="text-dreamSilver">{item.event}</p>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
