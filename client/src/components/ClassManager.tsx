
import SchoolClass from "../classes/SchoolClass";
import AttendanceTable from "./AttendanceTable";

function ClassManager(props: any){

    let schoolClass: SchoolClass = props.class;

    function editPressed(inputType: String){
        switch(inputType){
        case 'Type':
            let newtype = (document.getElementById('classType') as HTMLInputElement).value;
            schoolClass.type = newtype;
            console.log(schoolClass.type);
            break;
        case 'StartDate':
            
            let dateinfo = (document.getElementById('StartDate') as HTMLInputElement).value
            let newdate = new Date(dateinfo);
            let datestring = newdate.toISOString().split('T')[0];
            schoolClass.startDate = datestring;
            break;
        case 'EndDate':
            
            let enddateinfo = (document.getElementById('EndDate') as HTMLInputElement).value
            let endnewdate = new Date(enddateinfo);
            let enddatestring = endnewdate.toISOString().split('T')[0];
            schoolClass.endDate = enddatestring;
            break;
            
        }

        props.setEditTrue(true);

    }


    return(
        <div className="container">
            class manager

            <div className="row">
            <h3>Class Information</h3>
            <div className="col-10">this will quick display information about the selected lesson <br/>
            
                <div className="inputBox">
              <div className="inputDiv"> <label>Type:<input id='classType' type={'text'} placeholder={schoolClass.type}></input></label><button onClick={()=> editPressed('Type')} className="btn btn-primary">Edit</button></div> 
              <div className="inputDiv"> <label>Start:<input id='StartDate' type={'date'} placeholder={schoolClass.type}></input></label><button onClick={()=> editPressed('StartDate')} className="btn btn-primary">Edit</button></div> 
              <div className="inputDiv"> <label>End:<input id='EndDate' type={'date'} placeholder={schoolClass.type}></input></label><button onClick={()=> editPressed('EndDate')} className="btn btn-primary">Edit</button></div> 
              
                
                </div>
            </div>
        </div>

   
            <div className="row">
            <div  className="col">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Attendance
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">

                            this section will include a table with student names on the y axis, lesson nums on the x axis. There will be checkboxs showing if the student attended the class or not.

                            <AttendanceTable schoolClass = {schoolClass}/>


                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Grades
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">

                        this section will include a table with student names on the y axis, assignments on the x axis. The grade will be shown for each student for each assignment.

                        </div>
                        </div>
                    </div>
                   
                </div> 
            </div>    
                          
            </div>
        <div className="row">
            <div className="col-2">The list of lessons will go here</div>
            <div className="col-10">this will quick display information about the selected lesson</div>
        </div>
        
        
        </div>
    )
}

export default ClassManager;