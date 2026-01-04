# cargo

Cargo 是 Rust 的官方包管理器和构建工具。它负责：

- 管理项目依赖（第三方库）
- 编译代码
- 运行测试
- 构建文档
- 发布包到 crates.io

cargo new <项目名>：新建一个 Rust 项目

cargo init：在当前目录初始化一个 Cargo 项目

cargo build：编译项目

cargo run：编译并运行项目

cargo check：快速检查代码是否能编译（不生成可执行文件）

cargo test：运行测试

cargo clean：清理构建生成的文件

cargo doc：生成文档

cargo update：更新依赖

cargo add <包名>：添加依赖（需要安装 cargo-edit）

cargo remove <包名>：移除依赖（需要安装 cargo-edit）

cargo fmt：格式化代码（需要安装 rustfmt）

cargo clippy：代码静态检查（需要安装 clippy）

cargo publish：发布包到 crates.io

cargo install <包名>：安装二进制包

cargo uninstall <包名>：卸载二进制包
