const mongoose = require("mongoose");
const validator = require("validator");

const usersSchema = new mongoose.Schema({
  firstname: {
    type: string,
    required: true,
    trim: true,
  },
  email: {
    type: string,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) throw Error("Email is invalid");
    },
  },
  mobile: {
    type: string,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  status: {
    type: string,
    enum: ["Active", "In-Active"],
    default: "Active",
  },
  datecreated: Date,
  dateupdated: Date,
});

// create model

//try to make model name same as collection name (if not same the new collection will create)
const users = new mongoose.model("users", usersSchema);
module.exports = users;
