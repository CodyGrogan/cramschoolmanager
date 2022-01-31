import Student from "../classes/Student";
import { Link } from "react-router-dom";

function StudentTableItem(props: any){
   
   
    let student: Student = props.student;
    let linkstring = `/studentpage/${student.studentID}`
 
    return(
        <tr>
            <td ><Link to={linkstring} >{student.name}</Link></td>
            <td>{student.phone}</td>
            <td>{student.parent1}</td> 
            <td>{student.parent2}</td>
            <td>{student.email}</td>
        </tr>
    )
}

export default StudentTableItem;