import React from 'react';
import { motion } from 'motion/react';
import { Phone, Users, Sparkles } from 'lucide-react';

export const rsvpContacts = [
  { phone: '+923096160956', display: '+92 309 6160956' },
  { phone: '+923007982250', display: '+92 300 7982250' },
  { phone: '+923007931642', display: '+92 300 7931642' },
];

export const RsvpSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-xl mx-auto px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(140,110,70,0.08)] text-center relative overflow-hidden"
      >
        {/* Subtle Decorative Border */}
        <div className="absolute inset-3 rounded-2xl border border-[#D4AF37]/20 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center mb-5">
          <span className="text-[10px] sm:text-xs font-display-luxury tracking-[0.25em] text-[#8C6D37] uppercase font-semibold">
            FOR INQUIRIES & ASSISTANCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#2B231D] mt-1 tracking-wide flex items-center gap-2">
            <Users className="w-4 h-4 text-[#B8860B]" />
            <span>RSVP Contacts</span>
          </h3>
          <div className="flex items-center gap-2 mt-2 text-[#B8860B]">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <Sparkles className="w-3 h-3 fill-current" />
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-lg mx-auto">
          {rsvpContacts.map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#D4AF37]/40 flex flex-col items-center justify-between gap-3 shadow-xs hover:border-[#B8860B] transition-all"
            >
              <span className="text-xs sm:text-sm font-mono font-bold text-[#2B231D] tracking-wide">
                {contact.display}
              </span>

              <a
                href={`tel:${contact.phone}`}
                className="w-full py-2 px-3 rounded-xl bg-white border border-[#D4AF37]/50 text-[#8C6D37] hover:bg-[#8C6D37] hover:text-white text-xs font-sans font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8860B] group-hover:text-white" />
                <span>Call Directly</span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
