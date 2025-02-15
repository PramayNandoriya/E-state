// DO NOT manually include tailwind in vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This should be the only plugin for Vite:
export default defineConfig({
  plugins: [react()],
});
