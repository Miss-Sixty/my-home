import { defineConfig } from "vitepress";

const ogDescription = "Next Generation Frontend Tooling";
const ogImage = "https://vitejs.dev/og-image.png";
const ogTitle = "Vite";
const ogUrl = "https://vitejs.dev";

export default defineConfig({
  title: "MissSixty 的小站",
  lang: "zh-CN",

  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/cat.svg" }]],

  themeConfig: {
    logo: "/cat.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/Miss-Sixty" }],

    nav: [
      {
        text: "工具软件",
        link: "/toolSoftware/",
        activeMatch: "/toolSoftware/",
      },
    ],

    sidebar: {
      "/toolSoftware/": [
        {
          text: "安装软件",
          items: [
            {
              text: "说明",
              link: "/toolSoftware/",
            },
            {
              text: "vscode",
              link: "/toolSoftware/vscode",
            },
          ],
        },
      ],
    },
  },
});
