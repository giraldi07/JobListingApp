import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
  base: './', // Tambahkan base untuk memastikan path relatif pada build
  server: {
    open: true, // Membuka browser otomatis saat menjalankan dev server
    port: 3000, // Port server
  },
});
