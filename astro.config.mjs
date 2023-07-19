import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from '@astrojs/vue';
import image from '@astrojs/image';
export default defineConfig({
  vite: {
    ssr: {
      external: ['@contentful/rich-text-types'],
    }
  },
  integrations: [
    tailwind(), 
    react(), 
    vue(), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
});
