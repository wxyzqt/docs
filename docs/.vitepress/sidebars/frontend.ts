// 前端 侧边导航栏
export default [
  {
    text: "HTML",
    collapsed: false,
    base: "/frontend/html",
    items: [{ text: "HTML", link: "/html" }],
  },
  {
    text: "CSS",
    collapsed: false,
    base: "/frontend/css",
    items: [
      { text: "CSS", link: "/css" },
      { text: "Less", link: "/less" },
      { text: "Sass/Scss", link: "/scss" },
      { text: "Flex", link: "/flex" },
      { text: "设备像素", link: "/device-pixel" },
      { text: "响应式布局", link: "/layout" },
    ],
  },
  {
    text: "JS",
    collapsed: false,
    base: "/frontend/js",
    items: [
      { text: "链接", link: "/links" },
      { text: "数据类型", link: "/dataType" },
      { text: "数组", link: "/array" },
      { text: "字符串", link: "/string" },
    ],
  },
  {
    text: "TS",
    collapsed: false,
    base: "/frontend/ts",
    items: [{ text: "TypeScript", link: "/ts" }],
  },
  {
    text: "框架",
    collapsed: false,
    base: "/frontend/frame",
    items: [
      { text: "Vue", link: "/vue" },
      { text: "Quasar", link: "/quasar" },
    ],
  },
  {
    text: "库",
    collapsed: false,
    base: "/frontend/library",
    items: [{ text: "通用库", link: "/general" }],
  },
];
