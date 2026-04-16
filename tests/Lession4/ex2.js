const users = ["guest", "editor", "admin", "admin2"];

for (let user of users) {
  if (user.includes("admin")) {
    console.log(user);
    break;
  }
}