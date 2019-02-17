interface Animal4 {
  eat(): void;
}
interface _Person4 extends Animal4 {
  work(): void;
}
class Programmer {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  coding() {
    console.log();
  }
}
class _Web4 extends Programmer implements _Person4 {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(this.name + "喜欢吃馒头");
  }
  work() {
    console.log(this.name + "写代码");
  }
}
var _w5 = new _Web4("小李");
_w5.work();
