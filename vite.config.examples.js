// Enhancement: Added Vite config for building the examples app for Vercel deployment
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  root: 'examples',
  publicDir: '../public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
});
