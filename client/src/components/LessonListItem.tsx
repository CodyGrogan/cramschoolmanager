

function LessonListItem(props: any){

    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.date}</td>
            
        </tr>
    )
}

export default LessonListItem;