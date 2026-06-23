import React from 'react';
import { motion } from 'framer-motion';

const HeroIntro = () => (
  <section className="bg-primary px-5 py-20 text-offwhite sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-5xl text-center">
      <motion.p className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-gold md:block md:text-sm" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        B2B Diamond Jewellery Manufacturer
      </motion.p>
      <motion.h1 className="mt-5 font-hero-display text-5xl font-semibold leading-[0.94] text-offwhite sm:text-6xl lg:text-7xl" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.08 }}>
        <span className="block">40+ Years of</span>
        <span className="mt-2 block italic text-gold">Crafting Excellence</span>
      </motion.h1>
      <motion.p className="mx-auto mt-7 max-w-2xl font-hero-body text-sm font-semibold leading-7 text-offwhite/85 sm:text-base sm:leading-8" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.16 }}>
        Trusted manufacturing partner for Goenka India and leading jewellery retailers.
      </motion.p>
      <motion.div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.22 }}>
        <a href="#collections" className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary transition duration-300 hover:bg-[#dec184]">Explore Collections</a>
        <a href="#contact" className="rounded-full border border-gold/80 px-7 py-3.5 text-sm font-semibold text-gold transition duration-300 hover:bg-gold hover:text-primary">Start B2B Inquiry</a>
      </motion.div>
    </div>
  </section>
);

export default HeroIntro;
