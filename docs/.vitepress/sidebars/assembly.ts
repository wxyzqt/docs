// 汇编 侧边导航栏
export default [
  {
    text: "前置知识",
    collapsed: false,
    base: "/assembly",
    items: [
      { text: "数据结构和算法", link: "/algorithm" },
      { text: "硬件认知", link: "/hardware" },
      { text: "位操作", link: "/bitOperate" },
      { text: "操作系统", link: "/os" },
      { text: "操作系统模式", link: "/osm" },
      { text: "专业词汇", link: "/words" },
    ],
  },
  {
    text: "汇编",
    collapsed: false,
    base: "/assembly",
    items: [
      { text: "BIOS", link: "/bios" },
      { text: "架构、指令集、编译器", link: "/framework-order-compiler" },
      { text: "寄存器", link: "/register" },
      { text: "64位", link: "/os-64" },
      { text: "UEFI", link: "/uefi" },
      { text: "指令", link: "/order" },
      { text: "NASM", link: "/nasm" },
    ],
  },
];
