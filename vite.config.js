import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Tailwind config veya CSS değişince tam reload yap
      usePolling: true,
      interval: 100, // her 100ms’de değişiklik kontrolü
    },
  },
});
