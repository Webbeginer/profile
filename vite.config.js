import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Pisahkan firebase ke chunk sendiri
          firebase: ['firebase/app', 'firebase/firestore'],
          // Pisahkan three.js ke chunk sendiri
          three: ['three'],
          // Tambahan opsional jika kamu pakai ini:
          r3f: ['@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
