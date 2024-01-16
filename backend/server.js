const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const workerRoutes = require("./routes/workouts");
const port = process.env.PORT || 4000;
const connectionString = process.env.MONGO_URI;

//! Logger Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//! Routes
app.use("/api/workouts", workerRoutes);

//Connext To DB
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB Database!");
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
  });

app.listen(port, () => {
  console.log(`Listening On Port ${port}`);
});
