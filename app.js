require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors()); //help to communicate with two different server.
app.use(express.json()); //data come from frontend in json format.

app.get("/", (req, res) => {
  res.status(200).json("server start");
});
app.listen(PORT, () => {
  console.log(`server start ${PORT}`);
});
