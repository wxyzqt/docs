# NASM

## 链接

[github](https://github.com/netwide-assembler/nasm)

[website](https://www.nasm.us/)

## 本地文档

[pdf](/nasm/nasmdoc.pdf)

[html](/nasm/html/nasm00.html)

## 语法

### 文件组织结构

段声明（Section Declarations）: 指明后续代码或数据属于哪个段。

汇编指令（Assembly Instructions）: 定义程序执行的具体指令。

数据定义（Data Definitions）: 指定程序中使用的数据。

宏定义（Macro Definitions）: 为了提高代码复用性，可以定义宏。

源代码注释（Source Code Comments）: 提高代码可读性，不会被编译。

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

#### 汇编器指令

nasm 指令分两种类型：用户级指令、原始指令。每一条指令都有用户级形式和原始形式。推荐使用用户级指令，它以宏形式运行并调用原始形式指令。

原始指令被包含在方括号中，用户级指令没有括号。

| 指令            | 释义                                  |
| :-------------- | :------------------------------------ |
| bits            | 指定目标处理器模式                    |
| section/segment | 改变和定义段(.text .data .bss)        |
| absolute        | 定义绝对 labels，只能使用 RESB 类指令 |
| extern          | 从其他模块中导入                      |
| global          | 把符号导出到其他模块中                |
| common          | 定义通用数据域                        |
| cpu             | 定义 cpu 相关                         |

#### 伪指令(汇编器指令)

声明已初始化的数据
DB(1 字节), DW(2 字节), DD(4 字节), DQ(8 字节), DT(10 字节), DO, DY, DZ;

声明未初始化数据
RESB, RESW, RESD, RESQ, REST, RESO, RESY, RESZ;

包含其他二进制文件
INCBIN

定义常数
EQU

重复指令或数据
TIMES

#### 宏指令

| 分类     | 宏指令                     |
| :------- | :------------------------- |
| 宏定义   | %macro, %endmacro          |
| 宏变量   | %define, %xdefine, %assign |
| 条件宏   | %if, %elif, %else, %endif  |
| 重复宏   | %rep, %endrep              |
| 文件包含 | %include                   |

### 常用操作指令

#### 数据传送指令

| 指令  | 格式           | 功能描述                       | 示例            |
| :---- | :------------- | :----------------------------- | :-------------- |
| MOV   | MOV 目标, 源   | 将源操作数的值复制到目标操作数 | MOV AX, 10      |
| XCHG  | XCHG 操作数 1, | 操作数 2 交换两个操作数的值    | XCHG AX, BX     |
| MOVZX | MOVZX 目标, 源 | 零扩展传送（无符号数扩展）     | MOVZX EAX, AL   |
| MOVSX | MOVSX 目标, 源 | 符号扩展传送（有符号数扩展）   | MOVSX EAX, AL   |
| LEA   | LEA 目标, 源   | 加载有效地址到目标寄存器       | LEA AX, [BX+SI] |

#### 算术运算指令

| 指令 | 格式         | 功能描述                       | 示例       |
| :--- | :----------- | :----------------------------- | :--------- |
| ADD  | ADD 目标, 源 | 目标 = 目标 + 源               | ADD AX, BX |
| SUB  | SUB 目标, 源 | 目标 = 目标 - 源               | SUB CX, 10 |
| INC  | INC 操作数   | 操作数 = 操作数 + 1            | INC AX     |
| DEC  | DEC 操作数   | 操作数 = 操作数 - 1            | DEC CX     |
| MUL  | MUL 操作数   | 无符号乘法（AX = AL × 操作数） | MUL BL     |
| IMUL | IMUL 操作数  | 有符号乘法                     | IMUL BX    |
| DIV  | DIV 操作数   | 无符号除法                     | DIV BL     |
| IDIV | IDIV 操作数  | 有符号除法                     | IDIV CX    |

#### 逻辑与移位指令

| 指令 | 格式         | 功能描述      | 示例        |
| :--- | :----------- | :------------ | :---------- |
| AND  | AND 目标, 源 | 按位逻辑与    | AND AL, 0FH |
| OR   | OR 目标, 源  | 按位逻辑或    | OR AX, BX   |
| XOR  | XOR 目标, 源 | 按位逻辑异或  | XOR AX, AX  |
| NOT  | NOT 操作数   | 按位逻辑非    | NOT AX      |
| SHL  | SHL 目标,    | 计数 逻辑左移 | SHL AX, 1   |
| SHR  | SHR 目标,    | 计数 逻辑右移 | SHR AX, CL  |
| SAL  | SAL 目标,    | 计数 算术左移 | SAL AX, 1   |
| SAR  | SAR 目标,    | 计数 算术右移 | SAR AX, CL  |
| ROL  | ROL 目标,    | 计数 循环左移 | ROL AX, 1   |
| ROR  | ROR 目标,    | 计数 循环右移 | ROR AX, CL  |

#### 栈操作指令

| 指令   | 格式        | 功能描述               | 示例    |
| :----- | :---------- | :--------------------- | :------ |
| PUSH   | PUSH 操作数 | 将操作数压入堆栈       | PUSH AX |
| POP    | POP 操作数  | 从堆栈弹出数据到操作数 | POP BX  |
| PUSHA  | PUSHA       | 所有通用寄存器入栈     | PUSHA   |
| POPA   | POPA        | 所有通用寄存器出栈     | POPA    |
| PUSHAD | PUSHAD      | 所有 32 位寄存器入栈   | PUSHAD  |
| POPAD  | POPAD       | 所有 32 位寄存器出栈   | POPAD   |

#### 流程控制指令

| 指令    | 格式                    | 功能描述                          | 示例            |
| :------ | :---------------------- | :-------------------------------- | :-------------- |
| JMP     | JMP                     | 目标 无条件跳转                   | JMP label       |
| JE/JZ   | JE                      | 目标 等于/为零时跳转              | JE equal_label  |
| JNE/JNZ | JNE                     | 目标 不等于/不为零时跳转          | JNE not_equal   |
| CALL    | CALL                    | 过程 调用子程序                   | CALL subroutine |
| RET     | RET                     | 从子程序返回                      | RET             |
| LOOP    | LOOP                    | 目标 CX 减 1，若 CX≠0 则跳转      | LOOP loop_start |
| CMP     | CMP 操作数 1, 操作数 2  | 比较两个操作数并设置标志位        | CMP AX, BX      |
| TEST    | TEST 操作数 1, 操作数 2 | 逻辑比较（操作数 1 AND 操作数 2） | TEST AL, 01H    |

#### 字符串操作指令

| 指令  | 格式  | 功能描述   | 示例  |
| :---- | :---- | :--------- | :---- |
| MOVSB | MOVSB | 字节串传送 | MOVSB |
| MOVSW | MOVSW | 字串传送   | MOVSW |
| CMPSB | CMPSB | 字节串比较 | CMPSB |
| SCASB | SCASB | 字节串扫描 | SCASB |
| STOSB | STOSB | 存储字节串 | STOSB |
| LODSB | LODSB | 加载字节串 | LODSB |

#### 处理器控制指令

| 指令 | 格式 | 功能描述     | 示例 |
| :--- | :--- | :----------- | :--- |
| NOP  | NOP  | 空操作       | NOP  |
| HLT  | HLT  | 暂停处理器   | HLT  |
| CLI  | CLI  | 清除中断标志 | CLI  |
| STI  | STI  | 设置中断标志 | STI  |

#### 标志位操作指令

| 指令 | 格式 | 功能描述     | 示例 |
| :--- | :--- | :----------- | :--- |
| CLC  | CLC  | 清除进位标志 | CLC  |
| STC  | STC  | 设置进位标志 | STC  |
| CLD  | CLD  | 清除方向标志 | CLD  |
| STD  | STD  | 设置方向标志 | STD  |
