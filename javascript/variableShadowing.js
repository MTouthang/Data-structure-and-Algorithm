/**
 * Q26. What is variable shadowing in javascript
 * - Variable shadowing occur when a variable declared with a certain scope
 * (decision block, method or inner class) has the same name as the variable declared in an outer scope
 * This outer variable is said to be shadowed.
 * - If there is a variable in the global scope, and you'd like to create a variable with the same
 * name in a function. The variable in the inner scope will temporarily shadow the variable in the
 * outer scope
 */

// example -
var temp = 5;
const showTemp = (value) => {
  console.log(value);
};

console.log(temp);
showTemp(6);
