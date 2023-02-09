/**
 * symbol - primitive data types introduced in ES6
 *        - symbols are unique and immutable
 *        - typeof symbol is Symbol
 *        - Symbols are not enumerable
 */

// creating symbol
// pass optional string which is know as description.
const x = Symbol("hello");
console.log(x); // output - Symbol(hello)

// console description
console.log(x.description);

// symbol can be used as key in object using square brackets []

let id = Symbol("id");
let obj = {
  name: "jack",
  [id]: 123,
};

console.log(obj[id]);
