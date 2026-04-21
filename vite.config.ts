// import { defineConfig } from "vite";
// import path from "path";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";

// function figmaAssetResolver() {
//   return {
//     name: "figma-asset-resolver",
//     resolveId(id: string) {
//       if (id.startsWith("figma:asset/")) {
//         const filename = id.replace("figma:asset/", "");
//         return path.resolve(__dirname, "src/assets", filename);
//       }
//     },
//   };
// }

// export default defineConfig({
//   plugins: [
//     figmaAssetResolver(),
//     // The React and Tailwind plugins are both required for Make, even if
//     // Tailwind is not being actively used – do not remove them
//     react(),
//     tailwindcss(),
//   ],
//   resolve: {
//     alias: {
//       // Alias @ to the src directory
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },

//   // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
//   assetsInclude: ["**/*.svg", "**/*.csv"],
// });

import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// Custom resolver for Figma assets
function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");
        return path.resolve(__dirname, "src/assets", filename);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // React and Tailwind plugins are required for Make — do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // File types to support raw imports. Never add .css, .tsx, or .ts files here.
  assetsInclude: ["**/*.svg", "**/*.csv"],

  // ✅ Explicit build configuration for Vercel
  build: {
    outDir: "dist", // Vercel will serve files from this folder
    assetsDir: "assets", // keeps assets organized
    sourcemap: false, // optional: disable source maps for production
    emptyOutDir: true, // clears old builds before new ones
  },

  // ✅ Optional server config for local development
  server: {
    port: 5173,
    open: true,
  },
});
