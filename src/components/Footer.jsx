import React from 'react';

/**
 * Footer component: displays logo/name, links and contact details.
 */
const Footer = () => {
  return (
    <footer className="bg-primary border-t border-gold/30 py-8 text-softGray">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-heading text-xl text-gold mb-2">Ankush Jewellers</h3>
          <p className="text-sm">
            Trusted B2B Diamond Jewellery Manufacturer · Serving India’s leading retailers
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <div>
            <h4 className="font-semibold text-gold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#about" className="hover:text-gold">About</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-gold">Collections</a>
              </li>
              <li>
                <a href="#why" className="hover:text-gold">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gold mb-2">Contact</h4>
            <ul className="space-y-1">
              <li>217, Amir Industrial Estate, Sunmill Compound, Sitaram Jadhav Marg, Lower Parel (W), Mumbai – 400013</li>
              <li>
                <a href="tel:+919819616331" className="hover:text-gold">
                  +91 98196 16331
                </a>
              </li>
              <li>
                <a href="mailto:jewellersankush@gmail.com" className="hover:text-gold">
                  jewellersankush@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-softGray">
        © {new Date().getFullYear()} Ankush Jewellers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;