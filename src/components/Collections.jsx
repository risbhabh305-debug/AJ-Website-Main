import React from 'react';
import { motion } from 'framer-motion';

// Import images from assets folder. These images were provided by the user.
import ringsImg from '../assets/collection-ring.png';
import earringsImg from '../assets/collection-earrings.jpg';
import pendantsImg from '../assets/collection-pendant.png';
import necklacesImg from '../assets/design2.jpg';
import banglesImg from '../assets/collection-bangles.jpg';
import bridalImg from '../assets/design10.jpg';

// Collection data: titles and local images sourced from assets.
const collections = [
  {
    title: 'Diamond Ring',
    img: ringsImg,
    imageClass: 'bg-contain bg-center bg-no-repeat bg-[#07101e]',
  },
  {
    title: 'Earrings',
    img: earringsImg,
  },
  {
    title: 'Pendant',
    img: pendantsImg,
  },
  {
    title: 'Necklace',
    img: necklacesImg,
  },
  {
    title: 'Bangles',
    img: banglesImg,
    imageClass: 'bg-contain bg-center bg-no-repeat bg-[#4b1c23]',
  },
  {
    title: 'Bridal Collection',
    img: bridalImg,
  },
];

/**
 * Collections section: displays categories with elegant hover effects.
 */
const Collections = () => {
  return (
    <section id="collections" className="py-20 bg-primary text-offwhite">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-gold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Collections
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {collections.map((col, i) => (
            <motion.div
              key={col.title}
              className="relative rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div
                className={`h-52 transform transition-transform duration-700 sm:h-72 ${col.imageClass || 'bg-cover bg-center group-hover:scale-105'}`}
                style={{ backgroundImage: `url(${col.img})` }}
                aria-label={col.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition" />
              <h3 className="absolute bottom-3 left-3 text-sm font-semibold text-offwhite transition group-hover:text-gold sm:bottom-4 sm:left-4 sm:text-lg md:text-xl">
                {col.title}
              </h3>
              {/* Soft gold glow on hover */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gold transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
