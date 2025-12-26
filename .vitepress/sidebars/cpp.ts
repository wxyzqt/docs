// C++ 侧边导航栏
export default [
  {
    text: "开发环境",
    collapsed: false,
    base: "/cpp/env",
    items: [
      { text: "vscode", link: "/vscode" },
      { text: "编译参数", link: "/compile-args" },
      { text: "标准库", link: "/stdlib" },
    ],
  },
  {
    text: "核心指南",
    collapsed: false,
    base: "/cpp/core-guide",
    items: [
      { text: "命名和风格", link: "/name-style" },
      { text: "类型安全与资源管理", link: "/tsrm" },
      { text: "现代 C++ 特性", link: "/mcpp" },
      { text: "接口设计和抽象", link: "/ia" },
      { text: "性能和效率", link: "/pe" },
      { text: "并发和多线程", link: "/cap" },
      { text: "错误处理", link: "/exception" },
      { text: "库和工具使用", link: "/stl" },
      { text: "可移植性与兼容性", link: "/portability" },
      { text: "安全性", link: "/safe" },
    ],
  },
  {
    text: "基础语法",
    collapsed: false,
    base: "/cpp/syntax",
    items: [
      { text: "变量", link: "/variables" },
      { text: "数据类型", link: "/data-types" },
      { text: "运算符", link: "/operator-character" },
      { text: "流程控制", link: "/process-control" },
      { text: "函数", link: "/function" },
      { text: "数组", link: "/array" },
      { text: "字符串", link: "/string" },
      { text: "指针", link: "/pointer" },
      { text: "引用", link: "/reference" },
    ],
  },
  {
    text: "面对对象编程",
    collapsed: false,
    base: "/cpp/oop",
    items: [
      { text: "类", link: "/class" },
      { text: "对象", link: "/object" },
      { text: "继承", link: "/inherit" },
      { text: "多态", link: "/polymorphic" },
      { text: "虚函数", link: "/virtual-function" },
      { text: "构造/析构函数", link: "/constructor-destructor-function" },
    ],
  },
];
