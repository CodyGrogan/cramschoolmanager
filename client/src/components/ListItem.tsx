

function ListItem(props: any){

    function itemClicked(){
        console.log(props.index + 'item clicked');
        props.setSelectedClass(props.index)
    }

    return(
        <div onClick={itemClicked} className="list-item">
            {props.name}
        </div>
    )
}

export default ListItem;