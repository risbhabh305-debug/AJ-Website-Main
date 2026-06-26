import React from 'react';

const credentials = [
  'BIS Hallmarked',
  'IGI & GIA Certified Diamonds',
  '40+ Years of Heritage',
  'B2B Jewellery Manufacturing',
  'Pan-India Delivery',
];

const CredentialsStrip = () => (
  <section className="border-y border-gold/20 bg-[#050505] !py-3 text-offwhite sm:py-4" aria-label="Ankush Jewellers credentials">
    <div className="group overflow-hidden">
      <div className="flex w-max animate-credentials-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...credentials, ...credentials].map((credential, index) => (
          <React.Fragment key={`${credential}-${index}`}>
            <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
            <span className="mx-6 shrink-0 text-[10px] font-semibold uppercase tracking-[0.25em] text-offwhite/65 sm:mx-12 sm:text-[11px] sm:tracking-[0.27em] lg:mx-16">
              {credential}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default CredentialsStrip;
