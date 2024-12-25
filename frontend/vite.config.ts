import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

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
  build: {
    outDir: 'dist', // ou 'build', selon ce que vous préférez
  }
})
