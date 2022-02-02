var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('*', function(req, res) {

  console.log("received *");
  
  let pathstring = (path.join(__dirname, '../client/build/index.html' ));
  console.log(pathstring);
  res.sendFile(pathstring);
});


router.get('/studentlist', function(req, res, next) {
  
});

module.exports = router;
