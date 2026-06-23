import React from 'react';
import heroVideo from '../assets/hero-new.mp4';
import mobileLogo from '../assets/hero-mobile-logo.png';

const Hero = () => (
  <section className="relative h-[100svh] min-h-[32rem] overflow-hidden bg-black sm:min-h-0">
    <video className="absolute inset-0 h-full w-full object-cover object-center sm:object-contain" autoPlay loop muted playsInline aria-label="Ankush Jewellers craftsmanship film">
      <source src={heroVideo} type="video/mp4" />
    </video>
    <div className="absolute bottom-5 left-0 z-10 -translate-x-[10%] md:hidden">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-black/40 blur-3xl" aria-hidden="true" />
      <img src={mobileLogo} alt="Ankush Jewellers" className="relative w-[23rem] brightness-0 invert drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]" />
      <p className="relative mt-2 w-[23rem] text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">B2B Diamond Jewellery Manufacturer</p>
    </div>
  </section>
);

export default Hero;
