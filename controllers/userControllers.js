const users = require("../models/usersSchema");
const moment = require("moment");

exports.userpost = async (req, res) => {
  const { firstname, email, mobile, gender, status } = req.body;

  if (!firstname || !email || !mobile || !gender || !status) {
    res.status(400).json({ error: "All input are required" });
  }
  try {
    const preuser = await users.findOne({ email: email });
    if (preuser) {
      res.status(400).json({ error: "this email already exit" });
    } else {
      //create new date
      const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
      //create new registration
      const userData = new users({
        firstname,
        email,
        mobile,
        gender,
        status,
        datecreated: dateCreate,
      });
      await userData.save();
      res.status(200).json(userData);
    }
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block error");
  }
};
