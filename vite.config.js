import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/", // Sesuaikan dengan path yang benar
    plugins: [
        react(), // React plugin that we installed for vite.js
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
    optimizeDeps: {
        include: ["@ckeditor/ckeditor5-react"],
    },
});
