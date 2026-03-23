import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  base: '/Yummuwu.github.io/', // ✅ AJOUT ICI

  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})