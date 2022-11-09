import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: false,
    },
  },
  site: "https://bootstrappretty.dev",
  integrations: [sitemap()]
});