/**
 * Finding of the Power of an Element -
 *
 */

// method definition
function findPower(a, n) {
  // small problem --
  if (n == 1) {
    return a;
  } else if (n == 0) {
    return 1;
  } else {
    // big problem
    // 1.divide --
    let mid = Math.floor(n / 2);

    // 2. conquer --
    b = findPower(a, mid);
  }
  //3. combine
  let result = b * b;
  if (n % 2 == 0) {
    return result;
  }
  return result * 2;
}

// Driver code --
const a = 2;
const n = 16;

// function calling
const result = findPower(a, n);
console.log(` The power of an Element is: ${result}`);
