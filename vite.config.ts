import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      input:{
        index: resolve(__dirname, "index.html"),
        embed: resolve(__dirname, "embed.html"),
      }
    }
  }
})
