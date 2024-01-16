const express = require("express");

const router = express.Router();

// @route GET /api/workouts/ => Get All Workouts
router.get("/", (req, res) => {
  res.json({ message: "GET ALL WORKOUTS" });
});

// @route GET /api/workouts/:id => Get Single Route
router.get("/:id", (req, res) => {
  res.json({ message: "GET SINGLE WORKOUTS" });
});

// @route POST /api/workouts/ => Post a New Workout
router.post("/", (req, res) => {
  res.json({ message: "POST A NEW WORKOUT" });
});

// @route DELETE /api/workouts/:id => Delete Single Workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE SINGLE WORKOUT" });
});

// @route PUT /api/workouts/:id => Update A Workout
router.patch("/:id", (req, res) => {
  res.json({ message: "POST A NEW WORKOUT" });
});

module.exports = router;
