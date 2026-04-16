const orders = [200, -50, 300, 0, 150];
let total = 0;

for (let order of orders) {
  if (order <= 0) continue;
  total += order;
}

console.log(total);