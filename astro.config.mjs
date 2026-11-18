// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://portfolio-aleksjaquez.github.io",
    base: "/demo-landing-fundacion",
    trailingSlash: "ignore",
    vite: {
        plugins: [tailwindcss()],
    },
});
