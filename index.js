const express = require("express");
const connectDB = require("./config/dbConnect");

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.listen(PORT, () => {
  console.log(`Server is up and running in port ${PORT}`);
});
