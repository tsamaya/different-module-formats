// user.js
const getName = () => {
  return 'Jim';
};

const getLocation = () => {
  return 'Grenoble';
};

const dateOfBirth = '01/12/2007';

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;
