import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mikewest.site/",
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  }
});