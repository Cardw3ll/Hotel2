// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
import {getAuth,updateProfile,onAuthStateChanged} from "firebase/auth";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import { getDatabase } from "firebase/database";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD1iryQ_Iv-YRJi1c8_viAzkI2VHjayvc",
  authDomain: "hotelbookingapp-27b59.firebaseapp.com",
  projectId: "hotelbookingapp-27b59",
  storageBucket: "hotelbookingapp-27b59.appspot.com",
  messagingSenderId: "169078368030",
  appId: "1:169078368030:web:c9216a7adb9c39cb8d0b0f",
  measurementId: "G-QL17RW4N03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const storage = getStorage(app);
export const db = getDatabase();
//custoom react hook
export function useAuth(){
    const [currentUser, setCurrentUser]= useState();
    useEffect(()=>{

      const unsub =  onAuthStateChanged(auth, user => {setCurrentUser(user)});
      return unsub;
    },[])
    return currentUser;
}
//storage
export async function upload(file,currentUser,setLoading){
    const fileRef = ref(storage,currentUser.uid );
    setLoading(true);
    
   const snapshot = await uploadBytes(fileRef,file);
  
  
   const photoURL = await getDownloadURL(fileRef);
   updateProfile(currentUser, {photoURL});
  
  
   setLoading(false);
   alert("you have uploaded a picture")
  }