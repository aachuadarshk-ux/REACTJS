import React from 'react'
import img111 from '../Images/IMG_RBWNAV.JPG.jpeg';
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
            
            <img src={img111} height="50px" width="50px" alt=''/>
            <h4>RBW</h4>
            <NavLink className="navbar-brand" href="#"></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
                
            </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active"  to="/" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/book" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>BOOKS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>LOGIN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>SIGN UP</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" style={({ isActive }) => ({ color: isActive ? "red" :"black" })}>CONTACT</NavLink>
                        </li>
                    </ul>
                   </div>
        </div>

    </nav>

    </div>
  )
}
