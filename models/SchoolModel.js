const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let SchoolSchema = new Schema({
    'name': String,
    'address': String,
    'schoolID': String,
    'teacherList': {type: Array},
    'studentList': {type: Array},
    'classList': {type: Array}
});

let schoolModel = mongoose.model('school', SchoolSchema);
module.exports = schoolModel; 