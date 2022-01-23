import {useState, useEffect} from 'react';


function SchoolManager(props: any){



    return(
        <div>
            school manager
            <div className="row school-section">
                <div className="col-2 list-box"><ul><li>The list of classes will go here</li><li>The list of classes will go here</li><li>The list of classes will go here</li><li>The list of classes will go here</li>
                <li>The list of classes will go here</li><li>The list of classes will go here</li>
                <li>The list of classes will go here</li><li>The list of classes will go here</li>
                <li>The list of classes will go here</li><li>The list of classes will go here</li>
                
                
                </ul></div>
                <div className="col-10">this will quick display information about the selected class</div>
            </div>

            <div className="row school-section">
                <div className="col-2">The list of teachers will go here</div>
                <div className="col-10">this will quick display information about the selected teacher</div>
            </div>
            <div className="row school-section">
                <div className="col-2">The list of students will go here</div>
                <div className="col-10">this will quick display information about the selected student</div>
            </div>


        </div>
    )
}

export default SchoolManager;