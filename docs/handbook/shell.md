# Shell

Shell 脚本是一种用来编写和执行 Shell 命令的脚本文件。它是由一系列 Shell 命令组成的文本文件，通常用于自动化执行任务、批量处理文件、系统管理等。

[Bash 脚本教程 中文](https://wangdoc.com/bash/intro)

[Bash 查询手册](https://ss64.com/bash/)

## Shell 的定义

- **Shell** 是操作系统的命令解释器，用于接收用户输入的命令并将其传递给操作系统执行。
- 常见的 Shell 包括：
  - **Bash**（Linux 和 macOS 默认 Shell）
  - **Zsh**
  - **Sh**
  - **PowerShell**（Windows）
  - **CMD**（Windows）

## Shell 脚本的特点

- **扩展性**：可以将多个命令组合在一起，形成复杂的任务。
- **自动化**：减少手动操作，适合重复性任务。
- **跨平台**：大多数 Shell 脚本可以在不同的类 Unix 系统上运行（如 Linux 和 macOS）。

## Shell 脚本的基本结构

- **文件格式**：Shell 脚本是普通的文本文件，通常以 `.sh` 为扩展名。
- **首行声明**：脚本文件的第一行通常是 `#!/bin/bash`，用于指定解释器。
- **命令和逻辑**：脚本中可以包含命令、变量、条件语句、循环等。

**示例**：

```bash
#!/bin/bash
# 这是一个简单的 Shell 脚本

echo "Hello, World!"  # 输出文本
name="GitHub Copilot"
echo "My name is $name"  # 使用变量
```

---

## Shell 脚本的用途

- **系统管理**：如备份、日志管理、用户管理。
- **自动化任务**：如定时任务、批量文件处理。
- **开发辅助**：如构建、测试、部署脚本。
- **网络操作**：如自动化文件传输、网络监控。

## 如何运行 Shell 脚本

赋予执行权限：

```bash
chmod +x script.sh
```

运行脚本：

```bash
./script.sh
```

或者直接通过解释器运行：

```bash
bash script.sh
```

总结来说，Shell 脚本是强大的工具，适合用来简化和自动化各种任务，尤其是在类 Unix 系统中。
