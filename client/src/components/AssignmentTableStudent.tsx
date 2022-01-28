import { useState, useEffect } from "react";
import Assignment from "../classes/Assignment";

function AssignmentTableStudent(props: any){

    const [gradeBoxArray, setGradeBoxArray] = useState<JSX.Element[]>();
    let gradeArray: JSX.Element[] = [];
    let assignmentList: Assignment[] = props.schoolClass.assignmentList;

    function enterKeyPressed(e: any){
     
    
        if (e.key === 'Enter'){
            console.log('enter pressed')
            let target = e.target;
            let index = target.getAttribute("data-index");
            let name = target.getAttribute("data-name");
            let value = target.value;
            console.log(value);
            
            if (value != null && value >= 0 && value <= 100){
            assignmentList[index].grades.set(name, value);
            
            }
            else{
                alert('invalid value');
            }
        }
    }

    function buttonPressed(e: any){
        console.log('button pressed')
            let target = e.target;
            let index = target.getAttribute("data-index");
            let name = target.getAttribute("data-name");
            let inputid = target.getAttribute("data-inputid");
            let input = (document.getElementById(inputid) as HTMLInputElement);
            let value = parseInt(input.value);
            console.log(value);
            
            if (value != null && value >= 0 && value <= 100){
            assignmentList[index].grades.set(name, value);
            
            }
            else{
                alert('invalid value');
            }

    }

   

    useEffect(()=>{
        for (let i = 0; i < assignmentList.length; i++){

                let thisgrade = assignmentList[i].grades.get(props.name)?.toString();
          
                let newjsx = <td> <input onKeyDown={enterKeyPressed} data-name={props.name} data-index={i} id={i+'assignment'+props.name+"end"+assignmentList[i].name} type={'number'} min={0} max={100}  placeholder={thisgrade}/>
                
                <button className="btn-sm btn-primary" onClick={buttonPressed} data-name={props.name} data-inputid={i+'assignment'+props.name+"end"+assignmentList[i].name} data-index={i}>Submit</button>
                </td>
                gradeArray.push(newjsx);
         


        }
        setGradeBoxArray(gradeArray);


    },
    [props.assignmentList])

    return(
        <tr>
            <td>{props.name}</td>
            {gradeBoxArray}

        </tr>
    )
}

export default AssignmentTableStudent;