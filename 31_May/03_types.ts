let c: boolean | string;
c = true;
c = 'hello';

//any表示的是任意数据类型，一个变量设置类型为any后相当于对该变量关闭了ts的类型检测
//使用ts时，不建议使用any类型
//let d : any

//声明变量如果不指定类型，则ts解析器会自动判断变量的类型为any 隐式的any
let d;
d = 10;
d = 'hello';
d = true;

// 设置位置类型的值
let e: unknown;
e = 10;
e = 'hello';
e = true;

let s: string;
// d 的类型的any可以赋值给任意变量
s = d;

//unknown 实际上就是一个类型安全的any
// unknown 类型的变量,不能直接赋值给其他变量
if (typeof e === "string") {
    s = e;
}

// 类型断言, 可以用来告诉解析器变量的实际类型
/*
* 语法:
*   变量 as 类型
*   <类型>变量
* */
s = e as string;
s = <string>e;

function fn(): boolean {
    return true;
}

// never表示永远不会返回结果
function fn2(): never{
    throw new Error("报错了!");
}