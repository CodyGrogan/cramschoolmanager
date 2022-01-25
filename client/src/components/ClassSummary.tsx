import SchoolClass from "../classes/SchoolClass";


function ClassSummary(props: any){
    let schoolClass: SchoolClass = props.class;
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
        
    
          
          </div>
    )
}

export default ClassSummary;