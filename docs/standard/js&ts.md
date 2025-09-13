# js && ts 项目规范

## 共识

`node项目`、`前端界面`、`npm包`开发，无论项目大小用途，应当遵循以下几点：

1. 开发环境便捷，IDE 自动保存，保存时自动格式化
2. 项目采用统一代码检查和格式化
3. 代码提交应有钩子兜底
4. 随项目附带开发文档

:::tip
通常主流`前端框架`或`node项目`提供 cli 模板，建议使用其模板，而后根据需要添加步骤 1-4 中任意部分或全部。

这里分 4 步，只是为了更清晰展现其功能，并无逻辑顺序关系。
:::

## 步骤 1

创建.vscode 配置文件夹
.vscode/extensions.json

```json
{
  "recommendations": ["esbenp.prettier-vscode", "dbaeumer.vscode-eslint"]
}
```

.vscode/settings.json

```json
{
  "files.autoSave": "onFocusChange"
}
```

:::tip
还有一些 vscode 项目常用配置文件，[常用基础配置文件](/handbook/software-development-fundamentals/vscode.html#%E5%B8%B8%E7%94%A8%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
:::

## 步骤 2

使用 eslint 约束代码质量，使用 Prettier 格式化代码,尽量采用默认设置

### 配置 eslint

```cmd
npm init @eslint/config@latest
```

```js
//  eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",
    },
  },
]);
```

#### 配置 ts-eslint

ts 项目，采用此种方式

```cmd
npm install --save-dev eslint @eslint/js typescript typescript-eslint
```

项目根目录创建 eslint.config.mjs

```js
// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended
);
```

### 配置 prettier

```cmd
安装精确版本的prettier
npm install --save-dev --save-exact prettier
生成配置文件
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
生成忽略文件
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
使用
npx prettier . --write
检查文件是否已经格式化
npx prettier . --check
安装eslint-config-prettier，用于关闭eslint和prettier冲突的部分
npm i -D eslint-config-prettier
```

安装 eslint-config-prettier 后，需要在.eslintrc 或者 eslint.config.js 文件扩展中添加**prettier**并放在数组最后一位。

::: code-group

```js:line-numbers{2,6} [eslint.config.js]
import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  someConfig,
  eslintConfigPrettier,
];
```

```js:line-numbers{4} [.eslintrc]
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
    ]
}
```

:::

## 步骤 3

### 添加 git hooks

husky 是 git pre-commit 的钩子，lint-staged 对 git add 之后的暂存区文件检查

```cmd
npm install --save-dev husky lint-staged
npx husky init
node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"
```

以下添加到 package.json

```json
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

## 步骤 4

开发文档大致分两种类型：

- 普通项目的配套文档，使用[vitepress](https://vitepress.dev/zh/guide/what-is-vitepress)；
- `npm包`的开发文档，使用[typedoc](https://typedoc.org/)

具体介绍在[开源项目](/handbook/open-source-projects/)目录下

### 项目配套文档

提供两种模板仓库，js 和 ts 项目各一种

### npm 包开发文档

作为`npm包`的开发者而非使用者，ts 是基本要求，所以只提供 ts 一种文档方式。

`npm包`开发文档单独做为一个仓库意义不大，所以此项对应的开源项目提供了完整的包开发模板。

包括：开发环境配置、格式化、代码检查、提交钩子、配套文档生成、测试以及打包工具。

## 链接

[eslint](https://github.com/eslint/eslint?tab=readme-ov-file#installation-and-usage)

[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

[prettier](https://prettier.io/docs/install)

[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
