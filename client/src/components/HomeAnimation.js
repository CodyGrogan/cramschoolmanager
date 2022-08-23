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

                  
               
                
                </div>
    
       

        </div>


     


           


    
    
        

      

 
    
     

        </div>
      
    )
}

export default HomeAnimation;