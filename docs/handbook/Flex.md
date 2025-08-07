# Flex

flex 则是用来替代传统的布局方式，从构建理念上贴近人的直观认知

这里推荐阮一峰老师的教程：

[flex 布局](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[flex 布局示例](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

## 容器属性

```css
/* 主轴方向 */
flex-direction: row | row-reverse | column | column-reverse;    默认值：row
/* 主轴是否换行 */
flex-wrap: nowrap | wrap | wrap-reverse;    默认值：nowrap
/* 主轴方向和换行缩写 */
flex-flow:<flex-direction> || <flex-wrap>   默认值：row nowrap
/* 子元素在主轴上的对齐方式 */
justify-content: flex-start | flex-end | center | space-between | space-around; 默认值：flex-start
/* 子元素在交叉轴的对齐方式 */
align-items:flex-start | flex-end | center | baseline | stretch 默认值：stretch
/* 多主轴下生效，多主轴的对齐方式 */
align-content:flex-start | flex-end | center | space-between | space-around | stretch  默认值：stretch
```

## 子元素属性

```css
/* 子元素的排列顺序 */
order：<number>   默认值：0
/* 子元素放大比例 */
flex-grow:  <number>; /* default 0 */
/* 子元素缩小比例 */
flex-shrink:  <number>; /* default 1 */
/* 分配多余空间之前，子元素所占据的主轴大小 */
flex-basis:<length> | auto; /* default auto */
/* flex-grow，flex-shrink，flex-basis的缩写 */
/* auto (1 1 auto) ， none (0 0 auto) ，1 (1 1 0)*/
flex:none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] 默认值：0 1 auto
/* 单个子元素在交叉轴的对齐方式，覆盖容器align-items属性 */
align-self:auto | flex-start | flex-end | center | baseline | stretch; 默认值:auto
```
