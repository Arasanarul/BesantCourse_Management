const express = require("express");

const router = express.Router()

const { createCourse,getCourse,updateCourse,deleteCourse } = require("../Controller/CourseController");

router.post("/create-course", createCourse);
router.get("/get-course", getCourse);
router.put("/update-course", updateCourse);
router.delete("/delete-course", deleteCourse);

module.exports = router;