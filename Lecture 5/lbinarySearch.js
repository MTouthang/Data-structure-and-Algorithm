/**
 * @description Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0;
  let j = nums.length;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

console.log(search(nums, target));
