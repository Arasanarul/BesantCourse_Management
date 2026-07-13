const Course = require("../Modal/CourseModal");

const createCourse = async(req,res) => { 
    try{
        const data = req.body
        const Coursedb = await new Course(data);
        await Coursedb.save();

        res.send({
            message:"Course data created successfully",
            Course: Coursedb
        })
    }catch(err){
        res.send(err)
        console.log(err)
    }
}

const getCourse = async(req,res) =>{
    try{
        let id = req.query.id;
        if(id){
            const Coursedb = await  Course.findById(id).populate("trainerId","name email");

        res.send({
            message:"Course data fetched successfully",
            Course: Coursedb
        })
        }else{
            const Coursedb = await  Course.find().populate("trainerId","name email");

        res.send({
            message:"Course data fetched successfully",
            Course: Coursedb
        })
        }
        
    }catch(err){
        res.send(err)
        console.log(err)
    }
}

const updateCourse = async(req,res) =>{
    try{
        let id = req.query.id;
        let data = req.body;
        const Coursedb = await Course.findByIdAndUpdate(id,data,{new:true});

        res.send({
            message:"Course data update successfully",
            Coursedb: Coursedb 
        })
    }catch(err){
        res.send(err)
        console.log(err)
    }
}

const deleteCourse = async(req,res) =>{
    try{
        let id = req.query.id;
        const Coursedb = await Course.findByIdAndDelete(id);

        res.send({
            message:"Course data deleted successfully"
        })
    }catch(err){
        res.send(err)
        console.log(err)
    }
}

module.exports = {createCourse,getCourse,updateCourse,deleteCourse};