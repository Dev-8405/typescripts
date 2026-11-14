"use strict";
// let name: string = "Dev";
// let age: number = "21";
Object.defineProperty(exports, "__esModule", { value: true });
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
let username = "dev chanegara";
let age = 34;
let admin = true;
let value = "hello dev";
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
function add(a, b) {
    return a + b;
}
;
console.log(add(10, 20));
function add2(a, b) {
    return a + b;
}
;
console.log(add2(20, 30));
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
function employee(name, salary) {
    return `name:${name}, salary:${salary}`;
}
console.log(employee("hardik", 30000));
console.log("rahul");
// Default Parameter
function greet(name = "guest") {
    return `hello${name}`;
}
console.log(greet("dev"));
console.log(greet());
function add4(a, b = 10) {
    return a + b;
}
console.log(add(5, 20));
console.log(add4(5));
let user = {
    name: "Alice",
    age: 22
};
console.log(user);
let person = {
    name: "gopal",
    age: 23
};
console.log(person);
//   Union & Intersection Types 
//    Union Types
let value3;
value = "hello";
console.log(value);
value = 100;
console.log(value);
//# sourceMappingURL=app.js.map