

import { updateCurrentUser } from 'firebase/auth';
import React,{useRef} from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import img6 from '../images/pp.png';
import { useUserContext } from '../contexts/UserContet';
import { upload } from '../firebase'
import {db} from '../firebase';
import { collection,getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';
function Profile() {
  
  const currentUser=  useUserContext();
  const [loading,setLoading] = useState(false);
  const [photo,setPhoto] = useState(null);
  const [photoURL,setPhotoURL] = useState(img6);
  const nameref= useRef();
  const LastNameRef= useRef();
  const phoneRef= useRef();
  function handleChange(e){
    if (e.target.files[0]){
      setPhoto(e.target.files[0])
    }
  }
  function handleClick(){
    upload(photo,currentUser,setLoading)
  }
    useEffect(()=>{
      if(currentUser?.photoURL ){
        setPhotoURL( currentUser.photoURL);
      }
      
    },[currentUser])
 
    const addUser=()=> async(dispatch)=>{
  
      try{
        
          const userDetail = doc(db, 'userDetails', currentUser.id);
          const docSnap = await getDoc(userDetail);
  
          if(docSnap.exists()){
              const existItem = docSnap.data()
              alert(existItem.title +" is already in your cart")
          
          }else{
              console.log('no such document');
              await setDoc(doc(db, 'userDetials', currentUser.id),{
                  id: currentUser.id,
                  name: nameref,
                  Lastname: LastNameRef,
                  phone: phoneRef
              })
              alert("Item has been added successfully");
              
           
       
          }
      } catch(error){
          alert("failed to add "+ error)
    
  
      }
  
  
  }
    
    return (
      <div className='userD'>
          <h1>Update Profile</h1> <br />
          <input type="file" onChange={handleChange} className='fileM'/>
          <img src={photoURL} alt="avator" className='profile'/>
          <br />
          <button disabled={loading|| !photo} onClick={handleClick}>upload</button>
         <br /><br />
          <input type="text" placeholder='Enter name' ref={nameref}/><br />
          <input type="text" placeholder='Enter Last name' ref={LastNameRef}/><br />
          <input type="number" placeholder='Enter Number' ref={phoneRef}/><br />
          <button onClick={addUser}>Save</button>
      </div>
    )
}

export default Profile;

