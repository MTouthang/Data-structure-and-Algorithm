/**
 * Square root check
 * Time complexity - O(nlogn)
 */

// function/method defining
function squareCheck(inputNum) {
  let left = 0;
  let right = inputNum;
  let result = 0;

  while (left <= right) {
    var mid = Math.floor((right + left) / 2);

    if (mid * mid == inputNum) {
      result = mid;
      break;
    } else if (mid * mid < inputNum) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }
  return mid;
}

// driver code --
const inputNum = 36;

const result = squareCheck(inputNum);
console.log(Math.trunc(result));
