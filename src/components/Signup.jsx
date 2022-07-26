import React, { useRef } from 'react'
import { useUserContext } from '../UserContet';
import {useHistory} from 'react-router-dom'

function Register() {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  let history = useHistory()

  const {registerUser} = useUserContext();

  const onSumbit=(e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if(email && name && password) {
        registerUser(email,name,password);
      history.push("/");
    }
  }
  return (
    <center>
        <label >Email:</label>
        <br />
        <input type="email" ref={emailRef}/>
        <br />
        <label >Last Name:</label>
        <br />
        <input type="text" ref={nameRef} />
        <br />
        <label >Password:</label>
        <br />
        <input type="password" ref={psdRef}/>
        <br />
      <button onClick={onSumbit}>submit</button>
       
    </center>
  )
}

export default Register