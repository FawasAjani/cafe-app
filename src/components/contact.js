// FawasAjani-G00413222
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    // State for managing form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State for managing form submission status
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    // Function to handle form data changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setSubmitted(false);
        setSubmitError(false);

        // Simulate form submission delay
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <div>
            {/* Google Maps and Business Info */}
            <section className="custom-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <iframe
                                src="https://maps.google.com/maps?q=Main%20Street,%Westmeath&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                frameBorder="0"
                                style={{ border: 0, width: '100%', height: '400px' }}
                                allowFullScreen=""
                                title="Location Map">
                            </iframe>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h2>Opening Hours</h2>
                            <p>Monday - Friday: 9.00 AM - 8.00 PM</p>
                            <p>Saturday: 9.00 AM - 11.00 PM</p>
                            <p>Sunday: 9.00 AM - 4.00 PM</p>
                            <h2>Find Us</h2>
                            <p>CYBERCAFEX, Irish Town, Athlone, Westmeath</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="custom-section form-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Contact Us</h2>
                            <FontAwesomeIcon icon={faPhone} className="fontawesome-icons" aria-hidden="true" />
                            <span className="contact-number">
                                <a href="tel:+0329876543">(032) 987 6543</a>
                            </span>
                            <FontAwesomeIcon icon={faEnvelope} className="fontawesome-icons" aria-hidden="true" />
                            <span className="contact-email">
                                <a href="mailto:CYBERCAFEX@gmail.com">CYBERCAFEX@gmail.com</a>
                            </span>
                        </div>
                    </div>
                    <br />
                    
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="row contact-form-text">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="name" className="contact-form-text">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-label="Enter your name"
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="email" className="contact-form-text">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-label="Enter your email"
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="message" className="contact-form-text">What can we help you with?</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    aria-label="Enter your message"
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-light float-right" id="contact-btn-form">
                                    {submitting ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Submit'}
                                </button>
                                {submitted && !submitError && <p className="success-message">Email sent successfully!</p>}
                                {submitError && <p className="error-message">There was an error sending the email.</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
