import React from 'react';
import '../App.css';
import CybercafexImage from '../images/Cybercafex-image.jpg';
import MenuImage from '../images/Menu.jpg';
import vrLoungeImage from '../images/vr.jpg';
import smartCoffeeMachineImage from '../images/smart-coffee-machine.jpg';
import cyberpunkCafeImage from '../images/interior.jpg';
import smartTableOrderingImage from '../images/smartTableOrdering.jpg';
import humanImage from '../images/human.jpg';
import robotImage from '../images/robot.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <section style={{ backgroundImage: `url(${CybercafexImage})` }} className="Cybercafex-image container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="hero-text col-xs-12 col-sm-6 col-md-6 col-lg-4 offset-lg-1">
                            <h1 id="fawas-h1">CyberCafeX</h1>
                            <Link to="/read" className="btn btn-light" id="fawas-button">
                                Check Our Digital Café
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="background-colour custom-section">
                <section>
                    <div className="container">
                        <h2>Smart Table Service</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <p>
                                Welcome to <strong>CyberCafeX</strong>, where technology meets taste! 
                                Experience AI-powered ordering and seamless digital experiences.
                                </p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <p>
                                We're excited to introduce our new <strong>'Smart Table Service'</strong> at CyberCafeX in Galway! 
                            Simply scan the QR code at your table, explore our <strong>digital menu</strong>, place your order, 
                           and enjoy a seamless dining experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3 four-icons zoom">
                            <span className="fas fa-tablet-alt my-icon"></span>
                            <p><strong>Digital Ordering & Payments</strong></p>
                        </div>
                        <div className="col-6 col-lg-3 four-icons zoom">
                            <span className="fas fa-bolt my-icon"></span>
                            <p><strong>Fast Charging Stations</strong></p>
                        </div>
                        <div className="col-6 col-lg-3 four-icons zoom">
                            <span className="fas fa-mug-hot my-icon"></span>
                            <p><strong>Smart Coffee Machines</strong></p>
                        </div>
                        <div className="col-6 col-lg-3 four-icons zoom">
                            <span className="fas fa-gamepad my-icon"></span>
                            <p><strong>Gaming & VR Stations</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-section white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={MenuImage} className="img-fluid" alt="Menu" />
                        </div>
                        <div className="col-md-6">
                            <h2>Menu</h2>
                            <p>
                                At CyberCafeX, we redefine the café experience with a futuristic menu blending flavors from around the world.
                            </p>
                            <h3>Main Dishes</h3>
                            <ul>
                                
                                <li><strong>Cyber Wrap</strong> (€2.50) – A light yet satisfying wrap.</li>
                                <li><strong>Panini Wrap</strong> (€4.50) – Classic meets modern.</li>
                                <li><strong>Cyber Burger</strong> (€5.50) – Packed with flavor.</li>
                                <li><strong>Dragon Fried Rice</strong> (€8.00) – A bold, spicy delight.</li>
                            </ul>
                            <h3>Desserts</h3>
                            <ul>
                                <li><strong>Neon Cheesecake</strong> (€4.50) – A vibrant treat.</li>
                                <li><strong>Brownie</strong> (€3.80) – Rich and tasty.</li>
                            </ul>
                            <h3>Drinks</h3>
                            <ul>
                                <li><strong>Cyber Coffee</strong> (€2.50 - €2.80) – An unmatched coffee experience.</li>
                                <li><strong>Energy Boost</strong> (€2.50) – Powerd with elctrolytes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-section background-colour">
                <div className="container">
                    <div className="row">
                        <article className="col-12 col-sm-6">
                        <h2>About</h2>
<p>
    Welcome to <strong>CyberCafeX</strong> — where coffee meets technology in a space designed for both productivity and relaxation. 
    Located in the heart of Galway, we combine the warmth of a traditional café with the convenience and innovation of a digital hub. 
    Whether you're here for a quick coffee break, remote work, or socializing with friends, CyberCafeX offers a seamless experience like no other.
</p>
<p>
    Our expert baristas craft each cup using premium coffee beans carefully sourced from sustainable farms. With a passion for quality and flavor, 
    we ensure every brew delivers a rich and satisfying taste. Our menu features a range of specialty coffees, signature drinks, and delicious 
    food options, all prepared to complement your digital lifestyle.
</p>
<p>
    At CyberCafeX, technology enhances every aspect of your visit. From smart table service and contactless ordering to high-speed Wi-Fi and 
     digital environments, we've transformed the café experience for the modern world. Our loyalty program rewards you with every 
    purchase, unlocking exclusive perks and surprises as you collect points through our app.
</p>


                            <div>
                                <img src={humanImage} alt="humanImage" width="160" height="180" />
                                <img src={robotImage} alt="robotImage" width="160" height="180" />
                            </div>
                        </article>
                        <div className="col-6 col-sm-3 about-column">
                            <img src={vrLoungeImage} className="img-fluid" alt="Virtual Reality (VR) lounge with customers enjoying digital entertainment" />
                            <img src={smartCoffeeMachineImage} className="img-fluid" alt="AI-powered coffee brewing system" />
                        </div>
                        <div className="col-6 col-sm-3 about-column">
                            <img src={cyberpunkCafeImage} className="img-fluid" alt="Futuristic neon-lit CyberCafeX interior" />
                            <img src={smartTableOrderingImage} className="img-fluid" alt="Customer using smart table ordering system" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
