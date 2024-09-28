import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react'; 
// Exportamos la configuración para Vite.
export default defineConfig({
  plugins: [react()], // Aquí estamos añadiendo el plugin de React, lo cual nos permite usar JSX y otras características de React.

  // Configuración específica del servidor de desarrollo.
  server: {
    proxy: {
      '/api': { // Definimos un proxy para todas las solicitudes que comiencen con `/api`.
        target: 'https://api.vercel.app', // Indica a qué servidor se deben dirigir las solicitudes que comiencen con `/api`.
        changeOrigin: true, // Cambia el origen de las solicitudes para que parezca que provienen del servidor de destino, esto puede ayudar a evitar problemas de CORS.
        rewrite: (path) => path.replace(/^\/api/, '') // Reescribe la URL, eliminando `/api` del inicio antes de hacer la solicitud al servidor destino.
      }
    }
  }
});
