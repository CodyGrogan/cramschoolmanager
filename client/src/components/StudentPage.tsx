import { useEffect, useState } from "react";
import Student from "../classes/Student";
import {useParams} from 'react-router-dom';
import Navbar from "./Navbar";


//when the backend is implemented, use the student name and school name to check database for info


function StudentPage(props: any){
    let defstudent: Student = new Student('unknown', 0, 'unknown','unknown','unknown','unknown', 'unknownid');
    console.log(defstudent);
    const [student, setStudent] = useState<Student>(defstudent);

    let { id } = useParams();

    

    return(
        <div>
            <Navbar/>
            {id}
       
        </div>
    )
}

export default StudentPage;