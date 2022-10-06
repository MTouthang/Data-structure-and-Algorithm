/**
 * Perfect square of the number
 *
 */

function perfectSquare(input) {
  let left = 0;
  let right = input;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid == input) {
      return true;
    } else if (mid * mid < input) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

// driver code --
const input = 16;
const result = perfectSquare(input);
console.log(`The number is perfect square - ${result}`);
