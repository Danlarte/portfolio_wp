import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  site: 'https://github.com/Danlarte.io',
  base: 'portfolio_wp',
});