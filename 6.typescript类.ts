//静态属性 静态方法
class Per {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    alert(`${this.name}在运动`);
  }
  work() {
    alert(`${this.name}在工作`);
  }
  static print() {
    alert("pring方法");
  }
}
var pe = new Per("张三");
pe.run();
Per.print();

//多态：父类定义一个不去实现的方法，让继承他的子类去实现，每一个子类有不同的表现
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log("吃的方法");
  }
}
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    return this.name + "吃粮食";
  }
}
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    return this.name + "吃老鼠";
  }
}

//抽象方法：抽象类中的抽象方法不包含具体的实现并且必须在派生中实现

abstract class Animal2 {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): any;
}

class Dog2 extends Animal2 {
  //抽象类的子类必须实现抽象类里面的抽象方法
  constructor(name: any) {
    super(name);
  }
  eat() {
    console.log(this.name + "吃粮食");
  }
}
var d = new Dog2("小黑");
d.eat();

class Cat2 extends Animal2 {
  constructor(name: any) {
    super(name);
  }
  eat() {
    console.log(this.name + "吃老鼠");
  }
}
var c2 = new Cat2("小花");
c2.eat();
