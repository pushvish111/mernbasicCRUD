const express = require('express');
const router = express.Router();
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutControllers")



//Get all workouts
router.get("/", getWorkouts)

//Get a single workout
router.get("/:id", getWorkout)
  
//Post a new workout
router.post("/", createWorkout)

//delete a workout
router.delete("/:id", deleteWorkout)

//update or edit a workout
router.patch("/:id", updateWorkout)

module.exports = router;