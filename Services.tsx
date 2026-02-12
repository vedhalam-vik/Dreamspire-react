
import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../constants';

const Services: React.FC = () => {
  const mainServices = [
    { 
      title: 'ELV Systems', 
      icon: <Icons.Building className="w-12 h-12" />, 
      features: ['PA Systems', 'AV Solutions', 'Nurse Call Systems', 'Intercom & EPABX'],
      color: 'from-pink-500/20 to-purple-500/20'
    },
    { 
      title: 'Smart BMS', 
      icon: <Icons.Analytics className="w-12 h-12" />, 
      features: ['HVAC Control', 'Lighting Management', 'Energy Metering', 'Centralized Monitoring'],
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    { 
      title: 'Fire & Security', 
      icon: <Icons.Fire className="w-12 h-12" />, 
      features: ['Smoke Detection', 'Gas Suppression', 'CCTV Surveillance', 'Access Control'],
      color: 'from-orange-500/20 to-red-500/20'
    },
    { 
      title: 'IT Infrastructure', 
      icon: <Icons.Networking className="w-12 h-12" />, 
      features: ['Structured Cabling', 'Server Rooms', 'Wireless Solutions', 'Cyber Security'],
      color: 'from-cyan-500/20 to-blue-500/20'
    }
  ];

  const iotSubServices = [
    'Smart Building IoT', 'Industrial IoT (IIoT)', 'Energy Monitoring', 
    'Remote Asset Tracking', 'Predictive Maintenance', 'Cloud Dashboard & Analytics', 
    'Edge Computing', 'Sensor Integration'
  ];

  return (
    <div className="pt-32 pb-24 bg-dreamDark">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Our <span className="gradient-text">Expertise</span></h1>
          <p className="text-dreamSilver text-xl max-w-2xl mx-auto font-light">
            Providing end-to-end engineering solutions for modern infrastructure and high-tech ecosystems.
          </p>
        </header>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {mainServices.map((svc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`glass p-12 rounded-[40px] border border-white/5 relative group overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-primary mb-8">{svc.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-6">{svc.title}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {svc.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center text-dreamSilver space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-10 px-6 py-3 rounded-full border border-white/10 hover:bg-primary hover:border-primary text-white transition-all text-sm font-bold">
                  Request Detail
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured IoT Section */}
        <div className="glass p-12 md:p-20 rounded-[40px] border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -mr-48 -mt-48"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Icons.IoT className="text-primary w-12 h-12" />
                <span className="text-sm font-bold text-primary uppercase tracking-widest">Featured Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Next-Gen <span className="gradient-text">IoT Solutions</span></h2>
              <p className="text-dreamSilver text-lg leading-relaxed mb-10">
                We bridge the gap between physical infrastructure and digital intelligence. Our IoT solutions provide real-time visibility and control over your most critical assets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {iotSubServices.map((iot, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-white/80">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>{iot}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/iot1/400/400" className="rounded-2xl w-full h-48 object-cover" alt="IoT" />
              <img src="https://picsum.photos/seed/iot2/400/400" className="rounded-2xl w-full h-48 object-cover translate-y-8" alt="IoT" />
              <img src="https://picsum.photos/seed/iot3/400/400" className="rounded-2xl w-full h-48 object-cover -translate-y-8" alt="IoT" />
              <img src="https://picsum.photos/seed/iot4/400/400" className="rounded-2xl w-full h-48 object-cover" alt="IoT" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
