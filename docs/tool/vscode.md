# vscode 设置

vscode 本身可以登陆账号，同步设置[Turning on Settings Sync](https://code.visualstudio.com/docs/configure/settings-sync)，下列扩展为本人常用。

## 插件&扩展

Chinese 简体中文

open in browser 打开浏览器

Prettier 代码格式化工具，本人通常使用默认配置，配合 vscode 自动保存，非常好用

vscode-pdf 在 vscode 里面看 PDF

::: tip
通常 pdf 直接使用 chrome 打开体验也不错
:::

markdownlint md 文件语法检查

Markdown Preview Enhanced md 文件预览

gitignore 添加 git 忽略文件十分方便。

:::info 用法
Ctrl+Shift+P,输入 Add gitignore 选择模版即可
:::

Git History git 提交历史本地查看

Regex Snippets 常用正则生成

:::info 用法
Ctrl+Shift+P,输入 Insert Snippet ，选择，而后输入 snippets 即可

[snippets](https://github.com/monizb/vscode-regex-snippets)
:::

::: tip
以上就是最基础的插件，具体到项目或公司自行新增删除，同类型插件也推荐根据个人喜好和功能进行同位替换。
:::

## 代码片段设置

1. 打开命令面板（Ctrl+Shift+P）

2. 输入`Preferences: Configure User Snippets`

3. 选择语言或者创建全局代码片段文件(new global snippets file)

代码片段是一个 json 文件，结构如下。

```json
{
  "代码片段名称": {
    "prefix": "触发关键字",
    "body": ["代码模板的内容", "支持多行"],
    "description": "代码片段的描述"
  }
}
```

示例：快速生成 console.log 语句。

```js
{
  "Console Log": {
    "prefix": "clg",
    "body": ["console.log($1);", "$2"],
    "description": "快速插入 console.log"
  }
}
```

- prefix: 输入 clg 时触发代码片段。

- body: 定义插入的代码内容，$1 和 $2 是光标占位符。

- description: 描述代码片段的用途。

- body 数组内，每一行对应 1 个字符串元素,。

快速生成 tsdoc 文档注释

```json
{
  "tsdoc of typeScript": {
    "prefix": "tsdoc",
    "body": [
      "/**",
      "* 函数说明'$1'",
      "*",
      "* @remarks",
      "* '$2'",
      "*",
      "* @param x - '$3'",
      "* @param y - '$4'",
      "* @returns '$5'",
      "*",
      "* @beta",
      "*/"
    ],
    "description": "快速生成tsdoc文档注释"
  }
}
```
