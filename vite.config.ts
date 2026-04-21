import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url"; // Required for ESM __dirname equivalent
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// Fix for __dirname in ESM (Node.js modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");
        // Use path.join for safer cross-platform pathing
        return path.resolve(__dirname, "src/assets", filename);
      }
      return null; // Return null so other plugins can handle it
    },
  };
}

export default defineConfig({
  plugins: [figmaAssetResolver(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure your custom assets are included
  assetsInclude: ["**/*.svg", "**/*.csv"],

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    emptyOutDir: true,
    // Ensure the module polyfill is handled if targeting older browsers
    modulePreload: true,
  },

  server: {
    port: 5173,
    open: true,
    // Ensure strict port is off or on depending on your env
    strictPort: false,
  },
});
