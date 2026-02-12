
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'IoT Solutions',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! Our team will contact you shortly.");
  };

  return (
    <div className="pt-32 pb-24 bg-dreamDark min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-24">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">Let's Build <span className="gradient-text">Together</span></h1>
          <p className="text-dreamSilver text-xl max-w-2xl mx-auto font-light">
            Ready to start your smart infrastructure project? Get in touch with our expert team today.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-10 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary mr-6 border border-white/10">📞</div>
                  <div>
                    <p className="text-xs text-dreamSilver/50 uppercase font-bold tracking-widest mb-1">Phone</p>
                    <p className="text-white font-medium">{BRAND.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary mr-6 border border-white/10">📧</div>
                  <div>
                    <p className="text-xs text-dreamSilver/50 uppercase font-bold tracking-widest mb-1">Email</p>
                    <p className="text-white font-medium">{BRAND.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary mr-6 border border-white/10">📍</div>
                  <div>
                    <p className="text-xs text-dreamSilver/50 uppercase font-bold tracking-widest mb-1">Office</p>
                    <p className="text-white font-medium">Smart HQ, Kochi, KL, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-1 rounded-3xl overflow-hidden h-64 grayscale hover:grayscale-0 transition-all">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31434.331215684!2d76.32!3d10.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAwJzAwLjAiTiA3NsKwMTknMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-10 md:p-16 rounded-[40px] border border-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dreamSilver/70 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dreamSilver/70 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dreamSilver/70 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dreamSilver/70 uppercase tracking-widest">Interested Service</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>IoT Solutions</option>
                      <option>ELV Systems</option>
                      <option>Smart BMS</option>
                      <option>Security & Fire Safety</option>
                      <option>Networking</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-dreamSilver/70 uppercase tracking-widest">Project Description</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(255,47,146,0.6)] transform hover:-translate-y-1 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
