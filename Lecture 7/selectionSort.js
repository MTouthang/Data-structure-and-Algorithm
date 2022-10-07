/**
 * Selection sort
 * Time complexity - O(n^2)
 */
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    minIndex = i;

    // check and update the min index ---
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap --
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

// driver code --
const arr = [70, 56, 23, 19, 25, 37, 48];
const result = selectionSort(arr);
console.log(result);

// class code --

// function selectionSort(arr=[]){
//     for(let i=0; i<arr.length-1; i++){
//         let minIndex = i;
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//     }
//     return arr;
// }

// console.log(selectionSort([2, 34, 56, 1, 25, 89, 10, 65]))
