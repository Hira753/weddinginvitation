import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Heart, Users } from 'lucide-react';

export const lookingForwardList = [
  'Haji M. Yousaf',
  'Qaiser Siddique',
  'Hafeez Ullah',
  'M. Nadeem',
  'M. Naeem Umer',
  'M. Nosherwan',
  'M. Zaid',
];

export const rsvpContacts = [
  { name: 'RSVP Contact 1', phone: '+923096160956', display: '+92 309 6160956' },
  { name: 'RSVP Contact 2', phone: '+923007982250', display: '+92 300 7982250' },
  { name: 'RSVP Contact 3', phone: '+923007931642', display: '+92 300 7931642' },
];

export const HostsSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-xl mx-auto px-4 py-6">
      {/* Looking Forward Family Names */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#D4AF37]/35 shadow-[0_8px_25px_rgba(140,110,70,0.07)] text-center mb-5"
      >
        <div className="flex flex-col items-center mb-4">
          <span className="text-[10px] font-display-luxury tracking-[0.25em] text-[#8C6D37] uppercase font-semibold">
            WITH BEST COMPLIMENTS
          </span>
          <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#2B231D] mt-0.5 tracking-wide flex items-center gap-2">
            <span>Looking Forward</span>
            <Heart className="w-3.5 h-3.5 text-[#B8860B] fill-current" />
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
          {lookingForwardList.map((name, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-[#FAF5EE] border border-[#D4AF37]/40 text-xs font-serif font-medium text-[#2B231D] shadow-xs"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* RSVP By Contacts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#D4AF37]/35 shadow-[0_8px_25px_rgba(140,110,70,0.07)] text-center"
      >
        <div className="flex flex-col items-center mb-4">
          <span className="text-[10px] font-display-luxury tracking-[0.25em] text-[#8C6D37] uppercase font-semibold">
            FOR INQUIRIES & ASSISTANCE
          </span>
          <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#2B231D] mt-0.5 tracking-wide flex items-center gap-2">
            <Users className="w-4 h-4 text-[#B8860B]" />
            <span>RSVP Contacts</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {rsvpContacts.map((contact, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-[#FAF5EE] border border-[#D4AF37]/30 flex flex-col items-center justify-between gap-2.5"
            >
              <span className="text-xs font-mono font-bold text-[#2B231D] tracking-wide">
                {contact.display}
              </span>

              <div className="flex items-center gap-2 w-full">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex-1 py-1.5 rounded-lg bg-white border border-[#D4AF37]/50 text-[#8C6D37] hover:bg-[#8C6D37] hover:text-white text-[11px] font-sans font-medium flex items-center justify-center gap-1 transition-all"
                >
                  <Phone className="w-3 h-3 text-[#B8860B]" />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${contact.phone.replace('+', '')}?text=${encodeURIComponent(
                    "Assalamu Alaikum, hearty congratulations on Milhan & Hussnain's wedding!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 rounded-lg bg-white border border-[#D4AF37]/50 text-[#8C6D37] hover:bg-[#8C6D37] hover:text-white text-[11px] font-sans font-medium flex items-center justify-center gap-1 transition-all"
                >
                  <MessageCircle className="w-3 h-3 text-[#B8860B]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
