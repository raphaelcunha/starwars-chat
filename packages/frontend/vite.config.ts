import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    visualizer({
      template: "treemap",
    }) as PluginOption,
  ],
  build: {
    outDir: "./build",
    sourcemap: true,
  },
  server: {
    port: 3001,
    open: true,
  },
});
