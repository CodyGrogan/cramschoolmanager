import Aos from 'aos'

const stockPhoto1 = './images/StockPhoto1.jpg'
const stockPhoto2 = './images/StockPhoto2.jpg'
const stockPhoto3 = './images/StockPhoto3.jpg'


function HomeAnimation(props){


    return(
     <div>

       
                <div  className='intro-div'>
                <h2>Welcome to Cram School Manager</h2>
                <img className='intro-img' width={'250px'} src={stockPhoto1} /><br/>
                
                </div>
                <div className='centerButton'>
                <button type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signUpModal"><h1>Try Now!</h1></button>
                </div>
            

            

            <br/>
        <div className='centerButton homepage-div'>
       
        <p >Scroll Down to Learn More</p> <br/>
       
        </div>

        <div className='centerButton homepage-div'>
       
       <div>
       <span className='homepage-arrow material-icons'>
       expand_more
       </span>
       </div>
       </div>


            

       <br/>       <br/>       <br/>
    

            <div data-aos='fade-left' >

                <div>
                <img className='intro-img img-back' width={'250px'} src={stockPhoto2} />
                </div>

        
                <div className='intro-div'>
                <h2>Simplify gradebook management and focus on what matters</h2>
           
                </div>

           

            
            
            </div>


    
       <div  data-aos='fade-right' >
                <div className='intro-div'>
                <h2>Provide easy access to lesson plans</h2>
                <img className='intro-img' height={'250px'} src={stockPhoto3}  />
                </div>
        </div>

        

      

 

            
        <button data-aos='fade-left'  type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signUpModal"><h1>Try Now!</h1></button>




        </div>
      
    )
}

export default HomeAnimation;