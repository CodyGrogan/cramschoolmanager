import {useState, useEffect} from 'react';
import School from '../classes/School';
import ListItem from './ListItem';
import ClassSummary from './ClassSummary';


function SchoolManager(props: any){
    let defArr = [];
    const [classList, setClassList] = useState<JSX.Element[]>();
    const [selectedClass, setSelectedClass] = useState<any>(0);
    let schoolInfo: School = props.school;
    let hello: string = 'hello';
    const [summary, setSummary] = useState<JSX.Element[]>();

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
       setSummary([newjsx]);
        }
    },
    [props.school]);

    useEffect(()=>{
        if(schoolInfo.classList[0] !== undefined){
        let newjsx = <ClassSummary class = {schoolInfo.classList[selectedClass]} />
       setSummary([newjsx]);
        }

    },
    [selectedClass, schoolInfo])

    return(
        <div>
            class manager
            <div className="row school-section">
                <div className="col-2 list-box"><ul>
                    {classList}
                    <button className='btn btn-primary'>New Class</button>
                    </ul></div>
                <div className="col-10">{summary}</div>
            </div>



        </div>
    )
}

export default SchoolManager;