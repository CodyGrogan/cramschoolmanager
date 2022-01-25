import { useEffect, useState } from "react";
import { JsxEmit } from "typescript";
import Lesson from "../classes/Lesson";


function AttendanceTableStudent(props: any){

    const [checkboxArray, setCheckboxArray] = useState<JSX.Element[]>();
    let attendanceArray: JSX.Element[] = [];
    let lessonList: Lesson[] = props.schoolClass.lessonList;

    useEffect(()=>{
        for (let i = 0; i < props.lessonlength; i++){

            if (lessonList[i].attendance.get(props.name)===true){
                let newjsx = <td> <input type={'checkbox'} checked/></td>
                attendanceArray.push(newjsx);
            }
            else{
                let newjsx = <td> <input type={'checkbox'} /></td>
                attendanceArray.push(newjsx);

            }


        }
        setCheckboxArray(attendanceArray);


    },
    [])

    return(
        <tr>
            <td>{props.name}</td>
            {checkboxArray}

        </tr>
    )
}

export default AttendanceTableStudent;