// function swap<T>(z: T[], v: T[]){
//     let temp: T = z[0];
//     z[0] = v[0];
//     v[0] = temp;
//     return [z, v];
// }
// //why i have to explicitly mention the generics type 
// let a: number[] = [1, 2, 3, 4, 5];
// let b: number[] = [10, 11, 12, 13, 14];
// let c: string[] = ["raunit", "rishi"];
// let d: string[] = ["ajay", "sona"];
// let e: boolean[] = [true, true];
// let f: boolean[] = [false, false];

// let [ansA, ansB] = swap(a, b);
// let [ansC, ansD] = swap(c, d); 
// let [ansE, ansF] = swap(e, f);

// console.log(ansA);
// console.log(ansB);
// console.log(ansC);
// console.log(ansD);
// console.log(ansE);
// console.log(ansF);

// function swappie<T>(a:T,b:T) {
//   return [b,a];
// }
// let a: number[] = [1, 2, 3, 4, 5];
// let b: number[] = [10, 11, 12, 13, 14];
// let answer=swappie(a,b);
// let answer2=swappie(["raunit"],["rishi"]);

// console.log(answer);
// console.log(answer2);

//-------------------------------------------------------------------------------

// way 1 
// function swappie<T,X>(a:T,b:X) {
//     return [b,a];
//   }
  
//   let answer=swappie(1,"raunit");
  
//   console.log(answer);
  //------------------------------------------------------------
  //way-2
//   function swappie2<T>(a:T,b:T) {
//     return [b,a];
//   }

//   let answer2=swappie2<number|string>(1,"raunit");
  
//   console.log(answer2);

  // const swappie=<T,X>(a:T,b:X) => {
  //   return [b,a];
  // }
  
  // let answer=swappie(1,"raunit");
  
  // console.log(answer);
 
//way to define a tuple
// let tuple: [number, string];  // A tuple with two elements: a number and a string
// tuple = [42, "hello"];        // Valid
// tuple = ["hello", 42];        // Error: wrong order of types

  
// // "Is T a tuple with at least one element? If so, infer the type of the first element (U). Otherwise, it's not a match."
// T extends [infer U, ...any[]]: This matches if T is an array (or tuple) with at least one element. It then infers the type of the first element and stores it in U.

// Example: For T = [1, 2, 3], U becomes number (because 1 is a number).
// If T is an empty array, it does not match this pattern because there’s no first element to infer (U). 
// The rest of the array (...any[]) can still be anything, but there is no element to extract for U. Therefore, the pattern doesn't match.
  function firstElement<T extends any[]>(value: T): T extends [infer U, ...any[]] ? U : never {
    return value[0];  // Return the first element
}

console.log(firstElement([1, 2, 3]));  // 1 (number)
console.log(firstElement(["a", "b", "c"]));  // 'a' (string)
console.log(firstElement([]));  // Error: Argument of type '[]' is not assignable
//hey nothing just random piece of code to make the commit look good 