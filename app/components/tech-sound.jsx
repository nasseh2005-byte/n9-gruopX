'use client';

import { useEffect } from 'react';

function playOrchestralTuning() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContextClass();
    const master = audioContext.createGain();
    master.gain.value = 0.0001;
    master.connect(audioContext.destination);

    const createCelloLayer = (frequency, startOffset, duration, volume = 0.04) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(frequency, audioContext.currentTime + startOffset);
      osc.frequency.exponentialRampToValueAtTime(frequency * 1.01, audioContext.currentTime + startOffset + duration);
      gain.gain.setValueAtTime(0.0001, audioContext.currentTime + startOffset);
      gain.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + startOffset + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + startOffset + duration);
      osc.connect(gain);
      gain.connect(master);
      osc.start(audioContext.currentTime + startOffset);
      osc.stop(audioContext.currentTime + startOffset + duration + 0.02);
    };

    // Orchestra tuning / cello-based soundscape feel
    createCelloLayer(130.81, 0, 0.28, 0.05); // C3
    createCelloLayer(146.83, 0.02, 0.24, 0.035); // D3 shimmer
    createCelloLayer(196.00, 0.04, 0.20, 0.022); // G3 harmonic

    const swell = audioContext.createGain();
    swell.gain.value = 0.0001;
    master.connect(swell);
    swell.connect(audioContext.destination);
    swell.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.05);
    swell.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.30);

    setTimeout(() => audioContext.close().catch(() => {}), 420);
  } catch {
    // Ignore sound failures silently.
  }
}

export default function TechSound() {
  useEffect(() => {
    const handler = (event) => {
      const target = event.target.closest('[data-tech-sound="true"]');
      if (!target) return;
      playOrchestralTuning();
    };

    document.addEventListener('pointerdown', handler, true);
    return () => document.removeEventListener('pointerdown', handler, true);
  }, []);

  return null;
}
