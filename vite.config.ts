import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Gunakan './' untuk path relatif (berguna jika deploy di subfolder)
  plugins: [react()],
  build: {
    outDir: 'dist', // Output build folder (default: 'dist')
    assetsDir: './assets', // Folder untuk menyimpan asset statis
  },
  server: {
    port: 3000, // Port development server
    open: true, // Otomatis buka browser saat server dijalankan
  },
});
