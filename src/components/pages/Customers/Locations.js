// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

// Functional Component
const Locations = () => {
    const { franchiseLocationsState: [franchiseLocations, setFranchiseLocations] } = useOutletContext();
        return (
            <div className="FranchiseLocations-container">
                <h1 className="FranchiseLocations-title">Our Locations</h1>
                <div className="FranchiseLocations-divider"></div>
                {franchiseLocations.map((location, index) => (
                <div key={index} className="FranchiseLocations-locationCard">
                    <h2>{location.name}</h2>
                    <p>{location.address}</p>
                    <div class="franchise-video-content">
                        <iframe src="https://www.youtube.com/embed/vqk4LJB6SGk?autoplay=1&mute=1&loop=1&playlist=vqk4LJB6SGk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <Link to={`/locations/${location.id}`} className="FranchiseLocations-detailButton">
                        <button>Location Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

// Export
export default Locations;