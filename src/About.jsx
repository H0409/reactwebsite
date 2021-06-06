import React from "react";
import { Link, NavLink } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const About = () => {
    return (
        <>
            <h1 className="about-heading">Overview Of The Company!</h1>
            <p className="about-para">We Have Grate And Telented People To Complate Your Project!<br/>
            Our Company Also Lanched a Product For as soon as Possible
            <br/>for help Other People.
            We Have Alredy 4 Product in The Current<br/> Market and That Products
Is Very Popular.</p>
<a href="https://www.myaccountingcourse.com/accounting-dictionary/multinational-company" className="btn8">Veiw Details</a>
            
            <img className="about-img" src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg" />
            <br/>
            <br/>
            <br/>
            <div className="footer">
                <footer>
                    <h3 className="index">Index</h3>
                    <ul className="footer-nav">
                        <li className="footer-nav-item "  >
                            <NavLink  exact className="footer-nav-link " to="/">Home</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact  className="footer-nav-link" to="/Service">Service</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact  className="footer-nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact  className="footer-nav-link" to="/Contact">Contact</NavLink>
                        </li>
                    </ul>

                    <h3 className="developer">developer</h3>
                    <ul className="footer-nav-developer">
                        <li className="footer-nav-item "  >
                            <NavLink exact className="footer-nav-link " to="/">App developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/service" target="">Front developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/service">Backend developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/service">Full stack developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/service">Machine learning</NavLink>
                        </li>
                    </ul>

                    <section>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41264308474!2d72.75225579781409!3d21.159345833019305!
                    2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!
                    4v1622717003156!5m2!1sen!2sin"
                    width="50%" height = "100%"  allowfullscreen="" loading="lazy"></iframe>
                    </section>


                    <h4>Contact</h4>
                    <ul className="icon">
                        <li className="social-icon "  >
                            <a className="social-link " href="https://www.instagram.com/hardik_vekariya_1111/"><InstagramIcon /></a>
                        </li>
                        <li className="social-icon">
                            <a className="social-link" href="https://www.facebook.com/hardik.vekariya.712/"><FacebookIcon /></a>
                        </li>
                        <li className="social-icon">
                            <a className="social-link" href="https://www.linkedin.com/in/hardik-vekariya-aa28731b7/"><LinkedInIcon /></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <h6>
                            Created BY:<br />
                            © 2021 developing.React <br />
                                Made with ♥ by Hardik Vekariya</h6>
                    </div>
                    <a href="/Contact" className="btn6">Next Page</a>
                </footer>
            </div>
        </>
    );
};

export default About;
