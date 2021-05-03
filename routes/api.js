const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  
  Workout.create(req.body)
    .then(dbWorkout => {
        
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  //find by the id and update 
  Workout.findByIdAndUpdate(
  //push into the array $push
  // put in params.id syntax
    req.params.id,
    {$push: {
      exercises: req.body
    }}
  ).then((workoutdb) => {
    res.json(workoutdb)
  }) 
  .catch((err) => {
    res.status(400).json(err);
  });
});


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
  .then((workoutdb) => {
    res.json(workoutdb);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});

module.exports = router;
