import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      servicesOffered: event.target.servicesOffered.value,
      interestedLocations: event.target.interestedLocations.value,
      howDidYouFindUs: event.target.howDidYouFindUs.value
    };
    // Handle the form submission logic here
    alert('Form submitted!');
  };

    return (
        <div className="contact-page">
            <section className="contact-intro">
                <h2>Get in Touch</h2>
                <p>To embark on this journey with us, or to inquire further about the opportunities that await, we invite you to complete the form below.</p>
                <p>.</p>
                <p>If interested in joining or to receive more information, fill out the form below, email or call us.</p>
                <p>email: <a href="mailto:dalronjrobertson@gmail.com">dalronjrobertson@gmail.com</a></p>
                <p>phone: <a href="tel:708-xxx-xxxx">708-xxx-xxxx</a> or <a href="#">text message</a></p>
            </section>
            <section className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="name-field">
                            <label htmlFor="firstName">First Name: <span className="required-text">(required)</span></label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="name-field">
                            <label htmlFor="lastName">Last Name: <span className="required-text">(required)</span></label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: <span className="required-text">(required)</span></label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone: <span className="required-text">(required)</span></label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="servicesOffered">Services Offered: <span className="required-text">(required)</span></label>
                        <select id="servicesOffered" name="servicesOffered" required>
                            <option value="">Select a Service</option>
                            <option value="service1">Barber</option>
                            <option value="service2">Brow Artist</option>
                            <option value="service3">Esthetician</option>
                            <option value="service4">Hair Stylist</option>
                            <option value="service5">Lash Specialist</option>
                            <option value="service6">Massage Therapist</option>
                            <option value="service7">Tattoo Artist</option>
                            <option value="service8">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="interestedLocations">Interested Locations:</label>
                        <div id="interestedLocations">
                            <div className="location-option">
                                <label>
                                    <input type="checkbox" name="interestedLocations" value="Location1" />
                                    <span>Chicago: South Loop</span>
                                </label>
                            </div>
                            <div className="location-option">
                                <label>
                                    <input type="checkbox" name="interestedLocations" value="Location1" />
                                    <span>Future Location</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="howDidYouFindUs">How Did You Find Us? <span className="required-text">(required)</span></label>
                        <input type="text" id="howDidYouFindUs" name="howDidYouFindUs" required />
                    </div>
                    <button type="submit" className="send-button">Send</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;