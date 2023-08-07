// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Footer Component
const Footer = () => {
    return (
        <div className="footer">
            <hr className="separator" />
            <div className="footer-section1">
                <div className="column">
                    <h3>Explore</h3>
                    <Link to="/locations">Locations</Link>
                    <Link to="/professionals">Our Professionals</Link>
                    <Link to="/about">About</Link>
                    <Link to="/press">Press</Link>
                </div>
                <div className="column">
                    <h3>Services</h3>
                    <Link to="/book-service">Book Service</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="column">
                    <h3>Legal</h3>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/cookie-policy">Cookie Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>
                <div className="column">
                    <h3>Client Services</h3>
                    <Link to="/careers">Careers</Link>
                    <Link to="/find-your-space">Lease with Us</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/sitemap">Sitemap</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>
            <hr className="separator" />
            <div className="footer-section2">
                <p>Jamāl</p>
            </div>
        </div>
    )
}

// Export
export default Footer;