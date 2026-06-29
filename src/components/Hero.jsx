import React from 'react';
import heroVideo from '../assets/hero-new.mp4';
import mobileLogo from '../assets/hero-mobile-logo.png';

const Hero = () => (
  <section className="hero-viewport relative min-h-[32rem] overflow-hidden bg-black sm:min-h-0">
    <video className="absolute inset-0 h-full w-full transform-gpu object-cover object-center sm:object-contain" autoPlay loop muted playsInline preload="metadata" aria-label="Ankush Jewellers craftsmanship film">
      <source src={heroVideo} type="video/mp4" />
    </video>
    <div className="absolute bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-0 z-10 -translate-x-[10%] md:bottom-10 md:left-10 md:translate-x-0">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-black/40 blur-3xl" aria-hidden="true" />
      <img src={mobileLogo} alt="Ankush Jewellers" className="hero-brand-reveal relative w-[23rem] brightness-0 invert drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] md:w-[25rem]" />
      <p className="hero-tagline-reveal relative mt-1 -translate-y-8 w-[calc(100vw-1rem)] max-w-[23rem] text-center text-[11.5px] font-semibold uppercase tracking-[0.08em] text-gold">B2B Diamond Jewellery Manufacturer</p>
    </div>
  </section>
);

export default Hero;
