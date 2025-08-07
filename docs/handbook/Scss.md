# Scss

[sass/scss](https://github.com/sass/sass)

[官网](https://sass-lang.com/documentation/)

## 变量

使用`$`标识
合法值：字符串、数字、颜色值、布尔值、列表、null 值

```scss
$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
$myWidth: 680px;

body {
  font-family: $myFont;
  font-size: $myFontSize;
  color: $myColor;
}
```

变量默认作用域在当前层级有效，使用`!global`提升为全局变量

```scss
h1 {
  $myColor: green !global; // 全局作用域
  color: $myColor;
}
```

## 嵌套（Nesting）

### 嵌套规则

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
```

### 嵌套属性

```scss
text: {
  align: center;
  transform: lowercase;
  overflow: hidden;
}
```

##### & 表示当前选择器的父级

```scss
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

#### @import

- 不需要指定文件后缀，Sass 会自动添加后缀 .scss
- 可以导入 CSS 文件

```scss
@import "variables";
@import "colors";
@import "reset";
```

##### Partials

- 不希望将一个 Sass 的代码文件编译到一个 CSS 文件
- 在文件名的开头添加一个下划线
- 导入语句中我们不需要添加下划线
- 不要将下划线与不带下划线的同名文件放置在同一个目录下,否则带下划线的文件将会被忽略

#### @mixin 与 @include

```scss
@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
.danger {
  @include important-text;
  background-color: green;
}
```

- 混入中也可以包含混入

```scss
@mixin special-text {
  @include important-text;
  @include link;
  @include special-border;
}
```

- 混入中传入变量

```scss
@mixin bordered($color, $width) {
  border: $width solid $color;
}

.myArticle {
  @include bordered(blue, 1px); // 调用混入，并传递两个参数
}
```

- 混入变量设置默认值

```scss
@mixin bordered($color: blue, $width: 1px) {
  border: $width solid $color;
}
```

- 混入可变参数

```scss
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
```

#### @extend 与 继承

- @extend 指令告诉 Sass 一个选择器的样式从另一选择器继承

```scss
.button-basic {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report {
  @extend .button-basic;
  background-color: red;
}

.button-submit {
  @extend .button-basic;
  background-color: green;
  color: white;
}
```

- 当样式和选择器之间的关系比较紧密的时候，使用@extend,其他时候使用@mixin
