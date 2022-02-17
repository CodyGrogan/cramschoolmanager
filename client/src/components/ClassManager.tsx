
import { useEffect, useState } from "react";
import { JsxSelfClosingElement } from "typescript";
import Lesson from "../classes/Lesson";
import School from "../classes/School";
import SchoolClass from "../classes/SchoolClass";
import Student from "../classes/Student";
import AssignmentList from "./AssignmentList";
import AssignmentTable from "./AssignmentTable";
import AttendanceTable from "./AttendanceTable";
import LessonList from "./LessonList";
import GenderPieChart from "./GenderPieChart";

function ClassManager(props: any){

    const [attendanceChart, setAttendanceChart] = useState<JSX.Element>();
    const [optionArr, setOptionArr] = useState<JSX.Element[]>();
    const [assignmentTable, setAssignmentTable] = useState<JSX.Element>();
    const [lessonList, setLessonList] = useState<JSX.Element>();
    const [assignmentList, setAssignmentList] = useState<JSX.Element>();
    const [genderChart, setGenderChart] = useState<JSX.Element[]>([]);

    let schoolInfo: School = props.schoolInfo;
    let schoolClass: SchoolClass = props.class;

    useEffect(()=>{
        
        let date = new Date();
        let datestring = date.toISOString();
        let key = 'attentable' + datestring;
        let newchart = <AttendanceTable key={key} schoolClass = {schoolClass} setEditTrue={props.setEditTrue}/>
        setAttendanceChart(newchart);
        resetAssignmentGrades();
        populateStudentNames();
        resetLessonList();
        resetAssignmentList();
        getGenderData();

    },
    [])

    useEffect(()=>{
        
        let date = new Date();
        let datestring = date.toISOString();
        let key = 'attentable' + datestring;
        let newchart = <AttendanceTable key={key} schoolClass = {schoolClass} setEditTrue={props.setEditTrue}/>
        setAttendanceChart(newchart);
        resetAssignmentGrades();
        populateStudentNames();
        resetLessonList();
        resetAssignmentList();
        getGenderData();


       
    },
    [props.class])

    function editPressed(inputType: String){
        switch(inputType){
        case 'Type':
            let newtype = (document.getElementById('classType') as HTMLInputElement).value;
            schoolClass.type = newtype;
            console.log(schoolClass.type);
            break;
        case 'StartDate':
            
            let dateinfo = (document.getElementById('StartDate') as HTMLInputElement).value;
            let newdate = new Date(dateinfo);
            let datestring = newdate.toISOString().split('T')[0];
            schoolClass.startDate = datestring;
            break;
        case 'EndDate':
            
            let enddateinfo = (document.getElementById('EndDate') as HTMLInputElement).value;
            let endnewdate = new Date(enddateinfo);
            let enddatestring = endnewdate.toISOString().split('T')[0];
            schoolClass.endDate = enddatestring;
            break;
        
        case 'Name':
            let newName = (document.getElementById('className') as HTMLInputElement).value;
            schoolClass.changeName(schoolInfo, newName); 
            console.log('new name is' + newName);
 
        }
        

        props.setEditTrue(true);

    }

    function populateStudentNames(){
        let jsxarr: JSX.Element[] = [];

        for (let i = 0; i < schoolInfo.studentList.length; i++){
            let newoption = <option>{schoolInfo.studentList[i].name}</option>
            jsxarr.push(newoption);
        }
        setOptionArr(jsxarr);

    }

    function addStudentButton(){
        let selectStudent = (document.getElementById('selectStudent') as HTMLInputElement);
        let studentname = selectStudent.value;
        console.log(studentname);
        let index = schoolInfo.studentList.findIndex( ({ name }) => name === studentname)
        schoolClass.addStudent(schoolInfo.studentList[index]);
        props.setEditTrue(true);
        resetAttendance();
        resetAssignmentGrades();
        getGenderData();


    }

    function resetAttendance(){
        let date = new Date();
        let datestring = date.toISOString();
        let key = 'attentable' + datestring;
        let newchart = <AttendanceTable key={key} schoolClass = {schoolClass} setEditTrue={props.setEditTrue}/>
        setAttendanceChart(newchart);
    }

    function resetAssignmentGrades(){
        let date = new Date();
        let datestring = date.toISOString();
        let key = 'assignments' + datestring;
        let newchart = <AssignmentTable key={key} schoolClass = {schoolClass} setEditTrue={props.setEditTrue}/>
        setAssignmentTable(newchart);
    }

    function newLesson(){
        console.log('newlesson clicked')
        let lessonName = (document.getElementById('inputName') as HTMLInputElement).value;
        let lessondate = (document.getElementById('inputLessonDate') as HTMLInputElement).value;
        let lessonplan = (document.getElementById('inputPlan') as HTMLInputElement).value;
        
        console.log(lessonName);
        console.log(lessondate);

        if (lessonName != '' && lessonName != null && lessondate != null){

            let newdate = new Date(lessondate);
            let datestring = newdate.toISOString().split('T')[0];
            let num = schoolClass.lessonList.length + 2;  //starts counting from 1 not 0

          //  let newlesson = new Lesson(datestring, num, schoolClass.studentList, lessonName);
            schoolClass.createLesson(datestring, lessonName, lessonplan);
           // let index = schoolClass.lessonList.length - 1;
            //schoolClass.lessonList[index].lessonplan = lessonplan;
            let key = schoolClass.lessonList.length.toString() + 'lessonkey';
            let lessonlist = <LessonList key={key} schoolClass={schoolClass} />
            console.log(schoolClass.lessonList.length);

            setLessonList(lessonlist);
            resetAttendance();
            resetAssignmentGrades();
            props.setEditTrue(true);

        }

    }

    function newAssignment(){

        console.log('newlesson clicked')
        let assignName = (document.getElementById('inputAssignmentName') as HTMLInputElement).value;
        let assignDate = (document.getElementById('inputAssignmentDate') as HTMLInputElement).value;
        if(assignName != null && assignName !='' && assignDate!=null){

            let newdate = new Date(assignDate);
            let datestring = newdate.toISOString().split('T')[0];
            schoolClass.createAssignment(datestring, assignName);
            resetAssignmentList();
            resetAssignmentGrades();
            props.setEditTrue(true);

            

        }
      
    }

    function resetLessonList(){
        let key = schoolClass.lessonList.length.toString() + 'lessonkey';

        let lessonlist = <LessonList key={key} schoolClass={schoolClass} />
            console.log(schoolClass.lessonList.length);

            setLessonList(lessonlist);
    }


    function resetAssignmentList(){
        let key = schoolClass.assignmentList.length.toString() + 'assignmentkey';

        let list = <AssignmentList key={key} schoolClass={schoolClass} />
        

            setAssignmentList(list);
    }

    function getGenderData(){

        console.log('getting gender data')
        interface GenderData{
            name: string,
            value: number;
        }
        
        let data1: GenderData = {name:'Male', value: schoolClass.maleStudents}
        let data2: GenderData = {name:'Female', value: schoolClass.femaleStudents}
        let data: GenderData[] = [data1, data2];

        let genderJSX = <GenderPieChart data={data}/>;
        setGenderChart([genderJSX]);
    
    }

    return(
        <div>
            <div className="row">
            <h3>Class Information</h3>
            <div className="col-10-sm">this will quick display information about the selected lesson <br/>
            
                <div className="inputBox container">
                <div className="col-sm">
                <div className="inputDiv"> <label className="form-label">Name:</label><input className='form-control' id='className' type={'text'} placeholder={schoolClass.name}></input><button onClick={()=> editPressed('Name')} className="btn btn-primary btn-sm">Edit</button></div> 

              <div className="inputDiv"> <label className="form-label">Type:</label><input className='form-control' id='classType' type={'text'} placeholder={schoolClass.type}></input><button onClick={()=> editPressed('Type')} className="btn btn-primary btn-sm">Edit</button></div> 
              <div className="inputDiv"> <label className="form-label">Start:</label><input className='form-control' id='StartDate' type={'date'} placeholder={schoolClass.type}></input><button onClick={()=> editPressed('StartDate')} className="btn btn-primary btn-sm">Edit</button></div> 
              </div>
              

              <div className="col-sm">
              <div className="inputDiv"> <label className="form-label">End:</label><input className='form-control' id='EndDate' type={'date'} placeholder={schoolClass.type}></input><button onClick={()=> editPressed('EndDate')} className="btn btn-primary btn-sm">Edit</button></div> 
              <div className="inputDiv">
                <label className="form-label">Add Students</label>
                <select className="form-select" id='selectStudent'>
                    {optionArr}

                </select>
                <button className="btn btn-primary btn-sm" onClick={()=>addStudentButton()}>Add Student</button>
                </div>
              </div>
                
                </div>
            </div>
        </div>

   
            <div className="row">
            <div  className="col">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Attendance
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">

                            this section will include a table with student names on the y axis, lesson nums on the x axis. There will be checkboxs showing if the student attended the class or not.

                            {attendanceChart}


                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Grades
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">

                        this section will include a table with student names on the y axis, assignments on the x axis. The grade will be shown for each student for each assignment.
                        {assignmentTable}

                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Lessons
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                                <div >The list of lessons will go here</div>
                                <div >this will quick display information about the selected lesson.
                                    clicking on the lesson name should open the lesson manager in a modal. 

                                    
                                </div>
                                {lessonList}
                                <button className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#studentModal">New Lesson</button>

                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Assignments
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">

                            <div >The list of assignments will go here</div>
                            <div >this will quick display information about the selected asssignment
                            clicking on the assignment name should open the assignment manager in a modal.

                            {assignmentList}

                            <button className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#assignmentModal">New Assignment</button>


                        </div>
                        </div>
                    </div>
                   
                </div> 

                <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Class Data and Charts
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">

                        
                            <div >
                                <h4>Gender Ratio</h4>
                              {genderChart}

                            </div>
                        </div>
                    </div>
                   
                </div> 

          
            </div>    
                          
            </div>
        <div className="row">
         
        </div>
        <div className="row">
        
            </div>
        </div>


        <div className="modal fade" id="studentModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Lesson</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    
                        <div className="mb-3">
                            <label  className="form-label" >Name</label>
                            <input type="text" className="form-control" id="inputName" aria-describedby="LessonName"/>
                            
                        </div>
                        <div className="mb-3">
                            <label  className="form-label" id='inputDate'>Date</label>
                            <input type="date" className="form-control" id="inputLessonDate" aria-describedby="inputdate"/>
                            
                        </div>

                        <div className="mb-3">
                            <label  className="form-label">Lesson Plan</label>
                            <textarea className="form-control"  id='inputPlan' aria-describedby="inputplan"/>
                            
                        </div>
                    
                    
                    
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=> newLesson()}>Create Lesson</button>
                        </div>
                </div>



                </div>
            </div>




            
        <div className="modal fade" id="assignmentModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Assignment</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    
                        <div className="mb-3">
                            <label  className="form-label" >Name</label>
                            <input type="text" className="form-control" id="inputAssignmentName" aria-describedby="LessonName"/>
                            
                        </div>
                        <div className="mb-3">
                            <label  className="form-label" id='inputDate'>Date</label>
                            <input type="date" className="form-control" id="inputAssignmentDate" aria-describedby="inputdate"/>
                            
                        </div>

                        
                    
                    
                    
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=> newAssignment()}>Create Assignment</button>
                        </div>
                </div>



                </div>
            </div>



        
        </div>
    )
}

export default ClassManager;