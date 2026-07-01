import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { portfolioSetupPlugin } from './vite/setup.js'

export default defineConfig({
  plugins: [portfolioSetupPlugin(), react(), tailwindcss()],
})
