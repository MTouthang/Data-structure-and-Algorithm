/**
 * Recursion
 * - calling the same function again inside the method definition
 */

function binarySearch(arr, i, j) {
  let searchItem = 50;
  while (i < j) {
    let mid = Math.floor(i + j / 2); // or (i+j)/2
    // only one element
    if (i === j) {
      if (arr[i] === searchItem) {
        return arr[i];
      } else {
        return -1;
      }
    } else {
      if (arr[mid] == searchItem) {
        return arr[mid];
      }

      if (arr[mid] < searchItem) {
        return binarySearch(arr, mid + 1, j);
      } else {
        return binarySearch(arr, i, mid - 1);
      }
    }
  }
}
const arr = [20, 30, 40, 50, 70];

const i = 0;
const j = arr.length;
// binarySearch(arr, i, j);
console.log(binarySearch(arr, i, j));
