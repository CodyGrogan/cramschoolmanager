import {useParams} from 'react-router-dom';
import Navbar from "./Navbar";

//this will use the parameters to query the database

function LessonPage(props: any){
    let { id } = useParams();

    return(
        <div>
            <Navbar/>
            {id}
        </div>
    )
}

export default LessonPage;