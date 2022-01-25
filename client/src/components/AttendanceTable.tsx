import { useEffect, useState } from "react";
import { JsxEmit } from "typescript";
import SchoolClass from "../classes/SchoolClass";


function AttendanceTable(props: any){
    let schoolClass: SchoolClass = props.schoolClass;
    let lessonlength = schoolClass.lessonList.length;
    let thArray: JSX.Element[] = [];
    const [headArray, setHeadArray] = useState<JSX.Element[]>();

    useEffect(()=>{
        console.log('attendance table created')
        console.log('lesson length ' + lessonlength);
        for (let i = 0; i < lessonlength; i++){
            let newJSX: JSX.Element = <th>{i} {schoolClass.lessonList[i].date}</th>
            console.log(schoolClass.lessonList[i].date);
            thArray.push(newJSX);
        }
        setHeadArray(thArray);
    },
    [])

    

    return(
        <div>
            <table>
                <tbody>
                <tr><th>Name</th>{headArray}</tr>
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;