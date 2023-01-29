/**
 * Q28. Prototype
 * - Nearly all objects in javascript are instance of object.
 * - That means all the object in javascript inherites properties and methods from Object.prototype. this is called prototype chaining
 * - Prototype chaining is used to build new types of object based on the existing one.
 * - It is similar to inheritance in a class based language.
 * - The prototype on object instance is available through Object.getPrototypeOf(object) or proto
 * - whereas prototype on constructors function is available through Object.prototype.
 */

// function Person(firstName, lastName, age) {
//   (this.firstName = firstName), (this.lastName = lastName);
//   this.age = age;
// }

// // Person class created
// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// // we have added getFullName method in Person’s prototype.
// var person = new Person("Prabir", "Kumar", 25);
// // It will create an instance of the Person class
// person.hasOwnProperty("firstName"); // true
// person.hasOwnProperty("getFullName"); // false
// person.getFullName(); // Prabir Kumar

const pokemon = {
  name: "pokemon",
  speak: "pikapika",
};

const pokemon1 = {
  name: "pokemon2",
};
pokemon1.__proto__ = pokemon;

console.log(pokemon1.speak);

Function.prototype.sleep = function () {
  console.log("sleeping");
};

function sleeping() {
  console.log("hello");
}

sleeping.sleep();

function obj() {
  this.name = "my name";
}

obj.prototype.logName = function () {
  console.log("hi");
};

let obj2 = new obj();
obj2.logName();
