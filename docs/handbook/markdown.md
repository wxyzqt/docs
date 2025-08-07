# Markdown 常用语法

vsocde 使用的插件 markdown preview enhanced。

[markdown-preview-enhanced](https://github.com/shd101wyy/markdown-preview-enhanced)

[markdown-preview-enhanced 中文](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/markdown-basics)

## 标题

使用#号，几个#号代表几级

### 三级

#### 四级

##### 五级

###### 六级

```md
### 三级

#### 四级

##### 五级

###### 六级
```

## 文本

_斜体文本_  
**粗体文本**  
**_粗斜体文本_**

```md
_斜体文本_  
**粗体文本**  
**_粗斜体文本_**
```

### 分隔线

---

```md
---
```

### 删除线

~~删除~~

```md
~~删除~~
```

### 下划线

<u>带下划线文本</u>

```md
<u>带下划线文本</u>
```

## 列表

无序列表使用星号(\*)、加号(+)或是减号(-)作为列表标记，这些标记后面要添加一个空格，然后再填写内容。

有序列表使用数字并加上 . 号来表示

### 列表嵌套

列表嵌套只需在子列表中的选项前面添加四个空格即可

### 区块

区块引用是在段落开头使用 > 符号 ，然后后面紧跟一个空格符号

> 最外层
>
> > 第一层嵌套
> >
> > > 第二层嵌套

```md
> 最外层
>
> > 第一层嵌套
> >
> > > 第二层嵌套
```

#### 列表中使用区块

- 第一项列表

  > 第一层区块 1

  > 第一层区块 2

- 第二项列表

```md
- 第一项列表

  > 第一层区块 1

  > 第一层区块 2

- 第二项列表
```

## 代码

```````md
代码用一对``包起来
代码块可以用 4 个空格或 tab，但推荐用``````包起来
```````

## 链接

采用文本 [git](https://gitee.com/wxyzqt/docs)

直接显示地址 <https://gitee.com/wxyzqt/docs>

```md
采用文本 [git](https://gitee.com/wxyzqt/docs)

直接显示地址 <https://gitee.com/wxyzqt/docs>
```

### 高级链接

通过变量来设置一个链接，变量赋值在文档末尾进行

这个链接用 google 作为网址变量 [Google][google]

这个链接用 runoob 作为网址变量 [Runoob][runoob]

[google]: http://www.google.com/
[runoob]: http://www.runoob.com/

```md
这个链接用 google 作为网址变量 [Google][google]

这个链接用 runoob 作为网址变量 [Runoob][runoob]

[google]: http://www.google.com/
[runoob]: http://www.runoob.com/
```

## 图片

```md
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题title")
```

## 表格

Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。

| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

```md
| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |
```

-: 设置内容和标题栏居右对齐。

:- 设置内容和标题栏居左对齐。

:-: 设置内容和标题栏居中对齐。

| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |

```md
| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |
```

## 支持的 html

支持的 HTML 元素有：`<kbd> <b> <i> <em> <sup> <sub> <br>`等

## 转义

使用\表示转义

\*

```md
\*
```
