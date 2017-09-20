var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
   res.render('home');
});

router.post('/insertdatapost',function (req,res) {
    var name=req.body.name;
});

module.exports = router;
