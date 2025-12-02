# QEMU 调试

## 概述

QEMU 本身不提供图形化调试界面，而是通过一个 ‌GDB 调试存根来工作。当 QEMU 以调试模式启动时，它会开放一个端口（通常是 TCP 1234），等待 GDB 客户端连接。一旦连接建立，GDB 就能像调试本地程序一样，调试整个正在运行的虚拟机（包括 BIOS、引导程序、操作系统内核）。

核心优势：‌
利用 GDB 的全部功能 ‌：可以使用你熟悉的 GDB 命令和脚本。
源码级调试 ‌：如果编译时带有调试信息，可以直接对应到源代码行。
观察整个系统 ‌：可以检查物理内存、寄存器、设备状态，不受限于特定进程。

## 启动调试模式

要让 QEMU 等待 GDB 连接，需要在启动命令中加入特定参数。

### 基本调试参数

```bash
qemu-system-x86_64 -s -S -kernel mykernel.bin
```

`-s`：快捷选项 ‌，等价于 -gdb tcp::1234。告知 QEMU 在 TCP 端口 1234 上等待 GDB 连接。

`-S`：冻结 CPU‌ 在启动状态。QEMU 启动后不会执行任何指令，直到 GDB 发出继续执行的命令（continue）。‌ 确保你能从第一条指令开始调试。

`-kernel`： 用于加载一个裸机内核文件。

执行此命令后，QEMU 窗口会显示为黑色（或暂停状态），命令行也似乎“卡住”，这是正常的，它在等待 GDB。‌

### 其他有用的调试相关参数

```bash
qemu-system-x86_64 -s -S -d cpu_reset -D qemu.log -kernel mykernel.bin
```

`-d <item>`： 启用对特定项目（如 cpu_reset, int, exec 等）的日志输出。
`-D <logfile>`： 将日志输出到指定文件。

## 连接 GDB 并进行调试

需要另一个终端窗口来运行 GDB

### 准备 GDB

对于系统编程，通常使用 gdb 或交叉编译的 xgdb。建议使用 .gdbinit 文件或 -ix 参数来预加载辅助调试脚本，这能极大提升体验。

强烈推荐使用官方的 gdbinit 脚本 ‌（通常包含在 QEMU 源码目录或 OS 开发教程中）：

```bash
gdb -ix path/to/gdbinit
```

如果没有，可以手动在 GDB 中执行以下核心命令。

### 建立连接与基础设置

在 GDB 中执行：

```bash
(gdb) target remote localhost:1234 # 连接到正在等待的 QEMU
(gdb) set architecture i386:x86-32 # 根据你的目标设置正确的架构
(gdb) symbol-file kernel.bin # 加载内核的符号表！这是源码调试的关键。
```

连接成功后，GDB 会显示当前暂停的地址（通常是 0xfff0，即 BIOS 入口点）。

### 核心 GDB 调试命令（针对 QEMU）

执行控制：‌

`c 或 continue`： 连续执行，直到遇到断点。
`si`：汇编指令级单步 ‌。执行一条机器指令。
`s`：源码级单步（如果已加载符号和源码）。
`nexti`： 单步跳过，遇到 call 指令时不进入函数。
`Ctrl+C`： 中断 QEMU 的运行，返回 GDB 提示符。

断点设置：‌

`b *0x7c00`： 在物理地址 0x7c00（MBR 加载地址）设置断点。
`b kernel_main`： 如果加载了符号，可以直接在函数入口设断点。
`info breakpoints`： 列出所有断点。
`delete <number>`： 删除指定编号的断点。

信息查看：
‌
`info registers`： 显示所有通用寄存器。
`info registers eax`： 显示特定寄存器（如 EAX）。
`x/8bx 0x7c00`： ‌ 检查内存 ‌。以十六进制字节形式显示 0x7c00 开始的 8 个字节。
格式：`/nfu <addr>`

- n： 单元数量
- f： 格式（x-十六进制, i-指令, s-字符串）
- u： 单元大小（b-字节, h-半字, w-字, g-巨字）

`print $eax`： 打印 EAX 寄存器的值。
`disassemble`： 反汇编当前指令附近的代码。

## 流程示例

一个典型的操作系统启动调试过程。
启动并连接 ‌：

```bash

# 终端 1: 启动 QEMU
qemu-system-x86_64 -s -S -kernel mykernel.bin

# 终端 2: 启动 GDB 并连接
gdb
(gdb) target remote localhost:1234
(gdb) symbol-file mykernel.bin
```

调试 BIOS 和 MBR 加载 ‌：
连接后，CPU 暂停在 BIOS 区域。输入 c 连续执行。BIOS 会进行自检并加载 MBR。

在引导扇区入口点中断 ‌：
在 GDB 中预先设置断点，然后继续执行，直到引导扇区被加载。

```bash
(gdb) b *0x7c00 # 在 MBR 的物理入口地址设断点
(gdb) c
```

当 BIOS 将 MBR 加载到 0x7c00 并跳转过去时，GDB 会在此中断。

单步跟踪引导程序 ‌：
使用 si 逐条指令跟踪 MBR 的执行。使用 x/10i $pc 可以随时查看后续即将执行的指令。

调试内核加载和跳转 ‌：
当引导程序从磁盘加载你的内核并准备跳转时，在跳转地址（或内核入口函数）设置断点。

```bash
(gdb) b kernel_main # 假设你的内核入口函数是 kernel_main
(gdb) c
```

源码级调试内核 ‌：
在 kernel_main 中断后，你就可以像调试普通应用程序一样使用 s（源码单步）、next（源码跳过）等命令了。

## 最佳实践

布局与自动化 ‌： 使用 GDB 的 TUI 模式（gdb -tui 或 Ctrl+X A）可以同时查看源码、汇编和寄存器。

使用 QEMU 特定的 GDB 助手 ‌： 如果加载了 gdbinit 脚本，可以使用一些强大的命令：

- `xp /10wx 0x100000`： ‌ 检查物理内存 ‌（类似于 Bochs 的 xp）。这是普通 GDB x 命令的扩展，因为 GDB 默认查看的是虚拟地址。

- `info registers -a`： 显示所有寄存器，包括系统寄存器（如 CR0, CR3, EFER 等）。

处理页表 ‌： 当系统启用分页后，调试会变得复杂。记住：

- GDB 的 x 命令查看的是 ‌ 虚拟地址
- QEMU 助手的 xp 命令查看的是 ‌ 物理地址
- 当出现页错误时，查看 CR2 寄存器（print $cr2）以获取出错的线性地址。

模拟硬件故障：可以通过 GDB 手动修改内存或寄存器来模拟硬件错误，测试系统的健壮性。
