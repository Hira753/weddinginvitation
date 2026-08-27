import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export const lookingForwardList = [
  'Haji M. Yousaf',
  'Qaiser Siddqiue',
  'Hafeez Ullah',
  'M. Nadeem',
  'M. Naeem Umer',
  'M. Nosherwan',
  'M. Zaid',
];

export const LookingForwardSection: React.FC = () => {
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
            WITH BEST COMPLIMENTS
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#2B231D] mt-1 tracking-wide flex items-center gap-2">
            <span>Looking Forward</span>
            <Heart className="w-4 h-4 text-[#B8860B] fill-current" />
          </h3>
          <div className="flex items-center gap-2 mt-2 text-[#B8860B]">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <Sparkles className="w-3 h-3 fill-current" />
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 max-w-md mx-auto">
          {lookingForwardList.map((name, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="px-4 py-2 rounded-full bg-[#FAF5EE] border border-[#D4AF37]/45 text-xs sm:text-sm font-serif font-medium text-[#2B231D] shadow-xs hover:border-[#B8860B] transition-all"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
