// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

// Functional Component
const Locations = () => {
    const { franchiseLocationsState: [franchiseLocations, setFranchiseLocations] } = useOutletContext();
    return (
        <div>
            <h1>Locations</h1>
            {franchiseLocations.map((location, index) => (
                <div key={index}>
                    <h2>
                    <Link to={`/locations/${location.id}`}>
                        {location.name}
                    </Link>
                    </h2>
                    <img src={location.imageUrl} alt={location.name} />
                    <p>{location.address}</p>
                    <p>{location.city}, {location.state} {location.zip_code}</p>
                    <p>{location.country}</p>
                    <p>Phone: {location.phone_number}</p>
                    <p>Email: {location.email}</p>
                </div>
            ))}
        </div>
    );
};

// Export
export default Locations;