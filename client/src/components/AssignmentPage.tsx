import Navbar from "./Navbar";
import {useParams} from 'react-router-dom';
import School from "../classes/School";
import { useEffect, useState } from "react";
import Lesson from "../classes/Lesson";
import Assignment from "../classes/Assignment";
import AssignmentTableStudent from "./AssignmentTableStudent";
import SchoolClass from "../classes/SchoolClass";
import GradeBarChart from "./GradeBarChart";

function AssignmentPage(props: any){

    
interface Grade {
    name: string;
    value: number;
  
  }
    let defGrade: Grade = {name:'unknown', value: 0};

    let defAssignmnet = new Assignment('Unknown', 'Unknown', ['unknown']);
    let { id, classname } = useParams();
    const [assignment, setAssignment] = useState<Assignment>(defAssignmnet);
    const [assignmentJSX, setAssignmentJSX] = useState<JSX.Element[]>([]);
    const [gradeChart, setGradeChart] = useState<JSX.Element[]>([]);

    let school: School = props.school;

    useEffect(()=>{
        let school: School = props.school;
        let index = school.classList.findIndex(obj => obj.name == classname);
        if (index >=0){
        let lessonIndex = school.classList[index].assignmentList.findIndex(obj => obj.id == id);
            if (lessonIndex >= 0){
                setAssignment(school.classList[index].assignmentList[lessonIndex]);
            }
        }
    },
    []);

    useEffect(()=>{
        let school: School = props.school;
     
        let index = school.classList.findIndex(obj => obj.name == classname);
        if (index >=0){
        let lessonIndex = school.classList[index].assignmentList.findIndex(obj => obj.id == id);
            if (lessonIndex >= 0){
                setAssignment(school.classList[index].assignmentList[lessonIndex]);
            }
        }
    },
    [props.school]);
    
    useEffect(()=>{
        buildJSX();
    },
    [assignment])

    function buildJSX(){

        let newJSX = <div className="card">
            <div className="card-header">
            {assignment?.name}
            </div>
            <div className="card-body">
            {assignment?.duedate}
            </div>
            
        </div>;

        if (assignment.grades.length > 0){
        let gradeData: Grade[] = assignment.grades;
        gradeData.sort(function (a: any, b: any) {
            return b.value - a.value;
          });
        let chart =    <GradeBarChart data={gradeData}/>
        setGradeChart([chart]);

        }

        setAssignmentJSX([newJSX]);

    }

  

    return(
        <div>
            <Navbar setSchool={props.setSchool}/>
           <div className="container">
         
          <br/>

            {assignmentJSX}

            <div className="card">
            <div className="card-header">
            Grades
            </div>
            <div className="card-body">
            {gradeChart}
            </div>
            
        </div>

        
            </div>
        </div>
    );
}

export default AssignmentPage;