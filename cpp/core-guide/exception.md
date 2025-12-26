# 错误处理

## 推荐使用异常处理

优先使用异常（throw/try/catch）进行错误处理，避免返回错误码。仅在真正的异常情况下抛出异常，不要用异常做流程控制。

## 保持异常安全

保证对象在异常发生后仍然处于有效状态（强异常安全保证）。析构函数中不要抛出异常，避免程序在栈展开时终止。

## 明确所有权和资源管理

使用 RAII（资源获取即初始化）管理资源，确保异常发生时资源自动释放，防止资源泄漏。

## 捕获异常时使用引用

捕获异常时，使用 `catch (const std::exception& e)`，避免对象切片，保留多态信息。

## 不要忽略异常

捕获异常后应妥善处理，不要简单地空捕获（`catch (...) {}`），否则可能隐藏程序错误。

## 对于不可恢复的错误，允许程序终止

对于严重的、不可恢复的错误，可以调用 `std::terminate()` 或让异常传播到主函数。

## 示例

- 展示了 RAII 资源管理
- 捕获所有异常类型并分别处理
- 保证析构函数不抛异常

```cpp
#include <iostream>
#include <stdexcept>
#include <fstream>

class FileGuard {
public:
    FileGuard(const std::string& filename)
        : file(filename) {
        if (!file.is_open()) {
            throw std::runtime_error("无法打开文件: " + filename);
        }
    }
    ~FileGuard() noexcept {
        // 析构函数不抛异常
        if (file.is_open()) {
            file.close();
        }
    }
    std::ofstream& get() { return file; }
private:
    std::ofstream file;
};

void foo(int x) {
    if (x < 0) throw std::invalid_argument("x must be non-negative");
    // 其他逻辑
}

int main() {
    try {
        FileGuard guard("output.txt");
        foo(-1);
        guard.get() << "写入文件内容" << std::endl;
    } catch (const std::invalid_argument& e) {
        std::cerr << "参数错误: " << e.what() << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "标准异常: " << e.what() << std::endl;
    } catch (...) {
        std::cerr << "未知异常" << std::endl;
        std::terminate();
    }
}
```
