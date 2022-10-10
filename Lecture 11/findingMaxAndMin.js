/**
 * Finding maxima and minima using divide and conquer
 * time complexity - O(n)
 *
 */

// Method defining ---
function findMaxandMin(arr, start, end) {
  // small problem --
  // single element condition --
  if (start == end) {
    var maxValue = arr[start];
    var minValue = arr[start];

    // two element condition --
  } else if (start == end - 1) {
    if (arr[start] < arr[end]) {
      maxValue = arr[end];
      minValue = arr[start];
    } else {
      maxValue = arr[start];
      minValue = arr[end];
    }
  } else {
    // Big problem -- n> 2
    // divide and conquer approach --
    // 1. divide -const time
    let mid = Math.floor(start + (end - start) / 2);

    // 2. recursion  -> conquer - 2T(n/2)
    let minMax1 = findMaxandMin(arr, start, mid);
    let minMax2 = findMaxandMin(arr, mid + 1, end);
    console.log(`minMax1 - ${minMax1}`);
    console.log(`minMax2 - ${minMax2}`);

    // 3. combine
    // To find the final maxima - constant
    if (minMax1[1] < minMax2[1]) {
      maxValue = minMax2[1];
    } else {
      maxValue = minMax1[1];
    }

    // To find the final minima - constant
    if (minMax1[0] < minMax2[0]) {
      minValue = minMax1[0];
    } else {
      minValue = minMax2[0];
    }
  }
  return [minValue, maxValue];
}

// driver code --
const arr = [20, 39, 45, 65, 21, 44, 89, 92];
let start = 0;
let end = arr.length;

// function or method calling --
let result = findMaxandMin(arr, start, end);
console.log(result);

// output --
/*
PS E:\DSA\Data Structure and algorithm\Lecture 11> node .\findingMaxAndMin.js
minMax1 - 20,39
minMax2 - 45,45
minMax1 - 20,45
minMax2 - 21,65
minMax1 - 44,89
minMax2 - ,92
minMax1 - 20,65
minMax2 - ,92
[ undefined, 92 ]
*/
