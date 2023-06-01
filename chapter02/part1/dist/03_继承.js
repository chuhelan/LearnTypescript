"use strict";
(function () {
    //定义一个Animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log('动物在叫！');
        }
    }
    //定义一个表示狗的类
    class Dog extends Animal {
        say() {
            console.log('Woff!');
        }
        run() {
            console.log(`${this.name}在跑~~~~`);
        }
    }
    //定义一个猫的类
    class Cat extends Animal {
        say() {
            console.log('Mew!');
        }
    }
    const dog = new Dog('Tom', 5);
    console.log(dog);
    dog.say();
    dog.run();
    const cat = new Cat('Mimi', 3);
    console.log(cat);
    cat.say();
})();
