/**
 * Q25. How do you clone an objects in javascript
 * -> 1.old technique is by looping it using for in loop
 * -> 2. object.assign
 * -> Using the object spread operator (...)
 * -> The object own enumerable properties can be copied into the new object
 * -> This creates a shallow clone of the object.
 */

// 1. looping it using for in loop
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
const anotherCircle = {};
for (let key in circle) {
  anotherCircle[key] = circle[key];
}
console.log(anotherCircle); // {radius: 1, draw: [function: draw]}

// 2. Object.assign
const anotherCircle1 = Object.assign({}, circle);
// {} can take pre-existing object key value
const anotherCircle2 = Object.assign({ color: "red" }, circle);
console.log(anotherCircle1); // {radius: 1, draw: [function: draw]}
console.log(anotherCircle2); // {color: 'red', radius:1, draw:[function: draw]}

// 3. object (spread)
const anotherCircle3 = { ...circle };
console.log(anotherCircle3); // {radius:1, draw: [function: draw]}
