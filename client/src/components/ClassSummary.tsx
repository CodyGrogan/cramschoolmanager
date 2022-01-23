import SchoolClass from "../classes/SchoolClass";


function ClassSummary(props: any){
    let schoolClass: SchoolClass = props.class;
    return(
        <div>
        <h2>{schoolClass.name}</h2>  
          
        <h3>Class type info here</h3>
          Total Students: {schoolClass.studentList.length}
        <br/>
        Teachers: {schoolClass.teacherList}
        Average Grade: 
        Start Date:
        End Date:          

        <button className="btn btn-primary">View Class</button>
    
          
          </div>
    )
}

export default ClassSummary;