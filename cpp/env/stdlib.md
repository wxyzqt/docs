# 标准库

C++ 标准库是 C++ 标准的一部分，涵盖了广泛的功能模块。

STL 是标准库的一个子集，专注于数据结构和算法的模板实现。

| 类别     | 组件             | 头文件            | 主要用途                   |
| :------- | :--------------- | :---------------- | :------------------------- |
| 容器     | `vector`         | `<vector>`        | 动态数组，支持高效随机访问 |
|          | `list`           | `<list>`          | 双向链表，插入删除高效     |
|          | `map`            | `<map>`           | 有序键值对，红黑树实现     |
|          | `set`            | `<set>`           | 有序集合，元素唯一         |
|          | `unordered_map`  | `<unordered_map>` | 无序键值对，哈希表实现     |
|          | `unordered_set`  | `<unordered_set>` | 无序集合，哈希表实现       |
| 字符串   | `string`         | `<string>`        | 封装 `char` 数组，丰富操作 |
| 算法     | `sort`           | `<algorithm>`     | 排序算法                   |
|          | `find`           | `<algorithm>`     | 查找算法                   |
|          | `for_each`       | `<algorithm>`     | 遍历算法                   |
| 迭代器   | `iterator`       | `<iterator>`      | 统一访问容器元素的接口     |
| 内存管理 | `shared_ptr`     | `<memory>`        | 共享所有权智能指针         |
|          | `unique_ptr`     | `<memory>`        | 独占所有权智能指针         |
|          | `weak_ptr`       | `<memory>`        | 弱引用智能指针             |
| 适配器   | `stack`          | `<stack>`         | 栈（LIFO）                 |
|          | `queue`          | `<queue>`         | 队列（FIFO）               |
|          | `priority_queue` | `<queue>`         | 优先队列                   |
| 数值算法 | `accumulate`     | `<numeric>`       | 累加算法                   |
| 函数对象 | `function`       | `<functional>`    | 封装可调用对象             |
| 类型特性 | `is_integral`    | `<type_traits>`   | 编译期类型检查             |
| 输入输出 | `cin`            | `<iostream>`      | 标准输入流                 |
|          | `cout`           | `<iostream>`      | 标准输出流                 |
|          | `cerr`           | `<iostream>`      | 标准错误流                 |
| 文件操作 | `ifstream`       | `<fstream>`       | 文件输入流                 |
|          | `ofstream`       | `<fstream>`       | 文件输出流                 |
| 多线程   | `thread`         | `<thread>`        | 线程管理                   |
|          | `mutex`          | `<mutex>`         | 互斥锁                     |
|          | `lock_guard`     | `<mutex>`         | 互斥锁自动管理             |
| 时间     | `chrono`         | `<chrono>`        | 时间点和时长               |
| 异常     | `exception`      | `<exception>`     | 异常处理基类               |
|          | `runtime_error`  | `<stdexcept>`     | 运行时异常                 |
|          | `logic_error`    | `<stdexcept>`     | 逻辑错误异常               |
