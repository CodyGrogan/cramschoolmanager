import {useState, useEffect} from 'react';
import School from '../classes/School';
import ListItem from './ListItem';
import ClassSummary from './ClassSummary';
import ClassManager from './ClassManager';
import SchoolClass from '../classes/SchoolClass';
import Navbar from './Navbar';


function SchoolManager(props: any){
    let defArr = [];
    const [classList, setClassList] = useState<JSX.Element[]>();
    const [selectedClass, setSelectedClass] = useState<any>(0);
    let schoolInfo: School = props.school;
    let hello: string = 'hello';
    const [summary, setSummary] = useState<JSX.Element[]>();
    const [manager, setManager] = useState<JSX.Element[]>();
    const [currentClass, setCurrentClass] = useState<SchoolClass>();

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
       let newmanager = <ClassManager class = {schoolInfo.classList[selectedClass]} />
       setSummary([newjsx]);
       setManager([newmanager]);

        }
    },
    [props.school]);

    useEffect(()=>{
        if(schoolInfo.classList[0] !== undefined){
        let newjsx = <ClassSummary class = {schoolInfo.classList[selectedClass]} />
        let newmanager = <ClassManager class = {schoolInfo.classList[selectedClass]} />
       setSummary([newjsx]);
       setManager([newmanager]);
        }

    },
    [selectedClass, schoolInfo])

    return(
        <div>
            <Navbar/>
            class manager
            <div className="row school-section">
                <div className="col-2 list-box"><ul>
                    {classList}
                    <button className='btn btn-primary'>New Class</button>
                    </ul></div>
                <div className="col-10">
                    
                    {summary} <br/>
                    {manager}
                
                </div>
            </div>



        </div>
    )
}

export default SchoolManager;