// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

// Functional Component
const Locations = () => {
    const { franchiseLocationsState: [franchiseLocations, setFranchiseLocations] } = useOutletContext();
    return(
        <div>
            <p>Here are our Locations:</p>
            {franchiseLocations.map((location, index) => (
                <div key={index}>
                    <h2>{location.name}</h2>
                    <p>{location.address}</p>
                    <p>{location.city}, {location.state}, {location.zip_code}, {location.country}</p>
                    <p>Phone: {location.phone_number}</p>
                    <p>Email: {location.email}</p>
                    <Link to={`/locations/${location.id}`}>More details</Link>
                </div>
            ))}
        </div>
    )
};

// Export
export default Locations;