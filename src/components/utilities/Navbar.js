import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

// Component
const Navbar = ({}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="left-group">
                    <Link to="/locations" className="navbar-text">Locations</Link>
                    <Link to="/book" className="navbar-text">Appointments</Link>
                    <Link to="/join" className="navbar-text">Lease</Link>
                </div>
                <Link to="/" id="navbar-text">JAMAL</Link>
                <div className="right-group">
                    <Link to="/search" className="navbar-text">
                        <button className="search-button">
                            <FontAwesomeIcon icon={faSearch} /> <span className="search-text"> Search</span>
                        </button>
                    </Link>
                    <Link to="/about" className="navbar-text">About</Link>
                    <Link to="/account" className="navbar-text">MyJamāl</Link>
                </div>
            </nav>
            <nav className="navbar-mobile">
                <button className="dropdown-button" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <Link to="/locations" className="navbar-text">Locations</Link>
                        <Link to="/book" className="navbar-text">Appointments</Link>
                        <Link to="/join" className="navbar-text">Lease</Link>
                        {/* Add other links as needed */}
                    </div>
                )}
                <Link to="/" id="navbar-text-mobile">JAMAL</Link>
                <Link to="/search" className="navbar-text">
                    <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} /> <span className="search-text">Search</span>
                    </button>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;