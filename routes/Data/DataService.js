/*
* date:2017-09-20
* desc:数据操作
* */
var mongoHelper = require("../mongoHelper");
var fs = require("fs");
var config = JSON.parse(fs.readFileSync("package.json", "utf8"));
var constr = config.dbconnection.connectionstr;

var addEmployer = function (name, phone, age, address, callback) {
    mongoHelper.dbConnect(constr, function (err, db) {
        db.collection("employer").insert(
            {
                "name": name,
                "age": age,
                "phone": phone,
                "address": address

            }, function (err, result) {
                if (err) {
                    callback(err, true);
                } else {
                    callback(err, false);
                }
            });
    })
};





