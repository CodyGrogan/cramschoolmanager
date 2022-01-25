import Student from "../classes/Student";

function StudentTableItem(props: any){
    let student: Student = props.student;
    return(
        <tr>
            <td>{student.name}</td>
            <td>{student.phone}</td>
            <td>{student.parent1}</td>
            <td>{student.parent2}</td>
            <td>{student.email}</td>
        </tr>
    )
}

export default StudentTableItem;