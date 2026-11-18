//   Generics 

//  function identity<T>(value: T): T {
//     return value;
// }

// let result = identity<number>(5);

// console.log(result);

// function identity2<T>(value:T): T{
//     return value;
// }

// let result =identity2<string>("chandewgara");
//  console.log(result);


//  function identity<T>(value:T):T{
//     return value;
//  }

//  let result =identity<boolean>(true);
//  console.log(result);


function identity<T>(value:T):T{
    return value;
}

let num= identity(100);
let name =identity("virat");
let status =identity(true);

console.log(num);
console.log(name);
console.log(status);


//                   Mapped Types

// type optional<T>={
//     [ k in keyof T]?:T[k];
// }

// type user={
//     name :string;
//     age :number;

// }
// type partialuser = optional<user>;


// type Optional<T> = {
//     [K in keyof T]?: T[K];
// };

// type User = {
//     name: string;
//     age: number;
// };

// type PartialUser = Optional<User>;

// let user1: PartialUser = {
//     name: "Dev"
// };

// let user2: PartialUser = {
//     age: 22
// };

// let user3: PartialUser = {};

// Keyof types 

type user={
    name:string;
    age: number;
}

type userkeys=keyof user;

let key : userkeys;

key :"name";
key :"age";

console.log();

type Employee = {
    name: string;
    salary: number;
    department: string;
};

function getValue(key: keyof Employee) {
    return key;
}

console.log(getValue("name"));
console.log(getValue("salary"));
console.log(getValue("department"));


// Type Narrowing 

function process( value :string| number){
    if (typeof value === "string" ){
        console.log("string",value.toUpperCase());

    }else{
        console.log("number",value.toFixed(2));
    }
}

process("hello");
process(100);

function checkvalue(value: string|number){
    if(typeof value ==="string"){
        console.log("string",value.toUpperCase());
    }else{
        console.log(value * 2);

    }
}

checkvalue("hello");
checkvalue(50);

    //  TypeScript – Module System & Namespaces

// export function greet() {
//     return "Hello!";
// }

// import { greet } from "./app";

// console.log(greet());

        // Namespaces

  namespace Student {

    export function greet() {
        return "Hello Student";
    }

}

console.log(Student.greet());

