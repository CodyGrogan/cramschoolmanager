import Navbar from "./Navbar";
import {useParams} from 'react-router-dom';
import School from "../classes/School";
import { useEffect, useState } from "react";
import Lesson from "../classes/Lesson";
import Assignment from "../classes/Assignment";

function AssignmentPage(props: any){

    let { id, classname } = useParams();
    const [assignment, setAssignment] = useState<Assignment>();
    const [assignmentJSX, setAssignmentJSX] = useState<JSX.Element[]>([]);

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

        let newJSX = <div>
            {assignment?.name};
            {assignment?.duedate};
            
        </div>;

        setAssignmentJSX([newJSX]);

    }

    return(
        <div>
            <Navbar setSchool={props.setSchool}/>
           
            Assignment Page
          <br/>

            {assignmentJSX}
         
        </div>
    );
}

export default AssignmentPage;