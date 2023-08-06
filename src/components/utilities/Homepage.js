// Import
import React, { useRef, useEffect } from "react";
import Chicago1 from "../videos/Chicago1.mp4";
import { Link } from 'react-router-dom';

// Functional Component
const Homepage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return(
        <div className="hero-section">
            <video ref={videoRef} loop muted>
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
    );
};

// Export
export default Homepage;