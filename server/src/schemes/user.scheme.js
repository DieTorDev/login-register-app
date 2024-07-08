const mongoose = require('mongoose');

const UserScheme = mongoose.Schema({
  username: String,
  email: String,
  password: String
});

module.exports = UserScheme;
