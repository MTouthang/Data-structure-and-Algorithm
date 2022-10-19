/**
 * Q5. Do the implementation of the count of a number of inversions, for logical understanding
 * and intuition behind the same, refer live session Lecture 17
 */
/**
 * implementation of merge sort
 * Time Complexity : - average & best case - O(nlogn)
 *                   - Worst case scenario - O(n^2)
 * Space Complexity : - O(n)
 */

// mergeProcedure function definition -
function mergeProcedure(arr, i, mid, j) {
  // n1 -> number of elements in the left subarray (i, mid)
  let n1 = mid - i + 1;

  // n2 -> number of elements in the right subarray (mid+1, j)
  let n2 = j - mid;
  let swaps = 0;

  // initialization of left and right subarray
  let leftSubarray = new Array(n1).fill(0);
  let rightSubarray = new Array(n2).fill(0);

  // copy the elements from an array to the subarray
  for (let m = 0; m < n1; m++) {
    leftSubarray[m] = arr[i + m];
  }

  for (let n = 0; n < n2; n++) {
    rightSubarray[n] = arr[mid + 1 + n];
  }

  let p = 0;
  let q = 0;
  let k = i;

  // returning a sorted subarray
  while (p < n1 && q < n2) {
    if (leftSubarray[p] <= rightSubarray[q]) {
      arr[k] = leftSubarray[p];
      p += 1;
    } else {
      arr[k] = rightSubarray[q];
      q += 1;
      swaps += mid + 1 - (i + p);
    }
    k += 1;
  }

  // copy the entire elements from the left subarray
  while (p < n1) {
    arr[k] = leftSubarray[p];
    p += 1;
    k += 1;
  }

  while (q < n2) {
    arr[k] = rightSubarray[q];
    q += 1;
    k += 1;
  }
  return swaps;
}

// function definition
function mergeSort(arr, i, j) {
  let count = 0;
  if (i < j) {
    // divide
    let mid = Math.floor(i + (j - i) / 2);

    // Conquer
    // recursive call -> left subtree
    count += mergeSort(arr, i, mid);

    // recursive call -> right subtree
    count += mergeSort(arr, mid + 1, j);

    // combine -> mergeProcedure (function calling)
    count += mergeProcedure(arr, i, mid, j);
  }
  return count;
}

// Driver code
const arr = [70, 50, 60, 10, 20, 30, 80, 15];

let i = 0; // starting index
let j = arr.length - 1; // ending index
console.log(j);

const result = mergeSort(arr, i, j); // function calling
console.log(result);
