# CSS

Cascading Style Sheets，层叠样式表

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

[MDN-css 工具](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_colors/Color_picker_tool)

## css 框架

[Tailwind CSS github](https://github.com/tailwindlabs/tailwindcss)

[Tailwind CSS website](https://tailwindcss.com/docs/installation/using-vite)

:::tip
嗯~~~，从理念上来说，bootstrap 已经被我放弃了，但是它也很不错。
:::

## css 处理器

### 预处理器

[sass/scss](https://github.com/sass/sass)

[stylus](https://github.com/stylus/stylus)

[less](https://github.com/less/less.js)

[less-官网](https://lesscss.org/features/)

:::details 个人观点
sass 是最早的 css 预处理器语言，scss 是 sass 的新版本。老意味着功能全同时也代表着历史负担重，我一般不使用它。

stylus 像 python 一样，可以省略括号和标点符号，这是否是个优势？就开发维护来说，我认为不是。

less，功能不算最全，但够用，我推荐这个。
:::

### 后处理器

[postcss](https://github.com/postcss/postcss)

依赖插件实现功能（如自动添加浏览器前缀、压缩代码），适合优化现有代码，通常 vite、webpack 之类的前端构建工具内含或安装插件。

## css 样式表加载顺序

```md
‌ 外部样式表加载：使用<link>标签引入的外部样式表会并行下载，不阻塞页面渲染。
@import 规则属于 CSS 文件内部模块化引入方式，串行下载且可能阻塞渲染。 ‌

‌ 覆盖规则：后加载的样式表会覆盖先加载的同名样式（权重相同时）。

CSS 优先级按四层级模型计算：
‌- 内联样式 ‌（如<div style="color: red;">）优先级最高（权重 1,0,0,0）
‌- ID 选择器 ‌（如#container）次之（权重 0,1,0,0）
‌- 类选择器/属性选择器 ‌（如.class）再次（权重 0,0,1,0）
‌- 标签选择器/伪元素 ‌（如 div）最低（权重 0,0,0,1）
```

:::warning
常规开发，慎用 !important
:::

## 盒模型

将 html 元素看做一个盒子，则其结构可分为四部分：content、padding、border、margin

网上流行的面试题所描述的盒模型，本质上是 css 设置 width 时，width 所涵盖的范围

IE：width = content + padding + border
w3c: width = content

从实际应用和规范角度来说，现有浏览器所采用的都是 w3c 所描述的盒模型,即 content = width

某些需要盒模型转换的场景下，指定为 IE 盒模型的方式如下

```css
box-sizing: border-box;
```

## BEM 用法风格指南

BEM（Block，Element，Modifier）是基于组件的命名方法论。它的主要思想是将 UI 分割成独立的、互不依赖的块。

### Block 块

页面中功能独立的、能够被复用的组件。在 HTML 中 Block 由`class`属性表示。即独立出来的块（下面也会称其为组件）的根元素类名应与块名保持一致。

#### Block 特性

Block 具有以下三点特性：

1. 块的名称要**语义化，应当表示它的功能或者目的，即它是什么，而不是它是咋样的**。如应使用`danger-button`，而不是`red-button`。

   ```html
   <!-- 推荐：更加语义化，表示按钮为危险操作按钮 -->
   <div class="danger-button"></div>

   <!-- 不推荐：仅描述了按钮的状态，当颜色改变时，类名也要进行改变 -->
   <div class="red-button"></div>
   ```

2. 定义块的时候，只需要关心本身作为一个整体应该显示成什么样子，不要影响外部环境。**即不要设定外部布局相关（如 margin）和定位等外部样式。因为不同的使用场景对于这些样式的要求不一样，所以由外部环境决定即可。**

3. 使用 class 代替标签和 id 选择器。

我们要时刻谨记这三点，这样所提出的块才能够具备独立性，能够被复用，能够方便地应用于不同的地方。

#### Block 注意事项

最后，不同的块组件可以自由组合使用，可以随意嵌套，只要保证块的独立性即可。

### Element 元素

Element 是块的组成部分，通常不能被单独使用，是块的某个功能组成。

#### Element 特性

Element 有以下两个特性：

1. element 的名称也要描述其**在块中所承担的职责或功能**，而不是状态等直观的表象。
2. element 的全名应该包含块名，如`block-name__element-name`。**元素名和块名之间由双下划线分隔（`__`）**。

示例：

```html
<!-- `search-form`块 -->
<form class="search-form">
  <!-- `search-form`块的`input`元素 -->
  <input class="search-form__input" />

  <!-- `search-form`块的`button`元素 -->
  <button class="search-form__button">Search</button>
</form>
```

#### Element 使用指南

1. 嵌套 Element 时需要注意，Element 可以相互嵌套、嵌套层数随意。但是一定要记住，**Element 是 Block 的一部分，而不是其他 Element 的一部分**。所以不会存在下面这样的层级`block__elem1__elem2`。

   ```html
   <!--
     推荐：命名模式都满足`block-name__element-name`
   -->
   <form class="search-form">
     <div class="search-form__content">
       <input class="search-form__input" />
       <button class="search-form__button">Search</button>
     </div>
   </form>

   <!--
     不推荐：命名模式不满足`block-name__element-name`
   -->
   <form class="search-form">
     <div class="search-form__content">
       <!-- 建议使用: `search-form__input` 或者 `search-form__content-input` -->
       <input class="search-form__content__input" />

       <!-- 建议使用: `search-form__button` 或者 `search-form__content-button` -->
       <button class="search-form__content__button">Search</button>
     </div>
   </form>
   ```

   Block 的名称相当于定义了命名空间，Element 的命名约定能保证 ELement 和 Block 的依赖关系。

2. 元素通常是块的一部分，不能独立使用，这个相信没有疑问。

3. 元素对于块来说是可选的，不是所有块都必须有元素。

#### 到底该创建 Block 还是 Element 呢？

如果某段代码能够复用，且不依赖于页面的其他组件，则创建一个块。否则应该创建一个元素。

但有时块的元素还需要细分，需要注意的是 BEM 不允许创建元素的元素。这时需要创建一个子块。

### Modifier 修饰符

修饰符主要用于定义块或者元素的**外观、状态或者行为**。

#### 修饰符的特性

BEM 中的修饰符具有以下两点特性：

1. 修饰符的名称主要描述块或元素的外观（如大小、主题）、状态（如 disabled、focused 等）以及行为（如位置的左上、右下等）。

2. 修饰符的名称通过**两个中划线**（--）与块或元素名分隔。

#### 使用指南

1. 修饰符不能单独使用，必须配合块和元素使用。

   ```html
   <!-- 正确 -->
   <form class="search-form search-form_theme--islands">...</form>

   <!-- 错误：`search-form`丢失，修饰符不能单独使用。 -->
   <form class="search-form_theme--islands">...</form>
   ```

2. 不能同时使用两个控制相同内容的修饰符

### Mix 混合使用

Mix 是指在单个 DOM 节点上使用不同 BEM 实体，即 BEM 实体的混合使用。

混合使用时，我们可以合并多个 BEM 实体的行为和样式，而不用复制代码。可以基于已有的 UI 组件，创建一个语义上全新的组件。

```html
<!-- `header` block -->
<div class="header">
  <!--
      `search-form`块与`header__search-form`元素混合使用，
      这时，我们可以在`header__search-form`设定其在header中的外部样式（如边距和定位等）。
  -->
  <div class="search-form header__search-form"></div>
</div>
```

### 其他问题

#### 为什么要在修饰符和元素名中包含块名称？

1. 提供命名空间。能够减少对其他块实现的影响

   ```html
   <!--
     `button--size-m` 和 `select--size-m` 互不影响。
     但如果都是用`size-m`这有可能会造成互相影响。
   -->
   <div class="button button--size-m">...</div>
   <div class="select select--size-m">...</div>
   ```

2. 混合使用时不会混乱。当需要使用混合时，修饰符必须得清晰地表明修饰的块或元素。

   ```html
   <!-- `button--size-m`表示修饰`button`而不是`dropdown` -->
   <div class="button dropdown button--size-m">...</div>
   ```

3. 更容易在代码中进行检索。可以直接找到对应修饰符的使用。

### 参考内容

1. <http://getbem.com/naming/>
2. <https://en.bem.info/methodology/quick-start/>
