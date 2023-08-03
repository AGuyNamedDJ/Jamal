// Import
import React from "react";

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