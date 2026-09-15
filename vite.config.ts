import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  build: {
    emptyOutDir: false,
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (
            id.includes("node_modules/recharts") ||
            id.includes("node_modules/d3")
          ) {
            return "recharts";
          }
          if (id.includes("node_modules/motion")) {
            return "motion";
          }
          if (id.includes("node_modules/gsap")) {
            return "gsap";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
