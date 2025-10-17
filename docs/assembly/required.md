# 要求

写函数：无参无返回值、无参有返回值、有参有返回值

声明变量：全局变量，局部变量

实现运算：基本运算、位运算

实现条件判断

实现循环结构

## 指令集定义的内容

机器指令

数据类型

寄存器

内存模型

输入/输出

## 寄存器种类

ax，x 仅用于区分其他寄存器，无进制含义。
e 表示 extended，表示对 16 位的扩展
r 表示 register，同时表示 64 位，用来和 32 位区分。

### 通用寄存器

eax 函数返回值
ebx
ecx 循环次数，this 指针
edx

ebp(Extended Base Pointer) 栈底

esp(Extended Stack Pointer) 栈顶

esi source
edi destination

eip 程序计数器，无法直接操作

### 段寄存器

### 指令指针寄存器(X86 EIP、X64 RIP)

### 标准(状态)寄存器(X86 eflags、X64 rflags)

```asm
pushf
pop eax
bts eax, 9
push eax
popf
```

### 控制寄存器(CR0 - CR4)

### 调试寄存器(DR0 - DR7)

### 描述符寄存器(GDTR LDTR IDTR)

### 任务寄存器(TR)

## boot

ORG

SECTION
