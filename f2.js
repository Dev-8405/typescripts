"use strict";
//   Generics 
Object.defineProperty(exports, "__esModule", { value: true });
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
function identity(value) {
    return value;
}
let num = identity(100);
let name = identity("virat");
let status = identity(true);
console.log(num);
console.log(name);
console.log(status);
let key;
key: "name";
key: "age";
console.log();
function getValue(key) {
    return key;
}
console.log(getValue("name"));
console.log(getValue("salary"));
console.log(getValue("department"));
// Type Narrowing 
function process(value) {
    if (typeof value === "string") {
        console.log("string", value.toUpperCase());
    }
    else {
        console.log("number", value.toFixed(2));
    }
}
process("hello");
process(100);
function checkvalue(value) {
    if (typeof value === "string") {
        console.log("string", value.toUpperCase());
    }
    else {
        console.log(value * 2);
    }
}
checkvalue("hello");
checkvalue(50);
//# sourceMappingURL=f2.js.map