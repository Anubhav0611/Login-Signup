const mongoose=require('mongoose');

const connectdb=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
    console.log("database connected");
}


module.exports=connectdb;
