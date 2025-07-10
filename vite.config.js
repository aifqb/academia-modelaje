import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/aracely-modelaje/', // reemplaza con el nombre de tu repo
  plugins: [react()],
})

