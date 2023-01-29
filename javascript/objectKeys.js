/**
 * Q67. How can you get list of object keys of any object
 * - You can use Object.keys() method which is used to return an array of a given object's own property
 * names, in the same order as we get with a normal loop.
 *
 */

const user = {
  name: "mang",
  gender: "male",
  age: 20,
};

console.log(Object.keys(user));
