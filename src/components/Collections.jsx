import React from 'react';
import { motion } from 'framer-motion';

// Import images from assets folder. These images were provided by the user.
import ringsImg from '../assets/design5.jpg';
import earringsImg from '../assets/earrings.jpg';
import pendantsImg from '../assets/design6.jpg';
import necklacesImg from '../assets/design2.jpg';
import banglesVideo from '../assets/bangles.mp4';
import bridalImg from '../assets/design10.jpg';

// Collection data: titles and local images sourced from assets.
const collections = [
  {
    title: 'Diamond Rings',
    img: ringsImg,
  },
  {
    title: 'Earrings',
    img: earringsImg,
  },
  {
    title: 'Pendants',
    img: pendantsImg,
  },
  {
    title: 'Necklaces',
    img: necklacesImg,
  },
  {
    title: 'Bangles',
    video: banglesVideo,
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
              {col.video ? (
                <video
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${col.title} collection film`}
                >
                  <source src={col.video} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="h-52 bg-cover bg-center transition-transform duration-700 transform group-hover:scale-105 sm:h-72"
                  style={{ backgroundImage: `url(${col.img})` }}
                  aria-label={col.title}
                />
              )}
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
