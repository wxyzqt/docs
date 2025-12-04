// 汇编 侧边导航栏
export default [
  {
    text: "代码分析",
    collapsed: false,
    base: "/os/code-analysis",
    items: [
      { text: "硬件认知", link: "/01" },
      { text: "os开发配置", link: "/02" },
      { text: "从汇编开始", link: "/03" },
      { text: "从磁盘扇区加载数据", link: "/04" },
      { text: "从文件系统加载数据", link: "/05" },
      { text: "开始c语言的内核部分", link: "/06" },
      { text: "收尾", link: "/07" },
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
      { text: "x86实模式内存布局", link: "/rm-memory-layout" },
      { text: "中断", link: "/interrupt" },
      { text: "描述符表", link: "/gdt-ldt" },
    ],
  },
];
