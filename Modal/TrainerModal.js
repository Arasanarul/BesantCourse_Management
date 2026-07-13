const mongoose= require("mongoose");

const TrainerSchema = new mongoose.Schema({
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
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
    },
    specification:{
        type:String,
        required:true
    },
    joiningdate:{
        type: Date,
        required:true,
    },
    salary:{
        type:Number,
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

module.exports = mongoose.model("Trainer",TrainerSchema)