// 手册页导航栏
export default [
  {
    text: "Git & Github",
    collapsed: false,
    base: "/handbook/git",
    items: [
      { text: "Git", link: "/git" },
      { text: "Github", link: "/github" },
      { text: "访问Github", link: "/connect-github" },
      { text: "Markdown", link: "/markdown" },
      { text: "Mermaid", link: "/mermaid" },
      { text: "glob", link: "/glob" },
    ],
  },
  {
    text: "软件开发基础",
    collapsed: false,
    base: "/handbook/software-development-fundamentals",
    items: [
      { text: "Vscode", link: "/vscode" },
      { text: "English Words", link: "/words" },
      { text: "常用windows命令", link: "/windows" },
      { text: "windows11", link: "/windows11" },
      { text: "常用Linux命令", link: "/linux" },
      { text: "Shell脚本", link: "/shell" },
      { text: "文件后缀名", link: "/file-suffix" },
      { text: "统计资源链接", link: "/links" },
    ],
  },
  {
    text: "前端",
    collapsed: false,
    base: "/handbook/frontend",
    items: [
      { text: "HTML", link: "/html" },
      { text: "JavaScript", link: "/js" },
      { text: "TypeScript", link: "/ts" },
      { text: "CSS", link: "/css" },
      { text: "Less", link: "/less" },
      { text: "Sass/Scss", link: "/scss" },
      { text: "Flex", link: "/flex" },
      { text: "设备像素", link: "/device-pixel" },
      { text: "响应式布局", link: "/layout" },
      { text: "通用库", link: "/general-library" },
      { text: "框架：Vue", link: "/vue" },
      { text: "框架：Quasar", link: "/quasar" },
    ],
  },

  {
    text: "node",
    collapsed: false,
    base: "/handbook/node",
    items: [{ text: "node", link: "/node" }],
  },

  {
    text: "算法",
    collapsed: false,
    base: "/handbook/algorithm",
    items: [{ text: "算法", link: "/algorithm" }],
  },
];
