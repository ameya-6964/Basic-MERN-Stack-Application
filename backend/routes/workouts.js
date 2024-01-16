const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// @route GET /api/workouts/ => Get All Workouts
router.get("/", getWorkouts);

// @route GET /api/workouts/:id => Get Single Route
router.get("/:id", getWorkout);

// @route POST /api/workouts/ => Post a New Workout
router.post("/", createWorkout);

// @route DELETE /api/workouts/:id => Delete Single Workout
router.delete("/:id", deleteWorkout);

// @route PUT /api/workouts/:id => Update A Workout
router.patch("/:id", updateWorkout);

module.exports = router;
