const mongoose= require('mongoose');

const dbconnect=()=>{
const dbConnect=process.env.MONGODB_URL;
mongoose.connect(dbConnect,()=>{
    
}).then(console.log("database connected"));
}

module.exports ={dbconnect};