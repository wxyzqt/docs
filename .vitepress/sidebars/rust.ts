// rust 侧边导航栏
export default [
  {
    text: "基础",
    collapsed: false,
    base: "/rust/base",
    items: [
      { text: "环境配置", link: "/env" },
      { text: "cargo", link: "/cargo" },
      { text: "优势", link: "/advantage" },
      { text: "类型", link: "/types" },
    ],
  },
  {
    text: "标准库",
    collapsed: false,
    base: "/rust/std",
    items: [{ text: "序言", link: "/first" }],
  },
];
