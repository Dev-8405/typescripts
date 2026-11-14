// let name: string = "Dev";
// let age: number = "21";

// console.log(name);
// console.log(age);
  
// Variables

// let usernme ="dev"
// let  age ="30"

// Data Types

// let username :string="hardik";
// console.log(username);


// let isadmin:boolean=true;
// console.log(isadmin);


// let value:any="hello";
// value =100;
// value ="true";

// console.log(value);


// let user:{name:string; age:number}={
//     name :"dev chandegara",
//     age : 20
// };


let username:string="dev chanegara";
let age: number =34;
let admin:boolean=true;
let value: any="hello dev";
  

// let user:{name:string,age:number}={
//     name :"dev chnadegara",
//     age : 34
// }
// console.log(username);
// console.log(age);
// console.log(admin);
// console.log(value);
// console.log(user);


    //   Functions & Return Types in TypeScript

    function add(a :number, b:number): number{
        return a +b ;
    };

    console.log(add(10, 20));


    function add2 (a:number ,  b:number):number{
        return a +b ;
    };
     console.log(add2(20,30));

//    Optional Parameters

// function greet(name?:string):string{
//     return 'hello${name}';
// }

// console.log(greet("dev "));
// console.log(greet());

// function greet(name?: string): string {
//     return `Hello ${name}`;
// }

// console.log(greet("Dev"));
// console.log(greet());

// function hello(name? : string):string{
//     return `dev $(name)`;
// }
// console.log(hello("chandegara"));
// console.log(hello());

// function student(name? :string, age?:number):string{
//     return `name:${ name}, age:${age}`

// }
// console.log(student("dev",21));
// console.log(student());

function employee(name? :string, salary?:number): string{
    return  `name:${name}, salary:${salary}`
}
console.log(employee("hardik",30000));
console.log("rahul");

// Default Parameter

function greet(name:string="guest"):string{
    return`hello${name}`;
}
console.log(greet("dev"));
console.log(greet());

function add4(a: number, b:number =10):number{
    return  a+ b ;
}
console.log(add(5,20));
console.log(add4(5));


   // Type Aliases in TypeScript

  type User = {
    name: string;
    age: number;
};

let user : User = {
    name: "Alice",
    age: 22
};

console.log(user);

      // Interfaces in TypeScript

 interface person{
    name : string;
    age : number;
 } 
 
 let person :person={
    name :"gopal",
    age : 23
 }

 console.log(person);

//   Union & Intersection Types 
//    Union Types

let value3 :string|number;
 
value ="hello";
console.log(value);

value =100;
console.log(value);


	// Intersection Types
    
type Person = {
    name: string;
};

type Employee = {
    salary: number;
};

type Staff = Person & Employee;

let user: Staff = {
    name: "John",
    salary: 30000
};

console.log(user);