/*
* date:2017-09-20
* desc:前端业务逻辑处理
* */

var express=require("express");
var dataService=require("DataService");
var querystring=require("querystring");
var http=require("http");

var server= express.createServer(function (req, res) {
    if(req.url=="/dopost" && req.method.toLowerCase()=="post"){
        var datastr='';
        res.on('data',function (chunk) {
            datastr+=chunk;
        });

        res.on('end',function () {
            var datastring=datastr.toString();
            var obj=querystring.parse(datastring);
            console.log(obj.username);
        })
    }
});

server.listen(3000);

