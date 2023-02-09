/**
 * Reduce method of the array object is used to reduce the array to one single value
 * it takes a callback function and initial value as a parameter
 * syntax - array.reduce(callback, initialValue)
 * callback function parameter
 *  - accumulator - The accumulator accumulates the returned value of the callback function. It is a required parameter.
 *  - current value - The currentValue is the value of the current element being processed in the array. It is a required parameter.
 *  - current index - The currentIndex is the array index of the current element being processed in the array. It is an optional parameter.
 */

// 1. sum of array element -
const arr = [10, 20, 30];

const result = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(result);

// 2. Find the maximum number in the array
const max = arr.reduce((acc, val) => {
  if (acc > val) {
    return acc;
  } else {
    return val;
  }
});
console.log(max);

// 3. shopping list sum
const shopping = [
  {
    product: "eggs",
    price: 10,
    numberItem: 5,
  },
  {
    product: "bananas",
    price: 20,
    numberItem: 5,
  },
  {
    product: "apple",
    price: 30,
    numberItem: 5,
  },
];

const totalPrice = shopping.reduce((acc, item) => {
  return acc + item.price * item.numberItem;
}, 0);

console.log(`Total price- ${totalPrice}`);

//4 flat an array
const data = [[15, 25], [30, 50], 3];

const singleArray = data.reduce((acc, item) => {
  return acc.concat(item);
}, []);
console.log(singleArray);

// 5. counting instances
const colors = ["green", "blue", "purple", "red", "blue", "purple", "purple"];

const countColors = colors.reduce((acc, cur) => {
  if (cur in acc) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, []);

console.log(countColors);
