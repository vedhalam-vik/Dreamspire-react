
import React from 'react';
import { motion } from 'framer-motion';

const Industries: React.FC = () => {
  const industries = [
    { name: 'Smart Buildings', img: 'https://picsum.photos/seed/bldg/600/400' },
    { name: 'Manufacturing', img: 'https://picsum.photos/seed/factory/600/400' },
    { name: 'Hospitals', img: 'https://picsum.photos/seed/hospital/600/400' },
    { name: 'Data Centers', img: 'https://picsum.photos/seed/data/600/400' },
    { name: 'Smart Cities', img: 'https://picsum.photos/seed/city/600/400' },
    { name: 'Education', img: 'https://picsum.photos/seed/edu/600/400' },
    { name: 'Commercial Real Estate', img: 'https://picsum.photos/seed/realestate/600/400' },
    { name: 'IT Parks', img: 'https://picsum.photos/seed/itpark/600/400' },
  ];

  return (
    <div className="pt-32 pb-24 bg-dreamDark">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-24">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">Industries We <span className="gradient-text">Transform</span></h1>
          <p className="text-dreamSilver text-xl max-w-2xl mx-auto font-light">
            Tailored automation and infrastructure solutions for diverse vertical sectors.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={ind.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={ind.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dreamDark via-transparent to-transparent opacity-80 group-hover:via-dreamDark/40 transition-all"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-xl font-bold text-white mb-2">{ind.name}</h3>
                <div className="w-10 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
