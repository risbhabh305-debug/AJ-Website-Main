import React from 'react';

const credentials = [
  'BIS Hallmarked Jewellery',
  'Certified Diamonds',
  'Custom Designs',
  'Trusted Family Jeweller',
];

export default function CredentialsStrip() {
  return (
    <section className="border-y border-gold/20 bg-primary px-5 py-5 text-offwhite sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-4 text-center text-xs uppercase tracking-[0.25em] text-gold sm:grid-cols-2 lg:grid-cols-4">
        {credentials.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}
