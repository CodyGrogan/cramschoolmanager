import { useEffect, useState } from "react";
import { JsxEmit } from "typescript";
import SchoolClass from "../classes/SchoolClass";
import AttendanceTableHead from "./AttendanceTableHead";
import AttendanceTableStudent from "./AttendanceTableStudent";


function AttendanceTable(props: any){
    let schoolClass: SchoolClass = props.schoolClass;
    let lessonlength = schoolClass.lessonList.length;
    let thArray: JSX.Element[] = [];
    let studentArr: JSX.Element[] = [];

    const [headArray, setHeadArray] = useState<JSX.Element[]>();
    const [studentArray, setStudentArray] = useState<JSX.Element[]>();

    useEffect(()=>{
        
        console.log('attendance table created')
        console.log('lesson length ' + lessonlength);
        for (let i = 0; i < lessonlength; i++){
            let date = new Date();
        let datestring = date.toISOString();
            let key = 'th' + datestring + i;
            let newJSX: JSX.Element = <AttendanceTableHead date={schoolClass.lessonList[i].date}/>
            console.log(schoolClass.lessonList[i].date);
            thArray.push(newJSX);
        }

        for (let i = 0; i < schoolClass.studentList.length; i++){
            let newjsx = <AttendanceTableStudent name = {schoolClass.studentList[i]} lessonlength={lessonlength} schoolClass={schoolClass} />
            studentArr.push(newjsx);
        }



        setHeadArray(thArray);
        setStudentArray(studentArr);
    },
    [])

    

    return(
        <div>
            <table className="table">
                <tbody>
                <tr><th>Name</th>{headArray}</tr>
                {studentArray}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;