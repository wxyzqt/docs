# 如何发布 NPM 包

## 本地开发调试

1. 开发目录下链接包到全局

```sh
npm link
```

2. 解除链接

```sh
 npm unlink <module-name> -g
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

淘宝镜像

```sh
npm config set registry=https://registry.npm.taobao.org
```

4. 进入项目目录

```sh
npm publish
```

```sh
npm publish --access public
```

5. 更新版本
   major|minor|patch

```sh
npm version <update_type>
npm publish
```

6. 更新自述文件（npm 包介绍）

```sh
npm version patch
npm publish
```

:::tip
npm 包发布成功后，`unpkg.com/<pkgName>/<path>`可以拿到 cdn
:::
