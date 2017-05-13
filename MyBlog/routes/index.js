var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('这是第一个目录', { title: 'Express框架展示' });
});

module.exports = router;
