import GenderPieChart from "./GenderPieChart";
import Navbar from "./Navbar";
import GradeBarChart from "./GradeBarChart";
import GradeAttendChart from "./GradeAttendChart";
import HomeAnimation from "./HomeAnimation";
import Aos from "aos";


function Home(props: any){

    Aos.init();
   
    return(
        <div>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <Navbar setSchool={props.setSchool} homepage={true}/>
        
            <HomeAnimation/>

        </div>
    )
}

export default Home;