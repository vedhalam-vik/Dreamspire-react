
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, size = 40 }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.div 
        style={{ width: size * 1.2, height: size }}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoMagentaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2f92" />
              <stop offset="100%" stopColor="#a600ff" />
            </linearGradient>
            <linearGradient id="logoSilverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e2e8" />
              <stop offset="100%" stopColor="#9494a3" />
            </linearGradient>
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Magenta Outer Shape - Stylized swoosh/G-shape */}
          <motion.path 
            d="M100 20C90 10 70 5 45 15C20 25 10 50 20 75C30 95 60 100 85 90C110 80 120 50 110 30C105 20 90 15 80 20"
            fill="url(#logoMagentaGradient)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Silver Inner Accent - Bridge shape */}
          <motion.path 
            d="M45 40C55 30 75 30 85 45C85 60 75 80 50 80C35 80 25 70 30 50"
            fill="url(#logoSilverGradient)"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          />
          
          {/* Subtle Glow Overlay */}
          <motion.path 
            d="M100 20C90 10 70 5 45 15C20 25 10 50 20 75C30 95 60 100 85 90C110 80 120 50 110 30"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
        </svg>
      </motion.div>

      {showText && (
        <div className="flex flex-col justify-center">
          <motion.span 
            className="text-2xl md:text-3xl font-body tracking-[0.3em] text-white leading-none font-light"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            DREAMSPIRE
          </motion.span>
          <motion.span 
            className="text-[0.55rem] tracking-[0.5em] text-dreamSilver/40 font-bold uppercase mt-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            TECHNOLOGIES PVT LTD
          </motion.span>
        </div>
      )}
    </div>
  );
};

export default Logo;
