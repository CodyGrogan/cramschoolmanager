import {Link} from 'react-router-dom';
function AssignmentListItem(props: any){

    let linkString=`/assignmentpage/${props.name}/${props.schoolClass.name}`;
    return(
    <tr>
       <td><Link to={linkString}> {props.name}</Link></td>
        <td>{props.date}</td>
        
    </tr>
    )
}

export default AssignmentListItem;