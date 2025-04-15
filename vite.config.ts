import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter()],
});
