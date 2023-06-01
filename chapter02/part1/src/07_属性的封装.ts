(function () {


    class Person {
        //TS可以在属性前添加属性的修饰符
        private _name: string;
        private _age: number

        constructor(name: string, age: number) {
            this._age = age;
            this._name = name;
        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }

    const per = new Person('IP Man', 35);
    console.log(per);

    /*
    *       现在属性是在对象中设置的,属性可以任意的被修改
    *           属性可以任意被修改将会导致对象中的数据变得非常不安全
    * */

    // per.name = 'GGBond';
    // per.age = -9;

    per.name = 'GGBond';
    console.log(per.name);
    console.log(per);

})()