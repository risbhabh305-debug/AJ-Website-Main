import React from 'react';
import { motion } from 'framer-motion';
import designConcept from '../assets/process-design-1.jpeg';
import craftedByHand from '../assets/process-design-2.png';
import precisionChecked from '../assets/process-design-3.png';
import finishedMasterpiece from '../assets/process-design-4.jpeg';

const processSteps = [
  {
    label: '01 / 04',
    title: 'Design Concept',
    image: designConcept,
    description: 'Every exceptional piece begins as a carefully imagined concept, where form, balance, and elegance are first brought to life.',
  },
  {
    label: '02 / 04',
    title: 'Crafted by Hand',
    image: craftedByHand,
    description: 'Expert hands transform the design into reality, shaping the piece with precision craftsmanship and meticulous detailing.',
  },
  {
    label: '03 / 04',
    title: 'Precision Checked',
    image: precisionChecked,
    description: 'Each creation undergoes careful quality inspection for symmetry, stone alignment, finish, and overall perfection before approval.',
  },
  {
    label: '04 / 04',
    title: 'Finished Masterpiece',
    image: finishedMasterpiece,
    description: 'The final piece emerges as a complete jewellery statement — refined, brilliant, and ready for presentation to valued retail partners.',
  },
];

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-primary px-5 pb-20 pt-12 text-offwhite sm:px-8 sm:pt-14 lg:px-12 lg:pb-28 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_74%,rgba(255,255,255,0.03),transparent_25%)]" />

      <div className="relative mx-auto max-w-[950px]">
        <motion.h2
          className="mb-8 text-center font-heading text-3xl font-bold text-gold sm:mb-10 sm:text-4xl lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Manufacturing Process
        </motion.h2>

        <div className="relative space-y-12 sm:space-y-20 lg:space-y-24">
          <div className="pointer-events-none absolute bottom-8 left-4 top-8 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent lg:left-12" />
          {processSteps.map((step) => (
            <motion.article
              key={step.label}
              className="relative grid items-center gap-7 pl-10 sm:gap-10 lg:grid-cols-[96px_350px_minmax(0,1fr)] lg:gap-10 lg:pl-0"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <div className="absolute left-4 top-8 z-10 -translate-x-1/2 bg-primary px-2 lg:left-12 lg:top-1/2 lg:-translate-y-1/2">
                <span className="font-heading text-lg text-gold">{step.label.split(' / ')[0]}</span>
              </div>

              <div className="order-1 mx-auto w-full max-w-[280px] sm:max-w-[350px] lg:col-start-2 lg:mx-0">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/30 bg-black p-2 shadow-[0_0_46px_rgba(200,169,106,0.17),0_28px_60px_rgba(0,0,0,0.55)]">
                  <div className="relative h-full overflow-hidden rounded-[1.55rem]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />
                  </div>
                </div>
              </div>

              <div className="order-2 lg:col-start-3">
                <div className="max-w-md lg:max-w-xl">
                  <p className="text-xs font-semibold tracking-[0.22em] text-gold sm:text-sm">{step.label}</p>
                  <div className="mt-5 h-px w-16 bg-gold/70" />
                  <h3 className="mt-6 font-heading text-3xl font-bold leading-tight text-offwhite sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-softGray sm:text-lg sm:leading-8">{step.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
