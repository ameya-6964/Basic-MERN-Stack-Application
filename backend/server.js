const express = require("express");

const app = express();
const workerRoutes = require("./routes/workouts");
const port = process.env.PORT || 4000;

//! Logger Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//! Routes
app.use("/api/workouts", workerRoutes);

app.listen(port, () => {
  console.log(`Listening On Port ${port}`);
});
