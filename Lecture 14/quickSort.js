/**
 * Implementation of quicKSort
 * Time Complexity - best or average - O(nlogn)
 *                  - worst case scenario - O(n^2)
 * space compexity - O(1)
 *
 */

// method definition of partition -
function partition(arr, p, q) {
  let pivot = arr[p];
  let i = p;
  for (let j = i + 1; j < q + 1; j++) {
    if (arr[j] <= pivot) {
      i += 1;
      // Swap between the values of arr[i] and arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i];
  arr[i] = arr[p];
  arr[p] = temp;
  return i;
}

// method definition of quicksort -
function quickSort(arr, p, q) {
  if (p < q) {
    // divide and conquer approach
    // 1. Divide -
    // function for the partition method
    let mid = partition(arr, p, q);
    

    // recusive function call for the left subtree
    quickSort(arr, p, mid - 1);

    //
    quickSort(arr, mid + 1, q);
  }
  return arr;
}

// Driver code --
const arr = [50, 70, 29, 67, 12, 15, 46];
const p = 0;
const q = arr.length - 1;

const result = quickSort(arr, p, q);
console.log(result);
