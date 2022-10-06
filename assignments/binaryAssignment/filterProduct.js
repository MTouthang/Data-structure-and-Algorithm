/**
 * Count the number of gud product dedicated by 0
 * Time complexity - O(logn)
 */

// method/function definition --
function filterProduct(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid - 1] == 0 && arr[mid] == 1) {
      return mid;
    } else if (arr[mid] == 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// driver --
const arr = [0, 0, 0, 0, 1, 1, 1, 1, 1];
const result = filterProduct(arr);
console.log(result);
