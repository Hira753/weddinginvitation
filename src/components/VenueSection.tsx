import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [activeVenueTab, setActiveVenueTab] = useState<'barat' | 'mehndi'>('barat');

  const baratVenue = {
    title: 'Barat Venue',
    name: 'Sapphire Marquee',
    address: 'Daewoo Road, Faisalabad, Punjab, Pakistan',
    timing: 'Saturday, 24 October 2026 • 1:00 PM',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sapphire+Marquee+Daewoo+Road+Faisalabad',
  };

  const mehndiVenue = {
    title: 'Mehndi Venue',
    name: 'Sui Gas Colony',
    address: 'Sargodha Road, Faisalabad, Punjab, Pakistan',
    timing: 'Friday, 23 October 2026 • Evening',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sui+gas+colony+Sargodha+Road+Faisalabad',
  };

  const currentVenue = activeVenueTab === 'barat' ? baratVenue : mehndiVenue;

  return (
    <section className="relative w-full max-w-xl mx-auto px-4 py-7">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl bg-[#FFFFFF] border border-[#D4AF37]/40 shadow-[0_12px_35px_rgba(140,110,70,0.08)] p-6 sm:p-8 text-center overflow-hidden"
      >
        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center mb-5">
          <span className="text-[10px] sm:text-xs font-display-luxury tracking-[0.25em] text-[#8C6D37] uppercase mb-1 font-semibold">
            WHERE TO FIND US
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#2B231D] font-medium tracking-wide">
            Wedding Venues
          </h3>
          <div className="flex items-center gap-2 mt-2 text-[#B8860B]">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <Compass className="w-3.5 h-3.5" />
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Venue Selector Tabs */}
        <div className="relative z-10 flex rounded-xl bg-[#FAF5EE] p-1 border border-[#D4AF37]/30 max-w-xs mx-auto mb-5">
          <button
            onClick={() => setActiveVenueTab('barat')}
            id="venue-tab-barat"
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
              activeVenueTab === 'barat'
                ? 'bg-[#8C6D37] text-white shadow-sm'
                : 'text-[#6B5A46] hover:text-[#2B231D]'
            }`}
          >
            Barat (Sapphire)
          </button>
          <button
            onClick={() => setActiveVenueTab('mehndi')}
            id="venue-tab-mehndi"
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
              activeVenueTab === 'mehndi'
                ? 'bg-[#8C6D37] text-white shadow-sm'
                : 'text-[#6B5A46] hover:text-[#2B231D]'
            }`}
          >
            Mehndi (Sui Gas)
          </button>
        </div>

        {/* Venue Grand Visual */}
        <div className="relative z-10 w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-sm mb-5 group">
          <img
            src={
              activeVenueTab === 'barat'
                ? 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80'
                : 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80'
            }
            alt={currentVenue.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-left">
            <div>
              <span className="text-[10px] font-sans text-[#FFE082] tracking-wider uppercase font-semibold">
                {currentVenue.title}
              </span>
              <p className="text-sm font-serif font-bold text-white tracking-wide">
                {currentVenue.name}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[#FFE082] text-[10px] font-sans border border-[#D4AF37]/50">
              Faisalabad
            </span>
          </div>
        </div>

        {/* Venue Details */}
        <div className="relative z-10 p-4 rounded-2xl bg-[#FAF5EE] border border-[#D4AF37]/35 text-left mb-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FAF0DE] text-[#B8860B] flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/40">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-display-luxury text-[#8C6D37] uppercase tracking-wider font-semibold">
                {currentVenue.timing}
              </span>
              <h4 className="text-base font-serif-luxury font-bold text-[#2B231D]">
                {currentVenue.name}
              </h4>
              <p className="text-xs text-[#5A4A3E] font-sans mt-0.5 leading-relaxed">
                {currentVenue.address}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
