// 基础通识 侧边导航栏
export default [
  {
    text: "字符编码",
    collapsed: false,
    base: "/basic/character",
    items: [
      { text: "概述", link: "/overview" },
      { text: "ASCII", link: "/ascii" },
      { text: "utf-8", link: "/utf8" },
      { text: "utf-16", link: "/utf16" },
      { text: "utf-32", link: "/utf32" },
    ],
  },

  {
    text: "软件开发基础",
    collapsed: false,
    base: "/basic/software-development-fundamentals",
    items: [
      { text: "编程语言", link: "/programmingLanguage" },
      { text: "VS Code", link: "/vscode" },
      { text: "English Words", link: "/words" },
      { text: "windows命令", link: "/windows" },
      { text: "windows11", link: "/windows11" },
      { text: "Linux命令", link: "/linux" },
      { text: "Shell脚本", link: "/shell" },
      { text: "文件后缀名", link: "/file-suffix" },
      { text: "统计资源链接", link: "/links" },
    ],
  },
  {
    text: "Git & Github",
    collapsed: false,
    base: "/basic/git",
    items: [
      { text: "Git", link: "/git" },
      { text: "Github", link: "/github" },
      { text: "访问Github", link: "/connect-github" },
      { text: "Markdown", link: "/markdown" },
      { text: "Mermaid", link: "/mermaid" },
      { text: "glob", link: "/glob" },
    ],
  },
];
