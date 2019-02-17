console.log("helloworld");
var str: string = "你好";
function getData() {}

var flag: boolean = true;
console.log(flag);

var num: number = 1234;
console.log(num);

var str: string = "this is ts";
str = "haha";
console.log(str);

var arr: number[] = [11, 22, 33];
console.log(arr);

var arr2: Array<number> = [11, 22, 33];
console.log(arr2);

var arr3: [number, string] = [123, "this is ts"];
console.log(arr3);

enum Flag {
  success = 1,
  error = 2
}
let s: Flag = Flag.success;
console.log(s);

enum Flag2 {
  success,
  error = 2
}
let f: Flag = Flag.error;
console.log(f);

enum Color {
  blue,
  red,
  "orange"
}
var c: Color = Color.red;
console.log(c);
enum Err {
  "undefined" = -1,
  "null" = -2,
  "success" = 1
}
var e: Err = Err.success;
console.log(e);

function run(): string {
  return "run";
}
var fun2 = function(): number {
  return 123;
};
alert(fun2());

function getInfo(name: string, age: number): string {
  return `${name} --- ${age}`;
}
alert(getInfo("zhangsna", 20));

var getInfo2 = function(name: string, age: number): string {
  return `${name}---${age}`;
};

function run2(): void {
  console.log("run");
}
run2();

function getInfo3(name: string, age?: number): string {
  if (age) {
    return `${name} --- ${age}`;
  } else {
    return `${name} ---年龄保密`;
  }
}

alert(getInfo3("zhangsan"));
alert(getInfo3("zhangsan", 123));

function getInfo4(name: string, age: number = 20): string {
  if (age) {
    return `${name} --- ${age}`;
  } else {
    return `${name} --- 年龄保密`;
  }
}
alert(getInfo4("张三"));
alert(getInfo4("张三", 30));

function sum(a: number, b: number, c: number, d: number): number {
  return a + b + c + d;
}
alert(sum(1, 2, 3, 4));

function sum2(...result: number[]): number {
  var sum = 0;
  for (var i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
}
alert(sum2(1, 2, 3, 4, 5, 6));

function sum3(a: number, b: number, ...result: number[]): number {
  var sum = a + b;
  for (var i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
}
alert(sum3(1, 23, 4, 45, 5));

function getInfo6(name: string): string;
function getInfo6(age: number): string;
function getInfo6(str: any): any {
  if (typeof str == "string") {
    return "我叫：" + str;
  } else {
    return "我的年龄是：" + str;
  }
}

setTimeout(() => {
  alert("run");
}, 1000);
