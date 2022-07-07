import GenderPieChart from "./GenderPieChart";
import Navbar from "./Navbar";
import GradeBarChart from "./GradeBarChart";
import GradeAttendChart from "./GradeAttendChart";
import HomeAnimation from "./HomeAnimation";
import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Home(props: any){


    let schoolStats = <div className="container">
        <br/>        <br/>


        <div className="card text-center">

        
        <div className="card-body inputDiv">


        Welcome back, {props.school.name}! <br/>

            <div className="row">
                <div className="col-sm-6">
                <Link className="nav-link active" to='/school'><button className="btn btn-primary">Manage Classes</button> </Link>
   
                </div>
                <div className="col-sm-6">
                <Link className="nav-link active" to='/student'><button className="btn btn-primary">Manage Students</button></Link>
                </div>
            </div>
       

        </div>

        </div>

    </div>

    const [homeContent, setHomeContent] = useState<JSX.Element>(<HomeAnimation/>);

    Aos.init();

    

    useEffect(()=>{

        console.log('Home Page detected school change');
        console.log(props.school.name);
        if (props.school.name != 'def' && props.school.name != 'myschool'){

            setHomeContent(schoolStats);
        }
        else{
            setHomeContent(<HomeAnimation/>);
        }
    },
    [props.school]);
   
    return(
        <div>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <Navbar setSchool={props.setSchool} homepage={true}/>
        
            {homeContent}

        </div>
    )
}

export default Home;