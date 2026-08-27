import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  // Target Wedding Date: October 24, 2026 13:00:00 (PKT / GMT+5)
  const targetDate = new Date('2026-10-24T13:00:00+05:00').getTime();

  const calculateTimeLeft = (): TimeRemaining => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatUnit = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="relative w-full max-w-xl mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl bg-[#FFFFFF] border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(140,110,70,0.08)] p-6 sm:p-8 text-center overflow-hidden"
      >
        {/* Inner border */}
        <div className="absolute inset-3 rounded-2xl border border-dashed border-[#D4AF37]/25 pointer-events-none" />

        {/* Section Tag */}
        <div className="relative z-10 flex flex-col items-center mb-5">
          <span className="text-[10px] sm:text-xs font-display-luxury tracking-[0.25em] text-[#8C6D37] uppercase font-semibold">
            COUNTING DOWN
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#2B231D] mt-1 tracking-wide">
            Until the Big Day
          </h3>
          <p className="text-xs font-serif italic text-[#6B5A46] mt-1">
            Saturday, 24 October 2026 • 1:00 PM
          </p>
        </div>

        {/* 4 Counter Blocks */}
        <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto my-2">
          {/* Days */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAF5EE] border border-[#D4AF37]/40 shadow-sm">
            <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#2B231D]">
              {formatUnit(timeLeft.days)}
            </span>
            <span className="text-[9px] sm:text-[10px] font-display-luxury tracking-wider text-[#8C6D37] uppercase mt-0.5 font-semibold">
              Days
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAF5EE] border border-[#D4AF37]/40 shadow-sm">
            <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#2B231D]">
              {formatUnit(timeLeft.hours)}
            </span>
            <span className="text-[9px] sm:text-[10px] font-display-luxury tracking-wider text-[#8C6D37] uppercase mt-0.5 font-semibold">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAF5EE] border border-[#D4AF37]/40 shadow-sm">
            <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#2B231D]">
              {formatUnit(timeLeft.minutes)}
            </span>
            <span className="text-[9px] sm:text-[10px] font-display-luxury tracking-wider text-[#8C6D37] uppercase mt-0.5 font-semibold">
              Mins
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAF5EE] border border-[#D4AF37]/40 shadow-sm">
            <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#B8860B]">
              {formatUnit(timeLeft.seconds)}
            </span>
            <span className="text-[9px] sm:text-[10px] font-display-luxury tracking-wider text-[#8C6D37] uppercase mt-0.5 font-semibold">
              Secs
            </span>
          </div>
        </div>

        {/* Footer note */}
        <p className="relative z-10 text-[11px] text-[#8C6D37] font-display-luxury tracking-widest uppercase mt-4 flex items-center justify-center gap-1.5 font-semibold">
          <Sparkles className="w-3 h-3 text-[#B8860B]" />
          <span>Insha'Allah</span>
          <Sparkles className="w-3 h-3 text-[#B8860B]" />
        </p>
      </motion.div>
    </section>
  );
};
