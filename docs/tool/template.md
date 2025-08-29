# 模板仓库

常用环境配置设置为模板仓库，有利于开发维护。

[创建模板仓库](https://docs.github.com/zh/repositories/creating-and-managing-repositories/creating-a-template-repository)

## 使用模板仓库

要保留.git 文件,但不需要历史记录

```sh
git clone --depth 1 repo-url
```

.git 文件和历史记录都不保留，则可以直接下载 zip

## 现有模板仓库

| 仓库名称                                                                       | 目的                             |
| :----------------------------------------------------------------------------- | :------------------------------- |
| [template-npm](https://github.com/wxyzqt/template-npm)                         | npm 包和 node 项目模板           |
| [template-fastify](https://github.com/wxyzqt/template-fastity)                 | 采用 fastify 的 web 服务         |
| [template-quasar-vue3](https://github.com/wxyzqt/template-quasar-vue3)         | 基于 quasar 的 vue3 自适应前端   |
| [template-quasar-electron](https://github.com/wxyzqt/template-quasar-electron) | 基于 quasar 的 electron 桌面应用 |

### 共有基建

| 功能             | 采用工具      | 概述                      |
| :--------------- | :------------ | :------------------------ |
| IDE              | vscode        | [插件和扩展](./vscode.md) |
| IDE 代码格式化   | prettier      | IDE 设置保存时自动格式化  |
| 源代码规范       | typescript    | 默认采用 ts               |
| 源代码检查       | eslint        | 采用默认配置              |
| 源代码提交钩子   | husky         | pre-commit 钩子           |
| 源代码提交格式化 | prettier      | 提交前自动格式化兜底      |
| ts 实用类型      | utility-types | 减少类型体操              |
| 使用工具         | lodash-es     | 减少无状态功能函数        |

### 特质化基建

| 功能         | template-npm | template-fastify | template-quasar-vue3 | template-quasar-electron |
| :----------- | :----------- | :--------------- | :------------------- | :----------------------- |
| 文档注释工具 | typedoc      | typedoc          | vitepress            | vitepress                |
