import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure 'firebase' is properly resolved
      'firebase': '/node_modules/firebase'
    }
  }
})
