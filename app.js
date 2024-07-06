const express = require("express");
const app = express();
require("./db/connection");
const cors = require("cors");

const router = require("./router/route");
const PORT = 5000;

app.use(cors()); //help to communicate with two different server.
app.use(express.json()); //data come from frontend in json format.
app.use(router); // used for routing
app.listen(PORT, () => {
  console.log(`server start ${PORT}`);
});
