import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: { //Agregue esta configuracion por error en App.jsx 
    fs: {
      cachedChecks: false
    }
  },
  build: {
    outDir: 'dist', // Define la carpeta de salida como 'dist'
    assetsDir: '.', // Asigna el directorio de activos a la raíz del proyecto
    emptyOutDir: true, // Limpia la carpeta de salida antes de construir
  },
})
