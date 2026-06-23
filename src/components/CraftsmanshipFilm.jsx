import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import craftsmanshipFilm from '../assets/craftsmanship-film.mp4';

const CraftsmanshipFilm = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#090909] px-5 pb-20 pt-8 text-offwhite sm:px-8 sm:pt-10 lg:px-12 lg:pb-28 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_52%,rgba(200,169,106,0.13),transparent_27%),radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.035),transparent_22%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1fr)] lg:gap-24">
        <motion.div
          className="mx-auto w-full max-w-[280px] sm:max-w-[350px]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/30 bg-black p-2 shadow-[0_0_46px_rgba(200,169,106,0.17),0_28px_60px_rgba(0,0,0,0.55)]">
            <div className="relative h-full overflow-hidden rounded-[1.55rem]">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Ankush Jewellers craftsmanship film"
              >
                <source src={craftsmanshipFilm} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
              <div className="pointer-events-none absolute inset-[14%] border border-offwhite/50" />
              <p className="absolute left-5 top-6 font-heading text-lg tracking-[0.18em] text-offwhite/90 sm:left-7 sm:top-8 sm:text-xl">
                MADE IN MUMBAI
              </p>
              <p className="absolute bottom-6 left-5 right-5 font-heading text-3xl leading-tight text-offwhite sm:bottom-8 sm:left-7 sm:right-7 sm:text-4xl">
                Crafted for lasting brilliance.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold sm:text-sm">Inside our atelier</p>
          <h2 className="mt-5 font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Precision you can see.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-softGray sm:text-lg sm:leading-8">
            Every stage of our process is guided by exacting detail, skilled hands and the confidence to create jewellery that endures.
          </p>
          <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4 border-y border-gold/20 py-6 text-sm uppercase tracking-[0.16em] text-offwhite/85 sm:grid-cols-4">
            <span>Design</span>
            <span>Setting</span>
            <span>Polish</span>
            <span>Finish</span>
          </div>
          <a
            href="#contact"
            className="mt-9 inline-flex rounded-full border border-gold/80 px-7 py-3.5 text-sm font-semibold text-gold transition duration-300 hover:bg-gold hover:text-primary"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipFilm;
