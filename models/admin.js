const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, //email is to be verified through express validators
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
