function gen<T>(a:T[]):T{
    return a[2]
}
let ans1=gen<number>([1,2,3,4,5])
let ans2=gen<string>(["raunit","rishi","sona"])
let ans3=gen<number|string|{name:string,age:number}>([1,"one",{
    name:"raunit",
    age:19
}])
console.log(ans3);
console.log(ans2.toUpperCase());
console.log(ans1);





// let a=[1,2,3,4,5];
// let b=["raunit","rishi","sona"]

// type Arr = string[]|number[];

// function Fd( b:Arr) : string|number
// {
//     return b[0];
// }
// let c=Fd(a);
// let d=Fd(b);
// console.log(d);
// console.log(c);
// d.TolowerCase // need of generics

// ---------------------------------------------------------------------------------------------------------


// Variable Inference:  
// let x = 10; // x: number  

// Function Return Type:  
// function add(a: number, b: number) { return a + b; } // Returns number  

// Array Inference:  
// let arr = [1, 2, 3]; // number[]  

// Mixed Array Inference:  
// let mixed = [1, "hello", true]; // (string | number | boolean)[]  

// Object Inference:  
// let obj = { name: "Alice", age: 25 }; // { name: string; age: number }  

// Contextual Typing:  
// window.addEventListener("click", (event) => { console.log(event.clientX); }); // 'event' is inferred as MouseEvent  

