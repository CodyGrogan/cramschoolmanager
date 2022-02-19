import GenderPieChart from "./GenderPieChart";
import Navbar from "./Navbar";
import GradeBarChart from "./GradeBarChart";
import GradeAttendChart from "./GradeAttendChart";


function Home(props: any){

 
   
    return(
        <div>
            <Navbar setSchool={props.setSchool}/>
            Homepage 

            <GradeAttendChart/>

         
        </div>
    )
}

export default Home;