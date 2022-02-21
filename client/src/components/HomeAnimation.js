import {ScrollContainer, ScrollPage, Animator, batch, Fade, Sticky, MoveOut, ZoomIn, ZoomOut, FadeIn, StickyIn} from 'react-scroll-motion';

const ZoomInScrollOut = batch(Sticky(), FadeIn(), ZoomIn())

const stockPhoto1 = './images/StockPhoto1.jpg'
const stockPhoto2 = './images/StockPhoto2.jpg'
const stockPhoto3 = './images/StockPhoto3.jpg'


function HomeAnimation(props){


    return(
     

        <ScrollContainer snap="mandatory" >
            <ScrollPage page={0}>
        
        <div className='scrollContainer'>
            <Animator animation={batch(Fade(),  MoveOut(0, -200))}>
                <div>
                <h2>Organize your School</h2>
                <img width={'300px'} src={stockPhoto1} />
                
                </div>
            </Animator>

            <Animator animation={batch(Fade(),  MoveOut(0, 200))}>
                <div>
                <button type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signUpModal"><h1>Try Now!</h1></button>

                
                </div>
            </Animator>
            </div>


            </ScrollPage>

            


        <ScrollPage page={1}>

            <div className='scrollContainer'>
        
            <Animator animation={batch(Fade(), MoveOut(200, 200))}>
                <div>
                <h2>Simplify gradebook management and focus on what matters</h2>
           
                </div>

            </Animator>
            <Animator animation={batch(Fade(), MoveOut(0, -400))}>
                <div>
                <img width={'300px'} src={stockPhoto2} />
                </div>

            </Animator>
            
            </div>

        </ScrollPage>

    

        <ScrollPage page={2}>
        
        <Animator animation={batch(Fade(), MoveOut(200, -200))}>
            <div>
            <h2>Provide easy access to lesson plans</h2>
            <img height={'300px'} src={stockPhoto3} />
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