// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useOutletContext } from "your-context-file"; // Uncomment if you're using it

// Functional Component
const LocationsDetail = () => {
    // const { franchiseLocationsState: [franchiseLocations, setFranchiseLocations] } = useOutletContext(); // Uncomment if you're using it
    const navigate = useNavigate();
    const {id} = useParams();
    const [locationDetail, setLocationDetail] = useState({});
    const BASE_URL = "https://jamal-backend.onrender.com";

    // fetchLocationDetail
    useEffect (() => {
        async function fetchLocationDetail(){
            try {
                const response = await fetch (`${BASE_URL}/api/locations/${id}`,{
                    headers: { 'Content-Type' : 'application/json' }
                });
                const locationSpecific = await response.json();
                setLocationDetail(locationSpecific);
            } catch (error) {
                console.error(error);
            }
        }
        fetchLocationDetail(); // Fixed function name
    }, [id]);

    return (
        <div>
            <div id="location-details">
                {/* Name */}
                {
                    locationDetail.name ? // Fixed variable name
                    <h1>{locationDetail.name}</h1> :
                    <p>Name not available</p>
                }
                {/* Address */}
                {
                    locationDetail.address ? // Fixed variable name
                    <p>{locationDetail.address}</p> :
                    <p>Address not available</p>
                }
                {/* Other Details ... */}
            </div>
            
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    );
};

// Export
export default LocationsDetail;
