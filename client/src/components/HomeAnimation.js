import Aos from 'aos'

const stockPhoto1 = './images/StockPhoto1.jpg'
const stockPhoto2 = './images/StockPhoto2.jpg'
const stockPhoto3 = './images/StockPhoto3.jpg'


function HomeAnimation(props){


    return(
     <div>
         <div className='fullPage'>

         <div className='firstScrollPageContainer'>

       
                <div  className='intro-div'>
                <h2>Welcome to Cram School Manager</h2>
                <img className='intro-img' width={'250px'} src={stockPhoto1} /><br/>
                
                </div>
              
                <div className='centerButton buttonDown'>
    
                <button type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signUpModal"><h1>Try Now!</h1></button>
                </div>
            

            

            <br/>
        <div className='centerButton homepage-div'>
       
        <p >Scroll Down to Learn More</p> <br/>
       
        </div>

        </div>

        </div>


        <div className='centerButton homepage-div'>
       
       <div>
       <span className='homepage-arrow material-icons'>
       expand_more
       </span>
       </div>
       </div>



            <div className='scrollPageContainer' >

                <div data-aos='fade-left' >
                <img className='intro-img img-back' width={'250px'} src={stockPhoto2} />
                </div>

        
                <div className='intro-div' data-aos='fade-right' >
                <h2>Simplify gradebook management and focus on what matters</h2>
           
                </div>

           

            
            
            </div>


    
       <div className='scrollPageContainer'  data-aos='fade-right' >
                <div className='intro-div'>
                <h2>Provide easy access to lesson plans</h2>
                <img className='intro-img' height={'250px'} src={stockPhoto3}  />
                </div>
        </div>

        

      

 
        <div className='scrollPageContainer' data-aos='fade-left'  >
            
        <button type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signUpModal"><h1>Try Now!</h1></button>

        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


        </div>
      
    )
}

export default HomeAnimation;