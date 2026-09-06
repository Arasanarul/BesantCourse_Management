const Attendance = require("../Modal/AttendanceModal");


const createAttendance = async (req,res)=>{
    try{
        let data = req.body;
        const Attendancedb = await new Attendance(data);
        await Attendancedb.save(data);

        res.send({
            message:"Attendance data created successfully",
            Trainer: Attendancedb
        })
    }catch(err){
        res.send(err)
        console.log(err)
    }
}

const getAttendance = async(req,res) =>{
    try{
        let id = req.query.id;
        if(id){
            const Attendancedb = await  Attendance.findById(id).populate("studentId");

        res.send({
            message:"Attendance data fetched successfully",
            Trainer: Attendancedb
        })
        }else{
            const Attendancedb = await  Attendance.find().populate("studentId");

        res.send({
            message:"Attendance data fetched successfully",
            Trainer: Attendancedb
        })
        }
        
    }catch(err){
        res.send(err)
        console.log(err)
    }
}

 const updateAttendance = async(req,res) =>{
     try{
         let id = req.query.id;
         let data = req.body;
         const Attendancedb  = await Attendance.findByIdAndUpdate(id,data,{new:true});
 
         res.send({
             message:"Attendance data update successfully",
             Trainer: Attendancedb
         })
     }catch(err){
         res.send(err)
         console.log(err)
     }
 }

 const deleteAttendance = async(req,res) =>{
     try{
         let id = req.query.id;
         const Attendancedb = await Attendance.findByIdAndDelete(id);
 
         res.send({
             message:"Attendanced data deleted successfully"
         })
     }catch(err){
         res.send(err)
         console.log(err)
     }
 }
 
 module.exports = {createAttendance,getAttendance,updateAttendance,deleteAttendance};
