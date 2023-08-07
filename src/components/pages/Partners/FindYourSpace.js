// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Test1 from "../../photos/Test1.jpg";
import Test2 from "../../photos/Test2.jpg";

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
                            <h3 className="location-name">{location.name}</h3>
                            <p className="location-address">{location.address}</p>
                            <Link to="/contact" className="availability-link">
                                <button>Request Availability</button>
                            </Link>
                        </div>
                        <div className="location-images">
                            <div className="image-container">
                                <h4>The Building</h4>
                                <img src={Test1} alt="Building" />
                            </div>
                            <div className="image-container">
                                <h4>The Floorplan</h4>
                                <img src={Test2} alt="Floorplan" />
                            </div>
                        </div>
                        <div className="location-development">
                            <h4>The Development</h4>
                            <p>Jamal is located in Chicago's dynamic South Loop area, home to 26 state-of-the-art suites that cater to the modern artisan. This vibrant district, rich with cultural diversity and urban sophistication, offers a blend of historical charm and contemporary amenities. The bustling neighborhood provides a perfect backdrop for creativity, with trendy shops, eclectic dining experiences, and a thriving artistic community. Join us at Jamal in the South Loop and be a part of Chicago's exciting evolution, where elegance meets opportunity and your craft knows no bounds. Experience the future of artistry with us!</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// Export
export default FindYourSpace;