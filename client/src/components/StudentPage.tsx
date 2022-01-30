import { useEffect, useState } from "react";
import Student from "../classes/Student";
import {useParams} from 'react-router-dom';


//when the backend is implemented, use the student name and school name to check database for info


function StudentPage(props: any){
    let defstudent: Student = new Student('unknown', 0, 'unknown','unknown','unknown','unknown');
    console.log(defstudent);
    const [student, setStudent] = useState<Student>(defstudent);

    let { id } = useParams();

    

    return(
        <div>
            {id}
       
        </div>
    )
}

export default StudentPage;