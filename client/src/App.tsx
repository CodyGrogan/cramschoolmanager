import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SchoolManager from './components/SchoolManager';
import ClassManager from './components/ClassManager';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'; 
import {useState, useEffect} from 'react';
import School from './classes/School';
import SchoolClass from './classes/SchoolClass';
import Student from './classes/Student';
import Teacher from './classes/Teacher';
import Lesson from './classes/Lesson';
import StudentManager from './components/StudentManager';
import StudentPage from './components/StudentPage';

function App() {
  let defSchool = new School('def');
  let defstudent: Student = new Student('unknown', 0, 'unknown','unknown','unknown','unknown');


  const [school, setSchool] = useState<School>(defSchool);
  const [lessonToView, setLessonToView] = useState<Lesson>();
  const [studentToView, setStudentToView] = useState<Student>(defstudent);

  

  //for testing purposes
  //later class/student/teach info should come from database

 

  useEffect(()=>{
    console.log('use effect fired')

    //this exists for testing purposes only

    
    setStudentToView(defstudent);


    let newclass = new SchoolClass('myclass', 'testschool');
    let newstudent = new Student('billy', 11, 'john', 'mary', '123456', 'hello@fake.com');
    let newstudent2 = new Student('sally', 12, 'stan', 'jill', '987655', 'hello2@fake.com');
    newclass.addStudent(newstudent);
    newclass.addStudent(newstudent2);

    let newclass2 = new SchoolClass('myotherclass', 'testschool');
    let newstudent3 = new Student('paul', 11, 'john', 'mary', '123456', 'hello@fake.com');
    let newstudent4 = new Student('jenny', 12, 'stan', 'jill', '987655', 'hello2@fake.com');
    let newstudent5 = new Student('alfred', 12, 'jose', 'josie', '456123', 'hello3@fake.com');
    newclass2.addStudent(newstudent3);
    newclass2.addStudent(newstudent4);
    newclass2.addStudent(newstudent5);
    newclass2.type = "English"

    newclass.createAssignment('2022-01-01', 'Assignment1')
    newclass.createAssignment('2022-01-02', 'Assignment2')
    
    newclass2.createAssignment('2022-01-01', 'Assignment1')
    newclass2.createAssignment('2022-01-02', 'Assignment2')

  
    let myschool = new School('myschool');
    myschool.classList.push(newclass);
    myschool.classList.push(newclass2);

    myschool.studentList.push(newstudent);
    myschool.studentList.push(newstudent2);
    myschool.studentList.push(newstudent3);
    myschool.studentList.push(newstudent4);
    myschool.studentList.push(newstudent5);
    newclass.createLesson('2022-01-01', 'Verbs Day 1');
    newclass.createLesson('2022-01-02', 'Verbs Day 2');

    newclass2.createLesson('2022-01-05', 'Verbs Day 1');
    newclass2.createLesson('2022-01-06', 'Verbs Day 2');




    
    setSchool(myschool);
  },
  [])



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='school' element={<SchoolManager school={school}/>}/>
        <Route path='student' element={<StudentManager school={school} studentToView={studentToView} setStudentToView={setStudentToView} />}/>
        <Route path='studentpage/:id' element={<StudentPage studentToView={studentToView}/>} />

      </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
