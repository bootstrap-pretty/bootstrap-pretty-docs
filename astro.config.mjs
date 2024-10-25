import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      themes: {
        dracula: 'dracula',
        'material-theme-palenight': 'material-theme-palenight'
      },
      defaultColor: 'dracula',
      langs: [],
      wrap: false
    }
  },
  vite: {
    build: {
      rollupOptions: {
        external: [
          "@popperjs/core",
          "clipboard"
        ],
      },
    },
  },
  site: "https://bootstrappretty.dev",
  integrations: [icon(), sitemap()]
});