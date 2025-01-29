import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8000', // Your backend server
        changeOrigin: true, // This ensures the request's origin is rewritten
        secure: false, // Disable SSL verification if needed
        cookieDomainRewrite: "localhost", // This ensures cookies are sent correctly to the right domain
        headers: {
          'X-Forwarded-Host': 'localhost',  // Add this to ensure proper headers are passed
        },
      },
    },
  },
})
