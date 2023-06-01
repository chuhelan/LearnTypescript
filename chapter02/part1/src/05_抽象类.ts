(function () {

    /*
    *  抽象类和其他类区别不大,只是不能用来创建对象
    *       抽象类就是专门用来继承的
    *
    * 抽象类中可以添加抽象方法
    *
    * */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }


        /*
        *       定义一个抽象方法
        *       抽象方法使用abstract开头,没有方法体
        *       抽象方法只能定义在抽象类中,子类必须对抽象方法进行重写
        * */
        abstract sayHello():void;
    }

    class Dog extends Animal {

        sayHello() {
            console.log('Woff!')
        }
    }

    const dog = new Dog('tom');
    dog.sayHello();

})();