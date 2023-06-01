"use strict";
(function () {
    const obj = {
        name: 'ss',
        age: 11,
        gender: 'male'
    };
    /*
    *   定义类的时候,可以使用类去实现一个接口
    * */
    class Myclass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('Hey there');
        }
    }
})();
