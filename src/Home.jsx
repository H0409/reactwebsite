import React from "react";
import { NavLink } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Home = () => {
    return (
        <>
            <div className="background">
                <img className="logo1" src="https://www.nicepng.com/png/full/127-1277462_education-healthcare-and-education-icon.png" />
                <h1 className="head">Bachelor of Computer Applications.</h1>
                <p className="para1">
                    This program equips you with all the necessary<br /> skills you need to break into the IT industry.<br />
                </p>
            </div>
            <div className="filed">
                <h2>various filed in BCA</h2>
                <h1 className="heading">1. App Development:-</h1>
                <img className="image" src="https://image.freepik.com/free-vector/app-development-banner_33099-1720.jpg" />
                <p className="para2">Mobile apps are created for a specific platform, and today, iOS <br/>and Android are the two most common platforms.
                If you're <br/> completely new to coding, creating a mobile app may not be <br/> the best place to start.
               It is easier to continue practicing <br/>web coding,which is a lot more beginner-friendly approach.
                </p>
                <a exact href="/Service" className="btn2">See more</a>

                <h1 className="heading1">2. Web Development:-</h1>
                <img className="image1" src="https://content.techgig.com/photo/77313069/top-20-programming-languages-used-for-web-development.jpg?119426" />
                <p class="para3">
                    Web development is the work involved in developing a <br/>website for  the Internet (World Wide Web) or
                    an intranet<br/> (a private network).Web development can range from<br/> developing a simple single static page
                    of plain text to <br/>complex web-based internet applications (web apps),<br/> electronic businesses, and social
                    network services.
                </p>
                <a href="/Service" className="btn3">See more</a>

                <h1 className="heading2">3. Machine Learning Development:-</h1>
                <img className="image4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyTEsX_yg9jX1lv_ZOgZfMhOzXsdC0OCRdL8g5TXz8DPwPRGc19i57Onx0zhgttT1-A0&usqp=CAU" />
                <p className="para4">Machine Learning (ML) is one of the areas of research and<br/> application that is exponentially expanding,
               given its <br/>scope of applications,it in academia or industry.
                 <br/> Learning ML helps solve a problem more efficiently, <br/>compared to most of the existing approaches.</p>
                <a href="/Service" className="btn2">See more</a>

            </div>
            <div className="footer">
                <footer>
                    <h3 className="index">Index</h3>
                    <ul className="footer-nav">
                        <li className="footer-nav-item "  >
                            <NavLink  exact className="footer-nav-link "  to="/">Home</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link"  to="/Service">Service</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink  exact className="footer-nav-link"   to="/Contact">Contact</NavLink>
                        </li>
                    </ul>

                    <h3 className="developer">developer</h3>
                    <ul className="footer-nav-developer">
                        <li className="footer-nav-item "  >
                            <NavLink exact className="footer-nav-link " to="/Service">App developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/Service" >Front developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/Service">Backend developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/Service">Full stack developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/Service">Machine learning</NavLink>
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
                  
                    <a href="/service" className="btn6">Next Page</a>
                </footer>
            </div>
            <hr></hr>
        </>
    );
};

export default Home;
