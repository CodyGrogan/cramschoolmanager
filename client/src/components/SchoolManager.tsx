import {useState, useEffect} from 'react';
import School from '../classes/School';
import ListItem from './ListItem';
import ClassSummary from './ClassSummary';
import ClassManager from './ClassManager';
import SchoolClass from '../classes/SchoolClass';
import Navbar from './Navbar';


function SchoolManager(props: any){
    const [classList, setClassList] = useState<JSX.Element[]>();
    const [selectedClass, setSelectedClass] = useState<any>(0);
    let schoolInfo: School = props.school;
    const [summary, setSummary] = useState<JSX.Element[]>();
    const [manager, setManager] = useState<JSX.Element[]>();
    const [editTrue, setEditTrue] = useState<boolean>(false);
    const [currentClass, setCurrentClass] = useState<SchoolClass>();

    async function editSchool(school: School){
        console.log('adding student to database');
        let jsonstring = JSON.stringify(school);
        let postpath: string = '/editschool';

        fetch(postpath, {
            method: 'PUT', 
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

    useEffect(()=>{
        console.log('use effect fired')
        //schoolInfo = props.school;
        let itemArr = [];
        for (let i = 0; i < schoolInfo.classList.length; i++){
            let jsx = <ListItem name ={schoolInfo.classList[i].name} index={i} setSelectedClass={setSelectedClass} />
            itemArr.push(jsx);

        }
        setClassList(itemArr);

        if(schoolInfo.classList[0] !== undefined){
       let newjsx = <ClassSummary class = {schoolInfo.classList[0]} />
       let newmanager = <ClassManager class = {schoolInfo.classList[selectedClass]} setEditTrue = {setEditTrue} schoolInfo = {schoolInfo} />
       setSummary([newjsx]);
       setManager([newmanager]);

        }
    },
    [props.school]);

    useEffect(()=>{
        if(schoolInfo.classList[0] !== undefined){
        let newjsx = <ClassSummary class = {schoolInfo.classList[selectedClass]} />
        let newmanager = <ClassManager class = {schoolInfo.classList[selectedClass] } setEditTrue = {setEditTrue} schoolInfo = {schoolInfo}/>
       setSummary([newjsx]);
       setManager([newmanager]);
        }

    },
    [selectedClass, schoolInfo]);

    useEffect(()=>{   //this should fire whenever any change to data takes place


        editSchool(schoolInfo);
        if(schoolInfo.classList[0] !== undefined){
            let newjsx = <ClassSummary class = {schoolInfo.classList[selectedClass]} />
            let newmanager = <ClassManager class = {schoolInfo.classList[selectedClass]} setEditTrue = {setEditTrue} schoolInfo = {schoolInfo}/>
           setSummary([newjsx]);
           setManager([newmanager]);
        }
        setEditTrue(false);

    },
    [editTrue]);

    function newClass(){
        let name:string = (document.getElementById('inputClassName') as HTMLInputElement).value ;

        schoolInfo.createClass(name);

        let itemArr = [];
        for (let i = 0; i < schoolInfo.classList.length; i++){
            let jsx = <ListItem name ={schoolInfo.classList[i].name} index={i} setSelectedClass={setSelectedClass} />
            itemArr.push(jsx);

        }
        setClassList(itemArr);
        setEditTrue(true);
    }

    return(
        <div>
            <Navbar setSchool = {props.setSchool}/>
            class manager
            <div className="row school-section">
                <div className="col-sm-2 list-box"><ul>
                    {classList}
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#classModal">New Class</button>
                    </ul></div>
                <div className="col-sm-10">
                    
                    {summary} <br/>
                    {manager}
                
                </div>
            </div>


            <div className="modal fade" id="classModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Class</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                   
                    <div className="mb-3">
                        <label  className="form-label" >Name</label>
                        <input type="text" className="form-control" id="inputClassName" aria-describedby="emailHelp"/>
                        
                    </div>
                   
                       
                   
                
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=> newClass()}>Add Student</button>
                </div>
                </div>
            </div>
            </div>


        </div>
    )
}

export default SchoolManager;