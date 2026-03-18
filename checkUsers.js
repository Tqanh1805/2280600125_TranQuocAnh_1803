const mongoose = require('mongoose');
const User = require('./schemas/users');

mongoose.connect('mongodb://localhost:27017/NNPTUD-C4')
  .then(async () => {
    const users = await User.find({ isDeleted: false });
    console.log(JSON.stringify(users, null, 2));
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
