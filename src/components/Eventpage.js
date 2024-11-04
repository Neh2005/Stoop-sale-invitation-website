import React from 'react';
import './Eventpage.css';

const EventPage = () => {
    return (
        <div className="event-page-container">
            <h1 className="event-header">Event Details</h1>
            <div className="event-details">
                <p>Location: Brooklyn</p>
                <p>Time: 10:00 AM - 4:00 PM</p>
            </div>
            <div className="map-container" id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193747.0318826709!2d-74.10964618658798!3d40.64537482062224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1730752785814!5m2!1sen!2suk"
                    title="Google Maps location"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default EventPage;
