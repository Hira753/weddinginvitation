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

  const handleOpenEnvelope = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Trigger golden sparkles confetti burst
    try {
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#F5D77F', '#C5A059', '#FAF6F0', '#B8860B', '#E5C158'],
      });
    } catch (e) {
      console.warn('Confetti effect', e);
    }

    // Play wedding audio instantly
    weddingAudio.startAudio();

    // Smooth unfolding transition before dismissing envelope overlay
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.9, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#ECE5DA] overflow-hidden select-none p-3"
      >
        {/* Ambient Romantic Background Glow & Pattern */}
        <div className="absolute inset-0 bg-[#E8E1D5] pointer-events-none" />
        <div className="absolute inset-0 opacity-25 laser-cut-pattern pointer-events-none" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.22)_0%,transparent_70%)] blur-2xl pointer-events-none" />

        {/* Envelope Container (Matching the Video Recording Flow) */}
        <motion.div
          initial={{ y: 25, opacity: 0, scale: 0.94 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-[400px] h-[90vh] max-h-[740px] rounded-[2.5rem] bg-[#F7F2EA] shadow-[0_25px_65px_rgba(70,55,35,0.28)] flex flex-col items-center justify-between cursor-pointer overflow-hidden border border-[#D8C7B0]"
          onClick={handleOpenEnvelope}
        >
          {/* Subtle Paper Grain Overlay */}
          <div className="absolute inset-0 paper-grain opacity-45 pointer-events-none z-0" />

          {/* Envelope Diagonal Fold Lines */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 left-0 w-1/2 h-[45%] border-b border-[#D4C3AC] opacity-55 [transform-origin:top_left] rotate-[22deg]" />
            <div className="absolute top-0 right-0 w-1/2 h-[45%] border-b border-[#D4C3AC] opacity-55 [transform-origin:top_right] -rotate-[22deg]" />
          </div>

          {/* Invitation Card Inside (Hidden initially, rises up smoothly upon tap) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={
              isOpening
                ? { y: -190, opacity: 1, scale: 1.02 }
                : { opacity: 0, y: 50, scale: 0.95, pointerEvents: 'none' }
            }
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute inset-x-5 top-8 bottom-32 bg-[#FFFFFF] rounded-t-[2rem] border-2 border-[#D4AF37]/50 shadow-2xl flex flex-col items-center justify-start pt-8 px-6 text-center z-5 ${
              !isOpening ? 'invisible' : 'visible'
            }`}
          >
            {/* Inner Card Floral Arch Top */}
            <span className="text-[10px] font-display-luxury tracking-[0.3em] text-[#8C6D37] uppercase mb-1 font-semibold">
              WEDDING INVITATION
            </span>
            <p className="font-arabic text-2xl text-[#2B231D] mt-1 mb-1">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <div className="w-10 h-[1px] bg-[#D4AF37] my-2" />
            <h2 className="text-2xl font-serif-luxury text-[#8C6D37] font-medium tracking-wide">
              Milhan Qaiser
            </h2>
            <span className="font-script-luxury text-2xl text-[#B8860B] my-0.5">&</span>
            <h2 className="text-2xl font-serif-luxury text-[#8C6D37] font-medium tracking-wide">
              Muhammad Hussnain
            </h2>
            <div className="mt-4 flex items-center gap-1.5 text-[10px] font-display-luxury tracking-widest text-[#6E5D4F] uppercase font-semibold">
              <Sparkles className="w-3 h-3 text-[#B8860B]" />
              <span>OCTOBER 2026 • FAISALABAD</span>
              <Sparkles className="w-3 h-3 text-[#B8860B]" />
            </div>

            {/* Scroll Down Prompt inside the card */}
            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="mt-6 flex flex-col items-center gap-1 text-[#8C6D37]"
            >
              <span className="text-[10px] font-serif italic tracking-wider">Scroll down</span>
              <ChevronDown className="w-4 h-4 text-[#B8860B]" />
            </motion.div>
          </motion.div>

          {/* Animated Top Triangular Flap (3D Unfolding) */}
          <motion.div
            animate={isOpening ? { rotateX: 180, zIndex: 10 } : { rotateX: 0 }}
            style={{ transformOrigin: 'top' }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
            className="absolute inset-x-0 top-0 h-[48%] z-20 pointer-events-none"
          >
            <div className="w-full h-full bg-gradient-to-b from-[#F3ECE0] to-[#E9DFCE] shadow-[0_12px_28px_rgba(80,60,35,0.15)] relative flex items-center justify-center [clip-path:polygon(0_0,100%_0,50%_100%)] border-b border-[#D4C4AE]">
              <div className="absolute inset-0 paper-grain opacity-50" />
              <div className="absolute bottom-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
            </div>
          </motion.div>

          {/* Central Wax Seal Button with Glow & Pulse */}
          <div className="relative z-30 flex flex-col items-center my-auto pt-24 pb-8">
            <motion.div
              animate={isOpening ? { scale: 0, opacity: 0 } : { scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full p-1 flex items-center justify-center cursor-pointer shadow-[0_15px_32px_rgba(140,100,25,0.45),0_3px_8px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all"
            >
              {/* Outer Golden Glow Pulse */}
              <div className="absolute -inset-2 rounded-full bg-[#D4AF37]/20 animate-ping pointer-events-none" />

              {/* Melted organic wax rim effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F5D884] via-[#C99727] to-[#7D5A0A] shadow-inner" />
              <div className="absolute inset-1 rounded-full border border-[#FFF0B8]/70 bg-gradient-to-br from-[#E2B755] via-[#B8860B] to-[#6A4700]" />

              {/* Inner Seal Stamped Coin */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#C99727] via-[#B8860B] to-[#8C6207] flex flex-col items-center justify-center text-center border border-[#FFE79E]/80 shadow-inner p-1">
                <span className="font-arabic text-lg text-[#FFEBB0] leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  بَارَكَ اللَّهُ
                </span>
                <span className="font-display-luxury text-[10px] font-bold text-[#FFE699] tracking-wider mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  M & H
                </span>
              </div>
            </motion.div>

            {/* Tap to Open Prompt */}
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="mt-3.5 flex flex-col items-center text-center"
            >
              <span className="text-xs font-display-luxury font-bold tracking-[0.3em] text-[#8C6D37] uppercase drop-shadow-xs">
                TAP TO OPEN
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#B8860B] -mt-0.5 animate-bounce" />
            </motion.div>
          </div>

          {/* Bottom Scalloped Border in Light Ivory & Gold */}
          <div className="relative z-20 w-full mt-auto">
            <div className="relative w-full h-24 bg-[#FAF5EE] flex items-end justify-center overflow-hidden border-t border-[#D4AF37]/30">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_75%)] pointer-events-none" />

              {/* Scalloped Arch Overlay Cutout */}
              <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
                <svg
                  viewBox="0 0 400 120"
                  className="w-full h-full text-[#F6F0E5] fill-current drop-shadow-[0_2px_6px_rgba(140,110,70,0.1)]"
                  preserveAspectRatio="none"
                >
                  <path d="M 0,0 L 400,0 L 400,40 Q 370,40 350,25 Q 320,5 290,25 Q 260,45 230,25 Q 200,5 170,25 Q 140,45 110,25 Q 80,5 50,25 Q 30,40 0,40 Z" />
                </svg>
              </div>

              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

              <div className="relative z-10 pb-3 text-center">
                <p className="text-[11px] font-display-luxury font-bold tracking-[0.25em] text-[#8C6D37] uppercase">
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
