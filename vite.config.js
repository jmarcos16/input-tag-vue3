import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: (resolve(__dirname, "src/main.js")),
            name: "InputTag",
            fileName: 'input-tag-vue3',
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    }
});