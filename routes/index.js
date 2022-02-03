var express = require('express');
var router = express.Router();
const studentModel = require('../models/StudentModel');

//setup mongo
var mongoose = require('mongoose');
var mongopassword = process.env.MONGOPASS;
var path = require('path');
let database = process.env.USEDB;
//in production USEDB = "CramSchool"
var mongodb = 'mongodb+srv://cg123:'+ mongopassword +'@sandbox.o8c7z.mongodb.net/'+ database +'?retryWrites=true&w=majority';
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('err', console.error.bind(console, 'mongodb connection error'));



/* GET home page. */

router.get('*', function(req, res) {

  console.log("received *");
  
  let pathstring = (path.join(__dirname, '../client/build/index.html' ));
  console.log(pathstring);
  res.sendFile(pathstring);
});


router.get('/studentlist', function(req, res, next) {
  
});

router.post('/createstudent', function(req, res, next) {
  let student = req.body;
  let studentInstance = new studentModel({name: student.name, age: student.age, parent1: student.parent1, parent2: student.parent2, phone: student.phone, email: student.email, classes: student.classes, studentid: student.studentID, schoolName: student.schoolName, schoolID: student.schoolID});
  studentInstance.save(function(err){if (err) console.log(err);})

});


module.exports = router;
