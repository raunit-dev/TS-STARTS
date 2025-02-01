// function swap<T>(z: T[], v: T[]): T[][] {
//     let temp: T = z[0];
//     z[0] = v[0];
//     v[0] = temp;
//     return [z, v];
// }

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

// let answer=swappie(1,2);
// let answer2=swappie("raunit","rishi");

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

  const swappie=<T,X>(a:T,b:X) => {
    return [b,a];
  }
  
  let answer=swappie(1,"raunit");
  
  console.log(answer);
 

