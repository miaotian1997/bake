const mysql=require("mysql");
const express=require("express");
// 创建连接池 
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"bake"
})
//创建express对象
var server=express();
//配置静态资源目录public
server.use(express.static("public"));
//配置一个第三方中间件
const bodyParser=require("body-parser");
//配置json是否自动转换
server.use(bodyParser.urlencoded({extended:false}))
//为express对象绑定监听端口3000
server.listen(3000);

//功能一：首页轮播/九宫格
server.get("/imglist",(req,res)=>{
    var sql="select img,title from index_top";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
});
//功能二：图片获取
server.get("/products",(req,res)=>{

    var sql="select * from products ";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
});
//功能三：详情页图片
server.get("/details",(req,res)=>{
    var id=req.query.id
    var sql="select img,title from details where id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
});
//功能四：详细介绍
server.get("/pre",(req,res)=>{
    var id=req.query.id;
    var sql="select title,title1,title2 from details_name where id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
})