const Course=require("../models/course.model");


const addCourse= async(ctx)=>{
    console.log(ctx.request.body);
    const {courseName,coursefees,students}=ctx.request.body;
   
try{ 
        const course=await Course.create({
    
            courseName:courseName,
            coursefees:coursefees,
            students:students
        });
        return (ctx.body = course);
        
  
}catch(error){
   return (ctx.body={message:error.message}) 
}
}



const getcourses=async(ctx)=>{
try{
const course=await Course.find({});
return (ctx.body=course);
}catch (error){
    return (ctx.body={message:error.message}) 
 }
}


const updateCourse=async(ctx)=>{
    try{
     const courseId=ctx.param.id;
     
     const {courseName,coursefees,students}=ctx.request.body;
     const course=await Course.findByIdAndUpdate(courseId,{
        courseName :courseName,
        coursefees :coursefees,
        students : students})
     return ctx.body=course;

    }catch(error){
        return(ctx.body={message:error.message}) 
    }
}

const deletecourse=async(ctx)=>{
    try{
        const courseId=ctx.param.id;
        const course=await Course.findByIdAndDelete(courseId);
        return ctx.body=course;

    }catch(error){
        return(ctx.body={message:error.message}) 
    }
}

module.exports={addCourse,getcourses,updateCourse,deletecourse}