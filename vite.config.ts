import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import  sitemap  from 'vite-plugin-sitemap'; // Pastikan ini adalah plugin yang benar

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://job-listing-app-puce.vercel.app/', // Tambahkan hostname
      exclude: ['/some-page'], // Jika ada halaman yang ingin dikecualikan
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias untuk folder src
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
  build: {
    outDir: 'dist', // Output folder
    assetsDir: 'assets', // Folder untuk static assets dalam dist
  },
  base: './', // Base path relatif saat build
  server: {
    open: true, // Membuka browser otomatis saat menjalankan dev server
    port: 3000, // Port server
  },
});
