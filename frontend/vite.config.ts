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
  },
  define: {
    // Utiliser uniquement le backend déployé
    'process.env': {
      BASE_URL: 'https://dringgo-backend.onrender.com/api', // URL du backend déployé
    },
  },
});
