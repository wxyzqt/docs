# ts 资料

## 文档链接

[TypeScript](https://github.com/microsoft/TypeScript)

[TypeScript Documentation 官网](https://www.typescriptlang.org/docs/basic/intro.html)

[TypeScript Deep Dive 中文](https://github.com/jkchao/typescript-book-chinese)

## 速查表

[Types](/ts/TypeScript-Types.png)

[Interfaces](/ts/TypeScript-Interfaces.png)

[Classes](/ts/TypeScript-Classes.png)

[Control Flow Analysis](/ts/TypeScript-Control-Flow-Analysis.png)

## 推荐用法

个人认为，ts 优势有两个大点：

1. 无论使用 js 还是 ts，只要开发环境(IDE)和库提供类型，则给了开发者一个便捷的类型说明。

2. 在结构和控制流上提示开发者可能发生错误的地方。

基于这两点认知，推荐多使用默认的类型推导，少写不必要标注，多配合 IDE(vscode)和类型工具库，少做类型体操。

较热门的库多数自带类型，找不到库的类型文件时，先去[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)查一查，[readme 中文](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.zh-Hans.md)

## ts 开发中的文档注释规范

TypeScript 代码中使用文档注释的提议

[tsdoc](https://github.com/microsoft/tsdoc)

[tsdoc website](https://tsdoc.org/)

tsdoc 是文档注释的解释器，目前实现是[typedoc](https://github.com/TypeStrong/typedoc)，[typedoc website](https://typedoc.org/)

## utility-types 源码和示例

[utility-types](https://github.com/piotrwitek/utility-types)，包含 ts 内建类型和开源社区精选类型。

```cmd
npm install utility-types
```

### 别名和类型守卫 Aliases & Type Guards

#### 原始值 `Primitive`

```ts
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;

type Various = number | string | object;

// 期望输出: object
type Cleaned = Exclude<Various, Primitive>;
```

#### `isPrimitive`

```ts
export const isPrimitive = (val: unknown): val is Primitive => {
  if (val === null || val === undefined) {
    return true;
  }
  switch (typeof val) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "symbol": {
      return true;
    }
    default:
      return false;
  }
};

const consumer = (value: Primitive | Primitive[]) => {
  if (isPrimitive(value)) {
    return console.log("Primitive value: ", value);
  }
  // 当前推断出的值类型为 Primitive[]
  value.map((primitive) => consumer(primitive));
};

const consumer = (value: boolean | Falsy) => {
  if (!value) {
    return;
  }
  type newType = typeof value; // === true
  // do stuff
};
```

#### 假值 `Falsy`

```ts
export type Falsy = false | "" | 0 | null | undefined;

type Various = "a" | "b" | undefined | false;

// 期望输出: "a" | "b"
Exclude<Various, Falsy>;
```

#### `isFalsy`

```ts
export const isFalsy = (val: unknown): val is Falsy => !val;

const consumer = (value: boolean | Falsy) => {
  if (isFalsy(value)) {
    //   if (!value) {
    return;
  }
  type newType = typeof value; // === true
  // do stuff
};
```

#### 空值 `Nullish`

```ts
export type Nullish = null | undefined;

type Various = "a" | "b" | undefined;

// 期望输出: "a" | "b"
Exclude<Various, Nullish>;
```

#### `isNullish`

```ts
export const isNullish = (val: unknown): val is Nullish => val == null;

const consumer = (param: Nullish | string): string => {
  if (isNullish(param)) {
    // typeof param === Nullish
    return String(param) + " was Nullish";
  }
  // typeof param === string
  return param.toString();
};
```

### 集合操作 Union operators

#### 交集 `SetIntersection<A, B>`

交集，和 Extract 相同

```ts
export type SetIntersection<A, B> = A extends B ? A : never;

// 期望输出: "2" | "3"
SetIntersection<"1" | "2" | "3", "2" | "3" | "4">;

// 期望输出: () => void
SetIntersection<string | number | (() => void), Function>;
```

#### 差集 `SetDifference<A, B>`

差集，和 Exclude 相同

```ts
export type SetDifference<A, B> = A extends B ? never : A;

// 期望输出: "1"
SetDifference<"1" | "2" | "3", "2" | "3" | "4">;

// 期望输出: string | number
SetDifference<string | number | (() => void), Function>;
```

#### 补集 `SetComplement<A, A1>`

集合 A 对于其子集 A1 的补集

```ts
export type SetComplement<A, A1 extends A> = SetDifference<A, A1>;

// 期望输出: "1"
SetComplement<"1" | "2" | "3", "2" | "3">;
```

#### 对称差集 `SymmetricDifference<A, B>`

联合类型 `A` 和 `B` 的并集与交集的集合差值

```ts
export type SymmetricDifference<A, B> = SetDifference<A | B, A & B>;

// 期望输出: "1" | "4"
SymmetricDifference<"1" | "2" | "3", "2" | "3" | "4">;
```

#### 差集 `Exclude<A, B>`

ts 内建，与 `SetDifference<A, B>`相同

#### 交集 `Extract<A, B>`

ts 内建，与`SetIntersection<A, B>`相同，从 A 中抽取 B 中相同部分

#### `NonNullable<T>`

ts 内建，排除 null 和 undefined，即排除空值。

```ts
// 期望输出: "string"
NonNullable<string | null | undefined>;
```

#### `NonUndefined<T>`

```ts
export type NonUndefined<A> = A extends undefined ? never : A;

// 期望输出: "string | null"
NonUndefined<string | null | undefined>;
```

### 对象操作 Object operators

#### `FunctionKeys<T>`

获取对象中键为函数属性的联合类型

```ts
export type FunctionKeys<T extends object> = {
  [K in keyof T]-?: NonUndefined<T[K]> extends Function ? K : never;
}[keyof T];

type MixedProps = {
  name: string;
  setName: (name: string) => void;
  someKeys?: string;
  someFn?: (...args: any) => any;
};

// 期望输出: "setName | someFn"
type Keys = FunctionKeys<MixedProps>;
```

#### `NonFunctionKeys<T>`

```ts
export type NonFunctionKeys<T extends object> = {
  [K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K;
}[keyof T];

type MixedProps = {
  name: string;
  setName: (name: string) => void;
  someKeys?: string;
  someFn?: (...args: any) => any;
};

// 期望输出: "name | someKey"
type Keys = NonFunctionKeys<MixedProps>;
```

#### `MutableKeys<T>`

获取对象中`可变键`(非 readonly 键)的联合类型

```ts
export type MutableKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >;
}[keyof T];

export type WritableKeys<T extends object> = MutableKeys<T>;

type Props = { readonly foo: string; bar: number };

// 期望输出: "bar"
type Keys = MutableKeys<Props>;
```

#### 只读键 `ReadonlyKeys<T>`

```ts
export type ReadonlyKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >;
}[keyof T];

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? A
  : B;

type Props = { readonly foo: string; bar: number };

// 期望输出: "foo"
type Keys = ReadonlyKeys<Props>;
```

#### `RequiredKeys<T>`

```ts
export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

type Props = {
  req: number;
  reqUndef: number | undefined;
  opt?: string;
  optUndef?: number | undefined;
};

// 期望输出: "req" | "reqUndef"
type Keys = RequiredKeys<Props>;
```

#### 可选键 `OptionalKeys<T>`

```ts
export type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

type Props = {
  req: number;
  reqUndef: number | undefined;
  opt?: string;
  optUndef?: number | undefined;
};

// 期望输出: "opt" | "optUndef"
type Keys = OptionalKeys<Props>;
```

#### `UnionKeys<T>`

获取`联合类型对象`中所有键值

```ts
export type UnionKeys<U> = keyof UnionToIntersection<Partial<U>>;

// 期望输出: 'name' | 'age' | 'visible'
UnionKeys<
  { name: string; age: string } | { age: number } | { visible: boolean }
>;
```

#### `Optional<T, K>`

从“T”中通过键“K”生成一组属性，使其成为可选属性。

```ts
export type Optional<T extends object, K extends keyof T = keyof T> = Omit<
  T,
  K
> &
  Partial<Pick<T, K>>;

type Props = {
  name: string;
  age: number;
  visible: boolean;
};

// 期望输出: { name?: string; age?: number; visible?: boolean; }
type Props = Optional<Props>;

// 期望输出: { name: string; age?: number; visible?: boolean; }
type Props = Optional<Props, "age" | "visible">;
```

#### `Partial<T>`

ts 内建，将对象所有属性设为可选

#### `DeepPartial<T>`

```ts
export type DeepPartial<T> = { [P in keyof T]?: _DeepPartial<T[P]> };

export type _DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
  ? _DeepPartialArray<U>
  : T extends object
  ? DeepPartial<T>
  : T | undefined;

export interface _DeepPartialArray<T> extends Array<_DeepPartial<T>> {}

// 期望输出: {
//   first?: {
//     second?: {
//       name?: string;
//     };
//   };
// }
type NestedProps = {
  first: {
    second: {
      name: string;
    };
  };
};
type PartialNestedProps = DeepPartial<NestedProps>;
```

#### `Required<T, K>`

ts 内建，将所有属性变为必选

#### `DeepRequired<T>`

```ts
export type DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? _DeepRequiredArray<T[number]>
  : T extends object
  ? _DeepRequiredObject<T>
  : T;

export interface _DeepRequiredArray<T>
  extends Array<DeepRequired<NonUndefined<T>>> {}

export type _DeepRequiredObject<T> = {
  [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>;
};

// 期望输出: {
//   first: {
//     second: {
//       name: string;
//     };
//   };
// }
type NestedProps = {
  first?: {
    second?: {
      name?: string;
    };
  };
};
type RequiredNestedProps = DeepRequired<NestedProps>;
```

#### `Readonly<T>`

对象所有属性设置为只读

#### `DeepReadonly<T>`

```ts
export type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive
  ? T
  : T extends _DeepReadonlyArray<infer U>
  ? _DeepReadonlyArray<U>
  : T extends _DeepReadonlyObject<infer V>
  ? _DeepReadonlyObject<V>
  : T;

// tslint:disable-next-line:class-name
export interface _DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

export type _DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

// 期望输出: {
//   readonly first: {
//     readonly second: {
//       readonly name: string;
//     };
//   };
// }
type NestedProps = {
  first: {
    second: {
      name: string;
    };
  };
};
type ReadonlyNestedProps = DeepReadonly<NestedProps>;
```

#### `Mutable<T>`

将对象只读属性改为可变

```ts
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

type Props = {
  readonly name: string;
  readonly age: number;
  readonly visible: boolean;
};

// 期望输出: { name: string; age: number; visible: boolean; }
Mutable<Props>;
```

#### 挑选 `Pick<T, K>`

ts 内建，从 T 中选择 K 键的属性

```ts
type Props = { name: string; age: number; visible: boolean };

// 期望输出: { age: number; }
type Props = Pick<Props, "age">;
```

#### 移除 `Omit<T, K>`

ts 内建，从 T 中移除 K 键的属性

```ts
export type Omit<T, K extends keyof any> = Pick<T, SetDifference<keyof T, K>>;

type Props = { name: string; age: number; visible: boolean };

// 期望输出: { name: string; visible: boolean; }
type Props = Omit<Props, "age">;
```

#### `PickByValue<T, ValueType>`

从 T 中选取`值类型匹配`的属性

```ts
export type PickByValue<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? Key : never }[keyof T]
>;

type Props = { req: number; reqUndef: number | undefined; opt?: string };

// 期望输出: { req: number }
type Props = PickByValue<Props, number>;
// 期望输出: { req: number; reqUndef: number | undefined; }
type Props = PickByValue<Props, number | undefined>;
```

#### `PickByValueExact<T, ValueType>`

从 T 中选取`精确值类型匹配`的属性

```ts
export type PickByValueExact<T, ValueType> = Pick<
  T,
  {
    [Key in keyof T]-?: [ValueType] extends [T[Key]]
      ? [T[Key]] extends [ValueType]
        ? Key
        : never
      : never;
  }[keyof T]
>;

type Props = { req: number; reqUndef: number | undefined; opt?: string };

// 期望输出: { req: number }
type Props = PickByValueExact<Props, number>;
// 期望输出: { reqUndef: number | undefined; }
type Props = PickByValueExact<Props, number | undefined>;
```

#### `OmitByValue<T, ValueType>`

从 T 中移除`值类型`匹配的属性

```ts
export type OmitByValue<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? never : Key }[keyof T]
>;

type Props = { req: number; reqUndef: number | undefined; opt?: string };

// 期望输出: { reqUndef: number | undefined; opt?: string; }
type Props = OmitByValue<Props, number>;
// 期望输出: { opt?: string; }
type Props = OmitByValue<Props, number | undefined>;
```

#### `OmitByValueExact<T, ValueType>`

从 T 中移除`精确值类型匹配`的属性

```ts
export type OmitByValueExact<T, ValueType> = Pick<
  T,
  {
    [Key in keyof T]-?: [ValueType] extends [T[Key]]
      ? [T[Key]] extends [ValueType]
        ? never
        : Key
      : Key;
  }[keyof T]
>;

type Props = { req: number; reqUndef: number | undefined; opt?: string };

// 期望输出: { reqUndef: number | undefined; opt?: string; }
type Props = OmitByValueExact<Props, number>;
// 期望输出: { req: number; opt?: string }
type Props = OmitByValueExact<Props, number | undefined>;
```

#### 交集 `Intersection<T, U>`

T,U 属性的交集

```ts
export type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>;

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// 期望输出: { age: number; }
type DuplicateProps = Intersection<Props, DefaultProps>;
```

#### `Diff<T, U>`

T,U 属性的差集

```ts
export type Diff<T extends object, U extends object> = Pick<
  T,
  SetDifference<keyof T, keyof U>
>;

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// 期望输出: { name: string; visible: boolean; }
type DiffProps = Diff<Props, DefaultProps>;
```

#### `Subtract<T, T1>`

T 中移除存在于 T1 的属性，T1 是 T 的子集

```ts
export type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>;

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// 期望输出: { name: string; visible: boolean; }
type RestProps = Subtract<Props, DefaultProps>;
```

#### `Overwrite<T, U>`

U 中存在的相同属性重写到 T

```ts
export type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>;

type Props = { name: string; age: number; visible: boolean };
type NewProps = { age: string; other: string };

// 期望输出: { name: string; age: string; visible: boolean; }
type ReplacedProps = Overwrite<Props, NewProps>;
```

#### `Assign<T, U>`

U 中属性 assign 到 T 中，类似`object.assgin`

```ts
export type Assign<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T> & Diff<U, T>
> = Pick<I, keyof I>;

type Props = { name: string; age: number; visible: boolean };
type NewProps = { age: string; other: string };

// 期望输出: { name: string; age: number; visible: boolean; other: string; }
type ExtendedProps = Assign<Props, NewProps>;
```

#### `ValuesType<T>`

获取 T(对象、数组、类数组)所有`值类型`的联合类型

```ts
export type ValuesType<
  T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>
> = T extends ReadonlyArray<any>
  ? T[number]
  : T extends ArrayLike<any>
  ? T[number]
  : T extends object
  ? T[keyof T]
  : never;

type Props = { name: string; age: number; visible: boolean };
// 期望输出: string | number | boolean
type PropsValues = ValuesType<Props>;

type NumberArray = number[];
// 期望输出: number
type NumberItems = ValuesType<NumberArray>;

type ReadonlySymbolArray = readonly symbol[];
// 期望输出: symbol
type SymbolItems = ValuesType<ReadonlySymbolArray>;

type NumberTuple = [1, 2];
// 期望输出: 1 | 2
type NumberUnion = ValuesType<NumberTuple>;

type ReadonlyNumberTuple = readonly [1, 2];
// 期望输出: 1 | 2
type AnotherNumberUnion = ValuesType<NumberTuple>;

type BinaryArray = Uint8Array;
// 期望输出: number
type BinaryItems = ValuesType<BinaryArray>;
```

### 特殊操作 Special operators

#### `ReturnType<T>`

ts 内建，提取函数 T 的返回值类型

#### `InstanceType<T>`

ts 内建，获取一个类的实例类型

#### `PromiseType<T>`

获取 Promise resolve 类型

```ts
export type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

// 期望输出: string;
type Response = PromiseType<Promise<string>>;
```

#### `Unionize<T>`

将对象按单个属性分离形成对象的集合，每个对象都具有单一属性

```ts
export type Unionize<T extends object> = {
  [P in keyof T]: { [Q in P]: T[P] };
}[keyof T];

type Props = { name: string; age: number; visible: boolean };

// 期望输出: { name: string; } | { age: number; } | { visible: boolean; }
type UnionizedType = Unionize<Props>;
```

#### `Brand<T, U>`

根据 T 的类型来定义 U 的名义类型。与 Flow 中的不透明类型类似。

```ts
export type Brand<T, U> = T & { __brand: U };

type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;

const tax = 5 as USD;
const usd = 10 as USD;
const eur = 10 as EUR;

function gross(net: USD): USD {
  return (net + tax) as USD;
}

// 期望输出: No compile error
gross(usd);
// 期望输出: Compile error (Type '"EUR"' is not assignable to type '"USD"'.)
gross(eur);
```

#### `UnionToIntersection<U>`

根据联合类型 `U` 获取交集类型

```ts
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

// 期望输出: { name: string } & { age: number } & { visible: boolean }
UnionToIntersection<{ name: string } | { age: number } | { visible: boolean }>;
```

### Flow 的实用类型 Flow's Utility Types

#### `$Keys<T>`

获取对象类型 `T` 中所有键的联合类型

```ts
export type $Keys<T extends object> = keyof T;

type Props = { name: string; age: number; visible: boolean };

// 期望输出: "name" | "age" | "visible"
type PropsKeys = $Keys<Props>;
```

#### `$Values<T>`

获取对象类型 `T` 中所有值的联合类型

```ts
export type $Values<T extends object> = T[keyof T];
type Props = { name: string; age: number; visible: boolean };

// 期望输出: string | number | boolean
type PropsValues = $Values<Props>;
```

#### `$ReadOnly<T>`

```ts
export type $ReadOnly<T extends object> = DeepReadonly<T>;
```

#### `$Diff<T, U>`

获取给定对象类型 `T` 和 `U` 的集合差集

```ts
export type $Diff<T extends U, U extends object> = Pick<
  T,
  SetComplement<keyof T, keyof U>
>;

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// 期望输出: { name: string; visible: boolean; }
type RequiredProps = Diff<Props, DefaultProps>;
```

#### `$PropertyType<T, K>`

获取对象在给定键 `K` 处的属性类型

```ts
export type $PropertyType<T extends object, K extends keyof T> = T[K];

// 期望输出: string;
type Props = { name: string; age: number; visible: boolean };
type NameType = $PropertyType<Props, "name">;

// 期望输出: boolean
type Tuple = [boolean, number];
type A = $PropertyType<Tuple, "0">;
// 期望输出: number
type B = $PropertyType<Tuple, "1">;
```

#### `$ElementType<T, K>`

获取数组、元组或类型为 `T` 的对象中与给定索引类型 `K` 相匹配的元素类型。

```ts
export type $ElementType<
  T extends { [P in K & any]: any },
  K extends keyof T | number
> = T[K];

// 期望输出: string;
type Props = { name: string; age: number; visible: boolean };
type NameType = $ElementType<Props, "name">;

// 期望输出: boolean
type Tuple = [boolean, number];
type A = $ElementType<Tuple, "0">;
// 期望输出: number
type B = $ElementType<Tuple, "1">;

// 期望输出: boolean
type Arr = boolean[];
type ItemsType = $ElementType<Arr, number>;

// 期望输出: number
type Obj = { [key: string]: number };
type ValuesType = $ElementType<Obj, string>;
```

#### `$Call<T>`

从给定的 typeof 表达式中获取返回类型

```ts
export type $Call<Fn extends (...args: any[]) => any> = Fn extends (
  arg: any
) => infer RT
  ? RT
  : never;

// Common use-case
const add = (amount: number) => ({ type: "ADD" as "ADD", payload: amount });
type AddAction = $Call<typeof add>; // { type: 'ADD'; payload: number }

// Examples migrated from Flow docs
type ExtractPropType<T extends { prop: any }> = (arg: T) => T["prop"];
type Obj = { prop: number };
type PropType = $Call<ExtractPropType<Obj>>; // number

type ExtractReturnType<T extends () => any> = (arg: T) => ReturnType<T>;
type Fn = () => number;
type FnReturnType = $Call<ExtractReturnType<Fn>>; // number
```

#### `$Shape<T>`

复制所提供的字体的形状，但将每个字段都标记为可选项。

```ts
export type $Shape<T extends object> = Partial<T>;

type Props = { name: string; age: number; visible: boolean };

// 期望输出: Partial<Props>
type PartialProps = $Shape<Props>;
```

#### `$NonMaybeType<T>`

从 T 中移除 null 和 undefined

```ts
export type $NonMaybeType<T> = NonNullable<T>;

type MaybeName = string | null;

// 期望输出: string
type Name = $NonMaybeType<MaybeName>;
```

#### `Class<T>`

表示类型为 T 的构造函数

```ts
export type Class<T> = new (...args: any[]) => T;

class Store {}
function makeStore(storeClass: Class<Store>): Store {
  return new storeClass();
}
```

#### `mixed`

一种任意的类型，可以是任何东西。

```ts
export type mixed = unknown;

function stringify(value: mixed) {
  // ...
}

stringify("foo");
stringify(3.14);
stringify(null);
stringify({});
```
