import React from "react";
import '../../../public/about.css'
function About() {
    return (
        <div className="about-container">
              <div>
            <header>
                <h1>Welcome to DroneX!</h1>
            </header>

            <main>
                <section>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is simple: to make drone technology accessible and enjoyable for everyone. 
                        Whether you’re a hobbyist looking to capture stunning aerial shots, a professional filmmaker 
                        seeking the perfect tool for your next project, or a business in need of advanced aerial solutions, 
                        we have the right drone for you. We believe that the sky is not the limit; it’s just the beginning.
                    </p>
                </section>

                <section>
                    <h2>What We Offer</h2>
                    <p>
                        At DroneX, we offer a wide range of drones, accessories, and support services to ensure you have 
                        the best flying experience possible. Our product lineup includes:
                    </p>
                    <ul>
                        <li><strong>Recreational Drones</strong>: Perfect for beginners and hobbyists, our easy-to-fly models are designed for fun and exploration.</li>
                        <li><strong>Professional Drones</strong>: Equipped with advanced features and high-resolution cameras, our professional drones are ideal for filmmakers, photographers, and surveyors.</li>
                        <li><strong>Racing Drones</strong>: For the adrenaline junkies, our racing drones offer speed, agility, and the thrill of competitive flying.</li>
                        <li><strong>Accessories & Parts</strong>: From batteries and chargers to replacement parts, we provide everything you need to keep your drone in top condition.</li>
                    </ul>
                </section>

                <section>
                    <h2>Why Choose DroneX?</h2>
                    <ol>
                        <li><strong>Quality Assurance</strong>: We source our drones from reputable manufacturers and conduct rigorous quality checks to ensure you receive only the best.</li>
                        <li><strong>Expert Support</strong>: Our knowledgeable team is here to assist you with any questions or concerns, from choosing the right drone to troubleshooting technical issues.</li>
                        <li><strong>Community Focused</strong>: We believe in building a community of drone enthusiasts. Join us for workshops, events, and online forums where you can connect with fellow flyers and share your experiences.</li>
                        <li><strong>Customer Satisfaction</strong>: Your satisfaction is our top priority. We offer a hassle-free return policy and a warranty on all our products to give you peace of mind with your purchase.</li>
                    </ol>
                </section>

                <section>
                    <h2>Join Us on Our Journey</h2>
                    <p>
                        As we continue to innovate and expand our offerings, we invite you to join us on this exciting journey 
                        into the world of drones. Explore our website, discover our products, and take to the skies with DroneX. 
                        Whether you’re capturing breathtaking landscapes or racing through obstacle courses, we’re here to support 
                        your aerial adventures.
                    </p>
                    <p>Thank you for choosing DroneX. Let’s fly high together!</p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>
                        For any inquiries, feel free to contact us at <a href="mailto:contact@dronex.com">dronex@gmail.com</a> 
                    . Follow us on social media to stay updated on the latest news, tips, and promotions!
                    </p>
                </section>
            </main>

            <footer>
                <p>&copy; 2023 DroneX. All rights reserved.</p>
            </footer>
        </div>
            
        </div>
    );
}

export default About;