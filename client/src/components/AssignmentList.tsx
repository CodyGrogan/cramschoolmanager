import { useEffect, useState } from "react";
import SchoolClass from "../classes/SchoolClass";
import AssignmentListItem from "./AssignmentListItem";

function AssignmentList(props: any){

    const [tableItems, setTableItems] = useState<JSX.Element[]>();

    let schoolClass: SchoolClass = props.schoolClass;
    let assignmentArr = [];

    useEffect(()=>{
        assignmentArr = []
        for (let i = 0; i < schoolClass.assignmentList.length; i++){
            let newjsx = <AssignmentListItem name = {schoolClass.assignmentList[i].name} date = {schoolClass.assignmentList[i].duedate} schoolClass={schoolClass} />
            assignmentArr.push(newjsx);

        }
        setTableItems(assignmentArr);
    },
    [])

    return(
        <div className="table-responsive">
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

export default AssignmentList;