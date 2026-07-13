const express = require("express")


const router = express.Router()

const {createStudent,getStudent,updateStudent,deleteStudent} = require("../Controller/StudentController")

router.post("/create-student" , createStudent )
router.get("/get-student" , getStudent)
router.put("/update-student" ,updateStudent)
router.delete("/delete-student" ,deleteStudent)


module.exports = router;