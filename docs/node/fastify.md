# Fastify

## 链接

[fastify](https://github.com/fastify/fastify)

[中文文档](https://github.com/fastify/docs-chinese)

[中文网站](https://www.fastify.cn/)

## 优点

速度快；支持 ts；提供的`JSON Schema`在路由方面的表现相当好；生态已经丰富起来，并且集成相对可控。

## 不算缺点的缺点

fastify 本身及其官方生态配套库基本采用 commonjs。

ESM 已经被立为标准推行很多年，但是在 nodejs 环境，大部分主流库还是 cjs，koa 也是。

所以说这并不算 fastify 本身的缺点。

但是 cjs 和 mjs 混用，某些情况下会产生一些令人无语的问题。

以`fastify-cli`为例。

fastify 有自己的命令行工具[Fastify-CLI](https://www.npmjs.com/package/fastify-cli)，生成的项目交由 fastify 启动。

其配置项`--config`接受一个配置文件，要注意的是，仅接收`cjs`文件，以下是其源码库中摘取的相关内容。

```js
const configFileOptions = commandLineArguments.config
  ? requireModule(commandLineArguments.config)
  : undefined;

function requireModule(moduleName) {
  if (fs.existsSync(moduleName)) {
    const moduleFilePath = path.resolve(moduleName);
    return require(moduleFilePath);
  } else {
    return require(moduleName);
  }
}

module.exports = {
  port: 5000,
  address: "fastify.dev:9999",
  prefix: "FASTIFY_",
  watch: true,
  prettyLogs: true,
  debugPort: 4000,
  pluginTimeout: 9 * 1000,
  closeGraceDelay: 1000,
};
```

可以看出，仅通过函数内的`require`接受配置文件，且要求配置文件的导出方式仅能通过顶层`module.exports`导出，实践验证`module.exports`也不能通过导出函数动态返回配置。

对于开发的`esm`项目，想要导入动态配置文件，如果第三方库本身没考虑到这种情况（或者说大部分情况下很难会遇到这种情况）。

解决方法要么为配置文件单独采用 cjs 模块，要么写上那么一些`妥协代码`。

这就在`esm`的开发项目和依赖库之间产生了分歧。

### 小结

总的来说，前端环境 esm，node 环境 commonjs 还是目前以及相当长一段时间内的推荐开发方式。
