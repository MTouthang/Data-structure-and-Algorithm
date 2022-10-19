/**
 * Pow(x, n) (facebook)
 * Q3. Implement pow(x, n) which calculates x raised to the power n(i.e x^n)
 * for example: x= 2.00000, n=-2
 * output: 0.25000
 * Explanation : 2^-2 = 1/2^2 = 1/4 = 0.25
 */

/**
 * Time complexity: worst case - O(n),
 *                  best / average case - O(logn)
 * Space complexity: O(1)
 */

// recursive function with divide conquer

// defining recursive function --
function findPower(a, n) {
  // small problem --
  if (n == -1) {
    // check for negative power
    return 1 / a;
  } else if (n == 1) {
    // check for non-negative power
    return a;
  } else if (n == 0) {
    return 1;
  } else {
    // big problem
    // 1.divide --
    let mid = Math.floor(n / 2);

    // 2. conquer --
    var b = findPower(a, mid);
  }
  //3. combine
  let result = b * b;
  if (n % 2 == 0) {
    return result;
  }
  return result * 2;
}

// // Driver code --
const x = 2;
const n = 10;

// function calling
const result = findPower(x, n);
console.log(`Calculation of Power(x, n): ${x}^${n} = ${result}`);
