/**
 * Median of Two Sorted Arrays(Apple) - 
 * Q2. Given two sorted arrays num1 and num2 of size m and n respectively,
 return the median of the two sorted arrays.
 * Time complexity - 0(log(m+n))
 * Space complexity - 0(log(m+n))
 */

// mergeProcedure function definition -
function mergeProcedure(arrs, i, mid, j) {
  // n1 -> number of elements in the left subarray (i, mid)
  let n1 = mid - i + 1;

  // n2 -> number of elements in the right subarray (mid+1, j)
  let n2 = j - mid;

  // initialization of left and right subarray
  let leftSubarray = new Array(n1).fill(0);
  let rightSubarray = new Array(n2).fill(0);

  // copy the elements from an array to the subarray
  for (let m = 0; m < n1; m++) {
    leftSubarray[m] = arrs[i + m];
  }

  for (let n = 0; n < n2; n++) {
    rightSubarray[n] = arrs[mid + 1 + n];
  }

  let p = 0;
  let q = 0;
  let k = i;

  // returning a sorted subarray
  while (p < n1 && q < n2) {
    if (leftSubarray[p] <= rightSubarray[q]) {
      arrs[k] = leftSubarray[p];
      p += 1;
    } else {
      arrs[k] = rightSubarray[q];
      q += 1;
    }
    k += 1;
  }

  // copy the entire elements from the left subarray
  while (p < n1) {
    arrs[k] = leftSubarray[p];
    p += 1;
    k += 1;
  }

  while (q < n2) {
    arrs[k] = rightSubarray[q];
    q += 1;
    k += 1;
  }
}

// function definition
function mergeSort(arr, i, j) {
  let median = 0;
  if (i < j) {
    // divide
    let mid = Math.floor(i + (j - i) / 2);

    // Conquer
    // recursive call -> left subtree
    mergeSort(arrs, i, mid);

    // recursive call -> right subtree
    mergeSort(arrs, mid + 1, j);

    // combine -> mergeProcedure (function calling)
    mergeProcedure(arrs, i, mid, j);
  }

  if (arrs.length % 2 === 0) {
    median =
      (arrs[Math.floor(arrs.length / 2) - 1] +
        arrs[Math.floor(arrs.length / 2)]) /
      2;
    return median;
  } else {
    median = arrs[Math.floor(arrs.length / 2)];
    return median;
  }
}

// Driver code
const arr1 = [1, 3];
const arr2 = [2];
const arrs = arr1.concat(arr2); // joining the two arrays

let i = 0; // starting index
let j = arrs.length - 1; // ending index
console.log(j);

const result = mergeSort(arrs, i, j); // function calling
console.log(result);
