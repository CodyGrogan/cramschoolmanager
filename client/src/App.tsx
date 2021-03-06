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
import LessonPage from './components/LessonPage';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import AssignmentPage from './components/AssignmentPage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD_3M4TI4ENhiQq9eA9yo808FQ1v40B86c",

  authDomain: "cramschoolmanager.firebaseapp.com",

  projectId: "cramschoolmanager",

  storageBucket: "cramschoolmanager.appspot.com",

  messagingSenderId: "843449214028",

  appId: "1:843449214028:web:87e394968f30643b6140e9",

  measurementId: "G-HNW8SPLH80"

};
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);



function initFirebaseAuth() {
//onAuthStateChanged(getAuth(), authStateObserver);

}



function App() {

  initFirebaseAuth();
  let defaultSchool = new School('def', 'testid');
  let defstudent: Student = new Student('unknown', 0, 'unknown','unknown','unknown','unknown', 'uknown', 'unknown', 'unknown', 'male');


  const [school, setSchool] = useState<School>(defaultSchool);
  const [lessonToView, setLessonToView] = useState<Lesson>();
  const [studentToView, setStudentToView] = useState<Student>(defstudent);

  

  //for testing purposes
  //later class/student/teach info should come from database

 

  useEffect(()=>{
    console.log('use effect fired')

    //this exists for testing purposes only

    
    setStudentToView(defstudent);

    let defSchool = new School('myschool', 'testid');


    defSchool.addStudent('billy', 11, 'john', 'mary', '123456', 'hello@fake.com', 'Male');
    defSchool.addStudent('sally', 12, 'stan', 'jill', '987655', 'hello2@fake.com', 'Female');
    defSchool.addStudent('paul', 11, 'john', 'mary', '123456', 'hello@fake.com', 'Male');
    defSchool.addStudent('jenny', 12, 'stan', 'jill', '987655', 'hello2@fake.com', 'Female');
    defSchool.addStudent('alfred', 12, 'jose', 'josie', '456123', 'hello3@fake.com', 'Male');

    defSchool.createClass('myclass')
    defSchool.createClass('myotherclass')
    defSchool.classList[0].createAssignment('2022-01-01', 'Assignment1');
    defSchool.classList[0].createAssignment('2022-01-02', 'Assignment2');

    
    defSchool.classList[1].createAssignment('2022-01-04', 'Assignment1');
    defSchool.classList[1].createAssignment('2022-01-05', 'Assignment2');

    defSchool.classList[0].createLesson('2022-01-01', 'Verbs Day 1', 'This is the lesson plan for verb day 1');
    defSchool.classList[0].createLesson('2022-01-02', 'Verbs Day 2', 'And this is the lesson plan for verb day 2');
    


    
    defSchool.classList[1].createLesson('2022-01-05', 'Verbs Day 1', 'This is the lesson plan for verb day 1');

    defSchool.classList[1].createLesson('2022-01-06', 'Verbs Day 2', 'And this is the lesson plan for verb day 2');



  

 


    
    setSchool(defSchool);
  },
  [])



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home school = {school} setSchool={setSchool}/>}/>
        <Route path='school' element={<SchoolManager school={school} setSchool={setSchool}/>}/>
        <Route path='student' element={<StudentManager school={school} studentToView={studentToView} setStudentToView={setStudentToView} setSchool={setSchool} />}/>
        <Route path='studentpage/:id' element={<StudentPage setSchool={setSchool} school={school}/>} />
        <Route path='lessonpage/:id/:classname' element={<LessonPage setSchool={setSchool} school={school}/>} />
        <Route path='assignmentpage/:id/:classname' element={<AssignmentPage setSchool={setSchool} school={school}/>} />



      </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
