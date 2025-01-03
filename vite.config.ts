import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Job Listing PWA',
        short_name: 'Jobs PWA',
        description: 'Find your dream job',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/logo.png',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: '/assets/logo.png',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});