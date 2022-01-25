import { useEffect, useState } from "react";
import { JsxEmit } from "typescript";
import Lesson from "../classes/Lesson";


function AttendanceTableStudent(props: any){

    const [checkboxArray, setCheckboxArray] = useState<JSX.Element[]>();
    let attendanceArray: JSX.Element[] = [];
    let lessonList: Lesson[] = props.schoolClass.lessonList;

    function checkBox(name: string, index: number){
        console.log('checkbox clicked')

        if (lessonList[index].attendance.get(name) === true){
            lessonList[index].attendance.set(name, false);
         
            
        
            
        }
        else{
            lessonList[index].attendance.set(name, true);

        }
       

    }

    useEffect(()=>{
        for (let i = 0; i < props.lessonlength; i++){

            if (lessonList[i].attendance.get(props.name)===true){
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