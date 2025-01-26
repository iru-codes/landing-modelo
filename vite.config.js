import { defineConfig } from 'vite';

export default defineConfig({
    root: './public', // Usa 'public' como carpeta raíz del proyecto
    build: {
      outDir: '../dist', // Salida de la build en una carpeta separada ('dist')
      emptyOutDir: true, // Limpia la carpeta de destino antes de generar la build
    },
    server: {
      open: true, // Abre el navegador automáticamente al iniciar el servidor de desarrollo
    },
  });