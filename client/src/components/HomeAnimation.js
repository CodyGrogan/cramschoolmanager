import {ScrollContainer, ScrollPage, Animator, batch, Fade, Sticky, MoveOut, ZoomIn, ZoomOut, FadeIn, StickyIn, MoveIn} from 'react-scroll-motion';

const ZoomInScrollOut = batch(Sticky(), FadeIn(), ZoomIn())

const stockPhoto1 = './images/StockPhoto1.jpg'
const stockPhoto2 = './images/StockPhoto2.jpg'
const stockPhoto3 = './images/StockPhoto3.jpg'


function HomeAnimation(props){


    return(
     

        <ScrollContainer snap="mandatory" >
            <ScrollPage page={0}>
        
        <div className='scrollPageContainer'>
            <Animator animation={batch(Fade(),  MoveOut(0, -200))}>
                <div className='intro-div'>
                <h2>Welcome to Cram School Manager</h2>
                <img className='intro-img' width={'250px'} src={stockPhoto1} /><br/>
                
                </div>
                <div className='centerButton'>
                <button type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signUpModal"><h1>Try Now!</h1></button>
                </div>
            </Animator>

            <Animator animation={batch(Fade(),  MoveOut(0, 200))}>
                <div>

                
                </div>
            </Animator>
      

            
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


            </ScrollPage>

            


        <ScrollPage page={1}>

            <div className='scrollPageContainer'>

            <Animator animation={batch(Fade(), MoveIn(0, -200), MoveOut(0, 200))}>
                <div>
                <img className='intro-img img-back' width={'250px'} src={stockPhoto2} />
                </div>

            </Animator>
        
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                <div className='intro-div'>
                <h2>Simplify gradebook management and focus on what matters</h2>
           
                </div>

            </Animator>
           

            
            
            </div>

        </ScrollPage>

    

        <ScrollPage page={2}>
        
        <Animator animation={batch(Fade(), MoveIn(-200, 0), Sticky(), MoveOut(200, 0))}>
            <div className='scrollPageContainer'>
                <div className='intro-div'>
                <h2>Provide easy access to lesson plans</h2>
                <img className='intro-img' height={'250px'} src={stockPhoto3}  />
                </div>
            </div>
        </Animator>
        </ScrollPage>

        

      

 

        <ScrollPage page={3}>
        
        <Animator animation={ZoomInScrollOut}>
            
        <button type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signUpModal"><h1>Try Now!</h1></button>

        </Animator>
        </ScrollPage>
    

        </ScrollContainer>

      
    )
}

export default HomeAnimation;