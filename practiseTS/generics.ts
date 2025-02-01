let a=[1,2,3,4,5];
let b=["raunit","rishi","sona"]

type Arr = string[]|number[];

function Fd( b:Arr) : string|number
{
    return b[0];
}
let c=Fd(a);
let d=Fd(b);
console.log(d);
console.log(c);


