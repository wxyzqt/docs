# 开发环境

本栏的目的就是以最方便的方式接触操作系统开发，所以直接在 windows 上开发即可。

clone [os](https://github.com/wxyzqt/os)仓库之后`setup/`目录下即 windows 的开发环境安装包。

分别对应 虚拟机 bochs、交叉编译器 i686、汇编编译器 nasm、虚拟机 qemu。

bochs 和 qemu，推荐阅读[bochs](./bochs)、[qemu](./qemu)、[调试模拟器对比](./debugercompare)之后按喜好选择一个。

:::tip
如果选择 bochs 调试，请注意将仓库根目录中`bochsrc`配置文件路径改为自己的路径。
:::

记得安装完毕后，将对应软件的`bin`目录添加到系统环境变量。

我使用的 vscode 编辑器，在终端中，输入以下命令，能正确输出即可。

```cmd
bochs -v

i686-elf-gcc -v

nasm -v

qemu-system-i386 --version
```

还有一个 msys2 的安装包是我在学习过程中使用的终端，可能在教程之外的延伸知识用到其工具包。

msys2 是 windows 平台的 Unix 开发环境，目前可以忽略。

在 vscode 中安装了以下插件

```md
GNU Assembly Syntax Highlighter

Hex Editor

C/C++ Extension Pack
```

插件主要用于简化开发，可以自行对等替换或补充。
