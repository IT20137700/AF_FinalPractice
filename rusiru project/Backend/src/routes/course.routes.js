const KoaRouter =require('koa-router');
const { addCourse, getcourses, updateCourse, deletecourse } = require('../controller/course.controller');
const router =new KoaRouter({
    prefix:"/course"
})

router.post("/add",addCourse);
router.get("/",getcourses);
router.put("/:id",updateCourse);
router.delete("/:id",deletecourse);
module.exports=router;