import { useEffect, useState } from "react";
import SchoolClass from "../classes/SchoolClass";
import LessonListItem from "./LessonListItem";


function LessonList(props: any){

    let schoolClass: SchoolClass = props.schoolClass;
    const [tableItems, setTableItems] = useState<JSX.Element[]>();
    
    useEffect(()=>{

        let jsxarr = [];
    for (let i = 0; i < schoolClass.lessonList.length; i++ ){
        let newjsx = <LessonListItem date ={schoolClass.lessonList[i].date} name= {schoolClass.lessonList[i].name} lessonid= {schoolClass.lessonList[i].lessonid} className={schoolClass.name} />;
        jsxarr.push(newjsx);
    }

    setTableItems(jsxarr);

    },
    [schoolClass])


    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <th>Name</th>
                    <th>Date</th>
                   
                </thead>
                <tbody>
                {tableItems}
                </tbody>
            </table>


        </div>
    )
}

export default LessonList;