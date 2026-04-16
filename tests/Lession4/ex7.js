const orders = [50, 120, 80, 200];

for (let order of orders) {
  let result = order >= 100 ? "Free Shipping" : "Paid Shipping";
  console.log(result);
}