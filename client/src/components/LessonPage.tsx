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
            if (lessonIndex >=0){
            setLesson(lessonList[lessonIndex]);
            }


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
            if (lessonIndex >=0){
                setLesson(lessonList[lessonIndex]);
                }


        }

     

    },
    [props.school]);



    return(
        <div>
            <Navbar setSchool = {props.setSchool}/>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>                        
                        <div className="card">
                            <div className="card-header">
                            <h2> {lesson.name} </h2>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{lesson.date}</h5>
                                
                                {lesson.lessonplan}

                                <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Edit Lesson Information
                            </button>
                            </h2>

                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">

                                <div className="inputBox container">
                                    <div className="col-sm">
                                        <div className="inputDiv"> <label className="form-label">Date:</label><input className='form-control' id='dateInput' type={'date'}></input></div> 
                                        <div className="inputDiv"> <label className="form-label">Parent 1:</label><textarea className='form-control' id='lessonPlanInput'placeholder={'Lesson Plan here'}></textarea></div> 
                                            <button className="btn btn-primary">Edit</button>
                                            
                                            </div> 



                                    </div>
                                    
                                </div>

                            </div>
                            </div>
                        </div>  
                    </div> 
  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        

    )
}

export default LessonPage;