// Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// Component
const Navbar = ({}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            {/* Web Navbar */}
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

            {/* Mobile Navbar */}
            <nav className="navbar-mobile">
                <div className="left-group">
                <div className="left-group">
                    <button className="dropdown-button" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                        <FontAwesomeIcon icon={isDropdownOpen ? faTimes : faBars} />
                    </button>
                </div>

                </div>
                <div className="center-group">
                    <Link to="/" id="navbar-text-mobile">JAMAL</Link>
                </div>
                <div className="right-group">
                    <Link to="/search" className="navbar-text">
                        <button className="search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Link>
                </div>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
    <Link to="/locations" className="navbar-mobile-link">
        <div className="menu-item">
            <div className="link-container">
                <span className="link-text">Locations</span>
            </div>
            <div className="arrow-container">
                <span className="arrow">{'>'}</span>
            </div>
        </div>
    </Link>
                        <Link to="/book" className="navbar-mobile-link">
                        <div className="menu-item">
                            <span className="link-text">Appointments</span> <span className="arrow">{'>'}</span>
                            </div>
                        </Link>
                        <Link to="/join" className="navbar-mobile-link">
                        <div className="menu-item">
                            <span className="link-text">Lease</span> <span className="arrow">{'>'}</span>
                            </div>
                        </Link>
                        <Link to="/about" className="navbar-mobile-link">
                        <div className="menu-item">
                            <span className="link-text">About</span> <span className="arrow">{'>'}</span>
                            </div>
                        </Link>
                        <Link to="/account" className="navbar-mobile-link">
                        <div className="menu-item">
                            <span className="link-text">MyJamāl</span> <span className="arrow">{'>'}</span>
                            </div>
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;