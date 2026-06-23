import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    quote: 'The consistency of finishing and stone setting gives us complete confidence when presenting each piece to our customers.',
    name: 'Retail Partner',
    location: 'Mumbai',
  },
  {
    quote: 'Their team understands timelines, communicates clearly, and delivers collections that feel considered from the first sketch.',
    name: 'Multi-brand Jeweller',
    location: 'Surat',
  },
  {
    quote: 'Ankush brings together modern design and dependable manufacturing. It has become a partnership we genuinely value.',
    name: 'Fine Jewellery Retailer',
    location: 'Delhi',
  },
];

const Legacy = () => (
  <section id="reviews" className="bg-primary px-5 py-20 text-offwhite sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-heading text-3xl font-bold tracking-[0.12em] text-gold sm:text-4xl">Customer Reviews</p>
        <h2 className="mt-5 font-heading text-lg leading-tight sm:text-[22px]">Trusted by partners who value every detail.</h2>
      </motion.div>

      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
        {reviews.map((review, index) => (
          <motion.article
            key={review.location}
            className="flex min-h-[260px] flex-col justify-between border border-gold/25 bg-black/25 p-7 sm:p-8"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.1 }}
          >
            <div>
              <div className="flex gap-1 text-gold" aria-label="Five-star review">{Array.from({ length: 5 }, (_, star) => <span key={star}>★</span>)}</div>
              <blockquote className="mt-7 font-heading text-xl leading-8 text-offwhite/95">“{review.quote}”</blockquote>
            </div>
            <footer className="mt-8 border-t border-gold/20 pt-5">
              <p className="text-sm font-semibold text-gold">{review.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-softGray">{review.location}</p>
            </footer>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Legacy;
