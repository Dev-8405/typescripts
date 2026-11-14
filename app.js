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
//     function add(a :number, b:number): number{
//         return a +b ;
//     };
//     console.log(add(10, 20));
//     function add2 (a:number ,  b:number):number{
//         return a +b ;
//     };
//      console.log(add2(20,30));
// //    Optional Parameters
// // function greet(name?:string):string{
// //     return 'hello${name}';
// // }
// // console.log(greet("dev "));
// // console.log(greet());
// // function greet(name?: string): string {
// //     return `Hello ${name}`;
// // }
// // console.log(greet("Dev"));
// // console.log(greet());
// // function hello(name? : string):string{
// //     return `dev $(name)`;
// // }
// // console.log(hello("chandegara"));
// // console.log(hello());
// // function student(name? :string, age?:number):string{
// //     return `name:${ name}, age:${age}`
// // }
// // console.log(student("dev",21));
// // console.log(student());
// function employee(name? :string, salary?:number): string{
//     return  `name:${name}, salary:${salary}`
// }
// console.log(employee("hardik",30000));
// console.log("rahul");
// // Default Parameter
// function greet(name:string="guest"):string{
//     return`hello${name}`;
// }
// console.log(greet("dev"));
// console.log(greet());
// function add4(a: number, b:number =10):number{
//     return  a+ b ;
// }
// console.log(add(5,20));
// console.log(add4(5));
// Interfaces in TypeScript
//  interface person{
//     name : string;
//     age : number;
//  } 
//  let person :person={
//     name :"gopal",
//     age : 23
//  }
//  console.log(person);
// //   Union & Intersection Types 
// //    Union Types
// let value3 :string|number;
// value ="hello";
// console.log(value);
// value =100;
// console.log(value);
// 	// Intersection Types
// type Person = {
//     name: string;
// };
// type Employee = {
//     salary: number;
// };
// type Staff = Person & Employee;
// let user: Staff = {
//     name: "John",
//     salary: 30000
// };
// console.log(user);
// Tuple in TypeScript
let persons = ["smit", 25];
console.log(persons);
console.log(persons[0]);
console.log(persons[1]);
// Enum in TypeScript
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["user"] = 1] = "user";
    role[role["guest"] = 2] = "guest";
})(role || (role = {}));
let userrole = role.user;
console.log(userrole);
//  Array & Object Types 
let number = [10, 20, 30, 40, 50];
console.log(number);
let user1 = {
    name: "Alice",
    age: 25
};
let user2 = {
    name: "John"
};
console.log(user1);
console.log(user2);
// Type Guards in TypeScript
// function printID(id :string|number){
//     if(typeof id ==="string"){
//         console.log(id.toUpperCase());
//     }
// }
function printid(id) {
    if (typeof id === "string") {
        console.log(id.toLocaleUpperCase());
    }
    else {
        console.log(id);
    }
}
printid("dev");
printid(101);
//# sourceMappingURL=app.js.map