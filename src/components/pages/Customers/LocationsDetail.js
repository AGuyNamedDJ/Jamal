// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";
import Test1 from "../../photos/Test1.jpg";

// Functional Component
const LocationsDetail = () => {
    const { salonSuitesState: [salonSuites, setSalonSuites] } = useOutletContext();
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
        fetchLocationDetail(); 
    }, [id]);

    return (
        <div>
            {/* Store Location at the Top */}
            <div id="location-details">
                {
                    locationDetail.name ?
                    <h1>{locationDetail.name}</h1> :
                    <p>Name not available</p>
                }
                    <img src={Test1} alt="Building" />
                <p><Link to="/contact-us" className="contact-link">Contact Us</Link> for suite availability, amenities, and requirements.</p>
            </div>
    
            {/* Other Location Details at the Bottom */}
            <div id="other-details">
                <p>{locationDetail.address ? `Address: ${locationDetail.address}` : 'Address not available'}</p>
                <p>{locationDetail.city ? `City: ${locationDetail.city}` : 'City not available'} | {locationDetail.state ? `State: ${locationDetail.state}` : 'State not available'}</p>
                <p>{locationDetail.zip_code ? `Zip Code: ${locationDetail.zip_code}` : 'Zip Code not available'} {locationDetail.country ? `Country: ${locationDetail.country}` : 'Country not available'}</p>
                <p>{locationDetail.phone_number ? `Phone: ${locationDetail.phone_number}` : 'Phone number not available'}</p>
                <p>{locationDetail.business_hours ? `Business Hours: ${locationDetail.business_hours}` : 'Business hours not available'}</p>
                <p>{locationDetail.email ? `Email: ${locationDetail.email}` : 'Email not available'}</p>
                <p>{locationDetail.additional_info ? `Additional Info: ${locationDetail.additional_info}` : 'Additional info not available'}</p>
            </div>

            {/* Directory Title */}
            <h2 className="directory-title">Suite Directory</h2>

            {/* Relevant Suites in the Middle */}
            <div id="salon-suites-grid">
                { salonSuites.length > 0 ? 
                    salonSuites.map((suite, index) => (
                        <div className="suite-item" key={index}>
                            <h3>{suite.suite_number}</h3>
                            <p>Services: {suite.services}</p>
                        </div>
                    ))
                    : <p>No Suites Available</p>
                }
            </div>
    
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    );
};

// Export
export default LocationsDetail;
