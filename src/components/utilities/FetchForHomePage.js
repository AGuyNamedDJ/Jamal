// Import
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";

// Create a context
export const OutletContext = React.createContext();

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
        appointmentsState: [appointments, setAppointments],
        favoritesState: [favorites, setFavorites],
        franchiseLocationsState: [franchiseLocations, setFranchiseLocations],
        messagesState: [messages, setMessages],
        notificationsState: [notifications, setNotifications],
        paymentsState: [payments, setPayments],
        promotionsState: [promotions, setPromotions],
        reviewsState: [reviews, setReviews],
        salonRentersState: [salonRenters, setSalonRenters],
        salonSuitesState: [salonSuites, setSalonSuites],
        servicesState: [services, setServices],
        usersState: [users, setUsers],
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

    // useEffect: fetchPayments
    useEffect(() => {
        async function fetchPayments () {
            try {
                const response = await fetch (`${BASE_URL}/api/payments`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const paymentsData = await response.json();
                console.log("Translated Payment Data:", paymentsData);
                setPayments(paymentsData);
            } catch (error) {
                console.log ("Error fetching Payment Data!")
                console.log(error)
            }
        }
        fetchPayments();
    }, [])

    // useEffect: fetchPromotions
    useEffect(() => {
        async function fetchPromotions () {
            try {
                const response = await fetch (`${BASE_URL}/api/promotions`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const promotionsData = await response.json();
                console.log("Translated Promotion Data:", promotionsData);
                setPromotions(promotionsData);
            } catch (error) {
                console.log ("Error fetching Promotion Data!")
                console.log(error)
            }
        }
        fetchPromotions();
    }, [])

    // useEffect: fetchReviews
    useEffect(() => {
        async function fetchReviews () {
            try {
                const response = await fetch (`${BASE_URL}/api/reviews`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const reviewData = await response.json();
                console.log("Translated Reviews Data:", reviewData);
                setReviews(reviewData);
            } catch (error) {
                console.log ("Error fetching Reviews Data!")
                console.log(error)
            }
        }
        fetchReviews();
    }, [])

    // useEffect: fetchSalonRenters
    useEffect(() => {
        async function fetchSalonRenters () {
            try {
                const response = await fetch (`${BASE_URL}/api/renter`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const salonRentersData = await response.json();
                console.log("Translated Salon Renter Data:", salonRentersData);
                setSalonRenters(salonRentersData);
            } catch (error) {
                console.log ("Error fetching Salon Renter Data!")
                console.log(error)
            }
        }
        fetchSalonRenters();
    }, [])

    // useEffect: fetchSalonSuites
    useEffect(() => {
        async function fetchSalonSuites () {
            try {
                const response = await fetch (`${BASE_URL}/api/suites`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const salonSuitesData = await response.json();
                console.log("Translated Salon Suites Data:", salonSuitesData);
                setSalonSuites(salonSuitesData);
            } catch (error) {
                console.log ("Error fetching Salon Suites Data!")
                console.log(error)
            }
        }
        fetchSalonSuites();
    }, [])

    // useEffect: fetchServices
    useEffect(() => {
        async function fetchServices () {
            try {
                const response = await fetch (`${BASE_URL}/api/services`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const serviceData = await response.json();
                console.log("Translated Service Data:", serviceData);
                setSalonRenters(serviceData);
            } catch (error) {
                console.log ("Error fetching Service Data!")
                console.log(error)
            }
        }
        fetchServices();
    }, [])

    // useEffect: fetchUser
    useEffect(() => {
        // if(!localStorage.getItem("token")) {
        //     navigate("/login")
        // }
        async function fetchUser () {
            try {
                const response = await fetch (`${BASE_URL}/api/users`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                console.log("Response", response)
                const userData = await response.json();
                console.log("Translated User Data:", userData);
                setSalonRenters(userData.user);
            } catch (error) {
                console.log ("Error fetching User Data!")
                console.log(error)
            }
        }
        fetchUser();
    }, [])

// Return
    return (
        <div>
            <div>
                <Navbar context={contextObject}/>
            </div>
            <div>
                <Outlet context={contextObject} />
            </div>
            <Footer />
        </div>
    )
};

// Export
export default FetchForHomepage;