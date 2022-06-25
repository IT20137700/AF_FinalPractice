const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{type:String, required:true},
    nic:{type:String, required:true},
    age:{type:Number, required:true},
    courseId:{type:mongoose.Schema.Types.ObjectId, required:false ,ref:"course"}
})

const Students=mongoose.model("students",studentSchema);
module.exports=Students;