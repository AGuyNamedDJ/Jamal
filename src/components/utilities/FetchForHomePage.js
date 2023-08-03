// Import
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";

// Initial Fetch
const FetchForHomepage = () => {
    // Establish new state variables w/ useState Hook;
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

    // Context Object to pass to children components;
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

    // Base Fetch URL
    const BASE_URL = "https://jamal-backend.onrender.com";
    const navigate = useNavigate()

    // useEffects
    // useEffects: fetchAppointments data from backend & set to appointmentsState;
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

    // useEffect: fetchFavorites
    useEffect(() => {
        async function fetchFavorites () {
            try {
                const response = await fetch (`${BASE_URL}/api/favorites`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const favoritesData = await response.json();
                console.log("Translated Favorites Data:", favoritesData);
                setFavorites(favoritesData);
            } catch (error) {
                console.log ("Error fetching Favorites Data!")
                console.log(error)
            }
        }
        fetchFavorites();
    }, [])

    // useEffect: fetchFranchiseLocations
    useEffect(() => {
        async function fetchFranchiseLocations () {
            try {
                const response = await fetch (`${BASE_URL}/api/locations`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const franchiseLocationsData = await response.json();
                console.log("Translated Franchise Locations Data:", franchiseLocationsData);
                setFranchiseLocations(franchiseLocationsData);
            } catch (error) {
                console.log ("Error fetching Franchise Locations Data!")
                console.log(error)
            }
        }
        fetchFranchiseLocations();
    }, [])

    // useEffect: fetchMessages
    useEffect(() => {
        async function fetchMessages () {
            try {
                const response = await fetch (`${BASE_URL}/api/messages`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const messagesData = await response.json();
                console.log("Translated Message Data:", messagesData);
                setMessages(messagesData);
            } catch (error) {
                console.log ("Error fetching Message Data!")
                console.log(error)
            }
        }
        fetchMessages();
    }, [])

    // useEffect: fetchNotifications
    useEffect(() => {
        async function fetchNotifications () {
            try {
                const response = await fetch (`${BASE_URL}/api/notifications`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const notificationsData = await response.json();
                console.log("Translated Notification Data:", notificationsData);
                setNotifications(notificationsData);
            } catch (error) {
                console.log ("Error fetching Notification Data!")
                console.log(error)
            }
        }
        fetchNotifications();
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