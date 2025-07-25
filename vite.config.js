import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
          router: ["react-router-dom"],
          emailjs: ["@emailjs/browser"],
        },
      },
    },
    minify: "esbuild", // Cambiar de "terser" a "esbuild"
    // Remover la configuración de terserOptions
  },
});
