const users = [
  { name: "Anna", active: true },
  { name: "Tom", active: false },
  { name: "John", active: true }
];

for (let user of users) {
  let status = user.active ? "Active" : "Inactive";
  console.log(`${user.name}: ${status}`);
}