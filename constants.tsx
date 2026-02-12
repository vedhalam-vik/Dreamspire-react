
import React from 'react';
import { motion } from 'framer-motion';

export const BRAND = {
  name: "Dreamspire Technologies Pvt Ltd",
  email: "info@dreamspiretechnologies.in",
  phone: "+91 8714955279",
  tagline: "Engineering Smart Infrastructure, Automation & IoT Ecosystems",
  colors: {
    primary: "#ff2f92",
    accent: "#a600ff",
    gradient: "from-[#ff2f92] via-[#a600ff] to-[#7b3cff]"
  }
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' }
];

// SVG Icons as React Components with Subtle Animations
export const Icons = {
  IoT: ({ className }: { className?: string }) => (
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      initial="initial"
      whileHover="hover"
    >
      <motion.circle 
        cx="12" cy="12" r="3" 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path 
        d="M12 2v3m0 14v3M2 12h3m14 0h3m-2.5-7.5l-2 2m-9 9l-2 2m11 0l2 2m-11-11l-2-2" 
        variants={{
          hover: { pathLength: 1.1, stroke: BRAND.colors.primary },
          initial: { pathLength: 1 }
        }}
      />
      <motion.path 
        d="M12 7a5 5 0 0 0-5 5M12 17a5 5 0 0 0 5-5" 
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </motion.svg>
  ),
  Building: ({ className }: { className?: string }) => (
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      initial="initial"
      whileHover="hover"
    >
      <motion.path 
        d="M3 21h18" 
        variants={{ hover: { stroke: BRAND.colors.primary } }}
      />
      <motion.path 
        d="M5 21V7l8-4v18" 
        variants={{ hover: { y: -2 } }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <motion.path 
        d="M13 21V11l5 3v7" 
        variants={{ hover: { y: -1 } }}
      />
      <motion.path 
        d="M8 9h2M8 12h2M8 15h2" 
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
      />
    </motion.svg>
  ),
  Fire: ({ className }: { className?: string }) => (
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      <motion.path 
        d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3 3 1 5 4.5 5 8a5.5 5.5 0 0 1-11 0c0-1.5.5-2 1-3.5 1 1 1.5 1.5 1.5 1z" 
        animate={{ 
          scaleY: [1, 1.05, 0.98, 1.02, 1],
          opacity: [0.9, 1, 0.8, 1]
        }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ originY: "bottom" }}
      />
    </motion.svg>
  ),
  Security: ({ className }: { className?: string }) => (
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      initial="initial"
      whileHover="hover"
    >
      <motion.rect 
        x="3" y="11" width="18" height="11" rx="2" ry="2" 
        variants={{ hover: { stroke: BRAND.colors.primary } }}
      />
      <motion.path 
        d="M7 11V7a5 5 0 0 1 10 0v4" 
        variants={{
          hover: { y: -3 },
          initial: { y: 0 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
    </motion.svg>
  ),
  Networking: ({ className }: { className?: string }) => (
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      <motion.rect x="2" y="16" width="6" height="6" rx="1" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
      <motion.rect x="16" y="16" width="6" height="6" rx="1" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
      <motion.rect x="9" y="2" width="6" height="6" rx="1" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
      <motion.path 
        d="M12 8v8m-7 8h14" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      />
    </motion.svg>
  ),
  Cloud: ({ className }: { className?: string }) => (
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.path 
        d="M17.5 19c3 0 4.5-2.5 4.5-5 0-3-2-5-5-5-1-3-4-4-6-2-3 1-4 4-2 7.5" 
        whileHover={{ stroke: BRAND.colors.accent }}
      />
    </motion.svg>
  ),
  Analytics: ({ className }: { className?: string }) => (
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      <path d="M3 3v18h18" />
      <motion.path 
        d="M7 16l4-4 4 4 6-6" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
    </motion.svg>
  )
};
