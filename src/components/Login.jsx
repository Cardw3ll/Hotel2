import React,{ useRef }  from 'react'
import { useUserContext } from '../UserContet';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const emailRef = useRef();
  const psdRef = useRef();
  let history = useHistory();

  const {signInUser, forgotPassword} = useUserContext();

  const onSumbit=(e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if(email && password){
       signInUser(email,password);
       history.push("/");
      }
  }

  const forgotPasswordHandler=()=>{
    const email = emailRef.current.value;
    if(email )
     forgotPassword(email).then(()=>
    {emailRef.current.value = "";
    
  })
  }
  return (
    <center>
    <label >Email:</label>
    <br />
    <input type="email"  ref={emailRef}/>
    <br />
    <label >Password:</label>
    <br />
    <input type="password" ref={psdRef}/>
    <br />
    <button onClick={onSumbit}>sign in</button>
    <p onClick={forgotPasswordHandler} >forgot password</p>
    <Link  to="/signup">create account</Link>
    
</center>
  )
}

export default Login;