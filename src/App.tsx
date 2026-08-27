/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EnvelopeOpener } from './components/EnvelopeOpener';
import { AudioPlayerFloating } from './components/AudioPlayerFloating';
import { MehndiCard } from './components/MehndiCard';
import { BaratCard } from './components/BaratCard';
import { QuranVerseSection } from './components/QuranVerseSection';
import { ScratchRevealCard } from './components/ScratchRevealCard';
import { CountdownSection } from './components/CountdownSection';
import { LookingForwardSection } from './components/LookingForwardSection';
import { RsvpSection } from './components/RsvpSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B231D] relative selection:bg-[#D4AF37]/30 selection:text-[#2B231D] font-sans-clean overflow-x-hidden">
      {/* Background Decorative Soft Warm Patterns & Ambient Glow */}
      <div className="fixed inset-0 opacity-25 laser-cut-pattern pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(212,175,55,0.12)_0%,transparent_65%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(184,134,11,0.08)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* Interactive Unfolding Envelope Intro (Video-Style Animation) */}
      <EnvelopeOpener
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
      />

      {/* Floating Audio Controller */}
      <AudioPlayerFloating />

      {/* Main Wedding Invitation Card Flow in Strict Requested Sequence */}
      <main className="relative z-10 w-full flex flex-col items-center pt-4 pb-12">
        {/* 1. Mehndi Card (PDF Page 2) */}
        <MehndiCard />

        {/* 2. Barat Card (PDF Page 3) */}
        <BaratCard />

        {/* 3. Ayat (Surah Ar-Rum 30:21) */}
        <QuranVerseSection />

        {/* 4. Scratch & Reveal Surprise Date */}
        <ScratchRevealCard />

        {/* 5. Live Countdown Timer */}
        <CountdownSection />

        {/* 6. Looking Forward Family Members */}
        <LookingForwardSection />

        {/* 7. RSVP Contacts (Call only, no WhatsApp) */}
        <RsvpSection />

        {/* 8. Grand Royal Mosque / Dome Footer */}
        <FooterSection />
      </main>
    </div>
  );
}
