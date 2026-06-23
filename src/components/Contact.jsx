import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialFormData = { name: '', company: '', phone: '', email: '', message: '' };

const Contact = ({ selectedPieces, onRemoveSelection, onClearSelections }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [submissionStatus, setSubmissionStatus] = useState('idle');
  const inputClass = 'border border-gold/30 bg-primary p-3 text-offwhite outline-none transition placeholder:text-softGray/70 focus:border-gold focus:ring-1 focus:ring-gold';

  const handleChange = ({ target: { name, value } }) => setFormData((current) => ({ ...current, [name]: value }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus('sending');
    try {
      const response = await fetch('https://formsubmit.co/ajax/305krishna2005@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          selected_jewellery: selectedPieces.length ? selectedPieces.map((piece) => piece.title).join(', ') : 'General enquiry (no jewellery selected)',
          _subject: `New Ankush Jewellers enquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      if (!response.ok) throw new Error('Unable to send enquiry');
      setFormData(initialFormData);
      onClearSelections();
      setSubmissionStatus('success');
    } catch {
      setSubmissionStatus('error');
    }
  };

  return (
  <section id="contact" className="bg-primary py-20 text-offwhite">
    <div className="container mx-auto max-w-5xl px-4">
      <motion.h2
        className="mb-10 text-center font-heading text-3xl font-bold text-gold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>
      <div className="flex flex-col gap-12 lg:flex-row">
        <motion.div className="space-y-5 lg:w-1/2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="px-1 py-2 sm:px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Get in touch</p>
            <h3 className="mt-3 font-heading text-2xl text-offwhite">Visit our atelier</h3>
            <div className="mt-6 space-y-5 text-softGray">
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Address</p><p className="mt-2 leading-7">217, Amir Industrial Estate, Sunmill Compound, Sitaram Jadhav Marg, Lower Parel (W), Mumbai – 400013</p></div>
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Phone</p><a href="tel:+918097988287" className="mt-2 inline-block font-heading text-xl text-offwhite transition hover:text-gold">+91 80979 88287</a></div>
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Email</p><a href="mailto:305krishna2005@gmail.com" className="mt-2 inline-block break-all text-offwhite transition hover:text-gold">305krishna2005@gmail.com</a></div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gold/25 bg-black">
            <iframe title="Ankush Jewellers location" src="https://www.google.com/maps?q=217%2C%20Amir%20Industrial%20Estate%2C%20Sunmill%20Compound%2C%20Lower%20Parel%20West%2C%20Mumbai%20400013&output=embed" className="h-56 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </motion.div>

        <motion.form className="space-y-4 px-1 py-2 sm:px-2 lg:w-1/2" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} onSubmit={handleSubmit}>
          <div className="mb-6"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Start a conversation</p><h3 className="mt-3 font-heading text-2xl text-offwhite">Send an enquiry</h3></div>
          {selectedPieces.length > 0 && <div className="rounded-xl border border-gold/30 bg-black/20 p-3"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Selected jewellery ({selectedPieces.length})</p><div className="space-y-3">{selectedPieces.map((piece) => <div key={piece.title} className="flex items-center gap-3"><img src={piece.src} alt={piece.title} className="h-14 w-14 rounded-lg object-cover" /><p className="min-w-0 flex-1 font-heading text-lg text-offwhite">{piece.title}</p><button type="button" onClick={() => onRemoveSelection(piece.title)} className="text-xs font-semibold uppercase tracking-[0.16em] text-softGray transition hover:text-gold">Remove</button></div>)}</div></div>}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2"><input required name="name" value={formData.name} onChange={handleChange} placeholder="Name" className={`${inputClass} rounded-lg`} /><input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className={`${inputClass} rounded-lg`} /></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2"><input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={`${inputClass} rounded-lg`} /><input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={`${inputClass} rounded-lg`} /></div>
          <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" className={`w-full rounded-lg ${inputClass}`} />
          {submissionStatus === 'success' && <p className="text-sm text-gold">Thank you—your enquiry has been sent.</p>}
          {submissionStatus === 'error' && <p className="text-sm text-red-300">We couldn’t send your enquiry. Please try again or use WhatsApp.</p>}
          <div className="flex flex-col gap-4 sm:flex-row"><a href="https://wa.me/918097988287" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-gold px-4 py-3 text-center font-medium text-primary transition hover:bg-opacity-90">WhatsApp Inquiry</a><a href="tel:+918097988287" className="flex-1 rounded-full border border-gold px-4 py-3 text-center font-medium text-gold transition hover:bg-gold hover:text-primary">Call Now</a><button type="submit" disabled={submissionStatus === 'sending'} className="flex-1 rounded-full border border-gold px-4 py-3 text-center font-medium text-gold transition hover:bg-gold hover:text-primary disabled:cursor-wait disabled:opacity-60">{submissionStatus === 'sending' ? 'Sending…' : 'Send Inquiry'}</button></div>
        </motion.form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
