const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

//! Logger Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome To The App" });
});

app.listen(port, () => {
  console.log(`Listening On Port ${port}`);
});
