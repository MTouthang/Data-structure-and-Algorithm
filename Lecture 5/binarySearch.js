/**
 * Binary search algorithm --
 *  - should be in sorted order (can be ascending or descending)
 *
 */

// with iterative approach
function binarySearch(arr, item, i, j) {
  while (i <= j) {
    let mid = Math.floor(i + (j - 1) / 2); // or (i+j)/2
    if (arr[mid] == item) {
      return mid;
    } else if (arr[mid] < item) {
      // right side of the mid, search space mid+1 to j
      // with recursion approach
      //   return binarySearch(arr, item, mid + 1, j);
      i = mid + 1; // iterative approach
    } else {
      // left side of the mid, search space - i to mid -1
      // with recursion approach
      //   return binarySearch(arr, item, i, mid - 1);
      j = mid - 1; // iterative approach
    }
  }
  return -1;
}

// Driver code -
const arr = [20, 30, 40, 50, 60, 70, 80, 90];
const item = 81;
let i = 0;
let j = arr.length;
const result = binarySearch(arr, item, i, j);
console.log(`The search item is present at location ${result}`);
