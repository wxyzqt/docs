# 序言

[rust](https://github.com/rust-lang/rust)仓库主要包含了以下内容：

- Rust 编译器（rustc）：Rust 语言的核心编译器源码。
- 标准库（library/std）：Rust 官方标准库实现。
- 工具链相关工具：如 rustdoc（文档生成）、rustfmt（格式化）、测试工具等。
- 语言测试用例：大量编译器和标准库的测试代码。
- 文档：包括用户手册、开发者文档、API 文档等。
- 构建脚本和 CI 配置：自动化构建、测试和发布相关脚本。
- 贡献指南和 RFC 链接：开发者参与 Rust 语言开发的说明和流程。

## 阅读标准库

标准库位于`library`目录下

按照 core → alloc → std → proc_macro → test 顺序阅读

### core

位置：library/core
内容：最基础的数据类型（如 Option、Result）、traits（如 Iterator、Clone）、基本运算、slice/string、数学、错误处理等。
目标：理解 Rust 的基础类型和 trait 体系。

### alloc

位置：library/alloc
内容：堆分配相关类型（如 Vec、String、Box）、集合（如 VecDeque、BTreeMap、BinaryHeap）。
目标：了解动态内存分配和集合实现。

### std

位置：library/std
内容：标准库完整实现，包含 I/O、文件、网络、线程、同步、进程等高级功能。
目标：关注其如何组合和扩展底层功能。

### proc_macro

位置：library/proc_macro
内容：过程宏相关 API
目标：了解 Rust 的宏系统和编译期扩展

### test

位置：library/test
内容：测试框架实现
目标：了解 Rust 的测试机制。
