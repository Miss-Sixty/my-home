import { defineConfig } from "vitepress";

export default defineConfig({
  title: "MissSixty 的小站",
  lang: "zh-CN",

  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/cat.svg" }]],

  themeConfig: {
    logo: "/cat.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/Miss-Sixty" }],
    editLink: {
      text: "为此页提供修改建议",
      pattern: "https://github.com/Miss-Sixty/my-home/edit/main/docs/:path",
    },

    footer: {
      // message: "根据 MIT 许可证发布。",
      copyright: "Copyright © 2022",
    },

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
          text: "生活",
          items: [
            {
              text: "iina",
              link: "/toolSoftware/iina",
            },
            {
              text: "mowglii",
              link: "/toolSoftware/mowglii",
            },
            {
              text: "chrome",
              link: "/toolSoftware/chrome",
            },
          ],
        },
        {
          text: "工具",
          items: [
            {
              text: "mate",
              link: "/toolSoftware/mate",
            },
            {
              text: "betterZip",
              link: "/toolSoftware/betterZip",
            },
            {
              text: "bartender",
              link: "/toolSoftware/bartender",
            },
            {
              text: "downie",
              link: "/toolSoftware/downie",
            },
          ],
        },
        {
          text: "开发软件",
          items: [
            {
              text: "vscode",
              link: "/toolSoftware/vscode",
            },

            {
              text: "homebrew",
              link: "/toolSoftware/homebrew",
            },
          ],
        },
        {
          text: "前端开发",
          items: [
            {
              text: "pnpm",
              link: "/toolSoftware/pnpm",
            },
            {
              text: "node",
              link: "/toolSoftware/node",
            },
            {
              text: "yarn",
              link: "/toolSoftware/yarn",
            },
            {
              text: "nrm",
              link: "/toolSoftware/nrm",
            },
            {
              text: "nrm",
              link: "/toolSoftware/nrm",
            },
          ],
        },
      ],
    },
  },
});
