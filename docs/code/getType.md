# 数据类型

## 用法

1. 运算符 typeof 应仅用来判断基础类型 number、string、boolean、bigint、symbol、undefined 以及是否为函数 function

2. 运算符 instanceof 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

3. Object.prototype.constructor，Object 实例的 constructor 数据属性返回一个引用，指向创建该实例对象的构造函数。**函数也是对象**。

4. Object.prototype.toString,返回一个表示该对象的字符串。配合 call，才是正确的获取数据类型的方式。

## 解释

1. typeof 运算符比较二进制的前三位，都为 0 则显示为 object 类型，这也是 null 显示成 object 的原因,能正确分辨 function 只是因为对函数的特殊照顾（一等公民）。

2. instanceof 实际检测的是内置属性`__proto__`的指向,而且很容易改写。

<<< @/code/getType.js#exampleOne{3,7,8}

<<< @/code/getType.js#exampleTwo{5}

3. constructor，应当将其视做保存构造函数引用的备忘录，而非修改。

<<< @/code/getType.js#exampleThree{3,5,8,9}

4. 实际使用中，应采用下面代码

<<< @/code/getType.js#exampleFour{2}

通过 call，使用 Object.prototype.toString 来访问原始值`[object xxxx]`。

不论是基础类型还是引用类型，不论是否改写了 toString 方法，在创建过程中都会有对应的原始值。

这种方法，是对当前数据类型最直观的反馈。

## 原型和继承

没有那么多的弯弯绕绕，本质上，原型和继承就是为了重用代码。

1. 所有引用类型（数组、函数、对象）可以自由的扩展属性（null 除外）
2. 所有的引用类型都有一个`__proto__`属性（隐式原型，一个普通的对象 ）
3. 所有的函数都有一个 prototype 原型（显式原型，一个普通的对象）
4. 所有的引用类型，它的`__proto__`属性指向它的构造函数的 prototype 对象
5. 试图得到对象的一个属性时，如果这个对象本身不存在这个属性，那么就会去它的`__proto__`属性中去寻找

<<< @/code/getType.js#exampleFive

## 单链和双链继承

这里需要提及的是，一般函数和对象，继承时为单链继承。即实例可以同过`__proto__`访问构造函数的 prototype 属性。

而在类中，除这种继承外，子类也有`__proto__`指向父类，这种指向便于静态属性和方法的重用。

1. B 函数继承自 A 函数
2. B.prototype 继承自 A.prototype

<<< @/code/getType.js#exampleSix

:::warning
准确来说，`[[Prototype]]`才是原型的正确称呼，`__proto__`只是[[Prototype]]的访问器属性

任何时候，更改原型的操作都需要谨慎并至少配套注释和文档
:::
