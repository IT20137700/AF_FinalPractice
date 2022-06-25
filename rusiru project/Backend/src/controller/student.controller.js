const Student=require("../models/students.model");
const Course=require("../models/course.model");


const addStudents= async(ctx)=>{
    console.log(ctx.request.body);
    const {name,nic,age,courseId}=ctx.request.body;
   
try{ 
        const student=await Student.create({
    
            name: name,
            nic:nic,
            age: age,
            courseId:courseId
        });
        
        
        await Course.findByIdAndUpdate(courseId,{$push:{students:student._id}})
        return (ctx.body = student);
  
}catch(error){
   return (ctx.body={message:error.message}) 
}
}


const getStudent=async(ctx)=>{
    try{
    const student=await Student.find({}).populate("students");
    return (ctx.body=student);
    }catch (error){
        return (ctx.body={message:error.message}) 
     }
    }



module.exports={addStudents,getStudent}
