import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { ChevronDown, Sparkles } from 'lucide-react';
import { weddingAudio } from '../utils/audio';

interface EnvelopeOpenerProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const EnvelopeOpener: React.FC<EnvelopeOpenerProps> = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Trigger golden sparkles confetti
    try {
      confetti({
        particleCount: 65,
        spread: 75,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#F5D77F', '#C5A059', '#FAF6F0', '#B8860B'],
      });
    } catch (e) {
      console.warn('Confetti effect', e);
    }

    // Play wedding audio instantly
    weddingAudio.startAudio();

    // Smooth transition
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.8, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#EFE9DF] overflow-hidden select-none"
      >
        {/* Soft Warm Ambient Lighting & Background */}
        <div className="absolute inset-0 bg-[#E8E1D5] pointer-events-none" />
        <div className="absolute inset-0 opacity-20 laser-cut-pattern pointer-events-none" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_70%)] blur-2xl pointer-events-none" />

        {/* Envelope Container (Full vertical coverage matching reference photo) */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-[420px] h-[92vh] max-h-[780px] mx-4 rounded-3xl bg-[#F6F0E5] shadow-[0_25px_60px_rgba(70,55,35,0.25)] flex flex-col items-center justify-between cursor-pointer overflow-hidden border border-[#D8C7B0]"
          onClick={handleOpenInvitation}
        >
          {/* Subtle Paper Grain Overlay */}
          <div className="absolute inset-0 paper-grain opacity-40 pointer-events-none z-0" />

          {/* Top Envelope Flap Fold Lines & Geometry */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Top Left Diagonal Fold Line */}
            <div className="absolute top-0 left-0 w-1/2 h-[45%] border-b border-[#D4C3AC] opacity-60 [transform-origin:top_left] rotate-[22deg]" />
            {/* Top Right Diagonal Fold Line */}
            <div className="absolute top-0 right-0 w-1/2 h-[45%] border-b border-[#D4C3AC] opacity-60 [transform-origin:top_right] -rotate-[22deg]" />
          </div>

          {/* Invitation Card Inside (Hidden when sealed, smoothly emerges only upon opening) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              isOpening
                ? { y: -200, opacity: 1, scale: 1.02 }
                : { opacity: 0, y: 40, pointerEvents: 'none' }
            }
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className={`absolute inset-x-6 top-8 bottom-32 bg-[#FAF7F2] rounded-t-2xl border border-[#D4AF37]/50 shadow-inner flex flex-col items-center justify-start pt-10 px-6 text-center z-5 ${
              !isOpening ? 'invisible' : 'visible'
            }`}
          >
            <span className="text-[10px] font-display-luxury tracking-[0.3em] text-[#8C6D37] uppercase mb-1">
              ROYAL WEDDING INVITATION
            </span>
            <p className="font-arabic text-xl text-[#2B231D] mt-1 mb-2">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#2B231D] font-medium tracking-wide">
              Milhan Qaiser <span className="font-script-luxury text-3xl text-[#B8860B] mx-1">&</span> Muhammad Hussnain
            </h2>
            <div className="w-14 h-[1px] bg-[#D4AF37] my-3" />
            <p className="text-xs font-display-luxury text-[#6E5D4F] tracking-widest uppercase">
              24 • 10 • 2026
            </p>
          </motion.div>

          {/* Animated Flap (Top Triangular Flap) */}
          <motion.div
            animate={isOpening ? { rotateX: 180, zIndex: 10 } : { rotateX: 0 }}
            style={{ transformOrigin: 'top' }}
            transition={{ duration: 0.75, ease: 'easeInOut' }}
            className="absolute inset-x-0 top-0 h-[48%] z-20 pointer-events-none"
          >
            <div className="w-full h-full bg-gradient-to-b from-[#F3ECE0] to-[#E9DFC] shadow-[0_12px_24px_rgba(80,60,35,0.14)] relative flex items-center justify-center [clip-path:polygon(0_0,100%_0,50%_100%)] border-b border-[#D4C4AE]">
              {/* Paper texture and subtle golden foil accent along edge */}
              <div className="absolute inset-0 paper-grain opacity-50" />
              <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
            </div>
          </motion.div>

          {/* Central Wax Seal Area (Center position aligned with reference photo) */}
          <div className="relative z-30 flex flex-col items-center my-auto pt-24 pb-8">
            {/* 3D Realistic Gold Wax Seal Button */}
            <motion.div
              animate={isOpening ? { scale: 0, opacity: 0 } : { scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 flex items-center justify-center cursor-pointer shadow-[0_12px_28px_rgba(140,100,25,0.45),0_3px_8px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all"
            >
              {/* Melted organic wax rim effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F5D884] via-[#C99727] to-[#7D5A0A] shadow-inner" />
              <div className="absolute inset-1 rounded-full border border-[#FFF0B8]/60 bg-gradient-to-br from-[#E2B755] via-[#B8860B] to-[#6A4700]" />

              {/* Inner Seal Stamped Coin */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#C99727] via-[#B8860B] to-[#8C6207] flex flex-col items-center justify-center text-center border border-[#FFE79E]/70 shadow-inner p-1">
                {/* Arabic Calligraphy "BarakAllah" / M&H Seal */}
                <span className="font-arabic text-base sm:text-lg text-[#FFEBB0] leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  بَارَكَ اللَّهُ
                </span>
                <span className="font-display-luxury text-[9px] sm:text-[10px] font-bold text-[#FFE699] tracking-wider mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  M & H
                </span>
              </div>
            </motion.div>

            {/* Tap to Open Understated Text (As seen in Reference Photo 1) */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="mt-3 flex flex-col items-center text-center"
            >
              <span className="text-[11px] sm:text-xs font-display-luxury font-bold tracking-[0.3em] text-[#8C6D37] uppercase drop-shadow-sm">
                TAP TO OPEN
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#B8860B] -mt-0.5 animate-bounce" />
            </motion.div>
          </div>

          {/* Bottom Scalloped Arch & Tag in Clean Light Ivory & Gold */}
          <div className="relative z-20 w-full mt-auto">
            {/* Clean Light Ivory Base with Delicate Gold Accents */}
            <div className="relative w-full h-24 sm:h-28 bg-[#FAF5EE] flex items-end justify-center overflow-hidden border-t border-[#D4AF37]/30">
              {/* Subtle Warm Gold Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_75%)] pointer-events-none" />

              {/* Scalloped Arch Overlay Cutout */}
              <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
                <svg
                  viewBox="0 0 400 120"
                  className="w-full h-full text-[#F6F0E5] fill-current drop-shadow-[0_2px_6px_rgba(140,110,70,0.1)]"
                  preserveAspectRatio="none"
                >
                  {/* Ornate Multi-lobe Scalloped Mughal Arch */}
                  <path d="M 0,0 L 400,0 L 400,40 Q 370,40 350,25 Q 320,5 290,25 Q 260,45 230,25 Q 200,5 170,25 Q 140,45 110,25 Q 80,5 50,25 Q 30,40 0,40 Z" />
                </svg>
              </div>

              {/* Ornate Gold Border Line */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

              {/* Date & Couple Monogram Tag inside the lower arch in Warm Royal Gold */}
              <div className="relative z-10 pb-3 sm:pb-4 text-center">
                <p className="text-[11px] sm:text-xs font-display-luxury font-bold tracking-[0.25em] text-[#8C6D37] uppercase">
                  MILHAN & HUSSNAIN • 2026
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
