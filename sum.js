function calc(a, b, meth) {
    var _a, _b;
    var operations = {
        sum: function (a, b) { return a + b; },
        mul: function (a, b) { return a * b; },
        div: function (a, b) { return a / b; },
        sub: function (a, b) { return a - b; },
    };
    return (_b = (_a = operations[meth]) === null || _a === void 0 ? void 0 : _a.call(operations, a, b)) !== null && _b !== void 0 ? _b : -1;
}
var method = ["sum", "mul", "div", "sub"];
method.forEach(function (method) {
    var result = calc(10, 10, method);
    console.log("".concat(method, " ").concat(result));
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
