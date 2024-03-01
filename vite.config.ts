
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

// Extend your existing Vite config here
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});

