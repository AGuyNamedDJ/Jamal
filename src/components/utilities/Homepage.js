// Import
import React from "react";
import ChicagoRiver from "../videos/ChicagoRiver.mp4";
import Chicago1 from "../videos/Chicago1.mp4";
import { Link } from 'react-router-dom';

// Functional Component
const Homepage = () => {
    return(
        <div className="hero-section">
            <video autoPlay loop muted>
                <source src={Chicago1} type="video/mp4" /> 
            </video>
            <div className="hero-content">
                <h1>Our Flagship: Chicago Awaits</h1>
                <div className="hero-buttons">
                    <Link to="/link1" className="hero-button">Explore Services</Link>
                    <Link to="/link2" className="hero-button">Join Us</Link>
                </div>
            </div>
        </div>
    )
};

// Export
export default Homepage;