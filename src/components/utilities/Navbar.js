// Imports 
import React from "react";
import { Link } from "react-router-dom";

// Component
const Navbar = ({}) => {
    return (
        <nav className="navbar">
            <div className="left-group">
                <Link to="/locations" className="navbar-text">Locations</Link>
                <Link to="/book" className="navbar-text">Book a Service</Link>
            </div>
            <Link to="/" id="navbar-text">Home</Link>
            <div className="right-group">
                <Link to="/join" className="navbar-text">Join Us</Link>
                <Link to="/search" className="navbar-text">Search</Link>
                <Link to="/account" className="navbar-text">Accounts</Link>
            </div>
        </nav>
    )
};

export default Navbar;