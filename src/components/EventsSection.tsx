import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import { WeddingEvent } from '../types';

export const weddingEventsData: WeddingEvent[] = [
  {
    id: 'mehndi',
    title: 'Mehndi Celebration',
    subtitle: 'Henna & Festive Evening',
    urduTitle: 'رات مہندی',
    date: '2026-10-23',
    displayDate: 'Friday, 23 October 2026',
    time: 'Evening',
    venue: 'Sui Gas Colony',
    location: 'Sargodha Road, Faisalabad',
    description: 'An auspicious evening filled with henna, traditional music, and joyful family celebrations.',
    iconName: 'heart',
  },
  {
    id: 'barat',
    title: 'Barat Ceremony',
    subtitle: 'The Grand Wedding Function',
    urduTitle: 'مراسمِ بارات',
    date: '2026-10-24',
    displayDate: 'Saturday, 24 October 2026',
    time: '1:00 PM',
    venue: 'Sapphire Marquee',
    location: 'Daewoo Road, Faisalabad',
    description: 'The blessed and joyous Barat ceremony of Milhan Qaiser & Muhammad Hussnain.',
    iconName: 'sparkles',
  },
];

export const EventsSection: React.FC = () => {
  return (
    <section id="events-section" className="relative w-full max-w-xl mx-auto px-4 py-7">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <span className="text-[10px] sm:text-xs font-display-luxury tracking-[0.25em] text-[#8C6D37] uppercase font-semibold">
          WEDDING ITINERARY
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#2B231D] mt-1 tracking-wide">
          Wedding Celebrations
        </h3>
        <div className="flex items-center gap-2 mt-2 text-[#B8860B]">
          <span className="h-[1px] w-10 bg-[#D4AF37]" />
          <Sparkles className="w-3.5 h-3.5 fill-[#B8860B]" />
          <span className="h-[1px] w-10 bg-[#D4AF37]" />
        </div>
      </div>

      {/* 2 Event Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {weddingEventsData.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-2xl bg-[#FFFFFF] border border-[#D4AF37]/35 shadow-[0_8px_25px_rgba(140,110,70,0.07)] p-5 flex flex-col justify-between overflow-hidden group hover:border-[#D4AF37] transition-all"
          >
            {/* Top decorative accent circle */}
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[#D4AF37]/10 pointer-events-none" />

            <div>
              {/* Header with Urdu title and Badge */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span className="font-arabic text-xl text-[#B8860B] block leading-none mb-1">
                    {event.urduTitle}
                  </span>
                  <h4 className="text-lg font-serif-luxury font-bold text-[#2B231D] tracking-wide">
                    {event.title}
                  </h4>
                  <p className="text-[11px] font-sans text-[#6B5A46] mt-0.5">
                    {event.subtitle}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#FAF5EE] text-[#B8860B] flex items-center justify-center border border-[#D4AF37]/40 shadow-sm shrink-0">
                  {event.iconName === 'heart' ? (
                    <Heart className="w-4 h-4 fill-current" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-2 py-3 border-t border-[#D4AF37]/20 text-xs text-[#5A4A3E]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                  <span className="font-semibold text-[#2B231D]">{event.displayDate}</span>
                </div>
                {event.time && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                    <span>Time: {event.time}</span>
                  </div>
                )}
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2B231D] font-medium">{event.venue}</strong>, {event.location}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#6B5A46] font-serif italic mt-2.5 leading-relaxed">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
