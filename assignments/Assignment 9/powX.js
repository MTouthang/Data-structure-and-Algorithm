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
function findPower(x, n) {
  // small problem --
  if (n == 0) {
    return 1;
  } else if (n < 0) {
    // check for non-negative power
    x = 1 / x;
    n = -n;
    return findPower(x, n);
  } else if (n == 1) {
    return x;
  } else {
    // big problem
    // 1.divide --
    let mid = Math.floor(n / 2);

    // 2. conquer --
    var b = findPower(x, mid);
  }
  //3. combine
  let result = b * b;
  if (n % 2 == 0) {
    return result;
  }
  return result * x;
}

// // Driver code --
const x = 2;
const n = -2;

// function calling
const result = findPower(x, n);
console.log(`Calculation of Power(x, n): ${x}^${n} = ${result}`);
