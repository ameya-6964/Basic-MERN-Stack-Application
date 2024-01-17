const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const workerRoutes = require("./routes/workouts");
const port = process.env.PORT || 4000;
const connectionString = process.env.MONGO_LOCAL_URI;

//! Logger Middleware
app.use(express.json());
app.use(cors());

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
    app.listen(port, () => {
      console.log(`Listening On Port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
  });
