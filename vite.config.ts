import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-framer': ['framer-motion'],
          'vendor-gsap': ['gsap'],
          'vendor-maps': ['leaflet', 'react-leaflet'],
          'vendor-ui': [
            'react-slick',
            'slick-carousel',
            'swiper',
            'react-fast-marquee',
            'react-compare-slider',
            'react-compare-image',
          ],
          'vendor-lottie': ['lottie-react', '@lottiefiles/react-lottie-player'],
        },
      },
    },
  },
})
