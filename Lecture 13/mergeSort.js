/**
 * implementation of merge sort
 *
 */

// mergeProcedure function definition -
function mergeProcedure(arr, i, mid, j) {
  // n1 -> number of elements in the left subarray (i, mid)
  let n1 = mid - i + 1;

  // n2 -> number of elements in the right subarray (mid+1, j)
  let n2 = j - mid;

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
}

// function definition
function mergeSort(arr, i, j) {
  if (i < j) {
    // divide
    let mid = Math.floor(i + (j - i) / 2);

    // Conquer
    // recursive call -> left subtree
    mergeSort(arr, i, mid);

    // recursive call -> right subtree
    mergeSort(arr, mid + 1, j);

    // combine -> mergeProcedure (function calling)
    mergeProcedure(arr, i, mid, j);
  }
  return arr;
}

// Driver code
const arr = [50, 70, 65, 13, 80, 62, 98, 27];

let i = 0; // starting index
let j = arr.length - 1; // ending index
console.log(j);

const result = mergeSort(arr, i, j); // function calling
console.log(result);
