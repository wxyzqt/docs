import { defineConfig } from "vitepress";
import { searchOptions } from "./searchOptions";
import {
  nav,
  sidebarBasic,
  sidebarFrontend,
  sidebarNode,
  sidebarAssembly,
  sidebarCpp,
  sidebarStandrad,
  sidebarOpenSource,
} from "./sidebars";

export default defineConfig({
  lang: "zh-Hans",
  title: "Documents",
  base: "/docs/",
  description: "wxyzqt的文档手册",

  head: [["link", { rel: "icon", href: "/docs/favicon.ico" }]],
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },

  themeConfig: {
    nav: nav,

    search: {
      provider: "local",
      options: searchOptions(),
    },

    sidebar: {
      "/basic": { base: "/basic", items: sidebarBasic() },
      "/frontend": { base: "/frontend", items: sidebarFrontend() },
      "/node": { base: "/node", items: sidebarNode() },
      "/assembly": { base: "/assembly", items: sidebarAssembly() },
      "/cpp": { base: "/cpp", items: sidebarCpp() },
      "/standard": { base: "/standard", items: sidebarStandrad() },
      "/openSource": { base: "/openSource", items: sidebarOpenSource() },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/wxyzqt/docs" }],

    docFooter: {
      prev: false,
      next: false,
    },

    outline: {
      label: "页面导航",
      level: [2, 4],
    },

    lastUpdated: {
      text: "最后更新于",
    },

    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },

    returnToTopLabel: "回到顶部",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
  },
});
