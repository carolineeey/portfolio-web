import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Pin the dev URL so it never drifts to another port between runs.
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
