---
customClass: remove-right-side
---

# 变量

变量核心概念

| 分类维度     | 类别         | 语法/示例                                          | 关键特性/说明                                                                      |
| :----------- | :----------- | :------------------------------------------------- | :--------------------------------------------------------------------------------- |
| 定义与初始化 | 声明并定义   | `int age;`                                         | 未初始化，值随机（不安全）                                                         |
|              | 定义并初始化 | `int score = 90;`</br>`double pi {3.14159};`       | 推荐做法。使用花括号 `{}` 初始化可防止窄化转换，更安全。                           |
| 作用域       | 局部变量     | `void func() { int x = 10; }`                      | 在函数/代码块 `{}` 内定义，仅在其内部可见。                                        |
|              | 全局变量     | `int globalVar;`                                   | 在所有函数之外定义，整个文件可见。应谨慎使用。                                     |
| 存储周期     | 自动存储期   | `{ int temp = 0; }`                                | 默认局部变量。进入作用域时创建，离开时销毁。                                       |
|              | 静态存储期   | `static int counter = 0;`</br>`int globalVar;`     | 全局变量和用 static 修饰的局部变量都属于静态存储期。在程序开始时创建，结束时销毁。 |
| 数据类型     | 基本类型     | `int, double, char, bool`                          | 存储单一值。                                                                       |
|              | 复合类型     | `int arr[10];` (数组)</br>`std::string name;` (类) | 由其他类型构造而成。                                                               |
| 常量性       | 变量         | `int mutableValue = 5;`                            | 值可被修改。                                                                       |
|              | 常量         | `const int MAX_SIZE = 100;`                        | 值在初始化后不可修改。有助于提高代码安全性和可读性。                               |
| 存储区域     | 栈           | `int fastVar;`                                     | 自动变量所在区域，分配/释放速度快。                                                |
|              | 堆           | `int* ptr = new int(42);`                          | 通过 `new` 手动分配，必须用 `delete ptr;` 手动释放。                               |

## 关键字和保留字

| 类别       | 关键字/保留字                                                                                                                | 用途                  | 示例                                                                                 |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- | :-------------------- | :----------------------------------------------------------------------------------- |
| 控制结构   | `if`</br>`else`</br>`switch`</br>`case`</br>`default`</br>`for`</br>`while`</br>`do`</br>`break`</br>`continue`</br>`return` | 条件判断、循环控制    | `if (x > 0) { ... }`                                                                 |
| 数据类型   | `int`</br>`char`</br>`float`</br>`double`</br>`bool`</br>`void`                                                              | 基本数据类型声明      | `int age = 25;`                                                                      |
| 类型推断   | `auto`</br>`decltype`                                                                                                        | 类型自动推断          | `auto x = 10;`</br>`decltype(x) y = 20;`                                             |
| 存储类型   | `static`</br>`extern`</br>`register`（已废弃）</br>`mutable`                                                                 | 变量存储特性          | `static int count = 0;`</br>`mutable int flag;`                                      |
| 内存管理   | `new`</br>`delete`</br>`new[]`</br>`delete[]`                                                                                | 动态内存分配          | `int* p = new int;`</br>`delete p;`                                                  |
| 类型转换   | `static_cast`</br>`dynamic_cast`</br>`const_cast`</br>`reinterpret_cast`                                                     | 类型转换操作符        | `double d = static_cast<double>(i);`                                                 |
| 异常处理   | `try`</br>`catch`</br>`throw`                                                                                                | 异常捕获与抛出        | `try { ... } catch(...) { ... }`                                                     |
| 命名空间   | `namespace`</br>`using`                                                                                                      | 命名空间管理/类型别名 | `namespace MyProj { int x; }`</br>`using T = int;`                                   |
| 模板       | `template`</br>`typename`</br>`class`                                                                                        | 泛型编程/类声明       | `template<typename T> T add(T a, T b) { return a + b; }`</br>`class Person { ... };` |
| 预处理指令 | `#include`</br>`#define`</br>`#ifdef`</br>`#ifndef`</br>`#endif`                                                             | 预编译指令            | `#include <iostream>`                                                                |
| 其他       | `sizeof`</br>`alignof`</br>`constexpr`</br>`inline`</br>`explicit`                                                           | 特殊操作符/修饰符     | `constexpr int square(int x) { return x * x; }`                                      |
