import SchoolClass from "../classes/SchoolClass";
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
    const [chart, setChart] = useState<JSX.Element[]>([]);
    const [studentName, setStudentName] = useState<string>('unknown');
    const [optionArr, setOptionArr] = useState<JSX.Element[]>([]);

    function setChartData(){
  
      let gradeArr: Grade[] = [];
    
      if (schoolClass.assignmentList.length > 0 && schoolClass.studentList.length > 0){
        setStudentName(schoolClass.studentList[studentIndex]);
    
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

        setClassGradeArr(gradeArr)
       
      }

      else{
        setClassGradeArr(defGradeArr);
      }
    
    }

    useEffect(()=>{
      setChartData();
      populateStudentNames();


    },
    [props.class])

    useEffect(()=>{
      
      
      let chartJSX = <StudentGradesChart  data={classGradeArr} studentName={schoolClass.studentList[studentIndex]}/>;
      populateStudentNames();
      
      setChart([chartJSX]);

    },
    [classGradeArr, studentIndex]);

    

    function pickStudent(){
      //pick student for chart
      let studentSelect = ((document.getElementById('selectStudentChart') as HTMLInputElement))
      let studentName = studentSelect.value;
      let index = schoolClass.studentList.indexOf(studentName);
      setStudentIndex(index);
      setChartData();

    }

    function populateStudentNames(){
      let jsxarr: JSX.Element[] = [];

      for (let i = 0; i < schoolClass.studentList.length; i++){
          let newoption = <option>{schoolClass.studentList[i]}</option>
          jsxarr.push(newoption);
      }
      setOptionArr(jsxarr);

  }

    return(
        <div className="container">
          <div className="row">
            <div className="col-sm-4">

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

            </div>

            
          <div className="col-sm-8">

          <div className="inputDiv">
                <label className="form-label">Average Grade Chart</label>
                <select className="form-select" id='selectStudentChart'>
                    {optionArr}

                </select>
                <button className="btn btn-primary btn-sm" onClick={()=>pickStudent()}>Show on Chart</button>
                </div>
            
            {chart}
          </div>


          </div>


 
        
    
          
          </div>
    )
}

export default ClassSummary;