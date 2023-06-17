require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workout")

const app = express();
app.use(express.json())

//middleware
app.use((req, res, next) => {
    console.log("path: " + req.path, "method: "+ req.method)
    next();
})



mongoose.connect(process.env.MONGO_URI)
    .then(
        app.listen(process.env.PORT, ()=> {
            console.log("running on PORT: " + process.env.PORT);
            console.log("MONGODB Connected")
        })
    )
    .catch((err) => {
        console.log(err.message);
    })

//routes
app.use("/api/workouts", workoutRoutes)


//listening port
