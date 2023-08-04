// Imports 
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Component
const Navbar = ({}) => {
    return (
        <nav className="navbar">
            <div className="left-group">
                <Link to="/locations" className="navbar-text">Locations</Link>
                <Link to="/about" className="navbar-text">About</Link>
                <Link to="/book" className="navbar-text">Book a Service</Link>
            </div>
            <Link to="/" id="navbar-text">JAMAL</Link>
            <div className="right-group">
                <Link to="/search" className="navbar-text">
                    <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} /> <span className="search-text"> Search</span>
                    </button>
                </Link>
                <Link to="/join" className="navbar-text">Join Us</Link>
                <Link to="/account" className="navbar-text">MyJamāl</Link>

            </div>
        </nav>
    )
};

export default Navbar;