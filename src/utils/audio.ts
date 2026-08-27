// Luxury Romantic Wedding Melody & Audio Engine ("Afreen Afreen & Romantic Shehnai / Flute / Santoor")

class WeddingAudioEngine {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 0.65;
  private timerId: any = null;
  private gainNode: GainNode | null = null;
  private currentNoteIndex: number = 0;
  private htmlAudio: HTMLAudioElement | null = null;
  private listeners: ((playing: boolean) => void)[] = [];

  // Playlist of romantic wedding instrumental audio streams
  private romanticTracks = [
    // Soothing Romantic Eastern Wedding Flute & Sitar Melody
    'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-oriental-relaxing-meditation-112191.mp3',
    // Heartfelt Romantic Acoustic Strings & Santoor
    'https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f795cb.mp3?filename=relaxing-indian-music-122849.mp3',
  ];
  private currentTrackIndex = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        this.htmlAudio = new Audio();
        this.htmlAudio.src = this.romanticTracks[this.currentTrackIndex];
        this.htmlAudio.loop = true;
        this.htmlAudio.volume = this.volume;
        this.htmlAudio.crossOrigin = 'anonymous';

        // Fallback on error to switch or synthesizer
        this.htmlAudio.addEventListener('error', () => {
          this.startProceduralMelody();
        });
      } catch (e) {
        console.warn('HTML Audio initialization fallback', e);
      }
    }
  }

  public subscribe(fn: (playing: boolean) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach(fn => fn(this.isPlaying));
  }

  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
        this.gainNode = this.audioCtx.createGain();
        this.gainNode.gain.setValueAtTime(this.isMuted ? 0 : this.volume * 0.45, this.audioCtx.currentTime);
        this.gainNode.connect(this.audioCtx.destination);
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public async startAudio() {
    if (this.isPlaying) return;
    this.initAudioContext();
    this.isPlaying = true;
    this.notify();

    if (this.htmlAudio) {
      this.htmlAudio.volume = this.isMuted ? 0 : this.volume;
      this.htmlAudio.play().then(() => {
        // Successfully playing HTML romantic audio
      }).catch(() => {
        // Autoplay policy or media load fallback to Web Audio Synth
        this.startProceduralMelody();
      });
    } else {
      this.startProceduralMelody();
    }
  }

  public stopAudio() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.htmlAudio) {
      this.htmlAudio.pause();
    }
    this.notify();
  }

  public toggle() {
    if (this.isPlaying) {
      this.stopAudio();
    } else {
      this.startAudio();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(this.isMuted ? 0 : this.volume * 0.45, this.audioCtx.currentTime);
    }
    if (this.htmlAudio) {
      this.htmlAudio.volume = this.isMuted ? 0 : this.volume;
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    this.setVolume(this.volume);
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Romantic Raag Yaman & Bhairavi Sufi Wedding Progression (Afreen / Din Shagna Da harmonic scale)
  private melodyNotes: Array<{ freq: number; dur: number; type: 'santoor' | 'flute' | 'pad' | 'bell'; chord?: number[] }> = [
    { freq: 293.66, dur: 0.40, type: 'santoor' },
    { freq: 329.63, dur: 0.40, type: 'santoor' },
    { freq: 369.99, dur: 0.45, type: 'santoor' },
    { freq: 440.00, dur: 0.85, type: 'flute', chord: [220, 293.66, 369.99] },
    { freq: 493.88, dur: 0.55, type: 'flute' },
    { freq: 440.00, dur: 0.45, type: 'flute' },
    { freq: 369.99, dur: 0.70, type: 'flute' },
    { freq: 329.63, dur: 0.95, type: 'pad', chord: [196, 293.66, 329.63] },
    { freq: 293.66, dur: 0.40, type: 'santoor' },
    { freq: 369.99, dur: 0.40, type: 'santoor' },
    { freq: 440.00, dur: 0.60, type: 'flute' },
    { freq: 554.37, dur: 1.05, type: 'flute', chord: [220, 369.99, 440] },
    { freq: 493.88, dur: 0.50, type: 'flute' },
    { freq: 440.00, dur: 0.50, type: 'flute' },
    { freq: 369.99, dur: 0.95, type: 'pad', chord: [146.83, 220, 293.66] },
    { freq: 440.00, dur: 0.40, type: 'flute' },
    { freq: 493.88, dur: 0.40, type: 'flute' },
    { freq: 587.33, dur: 0.80, type: 'flute', chord: [293.66, 369.99, 440] },
    { freq: 554.37, dur: 0.45, type: 'flute' },
    { freq: 493.88, dur: 0.65, type: 'flute' },
    { freq: 440.00, dur: 0.50, type: 'flute' },
    { freq: 369.99, dur: 1.00, type: 'pad', chord: [220, 277.18, 329.63] },
    { freq: 369.99, dur: 0.40, type: 'flute' },
    { freq: 440.00, dur: 0.40, type: 'flute' },
    { freq: 493.88, dur: 0.55, type: 'flute' },
    { freq: 440.00, dur: 0.45, type: 'flute' },
    { freq: 369.99, dur: 0.45, type: 'santoor' },
    { freq: 329.63, dur: 0.45, type: 'santoor' },
    { freq: 293.66, dur: 1.25, type: 'pad', chord: [146.83, 220, 293.66, 369.99] },
    { freq: 880.00, dur: 0.35, type: 'bell' },
    { freq: 739.99, dur: 0.35, type: 'bell' },
    { freq: 587.33, dur: 0.45, type: 'santoor' },
    { freq: 440.00, dur: 0.55, type: 'santoor' },
  ];

  private startProceduralMelody() {
    if (!this.isPlaying || !this.audioCtx) return;

    const playNext = () => {
      if (!this.isPlaying || !this.audioCtx) return;
      const note = this.melodyNotes[this.currentNoteIndex];
      this.playNote(note.freq, note.dur, note.type);

      if (note.chord) {
        note.chord.forEach(f => this.playChordNote(f, note.dur * 1.5));
      }

      this.currentNoteIndex = (this.currentNoteIndex + 1) % this.melodyNotes.length;
      this.timerId = setTimeout(playNext, note.dur * 950);
    };

    playNext();
  }

  private playNote(freq: number, duration: number, type: 'santoor' | 'flute' | 'pad' | 'bell') {
    if (!this.audioCtx || this.isMuted) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    if (type === 'flute') {
      osc.type = 'sine';
      const lfo = this.audioCtx.createOscillator();
      const lfoGain = this.audioCtx.createGain();
      lfo.frequency.setValueAtTime(5, now);
      lfoGain.gain.setValueAtTime(3.5, now);
      lfo.connect(osc.frequency);
      lfo.start(now);
      lfo.stop(now + duration);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(this.volume * 0.32, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    } else if (type === 'santoor') {
      osc.type = 'triangle';
      gain.gain.setValueAtTime(this.volume * 0.38, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.85);
    } else if (type === 'bell') {
      osc.type = 'sine';
      gain.gain.setValueAtTime(this.volume * 0.20, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 1.5);
    } else {
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(this.volume * 0.25, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    }

    osc.frequency.setValueAtTime(freq, now);
    osc.connect(gain);
    if (this.gainNode) {
      gain.connect(this.gainNode);
    } else {
      gain.connect(this.audioCtx.destination);
    }

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  private playChordNote(freq: number, duration: number) {
    if (!this.audioCtx || this.isMuted) return;
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(this.volume * 0.14, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    if (this.gainNode) {
      gain.connect(this.gainNode);
    } else {
      gain.connect(this.audioCtx.destination);
    }

    osc.start(now);
    osc.stop(now + duration);
  }
}

export const weddingAudio = new WeddingAudioEngine();
