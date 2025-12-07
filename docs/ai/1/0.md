# python3 语法汇总

## 链接

[python website](https://www.python.org/)

[中文文档](https://docs.python.org/zh-cn/3/)

## 变量与数据类型

涵盖基础类型、可变类型、特殊类型及类型注解

| 数据类型 | 描述             | 示例                                                           | 类型注解                                                |
| -------- | ---------------- | -------------------------------------------------------------- | ------------------------------------------------------- |
| 整型     | 无小数点的数字   | `x = 10`                                                       | `x: int = 10`                                           |
| 浮点型   | 带小数点的数字   | `y = 3.14`                                                     | `y: float = 3.14`                                       |
| 复数型   | 由实数和虚数组成 | `y = 123-12j`                                                  | `y:complex = 123-12j`                                   |
| 字符串   | 文本数据         | `name = "Python"`                                              | `name: str = "Python"`                                  |
| 布尔型   | 逻辑值           | `is_valid = True`                                              | `is_valid: bool = True`                                 |
| 列表     | 可变有序集合     | `numbers = [1, 2, 3]`                                          | `numbers: list[int] = [1, 2, 3]`                        |
| 元组     | 不可变有序集合   | `coords = (10, 20)`                                            | `coords: tuple[int, int] = (10, 20)`                    |
| 集合     | 无序不重复元素   | `unique_items = {1, 2, 3}`                                     | `unique_items: set[int] = {1, 2, 3}`                    |
| 字典     | 键值对映射       | `person = {"name": "Alice", "age": 30}`                        | `person: dict[str, int] = {"name": "Alice", "age": 30}` |
| 字节串   | 二进制数据       | `data = b"hello"`                                              | `data: bytes = b"hello"`                                |
| NoneType | 空值             | `result = None`                                                | `result: None = None`                                   |
| 枚举     | 常量集合         | `from enum import Enum  class Color(Enum):  RED = 1 GREEN = 2` | `color: Color = Color.RED`                              |
| 类型别名 | 自定义类型       | `from typing import TypeAlias Vector = list[float]`            | `position: Vector = [1.0, 2.0, 3.0]`                    |
| 联合类型 | 多种类型之一     | `value: int \| str = "test"`                                   | `value: Union[int, str] = "test"`                       |
| 可选类型 | 可能为空         | `optional_value: Optional[int] = None`                         | `optional_value: int \| None = None`                    |

1. 类型注解：Python3.5+支持类型注解（PEP 484），但需配合工具（如 mypy）进行静态检查。
2. 集合类型：列表、元组、集合、字典是 Python 的核心数据结构，字典支持键值对操作。
3. 枚举与别名：枚举用于定义常量集，类型别名简化复杂类型声明。
4. 联合与可选：`|`（Python 3.10+）或`Union`表示多种类型，`Optional`是`T | None`的简写。

## 运算符

| 运算符类型 | 运算符                             | 描述                                  | 示例                               |
| :--------- | :--------------------------------- | :------------------------------------ | :--------------------------------- |
| 算术运算符 | `+`                                | 加                                    | `10 + 3` → `13`                    |
|            | `-`                                | 减                                    | `10 - 3` → `7`                     |
|            | `*`                                | 乘                                    | `10 * 3` → `30`                    |
|            | `/`                                | 除（返回浮点数）                      | `10 / 3` → `3.333...`              |
|            | `//`                               | 取整除（向下取整）                    | `10 // 3` → `3`                    |
|            | `%`                                | 取模（返回余数）                      | `10 % 3` → `1`                     |
|            | `**`                               | 幂（次方）                            | `10**3` → `1000`                   |
| 赋值运算符 | `=`                                | 基本赋值                              | `a = 10`                           |
|            | `+=`                               | 加后赋值                              | `a += 3` (等价于 `a = a + 3`)      |
|            | `-=`, `*=`, `/=`, `//=`, `%=`, `=` | 同上逻辑                              | `a = 2` (等价于 `a = a ** 2`)      |
| 比较运算符 | `==`                               | 等于                                  | `10 == 3` → `False`                |
|            | `!=`                               | 不等于                                | `10 != 3` → `True`                 |
|            | `>`                                | 大于                                  | `10 > 3` → `True`                  |
|            | `<`                                | 小于                                  | `10 < 3` → `False`                 |
|            | `>=`                               | 大于等于                              | `10 >= 10` → `True`                |
|            | `<=`                               | 小于等于                              | `10 <= 3` → `False`                |
| 逻辑运算符 | `and`                              | 逻辑与（两者为真才真）                | `True and False` → `False`         |
|            | `or`                               | 逻辑或（一者为真即真）                | `True or False` → `True`           |
|            | `not`                              | 逻辑非（取反）                        | `not True` → `False`               |
| 身份运算符 | `is`                               | 判断两个标识符是否引用同一对象        | `a is b`                           |
|            | `is not`                           | 判断两个标识符是否引用不同对象        | `a is not b`                       |
| 成员运算符 | `in`                               | 如果在指定序列中找到值则返回 True     | `"a" in ["a", "b"]` → `True`       |
|            | `not in`                           | 如果在指定序列中没找到值则返回 True   | `"c" not in ["a", "b"]` → `True`   |
| 位运算符   | `&`                                | 按位与                                | `0b1010 & 0b1100` → `0b1000` (8)   |
|            | `\|`                               | 按位或                                | `0b1010 \| 0b1100` → `0b1110` (14) |
|            | `^`                                | 按位异或（相同为 0，不同为 1）        | `0b1010 ^ 0b1100` → `0b0110` (6)   |
|            | `~`                                | 按位取反                              | `~0b1010` → `-11` (结果与位数有关) |
|            | `<<`                               | 左移（乘以 2 的 n 次方）              | `8 << 2` → `32` (8 \* 4)           |
|            | `>>`                               | 右移（除以 2 的 n 次方）              | `8 >> 2` → `2` (8 / 4)             |
| 海象运算符 | `:=`                               | 在表达式内部为变量赋值（Python 3.8+） | `if (n := len([1,2,3])) > 2:`      |

1. `/` 和 `//` 的区别：`/` 的结果永远是浮点数， `//` 是向负无穷取整。
2. `is` 和 `==` 的区别：`is` 比较的是内存地址（是否是同一个对象），`==` 比较的是值是否相等。对于小整数和短字符串，Python 有缓存机制，可能会让人困惑，但对于列表、字典等可变对象，它们的区别就很明显了。
3. `:=` 海象运算符的妙用：它能让代码更简洁，尤其是在 `while` 循环和列表推导式中。

## 数据结构

### 列表操作

| 操作类型   | 运算符/方法                           | 描述       | 示例                                               |
| ---------- | ------------------------------------- | ---------- | -------------------------------------------------- |
| 基础操作   | `[]`                                  | 索引访问   | `my_list[0]` → `1`                                 |
|            | `+`                                   | 列表连接   | `[1,2] + [3,4]` → `[1,2,3,4]`                      |
|            | `*`                                   | 列表重复   | `[1,2] * 3` → `[1,2,1,2,1,2]`                      |
|            | `in`                                  | 元素检查   | `2 in [1,2,3]` → `True`                            |
|            | `len()`                               | 获取长度   | `len([1,2,3])` → `3`                               |
| 修改操作   | `append()`                            | 添加元素   | `my_list.append(4)` → `[1,2,3,4]`                  |
|            | `extend()`                            | 扩展列表   | `my_list.extend([4,5])` → `[1,2,3,4,5]`            |
|            | `insert()`                            | 插入元素   | `my_list.insert(1, 1.5)` → `[1,1.5,2,3]`           |
|            | `remove()`                            | 删除元素   | `my_list.remove(2)` → `[1,3]`                      |
|            | `pop()`                               | 弹出元素   | `my_list.pop(1)` → `2`（并返回）                   |
|            | `clear()`                             | 清空列表   | `my_list.clear()` → `[]`                           |
| 切片操作   | `[:]`                                 | 全部复制   | `my_list[:]` → `[1,2,3]`                           |
|            | `[start:end]`                         | 子列表     | `my_list[1:3]` → `[2,3]`                           |
|            | `[::step]`                            | 步长切片   | `my_list[::2]` → `[1,3]`                           |
| 排序与反转 | `sort()`                              | 原地排序   | `my_list.sort()` → `[1,2,3]`                       |
|            | `sorted()`                            | 返回新列表 | `sorted(my_list)` → `[1,2,3]`                      |
|            | `reverse()`                           | 原地反转   | `my_list.reverse()` → `[3,2,1]`                    |
| 高级操作   | `list()`                              | 转换为列表 | `list("abc")` → `['a','b','c']`                    |
|            | `join()`                              | 字符串连接 | `' '.join(my_list)` → `'1 2 3'`                    |
|            | `map()`                               | 批量处理   | `list(map(str, my_list))` → `['1','2','3']`        |
|            | `filter()`                            | 过滤元素   | `list(filter(lambda x: x>1, my_list))` → `[2,3]`   |
|            | `reduce()`                            | 累积计算   | `reduce(lambda x,y: x+y, my_list)` → `6`           |
| 列表推导式 | `[expr for item in iterable]`         | 简化循环   | `[x**2 for x in range(5)]` → `[0,1,4,9,16]`        |
|            | `[expr for item in iterable if cond]` | 条件过滤   | `[x for x in range(10) if x%2==0]` → `[0,2,4,6,8]` |

1. 索引与切片：索引从 0 开始，负索引从末尾计数（如`my_list[-1]`）；切片支持步长（如`[::2]`）。
2. 原地修改：`sort()`、`reverse()`、`append()`等方法直接修改原列表。
3. 高级函数：`map()`、`filter()`、`reduce()`需导入`functools`模块。
4. 列表推导式：简洁高效，替代循环与条件语句（如`[x**2 for x in range(5) if x>2]`）。

### 字典操作

| 操作类型   | 方法/操作符                 | 描述                                     | 示例                                              |
| :--------- | :-------------------------- | :--------------------------------------- | :------------------------------------------------ |
| 创建与访问 | `{}`                        | 创建字典                                 | `d = {'a': 1, 'b': 2}`                            |
|            | `dict()`                    | 构造函数创建字典                         | `d = dict(a=1, b=2)`                              |
|            | `[]`                        | 通过键访问值                             | `d['a']` → `1`                                    |
|            | `.get(key, default)`        | 安全访问，键不存在返回默认值             | `d.get('c', 0)` → `0`                             |
| 增删改操作 | `[] =`                      | 新增或修改键值对                         | `d['c'] = 3`                                      |
|            | `.update(other_dict)`       | 批量更新或添加                           | `d.update({'c': 3, 'd': 4})`                      |
|            | `.pop(key, default)`        | 移除指定键并返回其值                     | `d.pop('b')` → `2` (同时从 d 中移除)              |
|            | `.popitem()`                | 移除并返回最后一个键值对（LIFO）         | `d.popitem()` → `('b', 2)`                        |
|            | `del`                       | 删除键值对                               | `del d['a']`                                      |
|            | `.clear()`                  | 清空字典                                 | `d.clear()` → `{}`                                |
| 成员与迭代 | `in`                        | 检查键是否存在                           | `'a' in d` → `True`                               |
|            | `.keys()`                   | 返回所有键的视图                         | `list(d.keys())` → `['a', 'b']`                   |
|            | `.values()`                 | 返回所有值的视图                         | `list(d.values())` → `[1, 2]`                     |
|            | `.items()`                  | 返回所有键值对的视图                     | `list(d.items())` → `[('a', 1), ('b', 2)]`        |
| 高级操作   | `\|` (Python 3.9+)          | 合并字典，右侧优先                       | `{'a':1} \| {'a':2, 'b':3}` → `{'a':2, 'b':3}`    |
|            | `\|=` (Python 3.9+)         | 原地合并字典                             | `d \|= {'c': 3}`                                  |
|            | `.setdefault(key, default)` | 键存在则返回值，不存在则设置并返回默认值 | `d.setdefault('c', 0)` → `0` (同时 d 中新增'c':0) |
|            | `.fromkeys(seq, value)`     | 从序列创建新字典，值默认为 None          | `dict.fromkeys(['x','y'], 0)` → `{'x':0, 'y':0}`  |
| 字典推导式 | `{k: v for ...}`            | 通过循环和条件创建字典                   | `{x: x**2 for x in range(3)}` → `{0:0, 1:1, 2:4}` |
|            | `{k: v for ... if ...}`     | 带条件过滤的推导式                       | `{k: v for k, v in d.items() if v > 1}`           |
| 视图对象   | `view & view`               | 键视图支持集合操作（交集、并集等）       | `d1.keys() & d2.keys()` (返回共同拥有的键)        |

1. 访问与安全：直接使用 `d[key]` 在键不存在时会引发 `KeyError`，而 `.get()` 方法是更安全的选择。
2. 视图对象：`.keys()`, `.values()`, `.items()` 返回的是动态视图，字典的改变会同步反映到视图中。
3. 合并操作：Python 3.9+ 的 `|` 运算符使得字典合并非常直观和高效。
4. 字典推导式：这是创建和转换字典的强大工具，代码简洁且执行效率高。

## 函数编程范式

| 范式/概念            | 关键工具                           | 描述                                                          | 典型示例                                                                                          |
| :------------------- | :--------------------------------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------ |
| 一等函数             | 函数本身                           | 函数可作为参数传递、作为返回值、或赋值给变量。                | `def greet(name): return f"Hello {name}"` </br> `my_func = greet` </br> `print(my_func("World"))` |
| 高阶函数             | `map`, `filter`, `sorted`          | 接收函数作为参数或返回函数作为结果的函数。                    | `list(map(str.upper, ['a', 'b']))` → `['A', 'B']`                                                 |
| 匿名函数             | `lambda`                           | 创建无需`def`关键字定义的匿名函数。                           | `sorted([(1, 'a'), (2, 'c')], key=lambda x: x[1])`                                                |
| 迭代器与生成器       | `yield`, 生成器表达式              | 生成器是一种特殊的迭代器，使用`yield`返回数据，支持惰性求值。 | `(x**2 for x in range(5))` (生成器表达式)                                                         |
| 不可变性 & 纯函数    | 使用元组、`frozenset`等            | 避免副作用，相同输入总是产生相同输出。                        | `def pure_add(a, b): return a + b` (不修改外部状态)                                               |
| 递归                 | 函数自调用                         | 通过函数调用自身来解决问题。                                  | `def factorial(n): return 1 if n==0 else n*factorial(n-1)`                                        |
| 函数工具             | `functools`模块                    | 提供用于函数式编程的实用工具。                                | `@functools.lru_cache` (缓存装饰器)                                                               |
| 偏函数               | `functools.partial`                | 固定原函数的部分参数，生成一个新函数。                        | `add_five = functools.partial(lambda a, b: a+b, b=5)`                                             |
| 列表/字典/集合推导式 | `[expr for ...]`, `{expr for ...}` | 声明式地创建列表、字典或集合，替代循环。                      | `[x for x in range(10) if x % 2 == 0]`                                                            |

## 面对对象编程范式

| 概念     | 关键工具              | 描述                   | 示例                                                         |
| :------- | :-------------------- | :--------------------- | :----------------------------------------------------------- |
| 类定义   | `class`               | 定义对象模板           | `class Animal: pass`                                         |
| 构造函数 | `__init__`            | 初始化对象属性         | `def __init__(self, name): self.name = name`                 |
| 实例化   | `()`                  | 创建对象实例           | `dog = Animal("Buddy")`                                      |
| 继承     | `class Derived(Base)` | 子类继承父类属性和方法 | `class Dog(Animal): pass`                                    |
| 方法重写 | `def method(self):`   | 子类覆盖父类方法       | `def speak(self): return "Woof!"`                            |
| 多态     | 方法调用              | 同一接口不同实现       | `dog.speak()` → `"Woof!"`                                    |
| 封装     | `private`/`protected` | 控制属性访问           | `self.__name` (私有属性)                                     |
| 属性访问 | `@property`           | 定义属性访问器         | `@property`</br>`def name(self): return self._name`          |
| 类方法   | `@classmethod`        | 操作类本身             | `@classmethod`</br>`def create(cls, name): return cls(name)` |
| 静态方法 | `@staticmethod`       | 与类关联但不依赖实例   | `@staticmethod`</br>`def greet(): return "Hello"`            |
| 抽象类   | `abc.ABC`             | 定义抽象基类           | `from abc import ABC, abstractmethod`                        |
| 接口     | 抽象方法              | 仅定义方法签名         | `@abstractmethod`</br>`def speak(self): pass`                |
| 元类     | `class Meta(type):`   | 控制类创建过程         | `class MyClass(metaclass=Meta): pass`                        |
| 描述符   | `__get__`, `__set__`  | 自定义属性行为         | `class Descriptor: ...`                                      |
| 单例模式 | `__new__`             | 限制实例数量           | `def __new__(cls): ...`                                      |
| 装饰器   | `@decorator`          | 扩展类或方法功能       | `@singleton`</br>`class MyClass: pass`                       |

1. 继承与多态：子类通过重写父类方法实现多态，`super()`调用父类方法。
2. 封装：私有属性（`__name`）通过`@property`暴露接口。
3. 抽象类：使用`abc`模块定义抽象基类，强制子类实现抽象方法。
4. 元类：控制类的创建过程，如单例模式实现。
5. 描述符：自定义属性的`get`/`set`行为，如类型检查。

## 异常处理机制

| 组件/语法                    | 类别       | 描述                                           | 示例                                                                           |
| :--------------------------- | :--------- | :--------------------------------------------- | :----------------------------------------------------------------------------- |
| `try: ...`                   | 核心块     | 包裹可能引发异常的代码。                       | `try:` </br> &nbsp;&nbsp;&nbsp;&nbsp;`x = 1 / 0`                               |
| `except ExceptionType:`      | 捕获块     | 捕获并处理特定类型的异常。                     | `except ZeroDivisionError:` </br> &nbsp;&nbsp;&nbsp;&nbsp;`print("不能除以0")` |
| `except ExceptionType as e:` | 捕获并命名 | 捕获异常并将实例赋值给变量 `e`。               | `except ZeroDivisionError as e:` </br> &nbsp;&nbsp;&nbsp;&nbsp;`print(e)`      |
| `else:`                      | 可选块     | 当 `try` 块未发生异常时执行。                  | `else:` </br> &nbsp;&nbsp;&nbsp;&nbsp;`print("计算成功")`                      |
| `finally:`                   | 清理块     | 无论是否发生异常都会执行的代码，用于释放资源。 | `finally:` </br> &nbsp;&nbsp;&nbsp;&nbsp;`print("清理资源")`                   |
| `raise`                      | 主动抛出   | 主动触发异常。                                 | `raise ValueError("无效的值")`                                                 |
| `assert condition, message`  | 断言       | 如果条件为 `False` 则抛出 `AssertionError`。   | `assert x > 0, "x必须为正数"`                                                  |
| 上下文管理器 (`with`语句)    | 资源管理   | 自动管理资源（如文件）的获取和释放。           | `with open('file.txt') as f:` </br> &nbsp;&nbsp;&nbsp;&nbsp;`data = f.read()`  |
| 自定义异常                   | 扩展机制   | 通过继承 `Exception` 类来定义新的异常类型。    | `class MyCustomError(Exception): pass`                                         |

关键说明：

1. 执行顺序：Python 会严格按照 `try` -> `except` -> `else` -> `finally` 的顺序执行这些块。
2. 异常层次：所有内置异常都继承自 `BaseException`，但大部分我们处理的异常继承自 `Exception`。
3. 基类捕获：使用 `except Exception:` 可以捕获几乎所有程序可能遇到的错误。
4. else 的妙用：`else` 子句可以将“正常流程”与“异常处理”分离，使代码更清晰。

## 异步编程

| 概念             | 关键工具                | 描述                                  | 示例                                                 |
| :--------------- | :---------------------- | :------------------------------------ | :--------------------------------------------------- |
| 异步函数         | `async def`             | 定义异步函数，返回 `Coroutine` 对象   | `async def fetch_data(url): ...`                     |
| 异步调用         | `await`                 | 挂起当前协程，等待异步操作完成        | `data = await fetch_data(url)`                       |
| 事件循环         | `asyncio.run()`         | 启动事件循环并运行协程                | `asyncio.run(main())`                                |
| 协程对象         | `Coroutine`             | 异步函数的返回值，需通过 `await` 调用 | `coro = fetch_data(url)`                             |
| 异步上下文管理器 | `async with`            | 管理异步资源（如数据库连接）          | `async with DatabaseConnection() as db: ...`         |
| 异步迭代器       | `async for`             | 异步生成器的迭代                      | `async for item in async_counter(5): ...`            |
| 任务调度         | `asyncio.create_task()` | 并发执行多个协程                      | `task = asyncio.create_task(fetch_data(url))`        |
| 超时控制         | `asyncio.wait_for()`    | 设置协程执行超时                      | `await asyncio.wait_for(fetch_data(url), timeout=5)` |
| 信号量           | `asyncio.Semaphore`     | 控制并发任务数量                      | `sem = asyncio.Semaphore(3)`                         |
| 队列             | `asyncio.Queue`         | 异步任务间通信                        | `queue = asyncio.Queue()`                            |
| 锁               | `asyncio.Lock`          | 防止并发访问冲突                      | `lock = asyncio.Lock()`                              |
| 事件             | `asyncio.Event`         | 任务间同步                            | `event = asyncio.Event()`                            |
| 超时异常         | `asyncio.TimeoutError`  | 超时引发的异常                        | `try: ... except asyncio.TimeoutError: ...`          |

1. 事件循环：异步编程的核心，通过 `asyncio.run()` 启动。
2. 协程对象：异步函数返回的 `Coroutine`，需用 `await` 调用。
3. 上下文管理器：通过 `async with` 自动管理异步资源（如数据库连接）。
4. 并发控制：`Semaphore` 限制并发任务数量，`Lock` 防止竞争条件。

## 模块与包管理

| 概念       | 语法                          | 描述                            | 示例                                         |
| :--------- | :---------------------------- | :------------------------------ | :------------------------------------------- |
| 模块导入   | `import module`               | 导入整个模块                    | `import math`                                |
|            | `from module import name`     | 导入模块中的特定对象            | `from math import sqrt`                      |
|            | `from module import *`        | 导入模块中所有对象（不推荐）    | `from math import *`                         |
| 相对导入   | `from . import sibling`       | 同级模块导入                    | `from . import utils`                        |
|            | `from ..parent import func`   | 父级模块导入                    | `from ..database import connect`             |
|            | `from .submodule import obj`  | 子模块导入                      | `from .sub import models`                    |
| 包结构     | `__init__.py`                 | 包标识文件（Python 3.3+可省略） | `package/__init__.py`                        |
| 命名空间包 | 无 `__init__.py`              | 多目录共享包名                  | `package1/module.py` 和 `package2/module.py` |
| 动态导入   | `importlib`                   | 运行时导入模块                  | `importlib.import_module("module")`          |
| 包管理工具 | `pip`                         | 安装第三方库                    | `pip install requests`                       |
|            | `virtualenv`                  | 创建虚拟环境                    | `virtualenv venv`                            |
|            | `requirements.txt`            | 依赖管理文件                    | `requests==2.25.1`                           |
| 包发布     | `setup.py`                    | 定义包元数据                    | `from setuptools import setup`               |
|            | `python setup.py sdist`       | 打包源码分发包                  | `dist/my_package-1.0.tar.gz`                 |
|            | `python setup.py bdist_wheel` | 打包二进制分发包                | `dist/my_package-1.0-py3-none-any.whl`       |
| 包安装     | `pip install .`               | 本地包安装                      | `pip install /path/to/package`               |
|            | `pip install -e .`            | 开发模式安装                    | `pip install -e /path/to/package`            |

1. 相对导入：在包内部使用，避免硬编码路径。
2. 命名空间包：支持模块分片部署，如 `site-packages` 和 `user-site`。
3. 动态导入：适用于插件系统，按需加载模块。
4. 依赖管理：`requirements.txt` 管理项目依赖，`pip freeze > requirements.txt` 生成依赖文件。
