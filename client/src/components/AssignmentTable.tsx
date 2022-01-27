import SchoolClass from "../classes/SchoolClass";
import { useState, useEffect } from "react";
import AttendanceTableHead from "./AttendanceTableHead";
import LessonTableStudent from "./AssignmentTableStudent";
import AssignmentTableHead from "./AssignmentTableHead";


function AssignmentTable(props: any){


    let schoolClass: SchoolClass = props.schoolClass;
    let assignmentLength = schoolClass.assignmentList.length;
    let thArray: JSX.Element[] = [];
    let studentArr: JSX.Element[] = [];

    const [headArray, setHeadArray] = useState<JSX.Element[]>();
    const [studentArray, setStudentArray] = useState<JSX.Element[]>();


    useEffect(()=>{

        console.log('attendance table created')
        console.log('assignment length ' + assignmentLength);
        for (let i = 0; i < assignmentLength; i++){
            let date = new Date();
        let datestring = date.toISOString();
            let key = 'thassign' + datestring + i;
            let newJSX: JSX.Element = <AssignmentTableHead name={schoolClass.assignmentList[i].name}/>
            console.log(schoolClass.assignmentList[i].duedate);
            thArray.push(newJSX);
        }

        for (let i = 0; i < schoolClass.studentList.length; i++){
           let newjsx = <LessonTableStudent name = {schoolClass.studentList[i]} assignmentLength={assignmentLength} schoolClass={schoolClass} />
           studentArr.push(newjsx);
        }



        setHeadArray(thArray);
        setStudentArray(studentArr);
    },
    [])
    
    return(
        <div>
            
            <table className="table table-striped">
               
               <thead>
               <tr><th>Name</th>{headArray}</tr>
               </thead>
               <tbody>

               {studentArray}
               </tbody>
           </table>


        </div>
    )
}

export default AssignmentTable;