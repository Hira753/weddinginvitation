import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const InvitationMessage: React.FC = () => {
  return (
    <section className="relative w-full max-w-xl mx-auto px-4 py-5">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl bg-[#FFFFFF] border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(140,110,70,0.08)] p-6 sm:p-10 text-center overflow-hidden"
      >
        {/* Ornate Scallop Trim */}
        <div className="absolute inset-3 rounded-2xl border border-dashed border-[#D4AF37]/25 pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center mb-4">
          <span className="text-[10px] sm:text-xs font-display-luxury tracking-[0.25em] text-[#8C6D37] uppercase font-semibold">
            OUR INVITATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#2B231D] mt-1 tracking-wide">
            Dear Family & Friends
          </h3>
          <div className="flex items-center gap-2 mt-2 text-[#D4AF37]">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <Heart className="w-3 h-3 fill-current text-[#B8860B]" />
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Warm invitation text matching card */}
        <p className="relative z-10 font-serif-luxury text-base sm:text-lg text-[#5A4A3E] leading-relaxed max-w-lg mx-auto mb-5">
          By the grace of Allah, <strong className="text-[#8C6D37] font-semibold">Mr. & Mrs. Qaiser Siddique</strong> request the honour of your gracious presence at the <strong className="text-[#2B231D] font-semibold">Mehndi & Barat Ceremonies</strong> of their beloved daughter <strong className="text-[#8C6D37] font-semibold">Milhan Qaiser</strong> with <strong className="text-[#8C6D37] font-semibold">Muhammad Hussnain</strong> (S/O Mr. & Mrs. Muhammad Munir Bhutta).
        </p>

        {/* Sign-off */}
        <div className="relative z-10 flex flex-col items-center">
          <p className="font-script-luxury text-3xl sm:text-4xl text-[#B8860B] leading-none mb-1">
            With love, Milhan & Hussnain
          </p>
          <p className="text-[11px] font-display-luxury tracking-[0.3em] text-[#8C6D37] uppercase font-semibold mt-1">
            MILHAN • HUSSNAIN
          </p>
        </div>

        {/* Islamic Blessing Banner */}
        <div className="relative z-10 mt-6 pt-5 border-t border-[#D4AF37]/25 flex flex-col items-center">
          <p className="font-arabic text-xl sm:text-2xl text-[#2B231D] leading-loose">
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <span className="text-[10px] sm:text-xs font-display-luxury tracking-[0.2em] text-[#8C6D37] uppercase mt-1">
            MAY ALLAH BLESS YOU BOTH & UNITE YOU IN GOODNESS
          </span>
        </div>
      </motion.div>
    </section>
  );
};
