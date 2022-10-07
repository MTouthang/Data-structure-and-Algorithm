/**
 * buble sort
 * time complexity : O(n^2)
 */

// method definition --
function bubbleSort(arr) {
  let n = arr.length;
  console.log(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // compare and swaps
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// driver code -
const arr = [70, 20, 50, 60, 35, 47];
const result = bubbleSort(arr);
console.log(result);

// class code --

// function bubbleSort(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length - i - 1; j++) {
//         if (array[j + 1] < array[j]) {
//           [array[j + 1], array[j]] = [array[j], array[j + 1]];
//         }
//       }
//     }
//     return array;
//   }

//   console.log(bubbleSort([2, 34, 56, 1, 25, 89, 10, 65]))
