
import React from 'react';
import { motion } from 'framer-motion';

const Careers: React.FC = () => {
  const jobs = [
    { title: 'Senior IoT Engineer', dept: 'Engineering', loc: 'Kochi', type: 'Full-time' },
    { title: 'Project Manager - ELV', dept: 'Operations', loc: 'Kochi', type: 'Full-time' },
    { title: 'BMS Technician', dept: 'Support', loc: 'Multiple', type: 'Full-time' },
    { title: 'Network Infrastructure Architect', dept: 'Engineering', loc: 'Remote/Kochi', type: 'Full-time' },
  ];

  return (
    <div className="pt-32 pb-24 bg-dreamDark">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-24">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">Build the <span className="gradient-text">Future With Us</span></h1>
          <p className="text-dreamSilver text-xl max-w-2xl mx-auto font-light">
            Join a team of visionaries and engineers dedicated to building smarter, safer ecosystems.
          </p>
        </header>

        {/* Culture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Innovative Work', icon: '💡', text: 'Work with the latest IoT, AI and Automation tech stacks.' },
            { title: 'Growth Focus', icon: '📈', text: 'Comprehensive learning and certification programs.' },
            { title: 'Elite Culture', icon: '🤝', text: 'Collaborate with the best engineering minds in the country.' },
          ].map((item, idx) => (
            <div key={idx} className="glass p-10 rounded-3xl text-center">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-dreamSilver text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Jobs */}
        <div className="glass rounded-[40px] overflow-hidden border border-white/5">
          <div className="p-10 border-b border-white/5">
            <h2 className="text-2xl font-bold text-white">Open Positions</h2>
          </div>
          <div className="divide-y divide-white/5">
            {jobs.map((job, idx) => (
              <div key={idx} className="p-8 hover:bg-white/5 transition-all group flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex space-x-4 mt-2 text-sm text-dreamSilver">
                    <span>🏢 {job.dept}</span>
                    <span>📍 {job.loc}</span>
                    <span>🕒 {job.type}</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-white/10 hover:bg-primary text-white rounded-xl font-bold text-sm transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Form Placeholder */}
        <div className="mt-24 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Don't see a matching role?</h3>
          <p className="text-dreamSilver mb-8">Send your CV to careers@dreamspiretechnologies.in and we will reach out when a suitable position opens.</p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
