// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

// Functional Component
const Locations = () => {
    const { franchiseLocationsState: [franchiseLocations, setFranchiseLocations] } = useOutletContext();
    return (
        <div>
            <p >Locations</p>
            {
                franchiseLocations && franchiseLocations.length ? 
                    <div>
                        <p>{franchiseLocations[0].name}</p>
                    </div>
                    : "No Locations to display!"
            }
        </div>
    );
};

// Export
export default Locations;
