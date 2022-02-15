import Navbar from "./Navbar";
import {useParams} from 'react-router-dom';

function AssignmentPage(props: any){

    let { id, classname } = useParams();

    return(
        <div>
            <Navbar setSchool={props.setSchool}/>
           
            Assignment Page
            {id} <br/>
            {classname}
         
        </div>
    );
}

export default AssignmentPage;