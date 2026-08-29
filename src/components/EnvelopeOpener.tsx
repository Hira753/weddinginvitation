import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, ChevronDown } from 'lucide-react';
import { weddingAudio } from '../utils/audio';

interface EnvelopeOpenerProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const EnvelopeOpener: React.FC<EnvelopeOpenerProps> = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const [isCardSliding, setIsCardSliding] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Play wedding soundtrack instantly
    weddingAudio.startAudio();

    // Step 1: Flap unfolds smoothly upwards (starts immediately)
    setIsFlapOpen(true);

    // Step 2: Card smoothly rises up out of envelope pocket
    setTimeout(() => {
      setIsCardSliding(true);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F5D77F', '#C5A059', '#FAF6F0', '#B8860B'],
        });
      } catch (e) {
        console.warn('Confetti effect', e);
      }
    }, 450);

    // Step 3: Complete transition smoothly into main screen
    setTimeout(() => {
      onOpen();
    }, 1850);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          y: -60,
          transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#ECE4D8] overflow-hidden select-none p-3"
      >
        {/* Soft Ambient Background Glow */}
        <div className="absolute inset-0 bg-[#EFE9DF] pointer-events-none" />
        <div className="absolute inset-0 opacity-20 laser-cut-pattern pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        {/* Envelope Stage with 3D Perspective */}
        <div
          className="relative w-full max-w-[390px] h-[85vh] max-h-[680px] flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {/* Main Envelope Body */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleOpenEnvelope}
            className="relative w-full h-full rounded-[2rem] bg-[#F7F2EA] shadow-[0_25px_60px_rgba(70,55,35,0.22)] border border-[#E2D5C3] overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 paper-grain opacity-40 pointer-events-none z-0" />

            {/* Envelope Back Wall Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#EDE4D5] to-[#E5DAC8] z-0" />

            {/* Inner Invitation Card (Glides upwards smoothly like in video) */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={
                isCardSliding
                  ? {
                      y: -240,
                      opacity: 1,
                      scale: 1.03,
                    }
                  : isOpening
                  ? { y: 20, opacity: 0.9 }
                  : { y: 80, opacity: 0 }
              }
              transition={{
                duration: 1.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-x-4 top-8 bottom-28 bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-start pt-8 px-6 text-center z-10 pointer-events-none"
            >
              {/* Gold double frame on inner card */}
              <div className="absolute inset-2.5 rounded-xl border border-[#D4AF37]/30 pointer-events-none" />

              <span className="text-[10px] font-display-luxury tracking-[0.3em] text-[#8C6D37] uppercase font-semibold">
                WEDDING INVITATION
              </span>

              <p className="font-arabic text-2xl text-[#2B231D] mt-2 mb-1">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>

              <div className="w-8 h-[1px] bg-[#D4AF37] my-2" />

              <h2 className="text-2xl font-serif-luxury text-[#8C6D37] font-medium tracking-wide">
                Milhan Qaiser
              </h2>
              <span className="font-script-luxury text-2xl text-[#B8860B] -my-1">&</span>
              <h2 className="text-2xl font-serif-luxury text-[#8C6D37] font-medium tracking-wide">
                Muhammad Hussnain
              </h2>

              <div className="mt-4 flex items-center gap-1.5 text-[9px] font-display-luxury tracking-widest text-[#8C6D37] uppercase font-semibold">
                <Sparkles className="w-3 h-3 text-[#B8860B]" />
                <span>OCTOBER 24 & 25, 2026</span>
                <Sparkles className="w-3 h-3 text-[#B8860B]" />
              </div>
            </motion.div>

            {/* Front Pocket of Envelope (Triangular lower cuts) */}
            <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#F5EFE5] via-[#EFE7D9] to-[#E9DFCF] shadow-[0_-8px_20px_rgba(70,55,35,0.06)] z-20 pointer-events-none border-t border-[#DECDB8]/60">
              {/* Left & Right diagonal envelope fold lines */}
              <div className="absolute inset-0">
                <svg
                  viewBox="0 0 400 350"
                  className="w-full h-full text-[#E8DDCB]/60 fill-none stroke-current"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="350" x2="200" y2="130" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="400" y1="350" x2="200" y2="130" strokeWidth="1.5" strokeDasharray="3,3" />
                </svg>
              </div>

              {/* Bottom Monogram text */}
              <div className="absolute bottom-4 inset-x-0 text-center">
                <span className="text-[10px] font-display-luxury tracking-[0.25em] text-[#8C6D37]/70 uppercase font-semibold">
                  MILHAN & HUSSNAIN • 2026
                </span>
              </div>
            </div>

            {/* Animated 3D Top Triangular Flap */}
            <motion.div
              initial={false}
              animate={
                isFlapOpen
                  ? {
                      rotateX: 180,
                      zIndex: 5,
                      transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] },
                    }
                  : {
                      rotateX: 0,
                      zIndex: 30,
                    }
              }
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
              }}
              className="absolute inset-x-0 top-0 h-[48%] pointer-events-none"
            >
              {/* Top Flap Front Face */}
              <div
                className="w-full h-full bg-gradient-to-b from-[#F2ECE0] to-[#E4D7C2] shadow-[0_12px_24px_rgba(60,45,25,0.18)] relative flex items-center justify-center border-b border-[#D8C7B0]"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="absolute inset-0 paper-grain opacity-40" />
                <div className="absolute bottom-0 inset-x-0 h-[1px] bg-[#D4AF37]/50" />
              </div>

              {/* Top Flap Back Face (When rotated 180 deg) */}
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#E6D9C5] to-[#D9C9B1]"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transform: 'rotateX(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              />
            </motion.div>

            {/* 3D Wax Seal Button in Center */}
            <div className="relative z-40 flex flex-col items-center justify-center my-auto pt-24 pb-8">
              <motion.div
                animate={
                  isOpening
                    ? {
                        scale: 0.7,
                        opacity: 0,
                        transition: { duration: 0.4, ease: 'easeOut' },
                      }
                    : {
                        scale: [1, 1.04, 1],
                        transition: { repeat: Infinity, duration: 2.8, ease: 'easeInOut' },
                      }
                }
                className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full flex items-center justify-center cursor-pointer shadow-[0_14px_30px_rgba(130,90,20,0.42)] hover:scale-105 active:scale-95 transition-transform"
              >
                {/* Glow ring */}
                <div className="absolute -inset-2 rounded-full bg-[#D4AF37]/25 animate-ping pointer-events-none" />

                {/* Wax Rim Texture */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F5D884] via-[#C99727] to-[#7D5A0A] shadow-inner" />
                <div className="absolute inset-1 rounded-full border border-[#FFF0B8]/80 bg-gradient-to-br from-[#E2B755] via-[#B8860B] to-[#6A4700]" />

                {/* Inner Wax Seal Monogram */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#C99727] via-[#B8860B] to-[#8C6207] flex flex-col items-center justify-center text-center p-1">
                  <span className="font-arabic text-base sm:text-lg text-[#FFEBB0] leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    بَارَكَ اللَّهُ
                  </span>
                  <span className="font-display-luxury text-[9px] font-bold text-[#FFE699] tracking-wider mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    M & H
                  </span>
                </div>
              </motion.div>

              {/* Tap to open label */}
              <motion.div
                animate={
                  isOpening
                    ? { opacity: 0, y: 10 }
                    : { opacity: [0.7, 1, 0.7], transition: { repeat: Infinity, duration: 2 } }
                }
                className="mt-3.5 flex flex-col items-center text-center"
              >
                <span className="text-[11px] font-display-luxury font-bold tracking-[0.3em] text-[#8C6D37] uppercase drop-shadow-xs">
                  TAP TO OPEN
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#B8860B] -mt-0.5 animate-bounce" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
