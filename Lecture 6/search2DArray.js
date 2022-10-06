/**
 * search in 2D array --
 * Time complexity - O(log m*n)
 */
function searchItem(arr, target) {
  // number of rows
  let m = arr.length;
  if (m == 0) {
    return false;
  }
  //number of columns
  let n = arr[0].length;
  let left = 0;
  let right = m * n - 1;

  // binary search implementation
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    // row_number -> mid/n
    // column_number -> mid %n
    let midElement = arr[Math.floor(mid / n)][Math.floor(mid % n)];
    if (target == midElement) {
      return true;
    } else if (target < midElement) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

// Driver code
const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;

const result = searchItem(arr, target);
console.log(result);
