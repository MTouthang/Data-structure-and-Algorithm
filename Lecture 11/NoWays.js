/**
 * count the number of ways to reach the nth step
 *
 */

// Method definition
function possibilities(n) {
  if (n == 2) {
    return n;
  } else if (n == 1) {
    return 1;
  } else {
    return possibilities(n - 1) + possibilities(n - 2);
  }
}

// Driver code --
const n = 4;
const result = possibilities(n);
console.log(result);
