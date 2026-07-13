const mongoose = require('mongoose');

const connectDB = async ()=>{
    let mongodburl = "mongodb://localhost:27017/";
    try{
        await mongoose.connect(mongodburl)

        console.log("db connect");

    }catch(err){
        console.log("problem in db connection");
        console.log(err); 
    } 
}
module.exports = connectDB;