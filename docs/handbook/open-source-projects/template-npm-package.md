# template-npm-package

[github](https://github.com/wxyzqt/template-npm-package)

旨在提供一个 npm 包开发模板，减少工程配置，保证一致性。

## 模板提供的功能

| 文件夹/文件      | 概述                                                      |
| :--------------- | :-------------------------------------------------------- |
| .husky           | git 提交钩子                                              |
| .vscode          | vscode 跟随项目的配置 json 文件                           |
| dist             | 输出目录                                                  |
| docs             | 包文档                                                    |
| src              | 源代码目录                                                |
| test             | 测试目录                                                  |
| .gitattributes   | 统一项目换行符,避免 git 产生的不一致                      |
| .gitignore       | git 提交忽略文件                                          |
| .prettiergnore   | prettier 格式化忽略文件                                   |
| .prettierrc      | 为空，提示 IDE 使用 prettier，采用默认配置                |
| eslint.config.ts | eslint 配置，与 ts 结合                                   |
| LICENSE.md       | 开源许可证，默认 ISC                                      |
| rollup.config.ts | rollup 打包配置，已提供 es、cjs、umd 以及类型声明文件示例 |
| tsconfig.json    | ts 配置                                                   |
| typedoc.json     | typedoc 配置                                              |
