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
        <div>
             <Navbar/>
             Student Manager

        <div className="school-section">
           
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

            <div className="centerButton">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#studentModal">Add Student</button>
            </div>

            
      
            <div className="modal fade" id="studentModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Student</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                   
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">Phone#</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Parent 1</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Parent 2</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                       
                   
                
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Add Student</button>
                </div>
                </div>
            </div>
            </div>

        </div>
        </div>
    )
}

export default StudentManager;