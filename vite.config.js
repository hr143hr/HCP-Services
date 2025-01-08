import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://122.170.111.66:1020',
    // devlopment Url
    // '/api': 'http://122.170.111.66:8040',         
    // '/ProfileImages/' :'http://122.170.111.66:8040'
    // Host Url
    // '/ProfileImages/' :'http://localhost:8040'
  },
},
  plugins: [react()],
})
