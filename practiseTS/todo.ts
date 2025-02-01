// Here, the || (logical OR) operator returns the first "truthy" value it encounters.
// Falsy values in JavaScript/TypeScript: 0, null, undefined, false, "", NaN

// function update(id: Todo["id"], newProp: UpdateTodo) {
//     id = newProp.id || 42;
//     console.log(id);
//  }
 
//  update(1, {});        
//  update(1, { id: 0 }); 
//  update(1, { id: null }); 
//  update(1, { id: 100 });
 
//  ?? (Nullish Coalescing):
// The ?? operator returns the first defined (non-null and non-undefined) value.
// It only considers null and undefined as nullish values and does not treat 0, false, NaN, or "" as nullish.

// When using || (Logical OR), it returns the first truthy value it encounters, or the last value if none are truthy.
//  Both 0 and null are falsy, but the operator doesn’t return undefined unless it’s the last value evaluated. 
//  So, in this case, it's a matter of falsy values and the way || works.

// let result = 0 ?? "" || null ?? undefined || "found";
// console.log(result);



interface Todo {
    title:string,
    description:string,
    done:boolean,
    id:number,
}

type UpdateTodo=Partial<Todo>


function update (id:Todo["id"],newProp: UpdateTodo)
{
   console.log(id)
}

update(1,{id:123
    
})

// function update (id:UpdateTodo["id"],newProp: UpdateTodo)
// {
//    console.log(id)
// }

// update(1,{id:123
    
// })

// id in the function is a separate variable from newProp.id.
// There is no automatic assignment of newProp.id to id.

function update2(id: Todo["id"], newProp: UpdateTodo) {
    if (newProp.id !== undefined) {
        id = newProp.id; // Explicitly update id
    }
    console.log(id);
 }
 
 update2(1, { id: 123 }); // Now, this will log 123
 








// Generics in TypeScript allow you to define components (functions, classes, interfaces, or types) 
// that work with a variety of data types rather than a single one. They provide flexibility while 
// maintaining type safety.







































// function identity<T>(arg: T): T {
//     return arg;
// }

// console.log(identity<string>("Hello")); // Works with strings
// console.log(identity<number>(42)); // Works with numbers


// interface Box<T> {
//     value: T;
// }

// const numberBox: Box<number> = { value: 100 };
// const stringBox: Box<string> = { value: "TypeScript" };


// class Container<T> {
//     constructor(public item: T) {}
// }

// const stringContainer = new Container<string>("Hello");
// const numberContainer = new Container<number>(123);


// type Pair<T, U> = { first: T; second: U };

// const pair: Pair<string, number> = { first: "Alice", second: 30 };
