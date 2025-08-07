// #region exampleOne
const arr = []

console.log(arr instanceof Array);//true

arr.__proto__ = String.prototype

console.log(arr instanceof String);//true
console.log(arr instanceof Array);//false
// #endregion exampleOne

// #region exampleTwo
const obj = {
    __proto__: Array.prototype,
  }

console.log(obj instanceof Array); //true
// #endregion exampleTwo

// #region exampleThree
const num = 1

console.log(num.constructor === Number);//true
// num.constructor实际访问的是构造函数Number的prototype上的constructor属性，指向构造函数自身。
console.log(Number.prototype.constructor === Number);//true

// 改写constructor
Number.prototype.constructor = String
console.log(Number.prototype.constructor === String);//true
console.log(num.constructor === String);//true
// #endregion exampleThree

// #region exampleFour
function getType(target) {
    return Object.prototype.toString
      .call(target)
      .replace(/\[object\s|\]/g, "")
      .toLowerCase();
}
// #endregion exampleFour

// #region exampleFive
const array = [];
console.log(array.__proto__ === Array.prototype);//true

const o = {};
console.log(o.__proto__ === Object.prototype);//true

const fn = function a() {};
console.log(fn.__proto__ === Function.prototype);//true

console.log(Object.prototype.__proto__); //null
console.log(Array.prototype.__proto__.__proto__); //null
console.log(Function.prototype.__proto__.__proto__); //null

function Teacher(name) {
  this.name = name;
}

Object.prototype.toString = function () {
  console.log(`my name is ${this.name}`);
};

const teacher = new Teacher("tom");
teacher.toString();//my name is tom
console.log(Teacher.prototype);//{}
console.log(teacher.__proto__ === Teacher.prototype);//true
console.log(Teacher.prototype.__proto__ === Function.prototype.__proto__);//true
// #endregion exampleFive


// #region exampleSix
class A {

  constructor() {
    this.name = "A";
  }

  static print(){
    console.log(this.name);
    
  }
}

class B extends A {

  constructor() {
    super();
    this.name = "B";
  }
}

const b = new B();
// 这里的继承和普通对象一样,这样B可以访问A中的常规方法
console.log(b.__proto__ === B.prototype); //true
console.log(B.prototype.__proto__ === A.prototype); //true
console.log(A.prototype.__proto__ === Object.prototype); //true

// 类特有的继承,这样B可以访问A中的静态方法
console.log(B.__proto__=== A); //true
console.log(B.print());//B
// #endregion exampleSix