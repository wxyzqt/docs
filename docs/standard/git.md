# git 提交规范

[约定式提交](https://github.com/conventional-commits/conventionalcommits.org)

[约定式提交 中文网站](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

## 规范化每次提交的内容

> 常用提交

- feature: 功能新增
- fix: 修复 bug
- docs: 项目文档修改
- test: 测试用例，包括单元测试、集成测试等

> 基建类型的提交

- chore: 改变构建流程、增加依赖库、工具等
- refactor: 代码重构
- perf: 优化相关，如提升性能、用户体验等
- revert: 版本回滚

## 分支约定

生产分支 main

开发分支 develop/dev

功能开发:feature_time_desc

bug 修复:fix_time_issue

已经解决稳定的 feature 和 fix 分支，应该在 main 生产无误后删除

## 减少临时提交记录

有各种原因，可能需要放弃/暂存正在编辑的内容，切换到其他分支。这种情况可以有两个方式来解决：

1. 使用`git stash`暂存

   - 先将修改的内容暂存，即`git add -A`
   - 使用`git stash`暂存
   - `git stash pop`还原正在之前的内容

   如果有多次 git stash，可以 pop 到指定内容。

2. 提交临时 commit，然后 reset
