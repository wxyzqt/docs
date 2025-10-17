// 规范页侧边导航栏
export default [
  {
    text: "基础规范",
    collapsed: false,
    items: [
      { text: "git提交", link: "/git" },
      { text: "语义化版本", link: "/semver" },
      { text: "docker", link: "/docker" },
      { text: "k8s", link: "/k8s" },
      { text: "配置文件", link: "/config-file" },
    ],
  },
  {
    text: "JavaScript相关",
    collapsed: false,
    items: [
      { text: "js & ts", link: "/js&ts" },
      { text: "npm包", link: "/npm-pkg" },
    ],
  },
];
