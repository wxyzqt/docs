---
customClass: remove-right-side
---

# 类

| 类别         | 知识点               | 关键内容/语法                                                        | 说明                                         |
| ------------ | -------------------- | -------------------------------------------------------------------- | -------------------------------------------- |
| 基础结构     | 类定义               | `class ClassName { ... };`                                           | 默认成员为 `private`；`struct` 默认 `public` |
|              | 访问控制             | `public` / `protected` / `private`                                   | 控制成员可见性                               |
|              | 对象创建             | `ClassName obj;`</br>`ClassName* obj = new ClassName();`             | 栈内存与堆内存分配，堆对象需手动释放         |
| 特殊成员函数 | 构造函数             | `ClassName(...) { ... }`</br>`ClassName() : member(value) {}`        | 支持重载，初始化列表用于成员初始化           |
|              | 析构函数             | `~ClassName() { ... }`                                               | 用于资源清理，无参数，自动调用               |
|              | 拷贝构造函数         | `ClassName(const ClassName& other) { ... }`                          | 用于对象复制，深拷贝时需自定义               |
|              | 拷贝赋值运算符       | `ClassName& operator=(const ClassName& other) { ... }`               | 需检查自赋值，返回自身引用                   |
|              | 移动构造函数         | `ClassName(ClassName&& other) noexcept { ... }`                      | C++11 引入，转移资源所有权，提升性能         |
|              | 移动赋值运算符       | `ClassName& operator=(ClassName&& other) noexcept { ... }`           | 释放旧资源并接管新资源                       |
| 高级特性     | 静态成员             | `static Type member;`                                                | 类所有对象共享，需类外定义和初始化           |
|              | 常量成员函数         | `ReturnType func() const { ... }`                                    | 不允许修改对象状态，仅可读成员               |
|              | 友元                 | `friend void func();`</br>`friend class OtherClass;`                 | 允许指定函数或类访问私有成员                 |
|              | 运算符重载           | `ReturnType operator+(...) { ... }`                                  | 支持自定义类型的运算符行为                   |
| 继承与多态   | 继承方式             | `class Derived : public Base { ... };`                               | 控制基类成员在派生类中的访问级别             |
|              | 虚函数               | `virtual ReturnType func() { ... }`                                  | 实现运行时多态，基类指针可调用派生实现       |
|              | 纯虚函数与抽象类     | `virtual ReturnType func() = 0;`                                     | 含纯虚函数的类为抽象类，不能实例化           |
|              | 重写                 | `ReturnType func() override { ... }`                                 | C++11 引入，显式标记覆盖基类虚函数           |
|              | `final` 关键字       | `virtual ReturnType func() final { ... }`                            | 禁止派生类重写该虚函数                       |
| 模板类       | 类模板               | `template<typename T> class ClassName { ... };`                      | 泛型编程，支持多种数据类型                   |
| 现代 C++     | `default`/`delete`   | `ClassName() = default;`</br>`ClassName(const ClassName&) = delete;` | 显式生成默认实现或禁用特殊成员函数           |
|              | 委托构造函数         | `ClassName() : ClassName(0, "") { }`                                 | 构造函数间调用，减少重复代码                 |
|              | `constexpr` 构造函数 | `constexpr ClassName(...) { ... }`                                   | 支持编译期常量对象构造                       |
