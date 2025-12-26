# 手册

技术手册收集仓库

## 目的

伴随着技能成长，通常需要查阅的文档手册越来越多。

- 博客需要翻阅文档；
- 个人网站维护需要耗费过多精力；
- 书签使用不算方便；
- 在线导航页签定制麻烦且需要考虑网站存续问题。

- 基于以上考虑和以下目的，创建本仓库
  - 收集和归纳技术文档的官方手册或链接
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

想要在此基础上创建自己仓库的朋友，可修改以下文件:

index.md，默认的首页文件

.vitepress/config.ts，网站配置

.vitepress/sidebar.ts，顶部导航栏配置

.vitepress/sidebars/，左侧导航栏配置文件夹

本仓库采用的是 vitepress，想要更丰富的外观和功能可以根据[vitepress github](https://github.com/vuejs/vitepress)或[vitepress 中文](https://vitepress.dev/zh/)自行修改。

## 更新

伴随时间推移，本仓库内容会不定期更新，但仍以最初目的为宗旨。

同时对于收录的链接，保持最低一年一次频率的质量审查，删除过时链接和内容。

## 说明

- 仓库提供的链接以官方网站和 github 仓库为准，部分情况提供中文网址
- 仓库是极具个人特色的手册仓库，所以最佳用法是：copy 到本地，根据自己的需求稍加修改后变为自己的仓库。
