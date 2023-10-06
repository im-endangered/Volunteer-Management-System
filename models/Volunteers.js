const mongoose = require("mongoose");
const volunteerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Volunteers = mongoose.model("Volunteers", volunteerSchema);

module.exports = Volunteers;
