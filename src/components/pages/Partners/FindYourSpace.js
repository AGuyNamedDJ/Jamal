// Import
import React from "react";

const FindYourSpace = () => {
    return (
        <div class="webpage-container">
            
            <div class="intro-section">

                {/* Title Section */}
                <div class="title-section">
                    <div class="text-content">
                        <h1>Join Jamal</h1>
                        <p>Embrace your calling; forge unparalleled luxury. At Jamal, your artistry becomes an expression of elegance and sophistication.</p>
                        <p>Join the Jamal collective, where grace meets magnificence. Thrive on your terms, transforming the ordinary into the extraordinary, in a setting as distinctive as your craft.</p>
                    </div>
                    <div class="video-content">
                        <iframe src="https://www.youtube.com/embed/vqk4LJB6SGk?autoplay=1&mute=1&loop=1&playlist=vqk4LJB6SGk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            {/* Locations Section */}
            <div class="locations-section">
                <div class="locations-title">
                    <h2>Our Locations</h2>
                    <div class="divider"></div>
                </div>

                <div class="location">
                    <div class="location-info">
                    <h3>Location Name</h3>
                    <p>Address Line 1</p>
                    <p>Address Line 2</p>
                    <a href="#" class="availability-link">Request Availability</a>
                    </div>
                    <div class="location-images">
                    <div class="image-container">
                        <h4>Image Title 1</h4>
                        <img src="image1.jpg" alt="Image Description 1" />
                    </div>
                    <div class="image-container">
                        <h4>Image Title 2</h4>
                        <img src="image2.jpg" alt="Image Description 2" />
                    </div>
                    </div>
                    <div class="location-development">
                    <h4>The Development</h4>
                    <p>Description about this location.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};


// Export
export default FindYourSpace;