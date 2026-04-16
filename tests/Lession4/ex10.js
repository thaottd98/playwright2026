const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 10 }
];

for (let product of products) {
  if (product.stock <= 0) continue;
  console.log(`${product.name} - Stock: ${product.stock}`);
}