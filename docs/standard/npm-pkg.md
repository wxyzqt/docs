# 如何发布 NPM 包

## 链接

[creating-and-publishing-scoped-public-packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

## 本地测试包

1. 开发包目录链接包到全局

```sh
# cd 到开发包根目录下,会将开发包链接到全局
npm link

# 查看全局包地址，这时候全局目录会包含开发包的符号链接
npm config get prefix

# 在测试目录中，使用npm link <pkg-name>将下载开发包到测试目录node_modules文件夹
# 开发包修改不必每次重新link，因为本质上是符号链接，直接指向开发包的目录
```

2. 解除链接

```sh
# 开发包
 npm unlink -g <module-name>

# 测试目录不需要参数 -g
```

## 发布

1. npm 官网注册账户

2. 命令行登录

```sh
npm login
username:[your name]
email:[your email]
```

查看登录用户

```sh
npm whoami
```

3. 确认 npm 源是否修改

```sh
npm config set registry=https://registry.npmjs.org
```

4. 进入项目目录

```sh
npm publish
```

```sh
# 作为公共包发布
npm publish --access public
```

:::tip
npm 包发布成功后，`unpkg.com/<pkgName>/<path>`可以拿到 cdn
:::

## 更新

增加主版本号（MAJOR）

```cmd
npm version major
```

增加次版本号（MINOR）

```cmd
npm version minor
```

增加修订号（PATCH）

```cmd
npm version patch
```

直接指定版本

```cmd
npm version <new-version>
```

跳过 git 标签，即不创建 git 标签

```md
npm version patch --no-git-tag-version
```

### 更新 readme

```sh
npm version patch
npm publish
```

## 开发模板

[开源项目](../openSource/template-npm-package.html)目录下提供了一个完整的包开发模板。
