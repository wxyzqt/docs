# 常用 windows 命令

[PowerShell 文档](https://learn.microsoft.com/zh-cn/powershell/)

## CMD 和 PowerShell 关系

CMD（命令提示符）和 PowerShell 是 Windows 系统中两种不同的命令行工具

### 关系

- **兼容性**：PowerShell 向下兼容 CMD 的大部分命令（如 `dir`、`cd` 等）。
- **替代性**：PowerShell 是 CMD 的增强版，功能更强大，逐渐成为 Windows 系统的默认命令行工具。
- **共存性**：CMD 和 PowerShell 可以同时存在，可以根据需求选择使用。

### 选择建议

- **简单任务**：如文件操作、运行批处理脚本，使用 CMD 即可。
- **复杂任务**：如系统管理、任务自动化、跨平台脚本，推荐使用 PowerShell。

总结来说，PowerShell 是 CMD 的现代化替代工具，但 CMD 仍然适合一些简单的任务。

## CMD 和 VS Code 终端对比

| 特性       | VS Code 终端                  | CMD（命令提示符）        |
| :--------- | :---------------------------- | :----------------------- |
| 集成性     | 集成在 VS Code 中             | 独立运行                 |
| Shell 支持 | 支持 CMD、PowerShell、Bash 等 | 仅支持 CMD               |
| 多终端支持 | 支持                          | 不支持                   |
| 跨平台     | 支持（Windows、Linux、macOS） | 仅支持 Windows           |
| 适用场景   | 开发环境、代码调试            | 系统管理、运行批处理脚本 |

## 文件和目录操作

- `dir`：列出当前目录中的文件和文件夹。
- `cd [目录名]`：切换到指定目录。
- `cd ..`：返回上一级目录。
- `md [目录名]` 或 `mkdir [目录名]`：创建新目录。
- `rd [目录名]` 或 `rmdir [目录名]`：删除空目录。
- `del [文件名]`：删除文件。
- `copy [源文件] [目标路径]`：复制文件。
- `move [源文件] [目标路径]`：移动文件或重命名文件。

## 系统信息

- `systeminfo`：显示系统详细信息。
- `hostname`：显示计算机名称。
- `ipconfig`：查看网络配置信息。
- `tasklist`：列出当前运行的进程。
- `taskkill /PID [进程ID] /F`：强制终止指定进程。

## 磁盘操作

- `chkdsk [盘符:]`：检查磁盘错误。
- `diskpart`：进入磁盘管理工具。
- `format [盘符:]`：格式化磁盘。

## 网络相关

- `ping [地址]`：测试网络连接。
- `tracert [地址]`：跟踪路由路径。
- `netstat`：显示网络连接状态。
- `net user`：查看用户信息。
- `net use`：管理网络共享。

## 其他常用命令

- `cls`：清屏。
- `echo [内容]`：输出内容到命令行。
- `type [文件名]`：显示文件内容。
- `shutdown /s /t [秒数]`：定时关机。
- `shutdown /r /t [秒数]`：定时重启。

这些命令可以在 Windows 的命令提示符（CMD）或 PowerShell 中使用。
