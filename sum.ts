function calc(a:number,b:number,meth:string) : number 
{
    const operations : {[key:string]: (a:number,b:number)=> number}={
      sum: (a, b) => a + b,
      mul: (a, b) => a * b, 
      div: (a, b) => a / b,
      sub: (a, b) => a - b, };
    return operations[meth]?.(a, b) ?? -1;}

const method =["sum","mul","div","sub"];
method.forEach((method)=>{
    const result = calc(10,10,method)
    console.log(`${method} ${result}`);
})

// enum Operation {
//     Sum = 'sum',
//     Mul = 'mul',
//     Div = 'div',
//     Sub = 'sub',
// }

// const method = [Operation.Sum, Operation.Mul, Operation.Div, Operation.Sub];
// method.forEach((method) => {
//     const result = calc(10, 2, method); 
//     console.log(`${method} ${result}`);
// });

// function calc(a: number, b: number, meth: Operation): number {
//     const operations: { [key in Operation]: (a: number, b: number) => number } = {
//         [Operation.Sum]: (a, b) => a + b,
//         [Operation.Mul]: (a, b) => a * b,
//         [Operation.Div]: (a, b) => a / b,
//         [Operation.Sub]: (a, b) => a - b,
//     };
//     return operations[meth]?.(a, b) ?? -1;
// }


// interface Circle {
//     radius: number;
//     borderWidth?: number; //optional props
// }
// function render(circle: Circle) {
//     let width: (number | undefined) = circle.borderWidth;
//     console.log("circle created");
// }

// render ({
//    radius: 10,
//    borderWidth: 10
// })


// interface PersonGenderProperties {
//     gender: string;
//     orientation: string;
//     pronouns: string;
// }

// interface PersonInterface extends PersonGenderProperties {
//     name: string;
//     age: number;
// }

// interface AnimalInterface extends PersonInterface {
//     name: string;
//     furType: string;
// }


//  const person: AnimalInterface = { name: "Raunit", age: 19 ,furType:"black",
//   gender: "male",orientation: "gay",pronouns:"her"
//  };
//  console.log(person)

//  interface PersonGenderProperties {
//     gender: string;
//     orientation: string;
//     pronouns: string;
// }

// interface PersonInterface  {
//     name: string;
//     age: number;
//     genderprops: PersonGenderProperties
// }

// interface AnimalInterface {
//     name: string;
//     furType: string;
//     PersonGender: PersonInterface
// }

// const person: AnimalInterface = { name: "Raunit", furType: "Black", PersonGender: {name:"rishi",age: 19, genderprops : {
//     gender: "male",orientation: "gay",pronouns:"her" }}
//    };
//    console.log(person)

















interface Person {
    name:string,
    age: number
}
 
type pp = {
    name:string,
    age: number
}

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

