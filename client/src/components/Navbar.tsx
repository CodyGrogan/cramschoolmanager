import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'; 
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from 'firebase/auth';
import School from '../classes/School';
import { useEffect, useState } from 'react';

function Navbar(props: any){

  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), navauthStateObserver);

    let user = getAuth().currentUser;
    if (user == null){
      console.log('user is null')
      setLoggedIn(false);
    }

    if(props.homepage != true){
      console.log('not on homepage')

      if (loggedIn === false){

       
        if(user != null){
          console.log('user signed in')

        }
        else{
          console.log('user is not signed in component mount')
      let button = document.getElementById('openNoClose');
      button?.click();
        }

      }

  
    }
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting. 
}, []);

  useEffect(()=>{
    if(props.homepage != true){
      console.log('not on homepage')

      if (loggedIn === false){

        let user = getAuth().currentUser;
        if(user != null)
        
        {
          console.log('user signed in')
          let button = document.getElementById('closeModalButton');
          button?.click();
          console.log('trying to close modal') 
          let closebutton = document.getElementById('closeModalButton');
          closebutton?.click();
          setTimeout(()=>{
            closebutton?.click();
  
          },
          500)
  
        }
        else{
          setLoggedIn(false);
        console.log('user is not signed in')
      let button = document.getElementById('openNoClose');
      button?.click();
        }

      }

      else{ 
        console.log('trying to close modal') 
        console.log(loggedIn);
        let closebutton = document.getElementById('closeModalButton');
        closebutton?.click();
        setTimeout(()=>{
          closebutton?.click();

        },
        500)

       
      }
    }

  },
  [loggedIn]);

  async function checkLoginStatus(){
    
  }

  async function signInEmail() {
    console.log("sign in email button pressed")
    let email = (document.getElementById('loginEmail') as HTMLInputElement).value;
    let password = (document.getElementById('loginPassword') as HTMLInputElement).value;
    
    signInWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          console.log(email);
          alert("Wrong Email or Password")
          let button = document.getElementById('openNoClose');
          button?.click();
        });
        
  }

  async function addSchool(newSchool: School) {
    console.log('adding school to database');
    let jsonstring = JSON.stringify(newSchool);
    let postpath: string = '/createschool';

    fetch(postpath, {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        },
        body: jsonstring,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}


  async function getSchoolData() {

    console.log('getting school data')
    let uid = getAuth().currentUser?.uid;
    
    let token = await getAuth().currentUser?.getIdToken();

    let UIDToken = [uid, token];

    console.log('uid is ' + uid);
    let obj = JSON.stringify({UIDToken});
    

    let postpath: string = '/getschoolinfo';

    fetch(postpath, {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        },
        body: obj,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        let newschool = new School(data.name, data.schoolID);
        newschool.address = data.address;
        newschool.loadClasses(data.classList);
        newschool.studentList = data.studentList;
        newschool.teacherList = data.teacherList;
        props.setSchool(newschool);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    
  }


  async function emailSignUp(){
    //this function needs to use firebase to determine if the user has already signed up with this email.
    //if yes, send on to signInPasswordModal, if no, send on to signUpFormModal

    console.log('email sign up clicked')
    let email = (document.getElementById('signupEmail') as HTMLInputElement).value;
    let name = (document.getElementById('signupName') as HTMLInputElement).value;
    let password = (document.getElementById('signupPassword') as HTMLInputElement).value;

    if (name.length < 1){
      alert("Name must have at least one character")
      let button = document.getElementById('openNoClose');
      button?.click();
    }

    else{
    
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in 
        const user: any = userCredential.user;

        let currentUser = getAuth().currentUser;

        if (currentUser!= null){
        updateProfile(currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
          console.log('displayname set');
          let userid: string =getAuth().currentUser?.uid as string;
          console.log(userid);
          let newschool = new School('New School', userid);
          addSchool(newschool);
          console.log(newschool.name + 'has been created');
          props.setSchool(newschool);

        }).catch((error) => {
          // An error occurred
          // ...
        });
        // ...
      }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        alert("Invalid Email, Password Less than 6 characters, or Already Exists");
        let button = document.getElementById('openNoClose');
      button?.click();
      });
    }
  }

  function signOutUser() {
 
    signOut(getAuth());
  
  }

  function navauthStateObserver(user: any) {
    if (user) {
      
  var signInButtonElement = document.getElementById('sign-in') as HTMLInputElement;
  var signOutButtonElement = document.getElementById('sign-out') as HTMLInputElement;

  
    signOutButtonElement.addEventListener('click', signOutUser);
      console.log("user is signed in")
   
      signInButtonElement.hidden = true;
      signOutButtonElement.hidden = false;
      setLoggedIn(true);


      try{
        getSchoolData();
        console.log('get school')
      }
      catch{
        console.log('unable to get data')
      }
     

    }
      

      else{

        var signInButtonElement = document.getElementById('sign-in') as HTMLInputElement;
        var signOutButtonElement = document.getElementById('sign-out') as HTMLInputElement;
        signOutButtonElement.addEventListener('click', signOutUser);
        signInButtonElement.hidden = false;
        signOutButtonElement.hidden = true;
        setLoggedIn(false);

        let defSchool = new School('myschool', 'testid');
        props.setSchool(defSchool);
            
          }
  }  
  
  function closeModal(){   //this needs to used when closing the mandatory sign in modal when not on the home page
                          //without this the link to the home page is opened before the modal is closed if the user clicks slightly outside the button
    let button = document.getElementById('closeNoClose');
    button?.click();

  }

  function demoSignIn(){
    
    let email = 'demo123123@demo123123.com';
    let password = 'demopassword';
    signInWithEmailAndPassword(getAuth(), email, password);

  }

    return(
      <div className='navbarSpace'>
       <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cram School Manager</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
               
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link id='homeLink' className="nav-link active" to='/'>Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" to='/school'>School</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/student'>Students</Link>
        </li>
       
       
      </ul>
      <button type="button" data-bs-toggle="modal" data-bs-target="#loginOrSignup" className='navbar-brand btn btn-outline-primary signBtn'  id="sign-in" data-testid='sign-in'  >
      <i className="material-icons">account_circle</i>Sign In
    </button>
    <button hidden type="button" onClick={()=>signOutUser()} className="navbar-brand btn btn-warning signBtn" id='sign-out' data-testid='sign-out'>Sign Out</button>


    
     
    </div>
  </div>


  



</nav>

<div className="modal fade" id="loginOrSignup" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Log In</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                   
                    <div className='loginDiv'>
                      <button type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#logInModal">Log In</button>
                    </div>

                    <div className='loginDiv'>
                     <button type="button" className="btn btn-outline-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signUpModal">Sign Up</button>
                    </div>

                    <p className='centerButton'>or</p>
                <div className='centerButton'>
                <button className='btn btn-primary' data-bs-dismiss="modal" onClick={()=> demoSignIn()} data-testid='demo' >Try a Demo!</button>
                 </div>  
                   
                
                </div>
             
                </div>
            </div>
            </div>

          <div className="modal fade" id="logInModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Log In</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                   
                  <form>

                    <div className="mb-3 form-group">
                        <label  className="form-label" >Email</label>
                        <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3 form-group">
                        <label  className="form-label" id='passwordlabel'>Password</label>
                        <input type="password" className="form-control" id="loginPassword" aria-describedby="emailHelp"/>
                        
                    </div>

                    <div className='loginDiv form-group'>
                      <button type="button" onClick={()=>signInEmail()} className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#logInModal">Log In</button>
                    </div>
                  </form>

                   
                
                </div>
              
                </div>
            </div>
          </div>



          <div className="modal fade" id="signUpModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">


              <form>
                <div className="mb-3 form-group">
                        <label  className="form-label" >Name</label>
                        <input type="text" className="form-control" id="signupName" aria-describedby="emailHelp"/>
                        
                    </div>
                   
                    <div className="mb-3 form-group">
                        <label  className="form-label" >Email</label>
                        <input type="email" className="form-control" id="signupEmail" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3 form-group">
                        <label  className="form-label" id='loginPassword'>Password</label>
                        <input type="password" className="form-control" id="signupPassword" aria-describedby="emailHelp"/>
                        
                    </div>

                    <div className='loginDiv'>
                      <button onClick={()=>emailSignUp()} type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal">Sign Up</button>
                    </div>
                </form>

                <p className='centerButton'>or</p>
                <div className='centerButton'>
                <button className='btn btn-primary' data-bs-dismiss="modal" onClick={()=> demoSignIn()} >Try a Demo!</button>
                 </div>  
                
                </div>
              
                </div>
            </div>
          </div>

{//The following modals disable close buttons when not on the home page.
}

          <div data-testid="noclose" className="modal fade" data-keyboard={"false"} data-bs-backdrop="static"  id="loginOrSignupNoClose" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Log In Required</h5>
                    <button hidden={true} id='closeModalButton' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                </div>
                <div className="modal-body">
                   
                    <div className='loginDiv'>
                          <p>You must be logged in to view this page.</p>
                    </div>

                    <div className='loginDiv'>
                    <Link className="nav-link active"  to='/' onClick={()=>closeModal()}><button id='closeNoClose' type="button" data-bs-dismiss="modal" className="btn-primary btn-sm">Return Home</button></Link>
                    </div>
                   
                
                </div>
             
                </div>
            </div>
            </div>


            <button id='openNoClose' hidden={true}   data-bs-toggle="modal" data-bs-target="#loginOrSignupNoClose"></button>
          
          

</div>
    )
}

export default Navbar;