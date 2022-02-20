import GenderPieChart from "./GenderPieChart";
import Navbar from "./Navbar";
import GradeBarChart from "./GradeBarChart";
import GradeAttendChart from "./GradeAttendChart";
import HomeAnimation from "./HomeAnimation";



function Home(props: any){

 
   
    return(
        <div>
            <Navbar setSchool={props.setSchool}/>
        
            <HomeAnimation/>
         
        </div>
    )
}

export default Home;