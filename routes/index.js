var express = require('express');
var router = express.Router();
const studentModel = require('../models/StudentModel');
const schoolModel = require('../models/SchoolModel');

//setup mongo
var mongoose = require('mongoose');
var mongopassword = process.env.MONGOPASS;
var path = require('path');
const { query } = require('express');
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

router.post('/createschool', function(req, res, next) {
  console.log('creating school')
  let school = req.body;
  let schoolInstance = new schoolModel({
    name: school.name,
    schoolID: school.schoolID,
    address: school.address,
    teacherList: school.teacherList,
    studentList: school.studentList,
    classList: school.classList
    



  });
  schoolInstance.save(function(err){if (err) console.log(err);})

});

router.put('/editschool', function(req, res, next){

  console.log('put school information')
  let school = req.body;
  console.log(school.schoolID);
  let searchID = school.schoolID;

 if (school.schoolID != 'testid'){

  schoolModel.findOne({schoolID: searchID}, function (err, doc){
    if (err){console.log(err);
    res.send(err)}
    else{

        try{
          doc.classList = school.classList;
          doc.teacherList = school.teacherList;
          doc.studentList = school.studentList;
          doc.name = school.name;
          doc.address = school.address; 
          doc.save(function(err){if (err) console.log(err);});
          res.send(200);

        }
        catch{
          console.log('an error occured in saving class list')
        }

        
      }
    });

  }
  else{
    console.log('user is not loggged in');
  }

});

router.post('/getschoolinfo', function(req, res, next){   //this should use post request, later this will need to pass firebase JWT and schoolID
                                                      //for authentication on server side

  console.log('get school information')
  let newschoolID = req.body.uid;
  console.log(newschoolID);

 

  schoolModel.findOne({schoolID: newschoolID}, function (err, doc){
    if (err){console.log(err);
    res.send(err)}
    else{
        res.json(doc);
        
      }
    });

});



module.exports = router;
