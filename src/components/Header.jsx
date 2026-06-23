import React, { useState } from 'react';

/**
 * Header component: displays the company logo and navigation links.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    ['About', '#about'], ['Collections', '#collections'], ['Why Us', '#why'], ['Process', '#process'], ['Reviews', '#reviews'], ['Gallery', '#gallery'], ['Contact', '#contact'],
  ];
  const mobileLinks = links.slice(0, 3);
  const overflowLinks = links.slice(3);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-primary/70 backdrop-blur-sm border-b border-gold/20">
      <div className="container relative mx-auto flex max-w-6xl items-center justify-end px-4 py-3.5 md:justify-center">
        <nav className="hidden items-center justify-center gap-x-7 text-lg font-medium text-softGray md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-gold">{label}</a>)}
        </nav>
        <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-x-5 whitespace-nowrap text-sm font-medium text-softGray md:hidden">
          {mobileLinks.map(([label, href]) => <a key={href} href={href} className="transition hover:text-gold">{label}</a>)}
        </nav>
        <button type="button" className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-gold md:hidden" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
          <span className={`h-px w-6 bg-current transition ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-current transition ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>
      {isMenuOpen && <nav className="border-t border-gold/20 bg-primary/95 px-5 py-5 backdrop-blur-md md:hidden"><div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-medium text-softGray">{overflowLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setIsMenuOpen(false)} className="transition hover:text-gold">{label}</a>)}</div></nav>}
    </header>
  );
};

export default Header;
