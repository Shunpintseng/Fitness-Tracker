const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//creates a new schema of workout database using mongoDB
const workoutSchema = new Schema({

    exName: String,
    rep: Number,
    weight: Number,
    sets: Number,
    duration: Number,
    distance: Number,


    created: {
        type: Date,
        default: Date.now
    }

})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;