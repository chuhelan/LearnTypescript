(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('Animal is saying hello');
        }
    }

    class Dog extends Animal {

        age: number;

        constructor(name: string, age: number) {

            //如果在子类中写了构造函数,在子类的构造函数中必须对父类的构造函数进行调用
            super(name);
            this.age = age;
        }

        // 在类的方法中super就表示当前类的父类
        sayHello() {
            super.sayHello();
        }
    }

    const dog = new Dog('tom',3);
    dog.sayHello();
})()