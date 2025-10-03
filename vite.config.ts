import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment to /mirai-consultant/
  // This is only used for production build; dev server remains at '/'
  base: '/mirai-consultant/',
})
