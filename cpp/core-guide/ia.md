# 接口设计与抽象

## 接口设计原则

### 最小接口原则

只暴露必要的成员函数，隐藏实现细节，减少依赖和耦合。

### 优先使用抽象类或纯虚函数

通过抽象类（含纯虚函数）定义接口，便于扩展和替换实现。

### 避免非虚析构函数

抽象基类应声明虚析构函数，确保通过基类指针删除派生类对象时资源正确释放。

### 禁止拷贝和赋值（如有必要）

若接口不支持拷贝或赋值，应显式删除相关函数（= delete）。

### 接口应无数据成员

抽象接口类通常不应包含数据成员，只定义纯虚函数。

## 抽象与实现分离

### 面向接口编程

依赖抽象而非具体实现，提升代码灵活性和可测试性。

### 使用依赖注入

通过构造函数或函数参数传递接口指针或引用，降低模块间耦合。

### 禁止在接口中实现细节

接口只定义行为，不包含实现代码。

## 示例

```cpp
class IShape {
public:
    IShape() = default;
    virtual ~IShape() = default;

    // 禁止拷贝和赋值
    IShape(const IShape&) = delete;
    IShape& operator=(const IShape&) = delete;

    // 纯虚函数定义接口
    virtual double area() const = 0;
    virtual double perimeter() const = 0;
};
```

### 实现与依赖注入示例

```cpp
class Rectangle : public IShape {
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() const override { return width * height; }
    double perimeter() const override { return 2 * (width + height); }
private:
    double width;
    double height;
};

void printShapeInfo(const IShape& shape) {
    std::cout << "Area: " << shape.area() << std::endl;
    std::cout << "Perimeter: " << shape.perimeter() << std::endl;
}

int main() {
    Rectangle rect(3.0, 4.0);
    printShapeInfo(rect);
    return 0;
}
```
