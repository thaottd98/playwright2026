const prices = [120, 90, 300, 250, 150];
let max = prices[0];

for (let price of prices) {
  if (price > max) {
    max = price;
  }
}

console.log(max);