const users = require("../models/usersSchema");
const moment = require("moment");

exports.userpost = async (req, res) => {
  const { firstname, email, mobile, gender, status } = req.body;

  if (!firstname || !email || !mobile || !gender || !status) {
    res.status(400).json({ error: "All input are required" });
  }
};
