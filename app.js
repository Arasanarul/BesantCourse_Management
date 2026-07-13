const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();
app.use(express.json());

const Trainer = require("./Router/TrainerRouter");
const Student = require("./Router/StudentRouter");
const Attendance = require("./Router/AttendanceRouter");
const Course = require("./Router/CourseRouter");



app.use("/api",Trainer)
app.use("/api",Student)
app.use("/api",Attendance)
app.use("/api",Course)


const PORT = 4000;

app.listen(PORT, ()=>{
    console.log("server running...");  
})