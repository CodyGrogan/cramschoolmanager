import { useEffect, useState } from "react";
import School from "../classes/School";
import Student from "../classes/Student";
import Navbar from "./Navbar";
import StudentTableItem from "./StudentTableItem";
import {getAuth} from 'firebase/auth';
import EditToast from "./EditToast";

function StudentManager(props: any){
    let school: School = props.school;
    let studentList: Student[] = [];
    studentList = school.studentList;
    let jsxarr: JSX.Element[] = [];
    const [tableData, setTableData] = useState<JSX.Element[]>();
    const [hideToast, setHideToast] = useState<boolean>(false);



   function buildStudentTable(){
    jsxarr=[];

    for(let i = 0; i<studentList.length; i++){
        let newjsx = <StudentTableItem student = {studentList[i]} /> ;
        jsxarr.push(newjsx);

    }
    setTableData(jsxarr);

   }

    useEffect(()=>{
     
        buildStudentTable();
    },
    [studentList]);

    useEffect(()=>{
        if (hideToast == true){
        setHideToast(false);
       
        }
    },
    [hideToast]);

    async function addStudent(newstudent: Student) {
        console.log('adding student to database');
        let jsonstring = JSON.stringify(newstudent);
        let postpath: string = '/createstudent';

        fetch(postpath, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: jsonstring,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    function createStudent(){
        console.log('create student button clicked')

       
        let name:string = (document.getElementById('inputName') as HTMLInputElement).value ;
        let agestring:string = (document.getElementById('inputAge') as HTMLInputElement).value;
        let age:number = parseInt(agestring);
        let phone:string = (document.getElementById('inputPhone') as HTMLInputElement).value ;
        let parent1:string = (document.getElementById('inputParent1') as HTMLInputElement).value ;
        let parent2:string = (document.getElementById('inputParent2') as HTMLInputElement).value ;
        let email:string = (document.getElementById('inputEmail') as HTMLInputElement).value ;
        let gender:string = (document.getElementById('genderSelect') as HTMLInputElement).value ;

        if (isNaN(age)){
            age = 0;
            console.log(age)
            
        }

        if (name != null && name != ''){
            console.log('creating student')

            console.log(age)

            school.addStudent(name, age, parent1, parent2, phone, email,gender);
            let index = school.studentList.length -1;
            buildStudentTable();
            addStudent(school.studentList[index]);
            editSchool(school);
        }

    }

    async function editSchool(school: School){

        let user = getAuth().currentUser;
        if (user){
        console.log('adding school info to database');
        let jsonstring = JSON.stringify(school);
        let postpath: string = '/editschool';

        fetch(postpath, {
            method: 'PUT', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: jsonstring,
        })
        .then(response => {
            console.log(response)
            if (response.ok === true){
                
                showToast();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
        }
        else{
            console.log('user not signed in, cannot edit')
        }

    }

    function showToast(){
        let toast = document.getElementById('editToast') as HTMLElement;
        toast.hidden = false;
        setHideToast(true);


    }
    
    return(
        <div>
             <Navbar setSchool={props.setSchool}/>
  

        <div className="school-section">
           <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Parent1</th>
                        <th>Parent2</th>
                        <th>email</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>

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
                        <label  className="form-label" >Name</label>
                        <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Age</label>
                        <input type="number" className="form-control" id="inputAge" aria-describedby="emailHelp"/>
                        
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">Gender</label>
                        <select id='genderSelect' className="form-select">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">Phone#</label>
                        <input type="text" className="form-control"  id='inputPhone' aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label" >Parent 1</label>
                        <input type="text" className="form-control" id='inputParent1' aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label" >Parent 2</label>
                        <input type="text" className="form-control" id='inputParent2' aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label" >Email address</label>
                        <input type="email" className="form-control" id='inputEmail' aria-describedby="emailHelp"/>
                        
                    </div>
                       
                   
                
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=> createStudent()}>Add Student</button>
                </div>
                </div>
            </div>
            </div>

        </div>
        <EditToast hideToast={hideToast}/>
        </div>
    )
}

export default StudentManager;