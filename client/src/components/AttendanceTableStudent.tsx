import { useEffect, useState } from "react";
import { JsxEmit } from "typescript";
import Lesson from "../classes/Lesson";


function AttendanceTableStudent(props: any){

    const [checkboxArray, setCheckboxArray] = useState<JSX.Element[]>();
    let attendanceArray: JSX.Element[] = [];
    let lessonList: Lesson[] = props.schoolClass.lessonList;

    function checkBox(name: string, index: number){
        console.log('checkbox clicked');

        let attenArr = lessonList[index].attendance;
        let indexOfName = attenArr.findIndex(obj => obj.name == props.name);
        
        if (lessonList[index].attendance[indexOfName].value === true){
            lessonList[index].attendance[indexOfName].value = false;
         
            
        
            
        }
        else{
            lessonList[index].attendance[indexOfName].value = true;

        }

        props.setEditTrue(true);
       

    }

    useEffect(()=>{
        for (let i = 0; i < props.lessonlength; i++){

            let attenArr = lessonList[i].attendance;
            
            let indexOfName = attenArr.findIndex(obj => obj.name == props.name);
            

            if (lessonList[i].attendance[indexOfName].value === true){
                let newjsx = <td> <input id={i+'lesson'+props.name} type={'checkbox'} onClick={()=>checkBox(props.name, i)} defaultChecked/></td>
                attendanceArray.push(newjsx);
            }
            else{
                let newjsx = <td> <input id={i+'lesson'+props.name} type={'checkbox'} onClick={()=>checkBox(props.name, i)}/></td>
                attendanceArray.push(newjsx);

            }

           


        }
        setCheckboxArray(attendanceArray);


    },
    [props.lessonList])

    return(
        <tr>
            <td>{props.name}</td>
            {checkboxArray}

        </tr>
    )
}

export default AttendanceTableStudent;