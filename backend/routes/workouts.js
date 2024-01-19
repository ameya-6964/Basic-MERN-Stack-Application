const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// @route GET /api/workouts/ => Get All Workouts
router.get("/", getWorkouts);

// @route POST /api/workouts/ => Post a New Workout
router.post("/", createWorkout);

// @route GET /api/workouts/:id => Get Single Route
router.get("/:id", getWorkout);

// @route DELETE /api/workouts/:id => Delete Single Workout
router.delete("/:id", deleteWorkout);

// @route PATCH /api/workouts/:id => Update A Workout
router.patch("/:id", updateWorkout);

module.exports = router;
