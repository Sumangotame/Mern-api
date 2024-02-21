const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controller/workoutController");

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.json({
    message: "deleting workouts",
  });
});

router.patch("/:id", (req, res) => {
  res.json({
    message: "updating workouts",
  });
});

module.exports = router;
