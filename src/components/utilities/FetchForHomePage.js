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

// Functional Component
const FetchForHomePage = () => {
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
export default FetchForHomePage;