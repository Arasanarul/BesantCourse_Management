const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String
    },
    fees:{
        type: Number,
        required: true
    },
    trainerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trainer",
        required:true 
    },
    syllabus:{
        type: String
    },
    mode:{
        type: String,
    enum: ["online", "offline"],
    default: "offline"
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("Course",CourseSchema)