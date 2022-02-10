import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Lesson from '../classes/Lesson';
import School from '../classes/School';
import Navbar from "./Navbar";

//this will use the parameters to query the database

function LessonPage(props: any){
    let { id, classname } = useParams();
  
    let defLesson = new Lesson('unknown', 0, ['unknown'], 'unknown', 'unknown', 'no plan');
    
    const [lesson, setLesson] = useState<Lesson>(defLesson);

    useEffect(()=>{

        let school: School = props.school;
        let allLessonsArr = [];
        let classList = school.classList;
        let index = classList.findIndex(obj => obj.name === classname);
        if (index >=0){
            let lessonList = classList[index].lessonList;
            let lessonIndex = lessonList.findIndex(obj => obj.lessonid === id);
            setLesson(lessonList[lessonIndex]);


        }

     

    },
    []);

    useEffect(()=>{

        let school: School = props.school;
        let allLessonsArr = [];
        let classList = school.classList;
        let index = classList.findIndex(obj => obj.name === classname);
        if (index >=0){
            let lessonList = classList[index].lessonList;
            let lessonIndex = lessonList.findIndex(obj => obj.lessonid === id);
            setLesson(lessonList[lessonIndex]);


        }

     

    },
    [props.school]);



    return(
        <div>
            <Navbar setSchool = {props.setSchool}/>

            <div className="card">
                <div className="card-header">
                <h2> {lesson.name} </h2>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{lesson.date}</h5>
                    
                    {lesson.lessonplan}



                    
                </div>
            </div>


        </div>
    )
}

export default LessonPage;