import React from 'react';
import { motion } from 'framer-motion';

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-gold">
    {children}
  </svg>
);

const reasons = [
  {
    title: '40+ Years of Experience',
    description: 'Four decades refining the art of diamond jewellery manufacturing.',
    icon: <Icon><circle cx="12" cy="9" r="4" /><path d="M8.8 12.2 7.5 21l4.5-2.7 4.5 2.7-1.3-8.8" /></Icon>,
  },
  {
    title: 'Trusted Manufacturing Partner',
    description: "Long-standing relationships with India's leading jewellery houses.",
    icon: <Icon><path d="M8 12 5.5 9.5a2.1 2.1 0 0 0-3 3l4.2 4.2a3 3 0 0 0 4.2 0l1.1-1.1" /><path d="m16 12 2.5-2.5a2.1 2.1 0 0 1 3 3l-4.2 4.2a3 3 0 0 1-4.2 0L12 15.6" /><path d="m9 13 3 3 3-3" /></Icon>,
  },
  {
    title: 'Premium Diamond Craftsmanship',
    description: 'Master karigars, certified stones, and finishing held to the highest standard.',
    icon: <Icon><path d="m5 3 14 0 3 6-10 12L2 9z" /><path d="m2 9 20 0M8 3l4 6 4-6M12 9v12" /></Icon>,
  },
  {
    title: 'Uncompromising Quality',
    description: 'Every piece is inspected, hallmarked, certified, and guaranteed.',
    icon: <Icon><path d="M12 3 4.5 6v5c0 4.6 3.2 8.8 7.5 10 4.3-1.2 7.5-5.4 7.5-10V6z" /><path d="m9 12 2 2 4-4" /></Icon>,
  },
  {
    title: 'Modern Manufacturing',
    description: 'CAD, laser, and 3D printing fused with traditional artisanship.',
    icon: <Icon><path d="M4 21V7l5 3V5l5 3V3l5 3v15z" /><path d="M8 21v-4h3v4M17 12h1M17 16h1" /></Icon>,
  },
  {
    title: 'Timely Delivery',
    description: 'Disciplined production cycles. Every order, every season, on time.',
    icon: <Icon><path d="M3 6h11v11H3zM14 10h3l3 3v4h-6z" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="19" r="2" /></Icon>,
  },
];

const dividerClasses = [
  'border-t-0 sm:border-t-0 lg:border-t-0',
  'border-t border-gold/20 sm:border-t-0 sm:border-l lg:border-t-0',
  'border-t border-gold/20 sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l',
  'border-t border-gold/20 sm:border-t sm:border-l lg:border-l-0',
  'border-t border-gold/20 sm:border-t lg:border-l',
  'border-t border-gold/20 sm:border-t sm:border-l',
];

const WhyChoose = () => (
  <section id="why" className="bg-primary px-5 py-24 text-offwhite sm:px-8 lg:px-12 lg:py-12">
    <div className="mx-auto max-w-7xl">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-heading text-3xl font-bold uppercase tracking-[0.12em] text-gold sm:text-4xl"><span className="mr-3 inline-block h-1.5 w-1.5 rotate-45 bg-gold align-middle" />Why partner with us</p>
        <h2 className="mt-6 font-heading text-2xl leading-tight sm:text-[28px]">
          Six reasons retailers <span className="font-hero-display italic font-medium bg-gradient-to-r from-[#a77c35] via-[#f0d58c] to-[#c59a50] bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(200,169,106,0.16)]">return to Ankush.</span>
        </h2>
        <div className="mx-auto mt-10 h-px w-20 bg-gold/40" />
      </motion.div>

      <div className="mt-12 grid grid-cols-2 sm:mt-14 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <motion.article
            key={reason.title}
            className={`px-4 py-7 sm:px-10 sm:py-12 lg:py-8 ${dividerClasses[index]}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.07 }}
          >
            {reason.icon}
            <h3 className="mt-5 font-heading text-lg leading-tight text-offwhite sm:mt-8 sm:text-2xl">{reason.title}</h3>
            <p className="mt-3 max-w-sm text-xs leading-5 text-softGray sm:mt-5 sm:text-base sm:leading-7">{reason.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
