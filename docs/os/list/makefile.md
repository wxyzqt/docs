# Makefile 基本语法

Makefile 是一种用于自动化构建和管理软件项目的工具`文件`。

## 规则 (Rules)

规则是 Makefile 的核心，定义了如何构建目标。

```txt
目标文件: 源文件
    要执行的命令
```

目标文件: 要生成的文件或执行的操作名称（例如可执行文件或目标文件）。

源文件: 生成目标文件所依赖的文件或其他目标（也称为依赖项）。

命令: 由制表符 (TAB) 开头的 shell 命令，指定如何从依赖项构建目标。‌ 必须使用 TAB 缩进，不能使用空格 ‌。

## 变量 (Variables)

变量用于存储文本字符串，简化 Makefile 的编写和维护。

定义变量 ‌: `VAR_NAME = value`

使用变量 ‌: `$(VAR_NAME)` 或 `${VAR_NAME}`

常用内置变量 ‌:

CC: C 编译器 (默认为 cc)

CFLAGS: C 编译器选项

LDFLAGS: 链接器选项

## 伪目标 (Phony Targets)

伪目标不代表一个实际的文件，它只是一个动作的名称。

声明 ‌: .PHONY: target_name

用途 ‌: 常用于 clean, install, all 等不生成文件的操作，可以避免与同名文件冲突。

```makefile
clean:
    rm -f *.o app

.PHONY: clean
```

## 通配符 (Wildcards)

用于模式匹配，简化文件名列表的书写。

`_`: 匹配任意数量的字符

`%`: 模式规则中的通配符

```makefile
# 匹配所有.c 文件
SOURCES = _.c
```

## 模式规则：将所有.c 文件编译为.o 文件

```makefile
%.o: %.c
$(CC) -c $< -o $@
```

## 自动变量 (Automatic Variables)

在命令中使用的特殊变量，其值根据规则的目标和前提条件自动设置。

- $@: 当前规则的目标文件名。
- $<: 第一个依赖项的名称。
- $^: 所有依赖项的列表，以空格分隔。
- $?: 所有比目标更新的依赖项列表。

## 函数 (Functions)

Makefile 提供了一些内置函数用于字符串操作、文件名处理等。

调用语法 ‌: `$(function arguments)`
常用函数 ‌:

`$(wildcard pattern...)`: 扩展通配符，例如 `$(wildcard *.c)` 获取所有.c 文件。

`$(patsubst pattern,replacement,text)`: 模式替换

例如 `$(patsubst %.c,%.o,$(SOURCES))` 将所有.c 文件名替换为.o。

## 条件判断 (Conditional Directives)

允许根据变量值等条件执行不同的操作。

```makefile
ifeq ($(DEBUG), 1)
    CFLAGS += -g
else
    CFLAGS += -O2
endif
```

## 注释 (Comments)

使用 `#` 符号开始注释，该行 `#` 之后的内容都会被忽略。

## 包含其他文件 (Include)

可以将其他 Makefile 包含到当前 Makefile 中。

```makefile
include config.mk
```

## 简单示例

```makefile
# 定义变量
CC = gcc
CFLAGS = -Wall -g
TARGET = app
SOURCES = main.c utils.c
OBJECTS = $(SOURCES:.c=.o)

# 默认目标
all: $(TARGET)

# 链接目标
$(TARGET): $(OBJECTS)
    $(CC) $(OBJECTS) -o $(TARGET)

# 编译源文件 (使用模式规则)
%.o: %.c
    $(CC) $(CFLAGS) -c $< -o $@

# 清理生成的文件
clean:
    rm -f $(OBJECTS) $(TARGET)

# 声明伪目标
.PHONY: all clean

```
