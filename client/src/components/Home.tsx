import Navbar from "./Navbar";



function Home(props: any){

 

    return(
        <div>
            <Navbar setSchool={props.setSchool}/>
            Homepage 
        </div>
    )
}

export default Home;