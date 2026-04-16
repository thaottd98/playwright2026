const users = [
  { name: "A", online: true },
  { name: "B", online: false },
  { name: "C", online: true },
  { name: "D", online: true }
];

let count = 0;

for (let user of users) {
  if (user.online) count++;
}

console.log(count);