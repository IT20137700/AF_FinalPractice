const mongoose=require('mongoose');
const courseSchema=new mongoose.Schema({
    courseName:{type:String, required:true},
    coursefees:{type:Number, required:true},
    students:[{type:mongoose.Schema.Types.ObjectId, required:false ,ref:"students"}]
})


const Course=mongoose.model("course",courseSchema);
module.exports=Course;