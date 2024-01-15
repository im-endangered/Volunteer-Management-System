const express = require("express");
const connectDB = require("./config/dbConnect");

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

connectDB();

app.use("/admin", require("./routes/adminRoutes"));
app.use("/volunteer", require("./routes/volunteerRoutes"));

// app.use("/api/volunteers", require("./routes/volunteerRoutes"));

app.listen(PORT, () => {
  console.log(`Server is up and running in port ${PORT}`);
});
