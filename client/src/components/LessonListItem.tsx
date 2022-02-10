import {Link} from 'react-router-dom';

function LessonListItem(props: any){

    let linkstring = `/lessonpage/${props.lessonid}/${props.className}`

    return(
        <tr>
             <td><Link to={linkstring}>{props.name}</Link></td>
            <td>{props.date}</td>
            
        </tr>
    )
}

export default LessonListItem;