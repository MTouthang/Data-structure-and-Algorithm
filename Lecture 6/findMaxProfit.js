/**
 * best time to buy and sell the stock --
 * Time complexity - O(n)
 */

function findMaxProfit(price) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i in price) {
    if (minPrice > price[i]) {
      minPrice = price[i];
    } else if (price[i] - minPrice > maxProfit) {
      maxProfit = price[i] - minPrice;
    }
  }
  return maxProfit;
}

// driver code --
const price = [7, 1, 5, 3, 6, 4];
const maxProfit_value = findMaxProfit(price);
console.log(
  "The maximum profit of buying and selling the stocks is:",
  maxProfit_value
);
