const KoaRouter =require('koa-router');
const { addStudents, getStudent } = require('../controller/student.controller');

const router =new KoaRouter({
    prefix:"/student"
})

router.post("/add",addStudents);
router.post("/",getStudent);
module.exports=router;