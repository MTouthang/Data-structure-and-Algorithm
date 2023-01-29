/**
 * @81.What is the difference between typeof and instanceof
 * - typeof is an operator that returns a string with the type of whatever it is pass.
 * - Instanceof is much more intelligent it works on the level of prototypes.
 *   It test to see if the right operand appears anywhere in the prototype chain of the left.
 *   Instanceof does't work with primitives types.
 *   It instanceof operator checks the current object and returns true if the object is of the
 *   specified type.
 */

// typeof

const name = "mang";
console.log(typeof name);
console.log(name);

let dogName = new String("blacky");

console.log(dogName instanceof String);
