import { useEffect } from "react";
import { JsxEmit } from "typescript";


function AttendanceTableStudent(props: any){

    let attendanceArry: JSX.Element[] = [];

    useEffect(()=>{
        for (let i = 0; i < props.lessonlength; i++){

        }
    },
    [])

    return(
        <tr>
            <td>{props.name}</td>

        </tr>
    )
}

export default AttendanceTableStudent;