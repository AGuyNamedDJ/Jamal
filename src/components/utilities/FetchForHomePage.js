// Import
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

// Fetch
const FetchForHomepage = () => {
    // Establish new state;
    const [appointments, setAppointments] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [franchiseLocations, setFranchiseLocations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [payments, setPayments] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [salonRenters, setSalonRenters] = useState([]);
    const [salonSuites, setSalonSuites] = useState([]);
    const [services, setServices] = useState([]);
    const [users, setUsers] = useState([]);

    const contextObject = {
        appointmentState: [appointments, setAppointments],
        appointmentState: [favorites, setFavorites],
        appointmentState: [franchiseLocations, setFranchiseLocations],
        appointmentState: [messages, setMessages],
        appointmentState: [notifications, setNotifications],
        appointmentState: [payments, setPayments],
        appointmentState: [promotions, setPromotions],
        appointmentState: [reviews, setReviews],
        appointmentState: [salonRenters, setSalonRenters],
        appointmentState: [salonSuites, setSalonSuites],
        appointmentState: [services, setServices],
        appointmentState: [users, setUsers],
    }

    // Base URL
    const BASE_URL = "https://jamal-backend.onrender.com";

    // useEffects
    // useEffects: fetchManufacturer
    useEffect(() => {
        async function fetchAppointments () {
            try {
                const response = await fetch (`${BASE_URL}/api/appointments`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const appointmentsData = await response.json();
                console.log("Translated Appointment Data:", appointmentsData);
                setAppointments(appointmentsData);
            } catch (error) {
                console.log ("Error fetching Appointment Data!")
                console.log(error)
            }
        }
        fetchAppointments();
    }, [])

// Return
    return(
        <div>
            <div>
                <Navbar context={contextObject}/>
            </div>
            <Outlet context={contextObject} />
        </div>
    )
};

// Export
export default FetchForHomepage;