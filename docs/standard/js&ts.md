# js && ts 项目规范

简单一点，使用 eslint 约束代码质量，使用 Prettier 格式化代码，结合 CI 流程，尽量采用默认设置。

[eslint](https://github.com/eslint/eslint?tab=readme-ov-file#installation-and-usage)

[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

[prettier](https://github.com/prettier/eslint-config-prettier)

[prettier docs](https://prettier.io/docs/install)

## 使用

这种方式可以在不同 IDE 实现对单个项目的代码质量控制，同时具备了可移植和灵活性。

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

::: tip
使用 vscode 开发，通常安装扩展 prettier，并设置自动保存时格式化。
这与 package.json 里的 prettier 作用不同，IDE 帮助开发时格式化，package.json 则是在提交时兜底。
:::

### 添加 git hooks

husky 是 git pre-commit 的钩子，lint-staged 对 git add 之后即暂存区文件检查

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
