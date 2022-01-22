
function ClassManager(props: any){
    return(
        <div className="container">
            class manager
            <div className="row">
                <div className="col">
                This will display a summary about the selected schoolclass
                </div>
                </div>
            <div className="row">
            <div  className="col">
            this section will have an accordion. there will be a grid with students on the y axis and lessonnum on x axis to display attendance data.
                                the second section will show students on y axis, assignments on x axis, and display the grade for each assignment. clicking the grade will open assignment information
                 
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