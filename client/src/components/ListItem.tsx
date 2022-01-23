

function ListItem(props: any){

    function itemClicked(){
        console.log(props.index + 'item clicked');
        props.setSelectedClass(props.index)
    }

    return(
        <li onClick={itemClicked} className="list-item">
            {props.name}
        </li>
    )
}

export default ListItem;