"use strict";
(function () {
    /*
    *  抽象类和其他类区别不大,只是不能用来创建对象
    *       抽象类就是专门用来继承的
    *
    * 抽象类中可以添加抽象方法
    *
    * */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('Woff!');
        }
    }
    const dog = new Dog('tom');
    dog.sayHello();
})();
