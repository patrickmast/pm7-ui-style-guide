
// Enhancement: Updated Vite config to serve the examples app in dev mode and build the library in build mode.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command }) => {
  if (command === 'build') {
    // Library build config
    return {
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
          external: [
            'react', 
            'react-dom',
            'react/jsx-runtime',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-slot',
            'lucide-react'
          ],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    };
  } else {
    // Dev server config (examples app)
    return {
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
      root: 'examples',
      publicDir: '../public',
      server: {
        host: '0.0.0.0',
        allowedHosts: ['all', '.replit.dev']
      },
    };
  }
});
