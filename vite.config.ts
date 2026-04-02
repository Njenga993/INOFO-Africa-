import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/INOFO-Africa-/", // 👈 include the dash at the end
  plugins: [react()],
});
