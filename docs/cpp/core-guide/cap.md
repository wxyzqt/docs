# 并发与多线程

## 推荐使用标准库并发工具

优先使用 C++ 标准库中的线程（`std::thread`）、互斥量（`std::mutex`）、条件变量（`std::condition_variable`）、原子类型（`std::atomic`）等工具，避免平台相关 API，提升代码的可移植性和可维护性。

## 避免数据竞争

多线程访问共享数据时，必须使用互斥量或其他同步机制保护，防止数据竞争和未定义行为。数据竞争会导致程序行为不可预测，甚至崩溃。

## 尽量减少锁的粒度

锁定的代码区域应尽可能小，减少锁竞争，提高并发性能。避免在持有锁期间执行耗时操作。

## 使用不可变数据

多线程环境下，优先设计不可变（只读）数据结构，避免同步开销。不可变对象天生线程安全。

## 优先使用高层并发抽象

使用 `std::async`、`std::future`、`std::packaged_task` 等高层抽象简化并发编程，减少出错概率，提升代码可读性。

## 避免死锁

保证获取多个锁的顺序一致，或使用 `std::lock` 同时锁定多个互斥量，防止死锁。死锁会导致线程永久阻塞。

## 原子操作

对于简单的共享变量，优先使用 `std::atomic` 实现无锁并发，提升性能，避免锁带来的开销。

## 示例

### std::atomic

```cpp
#include <thread>
#include <atomic>
#include <iostream>
#include <vector>

std::atomic<int> counter{0};

void increment() {
    for (int i = 0; i < 10000; ++i) {
        ++counter;
    }
}

int main() {
    std::vector<std::thread> threads;
    for (int i = 0; i < 4; ++i) {
        threads.emplace_back(increment);
    }
    for (auto& t : threads) {
        t.join();
    }
    std::cout << counter << std::endl; // 期望输出40000
}
```

### std::async

```cpp
#include <future>
#include <atomic>
#include <iostream>
#include <vector>

std::atomic<int> counter{0};

void increment() {
    for (int i = 0; i < 10000; ++i) {
        ++counter;
    }
}

int main() {
    std::vector<std::future<void>> futures;
    for (int i = 0; i < 4; ++i) {
        futures.push_back(std::async(std::launch::async, increment));
    }
    for (auto& f : futures) {
        f.get();
    }
    std::cout << counter << std::endl; // 期望输出40000
}
```
