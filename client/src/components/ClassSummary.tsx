import SchoolClass from "../classes/SchoolClass";

import TestChart from "./TestChart";
import StudentGradesChart from "./StudentGradesChart";
import {useState, useEffect} from 'react';

interface Grade {
  name: string;
  selectedStudentGrade: number;
  avgGrade: number;

}
let defGrade: Grade = {
  name: 'unknown',
  avgGrade: 0,
  selectedStudentGrade: 0

}
let defGradeArr: any = [defGrade];




function ClassSummary(props: any){
    let schoolClass: SchoolClass = props.class;

    const [studentIndex, setStudentIndex] = useState<number>(0);
    const [classGradeArr, setClassGradeArr] = useState<Grade[]>(defGradeArr);

    function setChartData(){
  
      let gradeArr: Grade[] = [];
    
      if (schoolClass.assignmentList.length > 0 && schoolClass.studentList.length > 0){
    
        for (let i = 0; i < schoolClass.assignmentList.length; i ++){
    
          let selectedStudentGrade = schoolClass.assignmentList[i].grades[studentIndex].value;
          let avgGrade: number = 0;
    
          for (let j = 0; j < schoolClass.assignmentList[i].grades.length; j++){
             avgGrade = avgGrade + schoolClass.assignmentList[i].grades[j].value;
          }
          avgGrade = avgGrade/ schoolClass.studentList.length;
    
          let newGrade: Grade = {
              name: schoolClass.assignmentList[i].name,
              selectedStudentGrade: selectedStudentGrade,
              avgGrade: avgGrade
          }
          gradeArr.push(newGrade);
    
        }

        setClassGradeArr(gradeArr);
      }
    
    }

    useEffect(()=>{
      setChartData();

    },
    [schoolClass])


    return(
        <div>
        <h2>{schoolClass.name}</h2>  
          
        <h3>{schoolClass.type}</h3>
          Total Students: {schoolClass.studentList.length}
        <br/>
        Teachers: {schoolClass.teacherList}
        <br/>
        Average Grade: 
        <br/>
        Start Date: {schoolClass.startDate}
        <br/>
        End Date:   {schoolClass.endDate}
        <br/>
        
    
      <StudentGradesChart  data={classGradeArr}/>
          
          </div>
    )
}

export default ClassSummary;