// 汇编 侧边导航栏
export default [
  {
    text: "教程",
    collapsed: false,
    base: "/os/tutorial",
    items: [
      { text: "全貌认知", link: "/01" },
      { text: "os开发配置", link: "/02" },
      { text: "从汇编开始", link: "/03" },
    ],
  },
  {
    text: "环境部署",
    collapsed: false,
    base: "/os/env",
    items: [
      { text: "开发环境", link: "/devenv" },
      { text: "bochs", link: "/bochs" },
      { text: "qemu", link: "/qemu" },
      { text: "模拟调试器对比", link: "/debugercompare" },
    ],
  },
  {
    text: "必备知识",
    collapsed: false,
    base: "/os/list",
    items: [
      { text: "词汇缩写", link: "/words" },
      { text: "Makefile", link: "/makefile" },
    ],
  },
];
