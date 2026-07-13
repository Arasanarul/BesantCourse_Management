const Trainer = require("../Modal/TrainerModal")

const createTrainer = async(req,res) =>{
    try{
        let data = req.body;
        const Trainerdb = await new Trainer(data);
        await Trainerdb.save();

        res.send({
            message:"trainer data created successfully",
            Trainer: Trainerdb
        })
    }catch(err){
        res.send(err)
        console.log(err)
    }
}

const getTrainer = async(req,res) =>{
    try{
        let id = req.query.id;
        if(id){
            const Trainerdb = await  Trainer.findById(id);

        res.send({
            message:"trainer data fetched successfully",
            Trainer: Trainerdb
        })
        }else{
            const Trainerdb = await  Trainer.find();

        res.send({
            message:"trainer data fetched successfully",
            Trainer: Trainerdb
        })
        }
        
    }catch(err){
        res.send(err)
        console.log(err)
    }
}

const updateTrainer = async(req,res) =>{
    try{
        let id = req.query.id;
        let data = req.body;
        const Trainerdb = await Trainer.findByIdAndUpdate(id,data,{new:true});

        res.send({
            message:"trainer data update successfully",
            Trainer: Trainerdb
        })
    }catch(err){
        res.send(err)
        console.log(err)
    }
}

const deleteTrainer = async(req,res) =>{
    try{
        let id = req.query.id;
        const Trainerdb = await Trainer.findByIdAndDelete(id);

        res.send({
            message:"trainer data deleted successfully"
        })
    }catch(err){
        res.send(err)
        console.log(err)
    }
}
module.exports = {createTrainer,getTrainer,updateTrainer,deleteTrainer};