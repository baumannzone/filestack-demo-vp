import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Filestack Demo",
  description: "Filestack demo with examples",
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/baumannzone/filestack-demo" },
      { icon: "twitter", link: "https://twitter.com/baumannzone" },
    ],
  },
});
