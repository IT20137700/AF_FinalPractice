require('dotenv').config();
const Koa=require('koa');
const KoaRouter=require('koa-router');
const cors=require('@koa/cors');
const bodyParser=require('koa-bodyparser');
const josn =require('koa-json');
const { dbconnect } = require('./src/utils/dbconnect');
const courseRoutes=require("./src/routes/course.routes");
const studentRoutes=require("./src/routes/student.routes")

const app= new Koa();
const router=new KoaRouter();

app.use(cors());
app.use(bodyParser());
app.use(josn());
app.use(courseRoutes.routes());
app.use(studentRoutes.routes());

app.use(router.routes()).use(router.allowedMethods());
router.get("/",ctx=>{
    ctx.body={message:"student anagement api"}
})


app.listen(9000,()=>{
    
    console.log("server is running on port 9000")
    dbconnect()
});