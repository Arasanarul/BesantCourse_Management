const express = require("express")


const router = express.Router()

const {createAttendance,getAttendance,updateAttendance,deleteAttendance} = require("../Controller/AttendanceController")

router.post("/create-attendance" , createAttendance )
router.get("/get-attendance" , getAttendance)
router.put("/update-attendance" ,updateAttendance)
router.delete("/delete-attendance" ,deleteAttendance)


module.exports = router;