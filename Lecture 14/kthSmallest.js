/**
 * Kth smallest element[amzon]
 * Given an array of n-elements and an integer k, find the kth smallest element present in an array
 * For example -
 * arr = [40, 25, 68, 79, 52, 66, 89, 97]
 * k  = 2
 * result = 40
 *
 */

// partition definition -
function partition(arr, p, q) {
  let pivot = arr[p];
  let i = p;

  for (let j = i + 1; j < q + 1; j++) {
    if (arr[i] <= pivot) {
      i += 1;
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

// method definition -
function selectionProcedure(arr, p, q) {
  if (p < q) {
    let mid = partition(arr, p, q);
    console.log(mid);
    if (k == mid) {
      return arr[mid - 1];
    } else if (k < mid) {
      selectionProcedure(arr, p, m - 2);
    } else {
      selectionProcedure(arr, mid, q);
    }
  }
}

// driver code --
const arr = [20, 47, 52, 12, 26, 69, 74];
const k = 2;
let p = 0;
let q = arr.length - 1;

const result = selectionProcedure(arr, p, q);
console.log(result);
