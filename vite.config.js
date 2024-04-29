import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/entrega2/",
  server: { //Agregue esta configuracion por error en App.jsx 
    fs: {
      cachedChecks: false
    }
  }
})
