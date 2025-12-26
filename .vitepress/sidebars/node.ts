// Node 侧边导航栏
export default [
  {
    text: "Node",
    collapsed: false,
    base: "/node/basic",
    items: [
      { text: "概念", link: "/concept" },
      { text: "NPM", link: "/npm" },
      { text: "webAssembly", link: "/webAssembly" },
    ],
  },
  {
    text: "框架",
    collapsed: false,
    base: "/node/frame",
    items: [
      { text: "Fastify", link: "/fastify" },
      { text: "Koa", link: "/koa" },
    ],
  },
  {
    text: "跨平台",
    collapsed: false,
    base: "/node/cross-platform",
    items: [{ text: "Electron", link: "/electron" }],
  },
];
