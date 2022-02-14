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
    
      if (schoolClass.assignmentList.length > 0 && schoolClass.studentList.length > 0 && studentIndex < schoolClass.studentList.length){
        setStudentName(schoolClass.studentList[studentIndex]);
    
        for (let i = 0; i < schoolClass.assignmentList.length; i ++){

          let selectedStudentGrade: number;
          if (schoolClass.assignmentList[i].grades[studentIndex].value != undefined ){
    
          selectedStudentGrade = schoolClass.assignmentList[i].grades[studentIndex].value;
          }
          else{
            selectedStudentGrade = 0;
            setStudentIndex(0);
          }

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
      console.log('class data changed')
      setStudentIndex(0);
      setChartData();
      populateStudentNames();


    },
    [schoolClass]);

    useEffect(()=>{
      
      
      let chartJSX = <StudentGradesChart  data={classGradeArr} studentName={schoolClass.studentList[studentIndex]}/>;
      populateStudentNames();
      
      setChart([chartJSX]);

    },
    [classGradeArr]);

    useEffect(()=>{
      setChartData();

    },
    [studentIndex]);

    useEffect(()=>{
      
      console.log('editTrue detected in class summary' + props.renderNum);
      setStudentIndex(0);
      setChartData();
      populateStudentNames();
     
     
      

    },
    [props.renderNum]);

    

    function pickStudent(){
      //pick student for chart
      let studentSelect = ((document.getElementById('selectStudentChart') as HTMLInputElement))
      let studentName = studentSelect.value;
      let index = schoolClass.studentList.indexOf(studentName);
      setStudentIndex(index);
      setChartData();
      console.log(props.editTrue + 'prop is this')

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

              <div className="card">
                <div className="card-header">
                   <h2>{schoolClass.name}</h2>  
                </div>
                <div className="card-body">
                <h3 className="card-title">{schoolClass.type}</h3> 
                  
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
              </div>

            </div>

            
          <div className="col-sm-8">

          <div className="inputDiv">
                <label className="form-label">Average Grade Chart</label>
                <select className="form-select" id='selectStudentChart' onChange={()=>pickStudent()}>
                    {optionArr}

                </select>
                
                </div>
            
            {chart}
          </div>


          </div>


 
        
    
          
          </div>
    )
}

export default ClassSummary;