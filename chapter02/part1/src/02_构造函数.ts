class Dog {
    name: string;
    age: number;

    //constructor 被成为构造函数
    // 勾在函数会在对象创建时调用
    constructor(name: string, age: number) {
        console.log('构造函数执行了~~~')
        // 在实例方法中，this就表示当前当前的实例
        // 在构造函数中，当前对象就是当前新创建的那个对象
        // 可以通过this向新建的对象中添加属性
        console.log(this)
        this.name = name;
        this.age = age;
    }

    bark() {
        alert("汪汪!");
        console.log(this);
    }

}

const dog = new Dog('旺财', 13);
const dog2 = new Dog('Tom', 21);

console.log(dog);
console.log(dog2);

console.log("-----")
dog.bark();