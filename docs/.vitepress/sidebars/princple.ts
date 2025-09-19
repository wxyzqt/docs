// 原理页侧边导航栏

export default [
  {
    text: "计算机原理",
    collapsed: false,
    items: [{ text: "位操作", link: "/bitOperate" }],
  },
  {
    text: "算法",
    collapsed: false,
    base: "/principle/algorithm",
    items: [{ text: "链接", link: "/algorithm" }],
  },
  {
    text: "JavaScript相关",
    collapsed: false,
    items: [
      { text: "数据类型", link: "/getType" },
      { text: "数组", link: "/array" },
      { text: "字符串", link: "/string" },
    ],
  },
];
