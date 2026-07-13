const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    studentId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Student",
    required:true
},
    date:{
        type: Date,
        required:true
    },
    status:{
        type: String,
        enum:["Active", "Inactive"],
        default: "Active"
    },
    checkIn:{
        type: String
    },
    checkout:{
        type: String
    },
    remarks:{
        type: String
    },

},
{
    timestamps:true
})
module.exports = mongoose.model("Attendance",AttendanceSchema);