import { Content, defineConfig } from "vitepress";
import { embed } from "@mdit/plugin-embed";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      "meta",
      {
        name: "robots",
        content: "noindex",
      },
    ],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  lang: "en-GB",
  title: "420 Wales",
  description: "420 Wales - Friday 7th / Monday 10th August 2026",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "What's 420?", link: "/whats-420" },
      { text: "Tickets", link: "/tickets" },
      { text: "Merch", link: "/merch" },
      { text: "FAQ", link: "/faq" },
      { text: "T&Cs", link: "/terms-and-conditions" },
      {
        text: "WhatsApp",
        link: "https://chat.whatsapp.com/L4TlA1kxRngAwGHuwQ7b8P?mode=ac_c",
      },
    ],

    footer: {
      message: "Peace, Love, Unity, Respect",
      copyright: "Copyright © 2024-present | 420 Wales",
    },
  },
  markdown: {
    
    config: (md) => {
      md.use(embed, {
        config: [
          {
            name: "openstreetmap",
            setup: (src: string) => `<iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?${src}"></iframe>`
          },
        ],
      });
    },
  },
});

