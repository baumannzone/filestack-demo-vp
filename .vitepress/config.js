import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Filestack Examples",
  description: "An introduction to Filestack with examples and code snippets",
  lastUpdated: true,
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
  themeConfig: {
    footer: {
      message: "An introduction to Filestack with examples and code snippets",
      copyright: "by <a href='https://baumannzone.dev'>@baumannzone</a>",
    },
    logo: "/filestack.svg",
    editLink: {
      pattern: "https://github.com/baumannzone/filestack-demo/edit/main/:path",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Transformations",
        link: "/image-transformations",
      },
      {
        text: "Borders and effects",
        link: "/image-borders-and-effects",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/baumannzone/filestack-demo-vp",
      },
      { icon: "twitter", link: "https://twitter.com/baumannzone" },
      { icon: "instagram", link: "https://instagram.com/baumannzone" },
    ],
  },
});
