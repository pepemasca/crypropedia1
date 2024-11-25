import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/pepemasca/crypropedia1", // Cambia este a tu sitio si lo necesitas
  base: "/cryptopedia1", // Cambia "<nombre-del-repo>" al nombre de tu repositorio
  output: "static", // Asegura que genere un sitio estático
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
