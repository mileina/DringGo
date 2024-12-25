import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true, // Important pour Docker
    },
    proxy: {
      // Rediriger les appels API locaux vers le backend
      '/api': {
        target: 'http://localhost:3000', // Backend local pendant le développement
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  define: {
    // Définir des variables d'environnement pour la production
    'process.env': {
      BASE_URL: 'https://dringgo-backend.onrender.com/api',
    },
  },
});
