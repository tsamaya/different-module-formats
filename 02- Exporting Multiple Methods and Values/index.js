// index.js
const user = require('./user');
console.log(
  `${user.getName()} lives in ${user.getLocation()} and was born on ${
    user.dob
  }.`
);
