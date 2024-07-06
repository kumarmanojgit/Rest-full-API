const mongoose = require("mongoose");
const DB = process.env.DATABASE;

if (!DB) {
  console.error("Database connection string is not defined.");
  process.exit(1);
}

mongoose
  .connect(DB)
  .then(() => console.log("Connected to the database"))
  .catch((err) => {
    console.error("Database connection error:", err);
  });
