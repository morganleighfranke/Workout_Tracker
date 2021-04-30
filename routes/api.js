const router = require("express").Router();
const Workout = require("../models/workout.js");


// router.get("/exercise", (req, res) => {
 3   
// })

router.post("/api/workouts", ({ body }, res) => {
    console.log(body);
  Workout.create(body)
    .then(dbWorkout => {
        
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(body);
  // put in params.id syntax
  // use workoutKeyMap to create for each loops to put data into cards
})


// router.post("/api/Workout/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", (req, res) => {
  Workout.find({});
  console.log(res);
    // .then(dbWorkout => {
    //   res.json(dbWorkout);
    // })
    // .catch(err => {
    //   res.status(400).json(err);
    // });
});

module.exports = router;
