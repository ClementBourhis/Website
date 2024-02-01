import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://clementbourhis.fr',
  prefetch: true,
  experimental: {
    clientPrerender: true,
  },
});
