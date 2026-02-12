
import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, NAV_LINKS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dreamBlack pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <Logo size={50} />
            </Link>
            <p className="text-dreamSilver text-sm leading-relaxed max-w-xs opacity-70">
              Transforming critical infrastructure into intelligent, safe, and efficient ecosystems through engineering excellence.
            </p>
            <div className="flex space-x-4">
              {['linkedin', 'instagram', 'youtube', 'whatsapp'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all border border-white/10 group"
                >
                  <img src={`https://cdn.simpleicons.org/${social}/ffffff`} className="w-4 h-4 group-hover:scale-110 transition-transform" alt={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-dreamSilver text-sm hover:text-primary transition-colors opacity-70 hover:opacity-100">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-dreamSilver text-sm hover:text-primary transition-colors opacity-70 hover:opacity-100">Smart ELV Systems</Link></li>
              <li><Link to="/services" className="text-dreamSilver text-sm hover:text-primary transition-colors opacity-70 hover:opacity-100">Intelligent BMS</Link></li>
              <li><Link to="/services" className="text-dreamSilver text-sm hover:text-primary transition-colors opacity-70 hover:opacity-100">Next-Gen Fire Safety</Link></li>
              <li><Link to="/services" className="text-dreamSilver text-sm hover:text-primary transition-colors opacity-70 hover:opacity-100">IoT Ecosystems</Link></li>
              <li><Link to="/services" className="text-dreamSilver text-sm hover:text-primary transition-colors opacity-70 hover:opacity-100">Infrastructure Security</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact</h4>
            <div className="space-y-6 text-dreamSilver text-sm">
              <p className="flex items-start opacity-70">
                <span className="text-primary mr-3 text-lg">📍</span>
                <span>Dreamspire Tech HQ, Kochi, Kerala, India</span>
              </p>
              <p className="flex items-center opacity-70">
                <span className="text-primary mr-3 text-lg">📞</span>
                <span>{BRAND.phone}</span>
              </p>
              <p className="flex items-center opacity-70">
                <span className="text-primary mr-3 text-lg">📧</span>
                <span>{BRAND.email}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[0.65rem] text-dreamSilver/40 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} {BRAND.name}. Designed for the Future.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
