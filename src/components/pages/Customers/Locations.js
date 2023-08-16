// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

// Functional Component
const Locations = () => {
    const { franchiseLocationsState: [franchiseLocations, setFranchiseLocations] } = useOutletContext();

    // Format Phone Number
    const formatPhoneNumber = (phoneNumberString) => {
        const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '+ ' + match[1] + '(' + match[2] + ')-' + match[3] + '-' + match[4];
        }
        return phoneNumberString;
    };

        return (
            <div className="FranchiseLocations-container">
                <h1 className="FranchiseLocations-title">Our Locations</h1>
                <div className="FranchiseLocations-divider"></div>
                {franchiseLocations.map((location, index) => (
                    <div key={index}>
                        <div className="FranchiseLocations-locationCard">
                            <div className="FranchiseLocations-info">
                                <h2>{location.name}</h2>
                                <p>{location.address}</p>
                                <p>{location.city}, {location.state} {location.zip_code}</p>
                                <p>Phone Number: {formatPhoneNumber(location.phone_number)}</p>
                            </div>
                            <div className="franchise-video-content">
                                <iframe src="https://www.youtube.com/embed/vqk4LJB6SGk?autoplay=1&mute=1&loop=1&playlist=vqk4LJB6SGk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    <div className="FranchiseLocations-detailButtonContainer">
                        <Link to={`/locations/${location.id}`} className="availability-link">
                            <button>View Location</button>
                        </Link>
                    </div>
                </div>
            ))}
      </div>
    );
};

// Export
export default Locations;