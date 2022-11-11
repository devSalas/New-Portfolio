import { defineConfig } from 'astro/config';

// https://astro.build/config
/* export default defineConfig({});*/

import react from '@astrojs/react'; 

export default {
  // ...
  integrations: [react()],
}