import React, { useLayoutEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroIntro from './components/HeroIntro';
import CredentialsStrip from './components/CredentialsStrip';
import DiamondStory from './components/DiamondStory';
import CraftsmanshipFilm from './components/CraftsmanshipFilm';
import About from './components/About';
import Collections from './components/Collections';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Legacy from './components/Legacy';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// The main application composes the various sections into a single-page layout.
function App() {
  const [selectedPieces, setSelectedPieces] = useState([]);

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const handleInquiry = (piece) => {
    setSelectedPieces((currentPieces) => (
      currentPieces.some((selectedPiece) => selectedPiece.title === piece.title)
        ? currentPieces
        : [...currentPieces, piece]
    ));
    window.setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  };

  return (
    <div className="overflow-hidden">{/* prevent horizontal overflow */}
      {/* Persistent header */}
      <Header />
      {/* Provide an id for the top of the page */}
      <div id="home">
        <Hero />
      </div>
      <CredentialsStrip />
      <HeroIntro />
      <DiamondStory />
      <CraftsmanshipFilm />
      <About />
      <Collections />
      <WhyChoose />
      <Process />
      <Legacy />
      <Gallery onInquire={handleInquiry} selectedPieces={selectedPieces} />
      <Contact
        selectedPieces={selectedPieces}
        onRemoveSelection={(title) => setSelectedPieces((currentPieces) => currentPieces.filter((piece) => piece.title !== title))}
        onClearSelections={() => setSelectedPieces([])}
      />
      <Footer />
    </div>
  );
}

export default App;
