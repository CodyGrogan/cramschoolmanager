import {ScrollContainer, ScrollPage, Animator, batch, Fade, Sticky, MoveOut} from 'react-scroll-motion';

function HomeAnimation(props){
    return(
     

        <ScrollContainer snap="mandatory">
            <ScrollPage page={0}>
        
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <h2>Let't me show you scroll animation 😀</h2>
            </Animator>
            </ScrollPage>


        <ScrollPage page={1}>
        
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <h2>Page 2 😀</h2>
            </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
        
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h2>Page Tres 😀</h2>
        </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
        
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h2>Page 第四 😀</h2>
        </Animator>
        </ScrollPage>


        </ScrollContainer>

      
    )
}

export default HomeAnimation;