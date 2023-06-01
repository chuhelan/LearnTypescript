// function fun(a: number): number {
//     return a;
// }

/*
*   在定义函数或是类时,如果遇到类型不明确就可以使用泛型
*
* */
function fn<T>(a: T) {
    return a;
}

let result = fn(123)
let result2 = fn<string>('hello')
console.log(result);
console.log(result2);

function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a;
}

fn2<number, string>(123, 'hello')


interface Inter {
    length: number;
}

function fn3<T extends Inter>(a: T): number {
    return a.length;
}

console.log(fn3('123'));

class MyClass<T>{
    name:T;
    constructor(name:T) {
        this.name = name;
    }
}

const mc = new MyClass<string>('IP Man');
console.log(mc);