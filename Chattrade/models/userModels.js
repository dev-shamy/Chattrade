const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },

  lastName: {
    type: String,
    require: true,
  },

  userName: {
    type: String,
    require: true,
    unique: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  phone: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
