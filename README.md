# 资料手册

技术资料收集仓库

## 目的

伴随着技术人员成长，通常需要查阅的文档资料越来越多。

- 博客需要翻阅文档；
- 个人网站维护需要耗费精力；
- 书签使用不算方便；
- 在线导航页签定制麻烦且需要考虑网站存续问题。

- 基于以上考虑和以下目的，创建本仓库
  - 收集和归纳技术文档的官方资料手册
  - 保存有价值且相对恒定的技术信息
  - 简洁且便于个性化修改

## 用法

需要`node`和`git`环境

```sh

git clone --depth=1 https://github.com/wxyzqt/docs

cd docs

npm i

npm run docs

```

## 修改

想要在此基础上创建自己仓库的朋友，修改以下文件:

docs/index.md，默认的首页文件

.vitepress/config.ts，网站配置

.vitepress/sidebar.ts，导航栏配置

.vitepress/sidebars/，导航栏配置文件夹

本仓库采用的是 vitepress，想要更丰富的外观和功能可以根据[vitepress](https://github.com/vuejs/vitepress)或[vitepress 中文](https://vitepress.dev/zh/)自行修改。

## 更新

伴随时间推移，本仓库内容会不定期更新，但仍以最初目的为宗旨。
同时对于收录的链接，保持最低一年一次频率的质量审查，删除过时链接和内容。

## 最后

本仓库是极具个人主观特色的资料手册仓库模板，所以最佳用法是：copy 到本地，根据自己的需求稍加修改后变为自己的仓库。
