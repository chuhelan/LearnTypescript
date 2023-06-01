"use strict";
// function fun(a: number): number {
//     return a;
// }
/*
*   在定义函数或是类时,如果遇到类型不明确就可以使用泛型
*
* */
function fn(a) {
    return a;
}
let result = fn(123);
let result2 = fn('hello');
console.log(result);
console.log(result2);
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
console.log(fn3('123'));
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('IP Man');
console.log(mc);
