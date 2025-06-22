import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/INOFO-Africa-/', // 👈 Use your exact repo name here
  plugins: [react()],
})
