// 原理页侧边导航栏

export default [
  {
    text: "计算机原理速通",
    collapsed: false,
    items: [
      { text: "硬件", link: "/hardware" },
      { text: "汇编", link: "/assembly" },
      { text: "BIOS", link: "/bios" },
      { text: "操作系统", link: "/os" },
      { text: "字符编码", link: "/characterEncoding" },
      { text: "数据结构和算法", link: "/algorithm" },
      { text: "编程语言对比", link: "/programmingLanguage" },
    ],
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
