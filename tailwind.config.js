/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',      // Matte black
        gold: '#C8A96A',         // Champagne gold
        offwhite: '#F8F9FA',     // Diamond white
        softGray: '#B8B8B8',     // Soft grey text
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Open Sans', 'sans-serif'],
        'hero-display': ['Cormorant Garamond', 'serif'],
        'hero-body': ['Montserrat', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 6s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'credentials-marquee': 'credentials-marquee 45s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { opacity: 0.2 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.2 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'credentials-marquee': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
};
