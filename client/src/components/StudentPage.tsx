import { useEffect, useState } from "react";
import Student from "../classes/Student";
import {useParams} from 'react-router-dom';
import Navbar from "./Navbar";
import School from "../classes/School";


//when the backend is implemented, use the student name and school name to check database for info


function StudentPage(props: any){
    let defstudent: Student = new Student('unknown', 0, 'unknown','unknown','unknown','unknown', 'unknownid', 'unknown', 'unknown');
    const [student, setStudent] = useState<Student>(defstudent);

    let { id } = useParams();

    useEffect(()=>{

        let school: School = props.school;
        let studentList = school.studentList;
        let index = studentList.findIndex(obj => obj.studentID === id);
        if (index >= 0){
        setStudent(studentList[index]);
        }

    },
    [])

    useEffect(()=>{

        let school: School = props.school;
        let studentList = school.studentList;
        let index = studentList.findIndex(obj => obj.studentID === id);
        if (index >= 0){
        setStudent(studentList[index]);
        }

    },
    [props.school])
    

    return(
        <div>
            <Navbar setSchool = {props.setSchool}/>
           
            {student.name}
            {student.age}
            {student.parent1}
            {student.parent2}


            {student.classes}

        </div>
    )
}

export default StudentPage;