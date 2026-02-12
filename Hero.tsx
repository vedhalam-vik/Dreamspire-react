
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dreamDark">
      {/* Dynamic Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dreamDark/60 via-dreamDark/80 to-dreamDark z-10"></div>
        
        {/* High-quality futuristic city background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
        >
          {/* Using a high-quality futuristic city stock video */}
          <source src="https://player.vimeo.com/external/494163966.sd.mp4?s=6f21773f324210d7a6e60b8656d7f45719395f1d&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>

        {/* Dynamic Scanline/Grid Effect */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(rgba(166, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(166, 0, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Enhanced Animated Particles Overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none z-20">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0.1
              }}
              animate={{ 
                y: [null, "-20%"],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 5, 
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/5 text-primary text-[0.7rem] font-bold uppercase tracking-[0.4em] mb-10 backdrop-blur-md shadow-[0_0_15px_rgba(255,47,146,0.2)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Engineering The Smart Revolution
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
            Building <span className="gradient-text">Connected</span> <br/>
            <span className="italic font-light">Ecosystems</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-dreamSilver/80 max-w-3xl mx-auto mb-14 font-body font-light leading-relaxed">
            From intelligent ELV systems to global IoT infrastructure, we engineer the digital backbone of modern civilization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10">
            <Link 
              to="/contact" 
              className="group relative w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-[#ff2f92] to-[#a600ff] text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,47,146,0.3)]"
            >
              <span className="relative z-10">Get Expert Proposal</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(255,47,146,0.6)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-12 py-6 glass text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-sm border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Futuristic Scroll Prompt */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[0.65rem] text-dreamSilver/50 uppercase tracking-[0.5em] font-bold">Discover More</span>
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 backdrop-blur-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#ff2f92]"
            animate={{ opacity: [1, 0.4, 1], scale: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
