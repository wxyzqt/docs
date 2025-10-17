// 前端页导航栏
export default [
  {
    text: "前端",
    collapsed: false,
    base: "/basic",
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
    text: "JS原理速通",
    collapsed: false,
    items: [
      { text: "数据类型", link: "/getType" },
      { text: "数组", link: "/array" },
      { text: "字符串", link: "/string" },
    ],
  },
];
