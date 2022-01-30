import Student from "../classes/Student";

function StudentPage(props: any){

    let student: Student = props.student;

    return(
        <div>
            {student.name}
            {student.age}
            {student.classes};
        </div>
    )
}

export default StudentPage;