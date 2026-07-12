// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Déploiement GitHub Pages (page projet) : les URL sont préfixées par /mawuena.
  // À remplacer par le domaine définitif (site + suppression de base) le moment venu.
  site: 'https://aristidebamenou.github.io',
  base: '/mawuena',
  vite: {
    plugins: [tailwindcss()],
  },
});