import React from 'react';
import '../App.css';
import CybercafexImage from '../images/Cybercafex-image.jpg';
import  mysteryRewardsImage  from '../images/mysteryRewards.jpg';
import vrLoungeImage from '../images/vr.jpg';
import smartCoffeeMachineImage from '../images/smart-coffee-machine.jpg';
import cyberpunkCafeImage from '../images/interior.jpg';
import smartTableOrderingImage from '../images/smartTableOrdering.jpg';
//I used canva to generate the images.

function Home() {
    return (
        <div>
            {/* Section with Background Image */}
            <section 
                className="Cybercafex-image container-fluid"
                style={{ backgroundImage: `url(${CybercafexImage})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="fawas-text col-xs-12 col-sm-6 col-md-6 col-lg-4 offset-lg-1">
                           
                                                                      
                        </div>
                    </div>
                </div>
            </section>

            {/* Smart Table Service Section */}
            <div className="background-colour custom-section">
                <section className="container">
                    <h2>Smart Table Service</h2>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <p>
                                Welcome to <strong>'Smart Table Service'</strong> at CyberCafeX,
                                where technology meets taste! Experience AI-powered ordering and seamless digital experiences.
                            </p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <p>
                                We're excited to introduce our new <strong>'Smart Table Service'</strong> at CyberCafeX in Galway!
                                Simply pay at your table, explore our <strong>digital menu</strong> and enjoy a seamless dining experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Section with Icons */}
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3 four-icons zoom">
                            <span className="fas fa-tablet-alt my-icon" aria-hidden="true"></span>
                            <p><strong>Digital Ordering & Payments</strong></p>
                        </div>
                        <div className="col-6 col-lg-3 four-icons zoom">
                            <span className="fas fa-bolt my-icon" aria-hidden="true"></span>
                            <p><strong>Fast Charging Stations</strong></p>
                        </div>
                        <div className="col-6 col-lg-3 four-icons zoom">
                            <span className="fas fa-mug-hot my-icon" aria-hidden="true"></span>
                            <p><strong>Smart Coffee Machines</strong></p>
                        </div>
                        <div className="col-6 col-lg-3 four-icons zoom">
                            <span className="fas fa-gamepad my-icon"></span>
                            <p><strong>Gaming & VR Stations</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Rewards Program Section */}
            <div className="custom-section white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={mysteryRewardsImage} className="img-fluid" alt="Mystery Rewards" />
                        </div>
                        <div className="col-md-6">
                            <h2>CyberCafeX Mystery Rewards</h2>
                            <p>
                            Get ready for surprises with every coffee! At CyberCafex, your loyalty unlocks exciting mystery rewards that go beyond just a free coffee.
                            </p>
                            <p>
                            Here’s how it works:
                            </p>
                            <ol>
                            <li>Sign up through the CyberCafex website</li>
                           <li>Earn 2 Cyber Points with each  purchase</li>
                           <li>Collect 12 points to unlock a <strong>mystery reward</strong> — it could be a free meal or drink.</li>
                           
                            </ol>

                        </div>
                    </div>
                </div>
            </div>

            {/* About CyberCafeX Section with Images */}
            <div className="custom-section background-colour">
                <div className="container">
                    <div className="row">
                        <article className="col-12 col-sm-6">
                            <h2>About CyberCafeX</h2>
                            <p>
                               Welcome to <strong>CyberCafeX</strong> — where coffee meets technology in a space designed for both productivity and relaxation. 
    Located in the heart of Galway, we combine the warmth of a traditional café with the convenience and innovation of a digital hub. 
 
 </p>
 <p>
                            At CyberCafeX, technology enhances every aspect of your visit. From smart table service and contactless ordering to high-speed Wi-Fi and 
     digital environments, we've transforrmed the café experience for the modern world.  Have menu suggestions? Email us at CYBERCAFEX@yahoo.com—we’d love to hear from you!
                            </p>
                        </article>
                        <div className="col-6 col-sm-3 about-column">
                            <img src={vrLoungeImage} className="img-fluid" alt="Holographic digital menu display" />
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
