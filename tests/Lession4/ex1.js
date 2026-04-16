function isValidEmail(email) {
  return email.includes("@");
}

const emails = [
  "test@gmail.com",
  "hello.com",
  "admin@yahoo.com",
  "abc123"
];

for (let email of emails) {
  if (!isValidEmail(email)) continue;
  console.log(email);
}