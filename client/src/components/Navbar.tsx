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

function Navbar(props: any){

  async function emailSignUp(){
    //this function needs to use firebase to determine if the user has already signed up with this email.
    //if yes, send on to signInPasswordModal, if no, send on to signUpFormModal

    console.log('email sign up clicked')
    let email = (document.getElementById('signupEmail') as HTMLInputElement).value;
    let name = (document.getElementById('signupName') as HTMLInputElement).value;
    let password = (document.getElementById('signupPassword') as HTMLInputElement).value;

    if (name.length < 1){
      alert("Name must have at least one character")
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
          console.log('displayname set')
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

        alert("Invalid Email, Password Less than 6 characters, or Already Exists")
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
    }
      

      else{

        var signInButtonElement = document.getElementById('sign-in') as HTMLInputElement;
        var signOutButtonElement = document.getElementById('sign-out') as HTMLInputElement;
        signOutButtonElement.addEventListener('click', signOutUser);
            signInButtonElement.hidden = false;
            signOutButtonElement.hidden = true;
            
          }
  }  
  
onAuthStateChanged(getAuth(), navauthStateObserver);


    return(
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cram School Manager</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
               
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" to='/school'>School</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/student'>Students</Link>
        </li>
       
       
      </ul>
      <button type="button" data-bs-toggle="modal" data-bs-target="#loginOrSignup" className='navbar-brand btn btn-outline-primary signBtn'  id="sign-in"  >
      <i className="material-icons">account_circle</i>Sign In
    </button>
    <button hidden type="button" onClick={()=>signOutUser()} className="navbar-brand btn btn-warning signBtn" id='sign-out'>Sign Out</button>


    
     
    </div>
  </div>


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
                   
                    <div className="mb-3">
                        <label  className="form-label" >Email</label>
                        <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label" id='passwordlabel'>Password</label>
                        <input type="password" className="form-control" id="loginPassword" aria-describedby="emailHelp"/>
                        
                    </div>

                    <div className='loginDiv'>
                      <button type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#logInModal">Log In</button>
                    </div>
                
                   
                
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

                <div className="mb-3">
                        <label  className="form-label" >Name</label>
                        <input type="text" className="form-control" id="signupName" aria-describedby="emailHelp"/>
                        
                    </div>
                   
                    <div className="mb-3">
                        <label  className="form-label" >Email</label>
                        <input type="email" className="form-control" id="signupEmail" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label" id='loginPassword'>Password</label>
                        <input type="password" className="form-control" id="signupPassword" aria-describedby="emailHelp"/>
                        
                    </div>

                    <div className='loginDiv'>
                      <button onClick={()=>emailSignUp()} type="button" className="btn btn-primary loginButton" data-bs-dismiss="modal">Sign Up</button>
                    </div>
                
                   
                
                </div>
              
                </div>
            </div>
          </div>



</nav>
    )
}

export default Navbar;