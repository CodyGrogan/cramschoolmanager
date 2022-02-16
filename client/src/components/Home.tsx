import GenderPieChart from "./GenderPieChart";
import Navbar from "./Navbar";
import GradeBarChart from "./GradeBarChart";


function Home(props: any){

 
   
    return(
        <div>
            <Navbar setSchool={props.setSchool}/>
            Homepage 

         
        </div>
    )
}

export default Home;