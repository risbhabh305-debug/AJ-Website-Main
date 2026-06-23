import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration sets up React and enables aliasing if needed.
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  }
});