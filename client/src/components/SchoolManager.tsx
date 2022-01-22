
function SchoolManager(props: any){
    return(
        <div>
            school manager
            <div className="row">
                <div className="col-2">The list of classes will go here</div>
                <div className="col-10">this will quick display information about the selected class</div>
            </div>

            <div className="row">
                <div className="col-2">The list of teachers will go here</div>
                <div className="col-10">this will quick display information about the selected teacher</div>
            </div>
            <div className="row">
                <div className="col-2">The list of students will go here</div>
                <div className="col-10">this will quick display information about the selected student</div>
            </div>


        </div>
    )
}

export default SchoolManager;