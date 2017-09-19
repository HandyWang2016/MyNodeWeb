var mongoClient = require('mongodb').MongoClient;
var DB_CON_STR = 'mongodb://localhost:27017/myMongoDB';

var insertData = function (db, callback) {
    var collection = db.collection('employer');
    var data = [{"name": "郭靖", "age": 21, "address": "中原", "phone": "13102912120"}];
    collection.insert(data, function (err, result) {
        if (err) {
            console.log("数据添加失败:" + err);
            return;
        }
        callback(result);
    })
};

var selectData = function (db, callback) {
    var collection = db.collection('employer');
    var sel = {"name": "郭靖"};
    collection.find(sel).toArray(function (err, result) {
        if (err) {
            console.log("数据查询失败：" + err);
            return;
        }
        callback(result);
    })
};

//export to client.
var testInsert = function () {
    mongoClient.connect(DB_CON_STR, function (err, db) {
        if (err) {
            console.log('数据连接出错:' + err);
            return;
        }
        console.log('连接成功');
        insertData(db, function (result) {
            console.log(result);
            db.close();
        })
    })
};

var testSel = function () {
    mongoClient.connect(DB_CON_STR, function (err, db) {
        if (err) {
            console.log('数据连接出错:' + err);
            return;
        }
        selectData(db, function (result) {
            console.log(result);
            db.close();
        })
    })
};

exports.doinsert = testInsert;
exports.doselect = testSel;











































































