import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import jquery from 'jquery';
import {useAuth} from '../firebase'
import { useUserContext } from '../UserContet';
import { useEffect, useState } from "react";
import img6 from '../images/pp.png';
// for changing navbar  color
jquery(window).scroll(function() {
jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})

const Navbar = () => {
    const currentUser = useAuth();
    const [photoURL,setPhotoURL] = useState(img6);
    const [loading,setLoading] = useState(false);
    const {logoutUser} = useUserContext();
  
       //to logout the useer from website
       async function handleLogout(){
        setLoading(true);
      try { 
        logoutUser()
    } catch{
        alert("Couldn't logout");
    }
    setLoading(false);
    }
    return (
    <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent py-2 fixed-top">
            <div className="container-fluid ">
                <span className="navbar-brand font-weight-bolder">Cardwell Sweet</span>
                <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <FaAlignRight className="nav-icon" /></span>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/rooms">Rooms</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/contact">Contact</NavLink>
                        </li>
                   {   !currentUser && <>
                    <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/Login">LogIn</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/Signup">Signup</NavLink>
                        </li>
                   
                   </> }
                   
                    { currentUser && <>
                        <li className="nav-item">    <NavLink activeClassName="active_class" exact to="/Profile"> 
                        <img src={photoURL} alt="avator" className='profile'/>
                        </NavLink></li>
                        <li className="nav-item" onClick={handleLogout}>
                           <button className="nav-link"> LogOut </button> 
                        </li>
                    </>   }
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}
export default Navbar;