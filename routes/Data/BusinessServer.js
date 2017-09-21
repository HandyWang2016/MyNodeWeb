/*
* date:2017-09-20
* desc:前端业务逻辑处理
* */
var express=require("express");
var router=express.Router();
var dataserver=require("./DataService");

router.post('/insertdata',function (req, res) {
   var username=req.body.username;
   var age=req.body.age;
   var nativePlace=req.body.nativePlace;
   var phone=req.body.phone;
   dataserver.addEmployer(username,age,nativePlace,phone,function (err, result) {
       if(result){
           console.log(err);
       }else{
           alert('添加成功！');
           location.reload();
       }
   })
});

module.exports=router;





