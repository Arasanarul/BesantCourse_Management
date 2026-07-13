const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true
    },
    dob:{
        type: Date,
        required:true,
    },
    gender: {
    type: String,
    enum: ["Male", "Female"],
    default: "Male"
    },
    address:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    guardianName:{
        type:String,
        required:true
    },
    guardianPhone:{
        type:Number,
        required:true
    },
    course:{
    type: String,
    enum: ["Python", "java", "Mern", "sql"],
    default: "Mern"
    },
    batch:{
    type: String,
    enum: ["mrng-9am", "mrng-10am", "mrng-11am", "evening-6pm","evening-7pm"],
    default: ""
    },
    joiningdate:{
        type: Date,
        required:true,
    },
    fees:{
        type:Number,
        required:true,
    },
    trainerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trainer",
        required:true,
    },
    status: {
    type: String,
    enum: ["Active", "Inactive", "On Leave", "Resigned"],
    default: "Active"
    }    
},
{
    timestamps:true
})

module.exports = mongoose.model("Student",StudentSchema)