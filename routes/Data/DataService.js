/*
* date:2017-09-20
* desc:数据操作
* */
var mongoHelper = require("../mongoHelper");
var fs = require("fs");
var config = JSON.parse(fs.readFileSync("package.json", "utf8"));
var constr = config.dbconnection.connectionstr;

exports.addEmployer = function (username, age, nativePlace, phone,callback) {
    mongoHelper.dbConnect(constr, function (err, db) {
        db.collection("employer").insert(
            {
                "username": username,
                "age": age,
                "nativePlace": nativePlace,
                "phone": phone

            }, function (err, result) {
                if (err) {
                    callback(err, true);
                } else {
                    callback(err, false);
                }
            });
    })
};





