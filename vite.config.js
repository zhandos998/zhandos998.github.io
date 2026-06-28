import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    allowedHosts: [".ngrok-free.app"],
  },
  plugins: [react(), tailwindcss()],
})
