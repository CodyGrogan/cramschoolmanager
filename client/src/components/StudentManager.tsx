import { useEffect, useState } from "react";
import Student from "../classes/Student";
import Navbar from "./Navbar";
import StudentTableItem from "./StudentTableItem";

function StudentManager(props: any){
    let school = props.school;
    let studentList: Student[] = [];
    studentList = school.studentList;
    let jsxarr: JSX.Element[] = [];
    const [tableData, setTableData] = useState<JSX.Element[]>();

    useEffect(()=>{

        for(let i = 0; i<studentList.length; i++){
            let newjsx = <StudentTableItem student = {studentList[i]} /> ;
            jsxarr.push(newjsx);

        }
        setTableData(jsxarr);

    },
    [props.school])
    
    return(
        <div className="school-section">
            <Navbar/>
            Student Manager
            <table className="table table-stripped">
            <thead>
                <th>Name</th>
                <th>Phone</th>
                <th>Parent1</th>
                <th>Parent2</th>
                <th>email</th>


            </thead>
            <tbody>
            {tableData}
            </tbody>
            </table>

            <button className="btn btn-primary">Add Student</button>

        </div>
    )
}

export default StudentManager;