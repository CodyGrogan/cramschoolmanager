

/*

   name;
   age;
   parent1;
   parent2;
   phone;
   email;
   classes: string[];
   studentID: string;
   schoolName: string;
   
   */

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let studentSchema = new Schema({'name': String, 
'age': Number, 
'parent1': String, 
'parent2': String,
'phone': String,
'email': String,
'classes': {type: Array},
'studentID': String,
'schoolName': String,
'schoolID': String

});

let studentModel = mongoose.model('student', studentSchema);

module.exports = studentModel;
