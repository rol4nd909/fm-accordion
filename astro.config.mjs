import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // prefetch: true,
  site: 'https://rol4nd909.github.io',
  base: '/fm-accordion/',
  integrations: [tailwind({
    applyBaseStyles: false
  }), icon()]
});