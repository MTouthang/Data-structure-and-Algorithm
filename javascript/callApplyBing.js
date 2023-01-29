/**
 * Q29. What is the difference between call, apply and bind
 * - call(): - The call() method invokes function with a given this value and arguments provide one by one
 * - apply() - Invokes the function and allow you to pass argument as an array
 * - bind() returns a new function, allowing you to pass in an array and any number of argument
 */

// call()
let employee = {
  firstName: "Mang",
  lastName: "Touthang",
};

//function with single argument
function greeting(massage) {
  console.log(`Hi ${this.firstName} ${this.lastName} ${massage}`);
}

greeting.call(employee, "nice to have you on board!");
// output - Hi Mang Touthang nice to have you on board

// function with multiple arguments
function greetAll(massage1, message2) {
  console.log(`${this.firstName}, ${massage1} ${message2}`);
}

// .call can pass argument single by single separated by comma
greetAll.call(employee, "Hi hello", "nice to have you onboard!");

// .apply() - invokes the function and allow you to pass in arguments as an array
let employees = {
  firstName: "Mang",
  lastName: "Touthang",
};

function greetingEmployees(message, message2) {
  console.log(`${this.firstName} ${message}, ${message2}`);
}

// function borrowing
const greet = greetingEmployees.apply(employees, ["hello", "nice to meet you"]);

// bind() method - it return a new function, allowing you to pass in an array and any number of arguments
const newGreet = greetingEmployees.bind(employees);
console.log(newGreet);
