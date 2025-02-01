"use strict";
function calc(a, b, meth) {
    var _a, _b;
    const operations = {
        sum: (a, b) => a + b,
        mul: (a, b) => a * b,
        div: (a, b) => a / b,
        sub: (a, b) => a - b,
    };
    return (_b = (_a = operations[meth]) === null || _a === void 0 ? void 0 : _a.call(operations, a, b)) !== null && _b !== void 0 ? _b : -1;
}
const method = ["sum", "mul", "div", "sub"];
method.forEach((method) => {
    const result = calc(10, 10, method);
    console.log(`${method} ${result}`);
});
// type Shape = {circle|rectangle|anyshape}
// function summa(person:Person) 
// {
//    return "hello mr"+person.name+"with the age of"+person.age ;
// }
// const person: Person = { name: "Raunit", age: 19 };
// console.log(summa(person))
// class person implements Person
// {
//     name:string
//     age:number
//    constructor(name:string,age:number)
//    {
//     this.name=name
//     this.age=age
//    }
// }
// const object= new person("raunit",19)
// console.log(object)
