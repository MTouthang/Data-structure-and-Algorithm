/**
 * Recursion
 * - calling the same function again inside the method definition
 */

function binarySearch(arr, i, j, searchItem) {
  while (i <= j) {
    let mid = Math.floor((i + j) / 2); // or (i+j)/2

    if (arr[mid] === searchItem) {
      return mid;
    } else if (arr[mid] < searchItem) {
      return binarySearch(arr, mid + 1, j, searchItem);
    } else {
      return binarySearch(arr, i, mid - 1, searchItem);
    }
  }
  return -1;
}
const arr = [20, 30, 40, 50, 70];

const i = 0;
const j = arr.length;
let searchItem = 50;
// binarySearch(arr, i, j);
console.log(binarySearch(arr, i, j, searchItem));
