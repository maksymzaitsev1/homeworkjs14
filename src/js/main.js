// Завдання 1
const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));
// Завдання 2
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));
// Завдання 3
const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

console.log(getUsersWithGender(users, "male"));
// Завдання 4
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false);
};

console.log(getInactiveUsers(users));
// Завдання 5
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
