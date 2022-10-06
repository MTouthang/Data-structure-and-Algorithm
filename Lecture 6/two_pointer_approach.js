/**
 * Two pointer approach
 * Optimize version
 * Time complexity - O(n)
 */

function TwoSum(arr, targetSum) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] == targetSum) {
      return [left, right];
    } else if (arr[left] + arr[right] < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return [-1, -1];
}

// driver code --
const arr = [20, 40, 60, 80, 90, 120, 240];
const targetSum = 210;
const result = TwoSum(arr, targetSum);
console.log(result);
