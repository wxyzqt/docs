# 语义化版本

[semver](https://github.com/semver/semver)

[semver 中文](https://semver.org/lang/zh-CN/)

## 简述

语义化版本号格式为：MAJOR.MINOR.PATCH，例如 1.2.3。

MAJOR（主版本号）：当有不兼容的重大更改时更新。
MINOR（次版本号）：当添加向后兼容的新功能时更新。
PATCH（修订号）：当进行向后兼容的错误修复时更新。

## 版本编译信息简述

### alpha 版

内部测试版。α 是希腊字母的第一个，表示最早的版本，主要是给开发人员和 测试人员测试和找 BUG 用的。

### beta 版

公开测试版。β 是希腊字母的第二个，这个版本比 alpha 版发布得晚一些，该版本仍然存 在很多 BUG，但是相对 alpha 版要稳定一些。这个阶段版本的软件还会不断增加新功能。

### rc 版

Release Candidate（候选版本），该版本又较 beta 版更进一步了，该版本功能不再增加，和最终发布版功能一样。这个版本有点像最终发行版之前的一个类似预览版。

### stable/release 版

稳定版。这个就是软件的最终发行版。

## 更新 package.json 中的 version

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
