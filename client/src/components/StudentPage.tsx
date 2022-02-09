import { useEffect, useState } from "react";
import Student from "../classes/Student";
import {useParams} from 'react-router-dom';
import Navbar from "./Navbar";
import School from "../classes/School";
import SchoolClass from "../classes/SchoolClass";

interface IGradeObj{ 
    className: string;
    gradeAvg: number;
}

interface IAttendanceObj{
    className: string;
    attendanceAvg: number;
}


//when the backend is implemented, use the student name and school name to check database for info


function StudentPage(props: any){
    let defstudent: Student = new Student('unknown', 0, 'unknown','unknown','unknown','unknown', 'unknownid', 'unknown', 'unknown');
    
    const [student, setStudent] = useState<Student>(defstudent);
    const [avgGradeList, setAvgGradeList] = useState<JSX.Element[]>([]);
    const [avgAttendList, setAvgAttendList] = useState<JSX.Element[]>([]);

    let { id } = useParams();

    useEffect(()=>{

        let school: School = props.school;
        let studentList = school.studentList;
        let index = studentList.findIndex(obj => obj.studentID === id);
        if (index >= 0){
        setStudent(studentList[index]);
        let avgGradeArr = calcAvgGrade(school.classList, studentList[index]);
        let gradeJsx = gradeListBuilder(avgGradeArr);
        setAvgGradeList(gradeJsx);

        
        let avgAttendance = calcAvgAttendance(school.classList, studentList[index]);
        let attendJSX = attendListBuild(avgAttendance);
        setAvgAttendList(attendJSX);

        }

    },
    []);

    useEffect(()=>{

        let school: School = props.school;
        let studentList = school.studentList;
        let index = studentList.findIndex(obj => obj.studentID === id);
        if (index >= 0){
        setStudent(studentList[index]);
        let avgGradeArr = calcAvgGrade(school.classList, studentList[index]);
        let gradeJsx = gradeListBuilder(avgGradeArr);
        setAvgGradeList(gradeJsx);

        let avgAttendance = calcAvgAttendance(school.classList, studentList[index]);
        let attendJSX = attendListBuild(avgAttendance);
        setAvgAttendList(attendJSX);

        }

    },
    [props.school]);

    function calcAvgGrade(classList: SchoolClass[], thisStudent: Student){

        let gradeArr = [];
        
    
       
        for (let i = 0; i < classList.length; i++){
            let grade: IGradeObj = {className: classList[i].name, gradeAvg: 0};
            let totalGrade = 0;
            let totalAssignments = classList[i].assignmentList.length;

            let classindex = thisStudent.classes.findIndex(obj => obj == classList[i].name);
            
            if (classindex >= 0){

                if (classList[i].assignmentList.length > 0){
                for (let j = 0; j < classList[i].assignmentList.length; j++){

                    let assignmentGrades = classList[i].assignmentList[j].grades;
                    let index = assignmentGrades.findIndex(obj => obj.name == thisStudent.name);
                    if (index >= 0){
                    let thisgrade = assignmentGrades[index].value;
                    if (thisgrade == 0){
                        let assignmentDate = new Date(classList[i].assignmentList[j].duedate);
                        let today = new Date();
                        if (assignmentDate.getTime()> today.getTime()){
                            totalAssignments = totalAssignments - 1;
                        }
                    }
                    totalGrade = totalGrade + parseInt(thisgrade);
                    console.log('total grade is' + totalGrade);
                    }
                    
                }
            }
            let avg = totalGrade / totalAssignments;
            grade.gradeAvg = Math.floor(avg);
            gradeArr.push(grade);
        }
        
        }
        return gradeArr;
    }
    
    function gradeListBuilder(avgGradeArr: IGradeObj[]){
        let jsxArr = [];
        for (let i = 0; i < avgGradeArr.length; i++){
            let newJsx = <div>{avgGradeArr[i].className}: {avgGradeArr[i].gradeAvg}%: </div>
            jsxArr.push(newJsx);
        }

        return jsxArr;
    }


    function calcAvgAttendance(classList: SchoolClass[], thisStudent: Student){

        let attendArr = [];
        
       
        for (let i = 0; i < classList.length; i++){

            let classindex = thisStudent.classes.findIndex(obj => obj == classList[i].name);

            if (classindex >= 0){

                let attendance: IAttendanceObj = {className: classList[i].name, attendanceAvg: 0};
                let attendScore = 0; //add 1 for each class student attended, then divide by length of lessons for attendance
                let totalClasses = classList[i].lessonList.length;
                if (classList[i].lessonList.length > 0){
                for (let j = 0; j < classList[i].lessonList.length; j++){
                
                    let attend = classList[i].lessonList[j].attendance;
                    let index = attend.findIndex(obj => obj.name == thisStudent.name);
                    if (index >= 0){
                        if (attend[index].value === true){
                            
                            console.log('student attended');
                            console.log(classList[i].lessonList.length);
                            attendScore = attendScore + 1;
                            console.log('lesson at ' + j);
                        
                        }

                        else{
                             //check if class has not started yet
                             console.log('checking for future')
                             console.log('lesson at ' + j);

                            let lessonDateString = classList[i].lessonList[j].date;
                            console.log(lessonDateString);
                            let lessonDate = new Date(lessonDateString);
                            let today = new Date();
                            console.log(lessonDate.getTime());
                            console.log(today.getTime());
                            
                            if (lessonDate.getTime() > today.getTime()){
                                totalClasses = totalClasses -1;
                                console.log('class not started yet')
                            }

                            

                        }
                    }
                    
                }

            }
            let avg = attendScore / totalClasses;
            avg = avg*100;
            attendance.attendanceAvg = Math.floor(avg);
            attendArr.push(attendance);
        }
        
        }
        return attendArr;
    }


    function attendListBuild(attendance: IAttendanceObj[]){
        let jsxArr = [];
        for (let i = 0; i < attendance.length; i++){
            let newJsx = <div>{attendance[i].className}: {attendance[i].attendanceAvg}%: </div>
            jsxArr.push(newJsx);
        }

        return jsxArr;
    }

    return(
        <div>
            <Navbar setSchool = {props.setSchool}/>
           
            <div className="container">
            <div className="row justify-content-start">

            <div className="col-sm-6">

            <div className="card">
                <div className="card-header">
                {student.name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Student Information</h5>
                    <div>

                        <table className="table">
                            <thead>
                           
                             
                              


                            </thead>

                            <tbody>
                            <tr>
                            <th>Parent 1</th> <td>{student.parent1}</td>
                            </tr>   
                            <tr> <th>Parent 2</th>   <td>{student.parent2}</td> </tr> 
                            <tr> <th>Phone</th>  <td>{student.phone}</td> </tr> 
                            <tr> <th>Email</th>    <td>{student.email}</td> </tr> 
                              



                            </tbody>
                        </table>
                       
                    </div>

                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Edit Student Information
                            </button>
                            </h2>

                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">

                                <div className="inputBox container">
                                    <div className="col-sm">
                                        <div className="inputDiv"> <label className="form-label">Age:</label><input className='form-control' id='classType' type={'text'} placeholder={student.age.toString()}></input><button className="btn btn-primary">Edit</button></div> 
                                        <div className="inputDiv"> <label className="form-label">Parent 1:</label><input className='form-control' id='classType' type={'text'} placeholder={student.parent1}></input><button className="btn btn-primary">Edit</button></div> 
                                        <div className="inputDiv"> <label className="form-label">Parent 2:</label><input className='form-control' id='classType' type={'text'} placeholder={student.parent2}></input><button className="btn btn-primary">Edit</button></div> 
                                        <div className="inputDiv"> <label className="form-label">Phone:</label><input className='form-control' id='classType' type={'text'} placeholder={student.phone}></input><button className="btn btn-primary">Edit</button></div> 
                                        <div className="inputDiv"> <label className="form-label">Email:</label><input className='form-control' id='classType' type={'text'} placeholder={student.email}></input><button className="btn btn-primary">Edit</button></div> 



                                    </div>
                                    
                                </div>

                            </div>
                            </div>
                        </div>  
                    </div> 

           
                    
                </div>
            </div>

            </div>

            <div className="col-sm-6">

            <div className="card">
                <div className="card-header">
                Grade Summary
                </div>
                <div className="card-body">
                    <h5 className="card-title">Class: Total Grade%</h5>
                    {avgGradeList}



                    
                </div>
            </div>



            <div className="card">
                    <div className="card-header">
                    Attendance Summary
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Attendance %</h5>
                        <p>Attendance goes here</p>

                        {avgAttendList}

                        
                    </div>
                </div>

            </div>


    

            </div>

            </div>

        </div>
    )
}

export default StudentPage;