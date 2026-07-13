const express = require("express")


const router = express.Router()

const {createTrainer,getTrainer,updateTrainer,deleteTrainer} = require("../Controller/TrainerController")

router.post("/create-trainer" , createTrainer )
router.get("/get-trainer" , getTrainer)
router.put("/update-trainer" ,updateTrainer)
router.delete("/delete-trainer" ,deleteTrainer)


module.exports = router;