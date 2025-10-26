# NASM

## 链接

[github](https://github.com/netwide-assembler/nasm)

[website](https://www.nasm.us/)

## 本地文档

[pdf](/nasm/nasmdoc.pdf)

[html](/nasm/html/nasm00.html)

## 语法

### 命令行语法

```sh
nasm -f <format> <filename> [-o <output>]

# example
nasm -f elf myfile.asm
```

### 指令

指令语句：机器指令，转换成机器代码

宏指令：复杂指令的简写，预处理阶段展开成指令或数据

伪指令：nasm 特有的控制指令，管理源代码的组织和目标代码的生成

#### 指令语句

| 分类       | 指令                              |
| :--------- | :-------------------------------- |
| 数据传送   | MOV, PUSH, POP, XCHG              |
| 算数运算   | ADD, SUB, MUL, DIV, INC, DEC      |
| 逻辑运算   | AND, OR, XOR, NOT, SHL, SHR       |
| 控制转移   | JMP, CALL, RET, LOOP, JE, JNE     |
| 字符串操作 | MOVSB, CMPSB, SCASB, LODSB, STOSB |
| 处理器控制 | NOP, HLT, CLI, STI                |

#### 宏指令

| 分类     | 宏指令                     |
| :------- | :------------------------- |
| 宏定义   | %macro, %endmacro          |
| 宏变量   | %define, %xdefine, %assign |
| 条件宏   | %if, %elif, %else, %endif  |
| 重复宏   | %rep, %endrep              |
| 文件包含 | %include                   |

#### 伪指令(汇编器指令)

DB, DW, DD, DQ, DT, DO, DY, DZ;

RESB, RESW, RESD, RESQ, REST, RESO, RESY and RESZ;

INCBIN

EQU

TIMES

### 文件组织结构

段声明（Section Declarations）: 指明后续代码或数据属于哪个段。

汇编指令（Assembly Instructions）: 定义程序执行的具体指令。

数据定义（Data Definitions）: 指定程序中使用的数据。

宏定义（Macro Definitions）: 为了提高代码复用性，可以定义宏。

源代码注释（Source Code Comments）: 提高代码可读性，不会被编译。
