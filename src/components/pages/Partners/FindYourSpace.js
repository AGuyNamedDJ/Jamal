// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const FindYourSpace = () => {
    const { franchiseLocationsState: [franchiseLocations, setFranchiseLocations] } = useOutletContext();
    return (
        <div class="webpage-container">
            
            <div class="intro-section">

                {/* Title Section */}
                <div class="title-section">
                    <div class="text-content">
                        <h1>Join Jamal</h1>
                        <p>Embrace your calling; forge unparalleled luxury. At Jamal, your artistry becomes an expression of elegance and sophistication.</p>
                        <p>Join the Jamal collective, where grace meets magnificence. Thrive on your terms, transforming the ordinary into the extraordinary, in a setting as distinctive as your craft.</p>
                    </div>
                    <div class="video-content">
                        <iframe src="https://www.youtube.com/embed/vqk4LJB6SGk?autoplay=1&mute=1&loop=1&playlist=vqk4LJB6SGk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            {/* Locations Section */}
            <div className="locations-section">
                <div className="locations-title">
                    <h2>Our Locations</h2>
                    <div className="divider"></div>
                </div>

                {franchiseLocations.map((location, index) => (
                    <div className="location" key={location.id}>
                        <div className="location-info">
                            <h3>{location.name}</h3>
                            <p>{location.address}</p>
                            <Link to={`/location-details/${index}`} className="availability-link">
                                <button>Request Availability</button>
                            </Link>
                        </div>
                        <div className="location-images">
                            <div className="image-container">
                                <h4>Image Title 1</h4>
                                <img src="image1.jpg" alt="Image Description 1" />
                            </div>
                            <div className="image-container">
                                <h4>Image Title 2</h4>
                                <img src="image2.jpg" alt="Image Description 2" />
                            </div>
                        </div>
                        <div className="location-development">
                            <h4>The Development</h4>
                            <p>Description about this location.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// Export
export default FindYourSpace;