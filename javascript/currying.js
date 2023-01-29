/**
 * Q32. What is currying function
 * - can be done by bind method and closure
 * - Currying is the process of taking a function with multiple arguments and turning it into a sequence
 * of functions each with only single argument.
 */

function volume(length) {
  return function (width) {
    return function (height) {
      return height * width * length;
    };
  };
}
console.log(volume(3)(3)(3)); // 27
