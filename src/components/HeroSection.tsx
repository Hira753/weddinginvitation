import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onEventsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEventsClick }) => {
  return (
    <section className="relative w-full max-w-xl mx-auto px-4 pt-10 pb-6 flex flex-col items-center">
      {/* Grand Royal Floral Parchment Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full rounded-[2.5rem] bg-[#FFFFFF] border-2 border-[#D4AF37]/40 shadow-[0_15px_40px_rgba(140,110,70,0.12)] p-6 sm:p-10 text-center overflow-hidden"
      >
        {/* Ornate Double Border Framing */}
        <div className="absolute inset-2 sm:inset-3 rounded-[2rem] border border-[#D4AF37]/30 pointer-events-none" />
        <div className="absolute inset-4 sm:inset-5 rounded-[1.8rem] border border-dashed border-[#D4AF37]/20 pointer-events-none" />

        {/* Bismillah Header */}
        <div className="relative z-10 flex flex-col items-center mb-5">
          <p className="font-arabic text-2xl sm:text-3xl text-[#2B231D] tracking-widest leading-loose">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <span className="text-[10px] sm:text-xs text-[#8C6D37] tracking-[0.25em] font-display-luxury uppercase mt-1 font-semibold">
            TOGETHER WITH THEIR FAMILIES
          </span>
          <div className="flex items-center gap-2 mt-2 text-[#B8860B]">
            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#B8860B]" />
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#B8860B]" />
          </div>
        </div>

        {/* Host Names from Card */}
        <div className="relative z-10 my-2">
          <h2 className="text-base sm:text-lg font-serif-luxury font-bold text-[#8C6D37] tracking-wider uppercase">
            MR & MRS. QAISER SIDDIQUE
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-[#5A4A3E] max-w-md mx-auto mt-2 leading-relaxed">
            Request the honour of your gracious presence at the Barat Ceremony of their beloved daughter
          </p>
        </div>

        {/* Bride & Groom Royal Names */}
        <div className="relative z-10 my-4 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-script-luxury font-normal text-[#8C6D37] leading-tight">
            Milhan Qaiser
          </h1>
          
          <div className="my-1 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="font-script-luxury text-2xl text-[#B8860B] italic">
              with
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-script-luxury font-normal text-[#8C6D37] leading-tight">
            Muhammad Hussnain
          </h1>
          
          <p className="text-[10px] sm:text-xs font-display-luxury tracking-widest text-[#6B5A46] uppercase font-semibold mt-2">
            S/O MR & MRS. MUHAMMAD MUNIR BHUTTA
          </p>
        </div>

        {/* Insha'Allah & Date Grid matching card */}
        <div className="relative z-10 mt-5 pt-4 border-t border-[#D4AF37]/30 flex flex-col items-center">
          <span className="text-xs font-serif italic text-[#B8860B] font-semibold tracking-wider mb-2">
            Insha'Allah On
          </span>

          <div className="flex items-center justify-center gap-4 sm:gap-6 py-2 px-4 rounded-xl bg-[#FAF5EE] border border-[#D4AF37]/30 max-w-sm w-full">
            <span className="font-display-luxury font-bold text-xs sm:text-sm text-[#2B231D] tracking-wider uppercase">
              SATURDAY
            </span>
            <div className="h-8 w-[1.5px] bg-[#D4AF37]" />
            <div className="text-center">
              <span className="font-serif-luxury font-bold text-2xl text-[#8C6D37] leading-none block">
                24
              </span>
              <span className="text-[10px] font-sans font-semibold text-[#8C6D37]">
                2026
              </span>
            </div>
            <div className="h-8 w-[1.5px] bg-[#D4AF37]" />
            <span className="font-display-luxury font-bold text-xs sm:text-sm text-[#2B231D] tracking-wider uppercase">
              OCTOBER
            </span>
          </div>

          <p className="text-xs font-sans font-semibold text-[#2B231D] tracking-wider mt-3">
            Time: 1:00 PM
          </p>
          
          <p className="text-[11px] font-sans text-[#6B5A46] tracking-wider uppercase mt-1 font-medium">
            Venue: Sapphire Marquee, Daewoo Road, Faisalabad
          </p>
        </div>

        {/* Clean Itinerary Button */}
        <div className="relative z-10 mt-6 flex justify-center">
          <button
            onClick={onEventsClick}
            id="hero-view-events-btn"
            className="px-6 py-2.5 rounded-full bg-[#FAF5EE] border border-[#D4AF37] text-[#8C6D37] hover:bg-[#8C6D37] hover:text-[#FFFFFF] font-sans text-xs font-semibold tracking-wider uppercase shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Wedding Celebrations</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
