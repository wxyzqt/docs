# 环境配置

## 链接

[github](https://github.com/rust-lang/rust)

[官网](https://www.rust-lang.org/)

[rustup-init 下载地址](https://rust-lang.org/tools/install/)

[std](https://doc.rust-lang.org/std/)

[cargo](https://doc.rust-lang.org/cargo/)

[crates.io](https://crates.io/)

[RsProxy](https://bytedance.larkoffice.com/docx/Fa6vdnOgQoTDLcxGjwAcU0qdnCf)

[Rust 程序设计语言 英文在线](https://doc.rust-lang.org/stable/book/)

[Rust 程序设计语言 中文在线](https://kaisery.github.io/trpl-zh-cn/title-page.html)

[Rust 小抄](https://cheats.rs/)

[Rust 中文社区](https://rustcc.cn/)

[rustlings](https://rustlings.rust-lang.org/)

## rustup-init

默认安装在`C:\Users\用户\`

安装在其他目录，采用默认配置

- 默认主机架构：自动检测（通常是 x86_64-pc-windows-msvc）
- 默认工具链：stable
- 是否修改 PATH：会自动将 `%USERPROFILE%\.cargo\bin` 添加到用户`PATH`
- 安装配置：default（包含常用组件）

```powershell
rustup-init.exe --prefix D:\Rust
```

## cargo 命令行别名

```PowerShell
Set-Alias c cargo
```

```bash
alias c='cargo'
```

## crates.io 镜像

修改或新建配置文件，`安装目录\.cargo\config.toml`

```text
[source.crates-io]
replace-with = 'ustc'

[source.ustc]
registry = "https://mirrors.ustc.edu.cn/crates.io-index"
```

## vscode

[官方推荐插件](https://code.visualstudio.com/docs/languages/rust#_installation)

rust-analyzer

> > 作用：智能补全、语法高亮、代码导航、重构、诊断等

crates

> > 作用：在 Cargo.toml 中自动补全和管理依赖版本

codelldb

> > 作用：Rust 调试支持（与 rust-analyzer 配合使用）
