/**
 * Time complexity : 0(n)
 * space Complexity: 0(1)
 */
function linearSearch(arr, searchItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchItem) {
      return i;
    }
  }
  return -1;
}

// Driver code --
const arr = [20, 45, 27, 47, 55, 67, 75, 88, 90];
const searchItem = 67;
console.log(linearSearch(arr, searchItem));
