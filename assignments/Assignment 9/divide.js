/**
 * Divid Two integers (facebook)
 * 4. Given two integers, dividend and divisor, divide the two integers without using multiplication
 * division, and mod operator
 * Time Complexity : O(n)
 * Space Complexity: O(1)
 *
 */

// method definition -
function divide(dividend, divisor) {
  let d = Math.abs(dividend);
  let s = Math.abs(divisor);

  let q = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    ++q;
  }
  return q;
}

// driver code -
const dividend = 10;
const divisor = 3;

const result = divide(dividend, divisor);
console.log(result);
