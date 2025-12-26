# 现代 C++特性

## 自动类型推断（auto）

使用 auto 让编译器自动推断变量类型，减少冗余代码，提高可维护性。
推荐用于复杂类型、迭代器等，但避免滥用，保持代码可读性。

```cpp
auto it = container.begin();
auto sum = 0.0;
```

## 范围 for 循环（range-based for）

使用范围 for 循环遍历容器，代码更简洁安全。

```cpp
for (const auto& item : container) {
    // ...
}
```

## 智能指针

使用 std::unique_ptr、std::shared_ptr、std::weak_ptr 管理动态资源，避免内存泄漏和悬垂指针。

```cpp
std::unique_ptr<Foo> ptr = std::make_unique<Foo>();
std::shared_ptr<Foo> sptr = std::make_shared<Foo>();
```

## 移动语义与右值引用

利用移动构造函数和移动赋值运算符提升性能，避免不必要的拷贝。

```cpp
std::vector<int> v1 = std::move(v2);
```

## Lambda 表达式

使用 Lambda 表达式简化回调、算法等场景的代码。

```cpp
std::for_each(vec.begin(), vec.end(), [](int x) { std::cout << x; });
```

## 智能容器与算法

优先使用标准库容器（如 std::vector、std::map）和算法（如 std::sort、std::find_if），避免手动管理内存和循环。

```cpp
std::vector<int> v{1, 2, 3};
std::sort(v.begin(), v.end());
```

## 强类型枚举（enum class）

使用 enum class 替代传统枚举，提升类型安全，避免命名冲突。

```cpp
enum class Color { Red, Green, Blue };
Color c = Color::Red;
```

## nullptr

使用 nullptr 替代 NULL 或 0，提升指针语义的明确性。

```cpp
int* p = nullptr;
```

## constexpr 和常量表达式

使用 constexpr 定义编译期常量，提高性能和安全性。

```cpp
constexpr int size = 10;
constexpr double pi() { return 3.1415926; }
```

## 统一的初始化语法（大括号初始化）

推荐使用大括号初始化，避免窄化转换和未初始化问题。

```cpp
int arr[3]{1, 2, 3};
std::vector<int> v{1, 2, 3, 4};
Foo foo{42, "hello"};
```
