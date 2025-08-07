# Less

[less-官网](https://lesscss.org/features/)

## 变量

使用@标识

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

## 混合（Mixins）

使用函数调用()

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  .bordered();
}
```

## 嵌套（Nesting）

& 表示当前选择器的父级

```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

## @规则嵌套和冒泡

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
// 转译后
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

## 运算（Operations）

算术运算符 +、-、\*、/ 可以对任何数字、颜色或变量进行运算

```less
// 所有操作数被转换成相同的单位
@conversion-1: 5cm + 10mm; // 结果是 6cm
@conversion-2: 2 - 3cm - 5mm; // 结果是 -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // 结果是 4px

// example with variables
@base: 5%;
@filler: @base * 2; // 结果是 10%
@other: @base + @filler; // 结果是 15%
```

## 转义

~"anything"都会原样输出

```less
@min768: ~"(min-width: 768px)";
// less3.5之后,多数转义不再需要
@min768: (min-width: 768px);

.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}

@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```

## 函数（Functions）

[参见函数手册](https://less.bootcss.com/functions/)

## 命名空间和访问符

```less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab {
    ...;
  }
  .citation {
    ...;
  }
}

#header a {
  color: orange;
  #bundle.button(); // 还可以书写为 #bundle > .button 形式
}
```

## 映射（Maps）

```less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

## 作用域（Scope）

```less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

## 注释（Comments）

块注释和行注释都可以使用

## 导入（Importing）

```less
@import "library"; // library.less
@import "typo.css";
```
