/**
 * Q24. What are closures?
 * - A closure is the combination of a function and the lexical environment within which that
 * function was declared. i.e, it ia an inner function that has access to the outer or enclosing
 * function's variable.
 * The closure has three scope chains.
 *  - Own scope where variables defined between its curly brackets
 *  - Outer function's variables
 *  - Global variables
 * Use of closures -
 *  Module Design Pattern
 *  Function like once
 *  Memoize
 *  Currying
 *  Maintaining state in async world
 *  setTimeouts
 *  Iterators
 *  and many more.....
 */

// log
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// return
// function x() {
//   var a = 8;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// const z = x();

// console.log(z);

// z();

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
