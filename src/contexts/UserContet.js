import React,{ createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";


const UserContext = createContext({})

export const useUserContext = ()=>useContext(UserContext);

export const UserContextProvider = ({children})=>{
    const [user,setUser]= useState(null);
    const [loading,setLoading] = useState();
    const [error,setError] = useState("");


    useEffect(()=>{
        setLoading(true);
      const unsubcribe =  onAuthStateChanged(auth,res =>{
            res ? setUser(res):setUser(null);
            setError("");
            setLoading(false)
        })
        return unsubcribe;
    }, [])

    //sign up a user 
    const registerUser = (email,name,password)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth, email,password).then(()=>{
           return updateProfile(auth.currentUser,{
                displayName:name,
            });
        }).then((res)=>console.log(res))
        .catch(err => setError(err.message))
        .finally(()=> setLoading(false));
    }
    // to log in
    const signInUser = (email,password)=>{
        setLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>console.log(res))
        .catch(err => setError(err.message))
        .finally(()=> setLoading(false));
    }
    //to logout the user 
    const logoutUser = ()=>{
signOut(auth);
    }
    //forgot password
    const forgotPassword=(email)=>{

       return sendPasswordResetEmail(auth,email);
    }
    const contextValue = {
        user,
        loading,
        error,
        registerUser,
        signInUser,
        logoutUser,
        forgotPassword,
    };

    return <UserContext.Provider value={contextValue}>
        {children}
        </UserContext.Provider>
}