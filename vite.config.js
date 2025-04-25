// Vite configuration for pm7-ui-style-guide
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
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'pm7-ui-style-guide',
      fileName: (format) => `pm7-ui-style-guide.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled into the library
      external: ['react', 'react-dom'],
      output: {
        // Global variables to use in UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
