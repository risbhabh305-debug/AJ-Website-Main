import React from 'react';
import { motion } from 'framer-motion';
import design2 from '../assets/design2.jpg';
import design5 from '../assets/design5.jpg';
import heritageNecklace from '../assets/heritage-necklace.jpeg';
import design10 from '../assets/design10.jpg';
import polkiPinkChoker from '../assets/polki-pink-choker.jpeg';

const pieces = [
  { src: design2, title: 'Bridal Brilliance', label: 'Statement · Diamond · Heirloom', description: 'A luminous bridal composition, designed to hold attention from every angle.', className: 'col-span-2 min-h-[300px] md:col-span-7 md:h-full' },
  { src: design10, title: 'Emerald Signature', label: 'Emerald · Pavé · Crafted', description: 'Vivid colour and meticulous diamond detailing in one unforgettable piece.', className: 'md:col-span-5 md:h-full' },
  { src: polkiPinkChoker, title: 'Polki Pink Choker', label: 'Pear · Halo · Occasion', description: 'A graceful drop silhouette that brings movement and brilliance together.', className: 'md:col-span-5 md:h-full' },
  { src: design5, title: 'The Modern Solitaire', label: 'Diamond · Contemporary · Fine', description: 'Clean proportions and a precise setting for everyday distinction.', className: 'md:col-span-7 md:h-full' },
  { src: heritageNecklace, title: 'Heritage in Detail', label: 'Artisan · Gold · Diamond', description: 'Traditional craftsmanship reimagined for the collections of today.', className: 'md:col-span-12 md:h-full' },
];

const Gallery = ({ onInquire, selectedPieces }) => (
  <section id="gallery" className="bg-primary px-5 py-16 text-offwhite sm:px-8 sm:py-20 lg:px-12 lg:py-16">
    <div className="mx-auto max-w-7xl">
      <motion.div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}>
        <p className="font-heading text-4xl font-bold tracking-[0.12em] text-gold">Gallery</p>
        <h2 className="font-heading text-2xl leading-tight sm:text-[28px]">Jewellery made to be remembered.</h2>
        <p className="max-w-2xl text-base leading-7 text-softGray sm:text-lg">A closer look at the colour, craftsmanship, and considered detail behind our signature creations.</p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-[280px_280px_300px] md:gap-4">
        {pieces.map((piece, index) => (
          <motion.article key={piece.title} className={`group relative min-h-[210px] overflow-hidden bg-black ${piece.className}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: Math.min(index * 0.06, 0.24) }}>
            <img src={piece.src} alt={piece.title} className={`h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045] md:absolute md:inset-0 ${piece.title === 'Heritage in Detail' ? 'object-[center_48%]' : ''}`} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/5" />
            <button type="button" onClick={() => onInquire(piece)} className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 text-sm font-semibold uppercase tracking-[0.22em] text-gold opacity-0 transition duration-300 hover:bg-black/50 group-hover:opacity-100 focus:opacity-100" aria-label={`Inquire about ${piece.title}`}>
              {selectedPieces.some((selectedPiece) => selectedPiece.title === piece.title) ? 'Added to inquiry' : 'Add to inquiry'}
            </button>
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold sm:text-xs">{piece.label}</p>
              <h3 className="mt-3 font-heading text-xl leading-tight text-offwhite sm:mt-4 sm:text-4xl">{piece.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
