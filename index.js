const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

import authRoute from "./routes/auth.js";



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });


app.use("/backend/auth", authRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });