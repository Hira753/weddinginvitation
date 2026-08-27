/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EnvelopeOpener } from './components/EnvelopeOpener';
import { AudioPlayerFloating } from './components/AudioPlayerFloating';
import { HeroSection } from './components/HeroSection';
import { QuranVerseSection } from './components/QuranVerseSection';
import { ScratchRevealCard } from './components/ScratchRevealCard';
import { InvitationMessage } from './components/InvitationMessage';
import { EventsSection } from './components/EventsSection';
import { CountdownSection } from './components/CountdownSection';
import { VenueSection } from './components/VenueSection';
import { HostsSection } from './components/HostsSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const scrollToEvents = () => {
    const el = document.getElementById('events-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B231D] relative selection:bg-[#D4AF37]/30 selection:text-[#2B231D] font-sans-clean overflow-x-hidden">
      {/* Background Decorative Soft Warm Patterns & Ambient Glow */}
      <div className="fixed inset-0 opacity-25 laser-cut-pattern pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(212,175,55,0.12)_0%,transparent_65%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(184,134,11,0.08)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* Interactive Unfolding Envelope Intro (Full cover with realistic wax seal & tap button) */}
      <EnvelopeOpener
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
      />

      {/* Floating Audio Controller */}
      <AudioPlayerFloating />

      {/* Main Wedding Invitation Card Flow */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* 1. Hero Card with Bismillah & Couple Name */}
        <HeroSection onEventsClick={scrollToEvents} />

        {/* 2. Quranic Verse (Surah Ar-Rum 30:21) */}
        <QuranVerseSection />

        {/* 3. Interactive Scratch & Reveal Surprise Date */}
        <ScratchRevealCard />

        {/* 4. Welcome Message & Family Invitation */}
        <InvitationMessage />

        {/* 5. Wedding Events Schedule (Mayun, Mehendi, Nikah, Walima) */}
        <EventsSection />

        {/* 6. Live Countdown Timer */}
        <CountdownSection />

        {/* 7. The Venue & Interactive Maps / QR code */}
        <VenueSection />

        {/* 8. Hosts & Contact Information */}
        <HostsSection />

        {/* 9. Grand Royal Footer */}
        <FooterSection />
      </main>
    </div>
  );
}
