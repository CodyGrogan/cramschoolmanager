import { useEffect, useState } from "react";
import SchoolClass from "../classes/SchoolClass";
import LessonListItem from "./LessonListItem";


function LessonList(props: any){

    let schoolClass: SchoolClass = props.schoolClass;
    const [tableItems, setTableItems] = useState<JSX.Element[]>();
    
    useEffect(()=>{

        let jsxarr = [];
    for (let i = 0; i < schoolClass.lessonList.length; i++ ){
        let newjsx = <LessonListItem date ={schoolClass.lessonList[i].date} name= {schoolClass.lessonList[i].name} />;
        jsxarr.push(newjsx);
    }

    setTableItems(jsxarr);

    },
    [schoolClass])


    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <th>Date</th>
                    <th>Name</th>
                </thead>
                <tbody>
                {tableItems}
                </tbody>
            </table>


        </div>
    )
}

export default LessonList;