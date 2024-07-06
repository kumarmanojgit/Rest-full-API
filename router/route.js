const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/userControllers");

//routing
router.post("/user/register", controllers.userpost);

module.exports = router;
